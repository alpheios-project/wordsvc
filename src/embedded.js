/* eslint-env jest */
/* global Event */
import ComponentStyles from '../node_modules/alpheios-components/dist/style/style.min.css' // eslint-disable-line
import { Constants } from 'alpheios-data-models'
import { UIController, UIEventController, HTMLSelector, LexicalQuery, ResourceQuery, AnnotationQuery,
  ContentOptionDefaults, LanguageOptionDefaults, Options, LocalStorageArea,
  MouseDblClick, LongTap, GenericEvt, AlignmentSelector,
   L10nModule, PanelModule, PopupModule, Locales } from 'alpheios-components'
import State from './state'
import Template from './template.htmlf'
import interact from 'interactjs'
import Package from '../package.json'
import AppAuthenticator from './lib/app-authenticator'

/**
 * This is a custom `create` function that creates an instance of a UI controller
 * that is configured to be used by an embedded lib.
 * If any customization of a UI controller needs to be made,
 * it has to be made here.
 * @param {TabScript} state - A state object that will be passed to a UI controller.
 * @param options - An options object that will be passed to a UI controller. It is phasing out
 *        as the preferred way to configure a UI controller is via a custom `create()` function.
 *        It is kept for compatibility only. Please do not use it.
 * @return {UIController} A newly created instance of a UI controller.
 */
UIController.createEmbed = (state, options) => {
  let uiController = new UIController(state, options)

  // Set defaults for UI controller's options objects
  // uiController.uiOptionsDefaults = preferences.ui
  uiController.siteOptionsDefaults = []

  // Register data modules
  uiController.registerDataModule(L10nModule, Locales.en_US, Locales.bundleArr())

  // Register UI modules
  uiController.registerUiModule(PanelModule, {
    mountPoint: '#alpheios-panel-embedded',
    tabs: uiController.tabState, // TODO: should be accessed via a public API, not via a direct link. This is a temporary solutions
    uiController: uiController // Some child UI components require direct link to a uiController. TODO: remove during refactoring
  })
  uiController.registerUiModule(PopupModule, {
    mountPoint: '#alpheios-popup-embedded',
    uiController: uiController // Some child UI components require direct link to a uiController. TODO: remove during refactoring
  })

  // Creates on configures an event listener
  let eventController = new UIEventController()

  eventController.registerListener('HandleEscapeKey', document, uiController.handleEscapeKey.bind(uiController), GenericEvt, 'keydown')
  eventController.registerListener('AlpheiosPageLoad', 'body', uiController.updateAnnotations.bind(uiController), GenericEvt, 'Alpheios_Page_Load')

  // Attaches an event controller to a UIController instance
  uiController.evc = eventController

  // Subscribe to LexicalQuery events
  LexicalQuery.evt.LEXICAL_QUERY_COMPLETE.sub(uiController.onLexicalQueryComplete.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_READY.sub(uiController.onMorphDataReady.bind(uiController))
  LexicalQuery.evt.MORPH_DATA_NOTAVAILABLE.sub(uiController.onMorphDataNotFound.bind(uiController))
  LexicalQuery.evt.HOMONYM_READY.sub(uiController.onHomonymReady.bind(uiController))
  LexicalQuery.evt.LEMMA_TRANSL_READY.sub(uiController.updateTranslations.bind(uiController))
  LexicalQuery.evt.WORD_USAGE_EXAMPLES_READY.sub(uiController.onWordUsageExamplesReady.bind(uiController))
  LexicalQuery.evt.DEFS_READY.sub(uiController.onDefinitionsReady.bind(uiController))
  LexicalQuery.evt.DEFS_NOT_FOUND.sub(uiController.onDefinitionsNotFound.bind(uiController))

  // Subscribe to ResourceQuery events
  ResourceQuery.evt.RESOURCE_QUERY_COMPLETE.sub(uiController.onResourceQueryComplete.bind(uiController))
  ResourceQuery.evt.GRAMMAR_AVAILABLE.sub(uiController.onGrammarAvailable.bind(uiController))
  ResourceQuery.evt.GRAMMAR_NOT_FOUND.sub(uiController.onGrammarNotFound.bind(uiController))

  // Subscribe to AnnotationQuery events
  AnnotationQuery.evt.ANNOTATIONS_AVAILABLE.sub(uiController.onAnnotationsAvailable.bind(uiController))

  return uiController
}

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     eventTriggers: a comma-separated list of DOM events to which Alpheios functionality should be attached
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
   *     mobileRedirectUrl: a URL to which to direct users if they use a mobile device to access a page which has Alpheios embedded
   */
  constructor ({
    clientId = null,
    documentObject = document,
    mobileRedirectUrl = null,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    triggerEvents = 'dblclick',
    triggerPreCallback = (evt) => { return true } // Not used at the moment but can be set as a filter for `this.ui.getSelectedText()` calls
    } = {}) {
    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.state = new State()
    this.mobileRedirectUrl = mobileRedirectUrl
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.triggerEvents = triggerEvents
    this.triggerPreCallback = triggerPreCallback

    let pckg
    try {
      pckg = Package
    } catch (e) {
      throw new Error(`Cannot parse package.json, its format is probably incorrect`)
    }

    this.auth = new AppAuthenticator()

    // Set an initial UI Controller state for activation
    // this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = UIController.createEmbed(this.state, {
      storageAdapter: LocalStorageArea,
      textQueryTrigger: this.triggerEvents,
      textQuerySelector: this.enabledSelector,
      app: { version: pckg.version, name: pckg.description },
      template: { html: Template }
    })
  }

  notifyExtension () {
    this.doc.body.dispatchEvent(new Event('Alpheios_Embedded_Response'))
  }

  async activate () {
    try {
      /**
       * Notify extension that an embedded lib is present.
       * We need to do this right after an activation.
       * If webextension is loaded sooner than the embedded library
       * than the extension will have no information about
       * the embedded library presence unless explicitly notified by us.
       */
      this.notifyExtension()

      // await this.ui.init() // Activate will call `init()` if has not been initialized previously
      await this.ui.activate()

      console.log('UIController has been activated')
      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })

    } catch (error) {
      console.error(`Cannot activate a UI controller: ${error}`)
      return
    }

    if (this.mobileRedirectUrl && this.detectMobile()) {
      document.location = this.mobileRedirectUrl
    }
    let selector = this.enabledSelector

    let trigger = this.triggerEvents.split(/,/)
    if (!selector || !trigger) {
      throw new Error('Configuration must define both trigger and selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      throw new Error(`activation element ${activateOn} is missing`)
    }
    if (this.enabledClass) {
      for (let elem of activateOn) {
        elem.classList.add(this.enabledClass)
      }
    }
    if (this.disabledSelector) {
      let disableOn = this.doc.querySelectorAll(this.disabledSelector)
      for (let elem of disableOn) {
        elem.setAttribute('data-alpheios-ignore', 'all')
        if (this.disabledClass) {
          elem.classList.add(this.disabledClass)
        }
      }
    }

    let alignment = new AlignmentSelector(this.doc, {})
    alignment.activate()
    let alignedTranslation = this.doc.querySelectorAll('.aligned-translation')
    for (let a of alignedTranslation) {
      interact(a).resizable({
      // resize from all edges and corners
        edges: { left: true, right: true, bottom: false, top: false },

        // minimum size
        restrictSize: {
          min: { width: 200 }
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: this.doc.body,
          endOnly: true
        },
        inertia: true
      }).on('resizemove', event => {
        let target = event.target
        // update the element's style
        target.style.width = `${event.rect.width}px`
      })
    }
  }

  async handler (alpheiosEvent, domEvent) {
    if (this.triggerPreCallback(domEvent)) {
      let htmlSelector = new HTMLSelector(alpheiosEvent, this.options.items.preferredLanguage.currentValue)
      let textSelector = htmlSelector.createTextSelector()

      if (!textSelector.isEmpty()) {
        await this.options.load()

        let lexQuery = LexicalQuery.create(textSelector, {
          htmlSelector: htmlSelector,
          resourceOptions: this.resourceOptions,
          siteOptions: this.siteOptions,
          lemmaTranslations: this.enableLemmaTranslations(textSelector) ? { locale: this.options.items.locale.currentValue } : null,
          wordUsageExamples: this.enableWordUsageExamples(textSelector) ? { paginationMax: this.options.items.wordUsageExamplesMax.currentValue } : null,
          langOpts: { [Constants.LANG_PERSIAN]: { lookupMorphLast: true } } // TODO this should be externalized
        })

        this.ui.setTargetRect(htmlSelector.targetRect)
        this.ui.newLexicalRequest(textSelector.languageID)
        this.ui.message(this.ui.l10n.messages.TEXT_NOTICE_DATA_RETRIEVAL_IN_PROGRESS)
        this.ui.showStatusInfo(textSelector.normalizedText, textSelector.languageID)
        this.ui.updateLanguage(textSelector.languageID)
        this.ui.updateWordAnnotationData(textSelector.data)

        lexQuery.getData()
      }
    }
  }

  loadSiteOptions (siteOptions) {
    let allSiteOptions = []
    let loaded = siteOptions
    for (let site of loaded) {
      for (let domain of site.options) {
        let siteOpts = new Options(domain, LocalStorageArea)
        allSiteOptions.push({ uriMatch: site.uriMatch, resourceOptions: siteOpts })
      }
    }
    return allSiteOptions
  }

  /**
   * Check to see if Lemma Translations should be enabled for a query
   *  NB this is Prototype functionality
   */
  enableLemmaTranslations (textSelector) {
    return textSelector.languageID === Constants.LANG_LATIN &&
      this.options.items.enableLemmaTranslations.currentValue &&
      !this.options.items.locale.currentValue.match(/^en-/)
  }

  enableWordUsageExamples (textSelector) {
    return textSelector.languageID === Constants.LANG_LATIN &&
      this.options.items.enableWordUsageExamples.currentValue
  }

  /**
   *  Detect mobile device
   */
  detectMobile () {
    if (window.sessionStorage.desktop) {
      return false
    } else if (window.localStorage.mobile) {
      return true
    }

    // alternative
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile']
    for (var i in mobile) {
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) {
        return true
      }
    }

    // nothing found.. assume desktop
    return false
  }
}

export { Embedded }

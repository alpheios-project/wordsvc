window["AlpheiosEmbed"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./embedded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, build, description, main, directories, scripts, repository, author, license, bugs, homepage, devDependencies, engines, jest, eslintConfig, eslintIgnore, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"alpheios-embedded\",\"version\":\"3.0.0\",\"build\":\"38\",\"description\":\"Alpheios Embedded Library\",\"main\":\"dist/alpheios-embedded.js\",\"directories\":{\"doc\":\"doc\"},\"scripts\":{\"test\":\"npm run lint && jest --coverage && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"build\":\"npm run build-dev && npm run build-prod\",\"build-prod\":\"npm run lint && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all production app config.mjs\",\"build-dev\":\"npm run lint && node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs all development app config.mjs\",\"auth0-env-update\":\"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/prod --t=dist/auth0 --f=env-embed.js\",\"auth0-env-dev-update\":\"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=../protected-config/auth0/dev --t=dist/auth0 --f=env-embed.js\",\"lint\":\"eslint --fix src/**/*.js\",\"update-dependencies\":\"node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/ --t=dist/lib && node --experimental-modules ./node_modules/alpheios-node-build/dist/files.mjs replace --s=./node_modules/alpheios-components/dist/style --t=dist/style\",\"build-experimental\":\"node --experimental-modules ./node_modules/alpheios-node-build/dist/build.mjs webpack development app config.mjs\",\"dev\":\"npm run build-experimental && http-server -c-1 -p 8888 & onchange src -- npm run build-experimental\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/alpheios-project/wordsvc.git\"},\"author\":\"The Alpheios Project, Ltd.\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/alpheios-project/wordsvc/issues\"},\"homepage\":\"https://github.com/alpheios-project/wordsvc#readme\",\"devDependencies\":{\"alpheios-client-adapters\":\"github:alpheios-project/client-adapters\",\"alpheios-components\":\"github:alpheios-project/components\",\"alpheios-data-models\":\"github:alpheios-project/data-models\",\"alpheios-experience\":\"github:alpheios-project/experience\",\"alpheios-inflection-tables\":\"github:alpheios-project/inflection-tables\",\"alpheios-node-build\":\"github:alpheios-project/node-build\",\"alpheios-res-client\":\"github:alpheios-project/res-client\",\"alpheios-wordlist\":\"github:alpheios-project/wordlist\",\"copy-webpack-plugin\":\"^5.0.4\",\"coveralls\":\"^3.0.6\",\"css-loader\":\"^3.2.0\",\"eslint\":\"^6.3.0\",\"eslint-config-standard\":\"^12.0.0\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-node\":\"^9.2.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^4.0.1\",\"eslint-plugin-vue\":\"^5.2.3\",\"html-loader\":\"^0.5.5\",\"html-loader-jest\":\"^0.2.1\",\"http-server\":\"^0.11.1\",\"interactjs\":\"^1.6.1\",\"intl-messageformat\":\"^2.2.0\",\"jest\":\"^24.9.0\",\"jest-fetch-mock\":\"^2.1.2\",\"onchange\":\"^6.0.0\",\"raw-loader\":\"^3.1.0\",\"sass-loader\":\"^7.3.1\",\"source-map-loader\":\"^0.2.4\",\"style-loader\":\"^0.23.1\",\"url-loader\":\"^2.1.0\",\"vue-loader\":\"^15.7.1\",\"vue-style-loader\":\"^4.1.2\",\"vue-svg-loader\":\"^0.12.0\",\"webpack-dev-server\":\"^3.8.0\"},\"engines\":{\"node\":\">= 9.10.1\",\"npm\":\">= 5.6.0\"},\"jest\":{\"verbose\":true,\"transform\":{\"^.+\\\\.htmlf$\":\"html-loader-jest\",\"^.+\\\\.jsx?$\":\"babel-jest\"},\"transformIgnorePatterns\":[\"node_modules/alpheios-components/\"]},\"eslintConfig\":{\"env\":{\"browser\":true,\"node\":true},\"parser\":\"babel-eslint\",\"parserOptions\":{\"sourceType\":\"module\",\"ecmaVersion\":2019,\"allowImportExportEverywhere\":true}},\"eslintIgnore\":[\"**/dist\"],\"dependencies\":{}}");

/***/ }),

/***/ "./embedded.js":
/*!*********************!*\
  !*** ./embedded.js ***!
  \*********************/
/*! exports provided: importDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importDependencies", function() { return importDependencies; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "../package.json", 1);
/* harmony import */ var _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/app-authenticator */ "./lib/app-authenticator.js");
/* harmony import */ var _lib_session_authenticator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/session-authenticator */ "./lib/session-authenticator.js");
/* eslint-env jest */
/* global Event */




// A variable that will store an instance of the imported components module
let components

/**
 * Imports dynamic dependencies that are required for the embed-lib.
 * @param {object} options - A configuration object of the import function.
 * @param {'production' | 'development' | 'cdn' | 'custom'} options.mode - What type of libraries shall be imported.
 *         'production' - will load minified version of libraries from a `dist/lib` local directory;
 *         'development' - will load non-optimized libraries with source maps from a `dist/lib` local directory;
 *         'cdn' - will load the latest version of minified libraries from JSDelivr (this is a default value);
 *         'custom' - allows to specify your own paths for loading the libraries. The paths shall be specified
 *                    as values of keys of a `libs` object.
 * @param {object} options.libs - An object whose properties specify paths from where libraries to be loaded.
 *        {string} options.libs.components - A path to a components library. Value for a default `production` mode
 *                 is `./lib/alpheios-components.min.js`.
 * @return {Promise} - A promise that is resolved when all dependencies are loaded
 * or rejected when there was an error during an import.
 */
function importDependencies (options) {
  let libs = {}
  switch (options.mode) {
    case 'production':
      libs.components = './lib/alpheios-components.min.js'
      break
    case 'development':
      libs.components = './lib/alpheios-components.js'
      break
    case 'custom':
      libs = options.libs
      break
    case 'cdn':
    default:
      libs.components = 'https://cdn.jsdelivr.net/npm/alpheios-components@latest/dist/alpheios-components.min.js'
      break
  }
  return new Promise((resolve, reject) => {
    let imports = []
    let componentsImport = import(
      /* webpackIgnore: true */
      libs.components
    ).then(() => {
      components = window.AlpheiosComponents
    })
    imports.push(componentsImport)

    Promise.all(imports).then(() => {
      resolve (Embedded)
    }).catch((e) => {
      reject(e)
    })
  })
}

/**
 * Encapsulation of Alpheios functionality which can be embedded in a webpage
 */
class Embedded {
  /**
   * @constructor
   * @param {Object} arguments - object with the following properties:
   *     clientId: a string identifying the embedding client or site. Required.
   *     authEnv: authentication environment object.(Optional)
   *     documentObject: the parent document. Default: window.document
   *     enabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be activated
   *                      Default: ".alpheios-enabled"
   *     disabledSelector: a CSS Selector string identifying the page elements for which Alpheios should be deactivated
   *                       Default: [data-alpheios-ignore="all"]
   *     enabledClass: a CSS class to apply to alpheios/staten enabled elements
   *                   Default: ""
   *     disabledClass: a CSS class to apply to alpheios disabled elements
   *                    Default: ""
   *     mobileTriggerEvent: DOM Event to trigger word selection on mobile devices
   *                         Default: longTap
   *     desktopTriggerEvent: DOM Event to trigger word selection on desktops
   *                    Default: "dblclick"
   *     triggerPreCallback: a callback function which is called when the trigger event handler is invoked, prior to initiating
   *                         Alpheios functionality. It should return true to proceed with lookup or false to abort.
   *                         Default: no-op, returns true
   *     popupInitialPos: object containing initial css positioning properties for the popup
   *                      Default { top: 10vh, right: 10vw}
   *     toolbarInitialPos: object containing initial css positioning properties for the toolbar
   *                        Default { top: 10px, right: 15px}
   *     actionPanelInitialPos: object containing initial css positioning properties for the action panel (mobile)
   *                            Default { bottom: 120px, right: 20px}
   *     layoutType: 'default' or 'readingTools' (readingTools is used for the Alpheios Reader UI)
   *                 Default: 'default'
   *     disableTextSelection: set to true to disable default browser text selection behavior (not recommended)
   *                           Default: false
   *     textLangCode: default language for lookups via the toolbar
   *                   Default: null (which will result in the user preferred page language being used)
   *     overrideHelp: set to true to disable the default alpheios behavior for the help icon
   *                   (client code must attach their own handler to the ".alpheios-toolbar__help-control" element)
   *                   Default: false
   *     simpleMode: set to true to restrict the UI to the popup/morphology panel (with grammar links) and lookup but no other features
   *                 Default: false
   */
  constructor ({
    clientId = null,
    authEnv = null,
    documentObject = document,
    enabledSelector = '.alpheios-enabled',
    disabledSelector = '',
    enabledClass = '',
    disabledClass = '',
    mobileTriggerEvent = null,
    desktopTriggerEvent = null,
    triggerPreCallback = (evt) => { return true }, // Not used at the moment but can be set as a filter for `this.ui.getSelectedText()` calls
    popupInitialPos = {},
    toolbarInitialPos = {},
    actionPanelInitialPos = {},
    layoutType = 'default', // The other option is 'readingTools'
    // Disable text selection on mobile devices
    disableTextSelection = false,
    textLangCode = null,
    overrideHelp = false,
    simpleMode = false
    } = {}) {
    this.clientId = clientId

    if (this.clientId === null) {
      throw new Error('Please identify the site.')
    }
    // TODO at some point in the future we may add authentication of
    // clientId
    this.doc = documentObject
    this.authEnv = authEnv
    this.state = new _state__WEBPACK_IMPORTED_MODULE_0__["default"]()
    this.enabledSelector = enabledSelector
    this.disabledSelector = disabledSelector
    this.enabledClass = enabledClass
    this.disabledClass = disabledClass
    this.desktopTriggerEvent = desktopTriggerEvent
    this.mobileTriggerEvent = mobileTriggerEvent
    this.triggerPreCallback = triggerPreCallback
    this.simpleMode = simpleMode

    // Set an initial UI Controller state for activation
    this.state.setPanelClosed() // A default state of the panel is CLOSED
    this.state.tab = 'info' // A default tab is "info"

    this.ui = components.UIController.create(this.state, {
      storageAdapter: components.LocalStorageArea,
      textQueryTriggerDesktop: this.desktopTriggerEvent,
      textQueryTriggerMobile: this.mobileTriggerEvent,
      textQuerySelector: this.enabledSelector,
      triggerPreCallback: this.triggerPreCallback,
      app: { version:`${_package_json__WEBPACK_IMPORTED_MODULE_1__["version"]}.${_package_json__WEBPACK_IMPORTED_MODULE_1__["build"]}`, name: _package_json__WEBPACK_IMPORTED_MODULE_1__["description"] },
      clientId: this.clientId,
      // Disable text selection on mobile devices
      disableTextSelection: disableTextSelection,
      textLangCode: textLangCode,
      overrideHelp: overrideHelp
    })
    // Environment-specific initializations
    if (this.authEnv) {
      if (authEnv.CLIENT_ID) {
        // Register an authentication module only with authentication environment is loaded
        this.ui.registerModule(components.AuthModule, { auth: new _lib_app_authenticator__WEBPACK_IMPORTED_MODULE_2__["default"](authEnv) })
      } else if (authEnv.LOGIN_URL) {
        this.ui.registerModule(components.AuthModule, { auth: new _lib_session_authenticator__WEBPACK_IMPORTED_MODULE_3__["default"](authEnv) })
      }
    } else {
      this.ui.registerModule(components.AuthModule, { auth: null })
    }
    // Register UI modules
    let panelParams = {}
    if (this.simpleMode) {
      panelParams.showNav = false
    }
    this.ui.registerModule(components.PanelModule, panelParams)

    let popupParams = {}
    if (popupInitialPos && Object.values(popupInitialPos).filter(value => Boolean(value)).length > 0) {
      popupParams.initialPos = popupInitialPos
    }
    if (this.simpleMode) {
      popupParams.showNav = false
    }
    this.ui.registerModule(components.PopupModule, popupParams)

    let actionPanelParams = {}
    if (actionPanelInitialPos && Object.values(actionPanelInitialPos).filter(value => Boolean(value)).length > 0) {
      actionPanelParams.initialPos = actionPanelInitialPos
    }
    if (this.simpleMode) {
      actionPanelParams.showNav = false
    } else {
      actionPanelParams.showNav = true
    }

    let toolbarParams = {}
    if (this.simpleMode) {
      toolbarParams.showNav = false
    }
    if (layoutType === 'default') {
      if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
        toolbarParams.initialPos = toolbarInitialPos
      }

      this.ui.registerModule(components.ToolbarModule, toolbarParams)
      this.ui.registerModule(components.ActionPanelModule, { showNav: actionPanelParams.showNav })
    } else if (layoutType === 'readingTools') {
      // This is a special configuration for Alpheios Reading Tools
      if (this.ui.platform.isDesktop) {
        if (toolbarInitialPos && Object.values(toolbarInitialPos).filter(value => Boolean(value)).length > 0) {
          toolbarParams.initialPos = toolbarInitialPos
        }

        this.ui.registerModule(components.ToolbarModule, toolbarParams)
      } else if (this.ui.platform.isMobile) {
        this.ui.registerModule(components.ActionPanelModule, {
          lookupResultsIn: 'panel',
          initialPos: actionPanelParams.initialPos,
          showNav: actionPanelParams.showNav
        })
      }
    }
  }

  get platform () {
    return this.ui.platform
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

      // Set a body attribute so the content scrip will know if embedded library is active on a page
      this.doc.body.setAttribute('alpheios-embed-lib-status', 'active')
      this.doc.body.addEventListener('Alpheios_Embedded_Check', event => { this.notifyExtension(event) })

      // and set the state on the components
      this.ui.setEmbedLibActive(true)

    } catch (error) {
      console.error(`Unexpected error activating Alpheios: ${error}`)
      return
    }

    let selector = this.enabledSelector

    if (!selector) {
      throw new Error('Configuration must define selector')
    }
    let activateOn = this.doc.querySelectorAll(selector)
    if (activateOn.length === 0) {
      // it could be that we want to activate Alpheios for lookups via the
      // tools even if there isn't any text on the page to activate to on
      // so just print a warning here.
      console.warn(`Alpheios was activated for the page but not any content (no elements matching ${activateOn}).`)
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

    let alignment = new components.AlignmentSelector(this.doc, {})
    alignment.activate()
    let alignmentTranslation = components.UIController.initAlignedTranslation(this.doc, '.aligned-translation',
      {
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
      },
      event => {
        let target = event.target
        // update the element's style
        target.style.width = `${event.rect.width}px`
      })
    return this
  }

  openToolbar () {
    this.ui.openToolbar()
  }

  openActionPanel () {
    if (this.ui.platform.isMobile) {
      this.ui.closePanel()
    }
    this.ui.openActionPanel()
  }

  closeActionPanel () {
    this.ui.closeActionPanel()
  }

  /**
   * Opens the action panel with toolbar buttons hidden and only the lookup visible.
   */
  openActionPanelLookup () {
    if (this.ui.platform.isMobile) {
      this.ui.closePanel()
    }
    this.ui.openActionPanel({ showNav: false })
  }

  /**
   * Opens the action panel with only toolbar buttons visible.
   */
  openActionPanelToolbar () {
    if (this.ui.platform.isMobile) {
      this.ui.closePanel()
    }
    this.ui.openActionPanel({ showLookup: false })
  }
}


/***/ }),

/***/ "./lib/app-authenticator.js":
/*!**********************************!*\
  !*** ./lib/app-authenticator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppAuthenticator; });
/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
class AppAuthenticator {
  /**
   * @constructor
   * @param {Object} env - environment object with the following properties
   *    CLIENT_ID - Auth0 client id
   *    DOMAIN - Auth0 domain
   *    AUDIENCE - Auth0 audience
   *    ENDPOINTS - Alpheios user api endpoints
   *    LOGOUT_URL - Auth0 logout url
   */
  constructor (env) {
    // An Auth0 Lock widget instance. Will be initialized lazily
    this.auth0Lock = null
    this._auth0profile = null // A user profile from Auth0
    this.env = env
  }

  /**
   * a link for login external to the alpheios components
   * @return null for client side login
   */
  loginUrl() {
    return null
  }

  /**
   * a link for logout external to the alpheios components
   * @return null for client side login
   */
  logoutUrl() {
    return null
  }

  /**
   * session request unimplemented for app auth
   */
   session () {
     return new Promise((resolve,reject) => {
       reject(new Error("Session request not supported"))
    })
   }

  /**
   * Authenticates user with an Auth0.
   * @return {Promise}
   */
  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      if (!this.auth0Lock) {
        if (!this.env) {
          let error = `Unable to find Auth0 configuration. Auth0 functionality will be disabled`
          console.error(error)
          reject(error)
        }
        // test environment
        if (this.env.TEST_ID) {
          localStorage.setItem('access_token', this.env.TEST_ID)
          localStorage.setItem('id_token', this.env.TEST_ID)
          localStorage.setItem('is_test_user', true)
          resolve("Authenticated")
        } else {
          // initialize auth0 lock
          this.auth0Lock = new Auth0Lock(this.env.CLIENT_ID, this.env.DOMAIN, {
            theme: {
              logo: 'https://alpheios.net/logos/alpheios_32.png',
              labeledSubmitButton: false,
              primaryColor: '#436476'
            },
            languageDictionary: {
              title: "Login",
              signUpTerms: "By signing up, you agree to our <a href=\"https://alpheios.net/pages/userterms\" target=\"_blank\">terms of service</a> and <a href=\"https://alpheios.net/pages/privacy-policy\">privacy policy</a>."
            },
            mustAcceptTerms: true,
            auth: {
              redirect: false,
              params: {
                audience: this.env.AUDIENCE,
                scope: 'openid profile email',
                prompt: 'consent select_account',
              },
              responseType: 'token id_token'
            }
          })
          // Handle login
          this.auth0Lock.on('authenticated', (authResult) => {
            this.auth0Lock.hide()
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token', authResult.idToken)
            //localStorage.setItem('profile', JSON.stringify(profile))
            resolve("Authenticated")
          })

          // Unrecoverable error handler
          this.auth0Lock.on('unrecoverable_error', (error) => {
            console.error(`Auth0 Lock unrecoverable error: `, error)
            reject('Auth0 Lock unrecoverable')
          })

          // An authorization error
          this.auth0Lock.on('authorization_error', (error) => {
            console.error(`Auth0 Lock authorization error: `, error)
            reject('Auth0Lock authorization error')
          })
          this.auth0Lock.show()
          // TODO: Handle a situation when `authenticated` event is never fired (is that ever possible)
          // maybe via a Timeout?
        }
      }
    })
  }

  /**
   * Retrieves user profile information from Auth0.
   * @return {Promise}
   */
  getProfileData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Login required')
      }
      if (localStorage.getItem('is_test_user')) {
          let testProfile =  {
            name: 'Alpheios Test User',
            nickname: 'testuser',
            sub: 'testuser'
          }
          localStorage.setItem('profile', JSON.stringify(testProfile))
          resolve(testProfile)
      } else {
        this.auth0Lock.getUserInfo(token, (error, profile) => {
          if (error) {
            reject(error)
          } else {
            localStorage.setItem('profile', JSON.stringify(profile))
            resolve(profile)
          }
        })
      }
    })
  }

  /**
   * Retrieves user data from a remote provider (e.g. Alpheios servers).
   * @return {Promise}
   */
  getUserData () {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('access_token')

      // block request from happening if no JWT token present
      if (!token) {
       console.error('You must login to call this protected endpoint!')
       reject('Not Authenticated')
      }
      resolve(token)
    })
  }

  /**
   * Retrieves the list of configured endpoints for the environment
   * @return {Object}
   */
  getEndPoints () {
    return this.env.ENDPOINTS
  }

  /**
   * Respond to a logout request
   */
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')
    this.auth0Lock.logout({
      returnTo: this.env.LOGOUT_URL
    })
  }

}


/***/ }),

/***/ "./lib/session-authenticator.js":
/*!**************************************!*\
  !*** ./lib/session-authenticator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionAuthenticator; });
/* global Auth0Lock */
/**
 * Encapsulates Authentication Functionality For a Client Side Application
 */
class SessionAuthenticator {
  /**
   * @constructor
   * @param {Object} env - environment object with the following properties
   *    LOGIN_URL - login url
   *    LOGOUT_URL - logout url
   *    SESSION_URL - session url
   *    TOKEN_URL - token url
   *    ENDPOINTS - Alpheios user api endpoints
   */
  constructor (env) {
      this.sessionUrl = env.SESSION_URL
      this.tokenUrl = env.TOKEN_URL
      this.endpoints = env.ENDPOINTS
      this._loginUrl = env.LOGIN_URL
      this._logoutUrl = env.LOGOUT_URL
  }

  /**
   * Login link for server
   * @return {String} login link from config
   */
  loginUrl() {
    return this._loginUrl
  }

  /**
   * Logout link for server
   * @return {String} logout link from config
   */
  logoutUrl() {
    return this._logoutUrl
  }

  session () {
    return new Promise((resolve,reject) => {
      window.fetch(this.sessionUrl).then((resp) => {
        if (! resp.ok) {
          reject(resp.code)
        } else {
          resolve(resp.json())
        }
      }).catch((error) => {
        reject(`Session request failed ${error}`)
      })
    })
  }

  authenticate () {
    // TODO we should check to see if we already have a valid idToken before
    // initiating authentication
    return new Promise((resolve, reject) => {
      reject("Server Side Authenticator")
    })
  }

  getUserData () {
    return new Promise((resolve,reject) => {
      window.fetch(this.tokenUrl).then((resp) => {
        if (! resp.ok) {
          reject(resp.code)
        } else {
          resolve(resp.json())
        }
      }).catch((error) => {
        reject(`token request failed ${error}`)
      })
    })
  }

  /**
   * Retrieves the list of configured endpoints for the environment
   * @return {Object}
   */
  getEndPoints () {
    return this.endpoints
  }

  /**
   * Respond to a logout request
   */
  logout() {
    return
  }

}


/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return State; });
/**
 * Contains Alpheios state
 * @property {panelStatus} panelStatus
 */
class State {
  constructor (tabID) {
    this.panelStatus = undefined
    this.tab = undefined
    this.watchers = new Map()
  }

  static create (source) {
    let copy = new State()
    for (let key of Object.keys(source)) {
      copy[key] = source[key]
    }
    return copy
  }

  static get defaults () {
    return {
      panelStatus: State.statuses.panel.OPEN
    }
  }

  static get statuses () {
    return {
      embedLib: {
        PENDING: Symbol.for('Alpheios_Status_Pending'), // Has not been fully initialized yet
        ACTIVE: Symbol.for('Alpheios_Status_Active'), // Is loaded and active
        DEACTIVATED: Symbol.for('Alpheios_Status_Deactivated'), // Has been loaded, but is deactivated
        DISABLED: Symbol.for('Alpheios_Status_Disabled') // Has been loaded, but it is disabled
      },
      panel: {
        OPEN: Symbol.for('Alpheios_Status_PanelOpen'), // Panel is open
        CLOSED: Symbol.for('Alpheios_Status_PanelClosed'), // Panel is closed
        DEFAULT: Symbol.for('Alpheios_Status_PanelDefault') // Panel should set its state according to default values
      },
      tab: {
        DEFAULT: 'default' // A tab should be set according to default values
      }
    }
  }

  /**
   * Sets a watcher function that is called every time a property is changed using a setItem() method.
   * @param {String} property - A name of a property that should be monitored
   * @param {Function} watchFunc - A function that will be called every time a property changes
   * @return {State} Reference to self for chaining
   */
  setWatcher (property, watchFunc) {
    this.watchers.set(property, watchFunc)
    return this
  }

  /**
   * SetItem provides a monitored way to change state. If value is assigned to a data property directly
   * there is no way to know if a property was changed. However, if a property was changed using setItem() method,
   * and if there is a watcher function registered for a changed property name,
   * this function will be called on every property change, passing a changed property name as an argument.
   * @param key
   * @param value
   * @return {State}
   */
  setItem (key, value) {
    this[key] = value
    if (this.watchers && this.watchers.has(key)) {
      this.watchers.get(key)(key, this)
    }
    return this
  }

  isPanelOpen () {
    return this.panelStatus === State.statuses.panel.OPEN
  }

  isPanelClosed () {
    return this.panelStatus === State.statuses.panel.CLOSED
  }

  isPanelStateDefault () {
    return this.panelStatus === State.statuses.panel.DEFAULT
  }

  isPanelStateValid () {
    return (
      this.panelStatus === State.statuses.panel.OPEN ||
      this.panelStatus === State.statuses.panel.CLOSED
    )
  }

  setPanelOpen () {
    this.setItem('panelStatus', State.statuses.panel.OPEN)
    return this
  }

  setPanelClosed () {
    this.setItem('panelStatus', State.statuses.panel.CLOSED)
    return this
  }

  changeTab (tabName) {
    this.setItem('tab', tabName)
    return this
  }

  activateUI () {
    this.setItem('uiActive', true)
    return this
  }

  // TODO: A temporary solution for compatibility with TabScript.
  isActive () {
    return this.status === State.statuses.embedLib.ACTIVE
  }

  isDeactivated () {
    return this.status === State.statuses.embedLib.DEACTIVATED
  }

  isDisabled () {
    return this.status === State.statuses.embedLib.DISABLED
  }

  isTabStateDefault () {
    return this.tab === State.statuses.tab.DEFAULT
  }

  uiIsActive () {
    return this.uiActive
  }

  activate () {
    this.status = State.statuses.embedLib.ACTIVE
    return this
  }

  deactivate () {
    this.status = State.statuses.embedLib.DEACTIVATED
    return this
  }

  disable () {
    this.status = State.statuses.embedLib.DISABLED
    return this
  }
}


/***/ })

/******/ });
//# sourceMappingURL=alpheios-embedded.js.map
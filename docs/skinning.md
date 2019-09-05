# Branding Instructions 

The basic styles of the Alpheios user interface components can be branded by adding a CSS stylesheet which redefines the Alpheios CSS variables on the `:root` pseudo-class selector.

For example:

```
:root {
    --alpheios-toolbar-bg-color: #008484;
    --alpheios-border-color: #dedede;
    --alpheios-desktop-popup-progress-bar-line: #405480;

    --alpheios-icon-color: #BCE5F0;
    --alpheios-icon-color-hover: #fce45c;
    --alpheios-icon-color-active: #fce45c;
    --alpheios-icon-color-disabled: #dedede;
    --alpheios-settings-font-size-dark-color: #337ab7;
    --alpheios-settings-font-multiselect-bg: #337ab7;
}

```

Following is a list of the Alpheios CSS variable names that can be customized, along with their default values and descriptions of what they affect in the interface.

Variable name | Default | Description
------------ | ------------- | -------------
`--alpheios-toolbar-bg-color` | #0E2233 | The background color used for Alpheios toolbars (popup, and panel and floating).
`--alpheios-border-color` | #757575 | Toolbar and Lookup component border color. 
 |  | 
`--alpheios-icon-color` | #FFF | Stroke color for the Alpheios icons. 
`--alpheios-icon-color-hover` | #FFD27D | Fill and stroke color for the Alpheios icons when in the __hover__ state.
`--alpheios-icon-color-active` | #FFC24F | Fill and stroke color the Alpheios icons when in  the __active__ state.
`--alpheios-icon-color-disabled` | #757575 | Fill and stroke color for the Alpheios icons when in the __disabled__ state.
 |  | 
`--alpheios-link-color` | #185F6D | Primary link color (used in the popup for grammar links, among other places)
`--alpheios-link-color-hover` | #124D59 | Primary link color in __hover__ state
 |  | 
`--alpheios-link-special-color` | #C64906 | Alternate link color (e.g. used in the popup for the credit link)
`--alpheios-link-special-color-hover` | #F27431 | Alternate link color in __hover__ state
 |  | 
`--alpheios-text-color` | #757575 | Main text color for all Alpheios components
`--alpheios-text-bg-color` | #FFF | Main text background color for all Alpheios components 
 |  | 
`--alpheios-btn-primary-font-color` | #FFF | Font color for primary (i.e. the majority of) buttons
`--alpheios-btn-primary-bg-color` | #C64906 | Background color for primary buttons
`--alpheios-btn-primary-border-color` | #C64906 | Border color for primary buttons
`--alpheios-btn-primary-font-color-hover` | #FFF | Font color for primary buttons in __hover__ state
`--alpheios-btn-primary-bg-color-hover` | #F27431 | Background color for primary buttons in __hover__ state
`--alpheios-btn-primary-border-color-hover` | #F27431 | Border color for primary  buttons in __hover__ state
 |  | 
`--alpheios-btn-secondary-font-color` | #0E2233 | Font color for secondary buttons (e.g. used in inflections)
`--alpheios-btn-secondary-bg-color` | #FFC24F | Background color for secondary buttons
`--alpheios-btn-secondary-border-color` | #FFC24F | Border color for secondary buttons
`--alpheios-btn-secondary-font-color-hover` | #0E2233 | Font color for secondary buttons in __hover__ state
`--alpheios-btn-secondary-bg-color-hover` | #FFD27D | Background color for secondary buttons in __hover__ state
`--alpheios-btn-secondary-border-color-hover` | #FFD27D | Border color for seondary buttons in __hover__ state
 |  | 
 `--alpheios-highlight-color` | #F6D918 | Main color used for highlighting items (e.g. inflections, word list and word usage examples)
 `--alpheios-highlight-light-color` | #BCE5F0 | Alternate color used for highlighting items (used primarily in inflections)
 `--alpheios-highlight-border-color` | #BCE5F0 | Border color used for highlighting items (used primarily in inflections)
 `--alpheios-highlight-dark-color` | #C64906 | Alternate color for highlighting items (used primarily in inflections)
 `--alpheios-highlight-dark-color-hover` | #F27431 | Alternate color for highlighting items in __hover__ state
  | | 
  `--alpheios-important-notification-color`  | #C64906 | Color for important notifications


Variable name | Default | Description
------------ | ------------- | -------------
 Toolbar (Desktop) |  | 
 `--alpheios-desktop-toolbar-bg` | `--alpheios-toolbar-bg-color` | Desktop toolbar background color
 `--alpheios-desktop-toolbar-border-color` | `--alpheios-border-color` | Desktop toolbar border color
 `--alpheios-desktop-toolbar-icon-color` | `--alpheios-icon-color` | Desktop toolbar icon color
 `--alpheios-desktop-toolbar-icon-color-hover` | `--alpheios-icon-color-hover` | Desktop toolbar icon color - __hover__ state
 `--alpheios-desktop-toolbar-icon-color-active` | `--alpheios-icon-color-active` | Desktop toolbar icon color - __active__ state
 `--alpheios-desktop-toolbar-icon-color-disabled` | `--alpheios-icon-color-disabled` | Desktop toolbar icon color - __disabled__ state
 `--alpheios-desktop-toolbar-icon-bg-disabled` | `--alpheios-toolbar-bg-color` | Desktop toolbar icon background color - __disabled__ state
  Toolbar (Mobile) |  | 
 `--alpheios-compact-toolbar-bg` | `--alpheios-toolbar-bg-color` | Mobile toolbar background color
 `--alpheios-compact-toolbar-icon-color` | `--alpheios-icon-color` | Mobile toolbar icon color
 `--alpheios-compact-popup-progress-bar-line` | `--alpheios-toolbar-bg-color` | Color of progress bar on Mobile
 `--alpheios-action-panel-close-icon-color` | `--alpheios-btn-primary-bg-color` | Action Panel/Action Menu - close icon color
 `--alpheios-action-panel-close-icon-color-hover` | `--alpheios-btn-primary-bg-color-hover` | Action Panel/Action Menu - close icon color - __hover__ state
 `--alpheios-action-panel-close-icon-color-pressed` | `--alpheios-btn-primary-bg-color-pressed` | Action Panel/Action Menu - close icon color - __pressed__ state
 Popup (Desktop) |  | 
 `--alpheios-desktop-popup-header-bg` | `--alpheios-toolbar-bg-color` | Popup header background color
 `--alpheios-desktop-popup-body-bg` | `--alpheios-text-bg-color` | Popup body background color
 `--alpheios-desktop-popup-content-bg` | `--alpheios-text-bg-color` | Popup content background color
  | | 
 `--alpheios-desktop-popup-icon-color` | `--alpheios-icon-color` | Popup header icons color
 `--alpheios-desktop-popup-icon-color-hover` | `--alpheios-icon-color-hover` | Popup header icons color - __hover__ state
 `--alpheios-desktop-popup-icon-bg-hover` | `--alpheios-toolbar-bg-color` | Popup header - icon background - __hover__ state
 `--alpheios-desktop-popup-icon-color-active` | `--alpheios-icon-color-active` |  Popup header - icons color - __active__ state
  | | 
 `--alpheios-desktop-popup-progress-bar-line` | `--alpheios-toolbar-bg-color` | Popup progress bar color
  `--alpheios-desktop-popup-link-color` | `--alpheios-link-color` | Popup link color (grammar links)
 `--alpheios-desktop-popup-link-color-hover` | `--alpheios-link-color-hover` | Popup link color (grammar links) - __hover__ state
 `--alpheios-desktop-popup-credit-link-color` | `--alpheios-link-special-color` | Popup - color for credits link
 `--alpheios-desktop-popup-credit-link-color-hover` | `--alpheios-link-special-color-hover` | Popup - color for credits link - __hover__ state
 `--alpheios-desktop-popup-credit-providers-color` | `--alpheios-text-color` | Popup - color for credits block, provider text color
  Panel (Desktop) |  | 
 `--alpheios-desktop-panel-header-bg` | `--alpheios-toolbar-bg-color` | Desktop panel header background color
   | | 
 `--alpheios-desktop-panel-icon-color` | `--alpheios-icon-color` | Desktop panel header icons color
 `--alpheios-desktop-panel-icon-bg` | `--alpheios-toolbar-bg-color` |  Desktop panel header icons background color
 `--alpheios-desktop-panel-icon-color-hover` | `--alpheios-icon-color-hover` |  Desktop panel header icons color - __hover__ state
 `--alpheios-desktop-panel-icon-color-active` | `--alpheios-icon-color-active` |  Desktop panel header icons color - __active__ state
 `--alpheios-desktop-panel-icon-bg-active` | `--alpheios-toolbar-bg-color` |  Desktop panel header icons background color - __active__ state
 `--alpheios-desktop-panel-icon-color-disabled` | `--alpheios-icon-color-disabled` |   Desktop panel header icons background color - __disabled__ state
 Panel (Mobile) |  | 
 `--alpheios-compact-panel-header-bg` | `--alpheios-toolbar-bg-color` | Mobile panel header background color
 `--alpheios-compact-panel-content-bg` | `--alpheios-text-bg-color` | Mobile panel content background color
 | | 
 `--alpheios-compact-panel-icon-color` | `--alpheios-icon-color` | Mobile panel header icons color
 `--alpheios-compact-panel-icon-bg` | `--alpheios-toolbar-bg-color` |  Mobile panel header icons background color
 `--alpheios-compact-panel-icon-color-hover` | `--alpheios-icon-color-hover` | Mobile panel header icons color - hover state
 `--alpheios-compact-panel-icon-bg-hover` | `--alpheios-toolbar-bg-color` | Mobile panel header icons background color - hover state
 `--alpheios-compact-panel-icon-color-active` | `--alpheios-icon-color-active` | Mobile panel header icons color - active state
 Lookup |  | 
 `--alpheios-lookup-border-color` | `--alpheios-border-color` | Lookup panel border color (in toolbar)
 `--alpheios-lookup-bg` |  `--alpheios-text-bg-color` | Lookup panel panel background (in toolbar)
 `--alpheios-lookup-input-border-color` | `--alpheios-border-color` | Lookup input border color
 `--alpheios-lookup-button-color` | `--alpheios-btn-primary-font-color` | Lookup main button - font color
 `--alpheios-lookup-button-bg` | `--alpheios-btn-primary-bg-color` | Lookup main button - background color
 `--alpheios-lookup-button-border-color` | `--alpheios-btn-primary-border-color` | Lookup main button - border color
 `--alpheios-lookup-button-color-hover` | `--alpheios-btn-primary-font-color-hover` | Lookup main button - font color - __hover__ state
 `--alpheios-lookup-button-bg-hover` | `--alpheios-btn-primary-bg-color-hover` | Lookup main button - background color - __hover__ state
 `--alpheios-lookup-button-border-color-hover` | `--alpheios-btn-primary-border-color-hover` | Lookup main button - border color - __hover__ state
 Inflections Browser |  | 
 `--alpheios-inflect-title-color` | `--alpheios-link-color-on-light` | Inflections Browser - main title - font color
 `--alpheios-inflect-button-control-color` | `--alpheios-btn-secondary-font-color` | Inflections Browser - expand/collapse button - font color
 `--alpheios-inflect-button-control-bg` | `--alpheios-btn-secondary-bg-color` | Inflections Browser - expand/collapse button - background color
 `--alpheios-inflect-button-control-border-color` | `--alpheios-btn-secondary-border-color`  | Inflections Browser - expand/collapse button - border color
 `--alpheios-inflect-button-control-color-hover` | `--alpheios-btn-secondary-font-color-hover`  | Inflections Browser - expand/collapse button - font color - __hover__ state
 `--alpheios-inflect-button-control-bg-hover` | `--alpheios-btn-secondary-bg-color-hover`  | Inflections Browser - expand/collapse button - background color - __hover__ state
 `--alpheios-inflect-button-control-border-color-hover` | `--alpheios-btn-secondary-border-color-hover`  | Inflections Browser - expand/collapse button - border color - __hover__ state
 `--alpheios-inflect-feat-match-cell-border-color` | `--alpheios-highlight-border-color` | Inflections Browser - border color for cells that have full feature match (no suffix match)
 `--alpheios-inflect-match-suff-bg` | `--alpheios-highlight-light-color`  | Inflections Browser - background color for matched suffix (suffix match only)
 `--alpheios-inflect-match-suff-color` | `--alpheios-text-color`  | Inflections Browser - font color for matched suffix
 `--alpheios-inflect-full-match-suff-bg` | `--alpheios-highlight-color` | Inflections Browser - background color for full matched suffix (features + suffix match)
 `--alpheios-inflect-full-match-suff-color` | `--alpheios-text-color` | Inflections Browser - font color for full matched suffix (features + suffix match)
 `--alpheios-inflect-footnote-close-icon-color` | `--alpheios-text-color` | Inflections - footnote close icon color
 `--alpheios-inflect-footnote-close-icon-color-hover` | `--alpheios-text-color` | Inflections - footnote close icon color - __hover__ state
 Word usage |  | 
 `--alpheios-usage-progress-color` | `--alpheios-highlight-dark-color` | Word Usage Tab - progress text color
 `--alpheios-usage-link-color` | `--alpheios-highlight-dark-color` | Word Usage Tab - source link, show/hide limits link font color
 `--alpheios-usage-link-color-hover` | `--alpheios-highlight-dark-color-hover` | Word Usage Tab - source link, show/hide limits link font color - __hover__ state
 `--alpheios-usage-target-color` | `--alpheios-highlight-dark-color` | Word Usage Tab - target word font color
 Grammar |  | 
 `--alpheios-grammar-back-button-color` | `--alpheios-btn-primary-font-color`  | Grammar tab - back button - font color
 `--alpheios-grammar-back-button-bg` | `--alpheios-btn-primary-bg-color`  | Grammar tab - back button - background color
 `--alpheios-grammar-back-button-border-color` | `--alpheios-btn-primary-border-color` | Grammar tab - back button - border color
 `--alpheios-grammar-back-button-color-hover` | `--alpheios-btn-primary-font-color-hover` | Grammar tab - back button - font color - __hover__ state
 `--alpheios-grammar-back-button-bg-hover` | `--alpheios-btn-primary-bg-color-hover` | Grammar tab - back button - background color - __hover__ state
 `--alpheios-grammar-back-button-border-color-hover` | `--alpheios-btn-primary-border-color-hover` | Grammar tab - back button - border color - __hover__ state
 Settings |  | 
 `--alpheios-settings-font-size-dark-color` | `--alpheios-btn-primary-bg-color` | Settings tab - font size select background color (dark)
 `--alpheios-settings-font-size-light-color` | `--alpheios-color-neutral-lightest`  | Settings tab - font size select font color (on dark) `--alpheios-settings-font-multiselect-bg` | `--alpheios-btn-primary-bg-color`  | Settings tab - multiselect - background color for selected 
 `--alpheios-settings-font-multiselect-font-color` | `--alpheios-btn-primary-font-color`  | Settings tab - multiselect - font color for selected
  | | 
 `--alpheios-settings-reset-button-color` | `--alpheios-btn-primary-font-color` | Settings tab - Reset all button - font color
 `--alpheios-settings-reset-button-bg` | `--alpheios-btn-primary-bg-color` | Settings tab - Reset all button - background color
 `--alpheios-settings-reset-button-border-color` | `--alpheios-btn-primary-border-color` | Settings tab - Reset all button - border color
 `--alpheios-settings-reset-button-color-hover` | `--alpheios-btn-primary-font-color-hover` | Settings tab - Reset all button - font color - __hover__ state
 `--alpheios-settings-reset-button-bg-hover` | `--alpheios-btn-primary-bg-color-hover` | Settings tab - Reset all button - background color - __hover__ state
 `--alpheios-settings-reset-button-border-color-hover` | `--alpheios-btn-primary-border-color-hover` | Settings tab - Reset all button - border color - __hover__ state
  Wordlist |  | 
 `--alpheios-word-list-important-item-color` | `--alpheios-link-color` | Wordlist tab - Important icon - color
 `--alpheios-word-list-delete-item-color` | `--alpheios-text-color` | Wordlist tab - Delete icon - color
 `--alpheios-word-list-current-item-color` | `--alpheios-highlight-color` | Wordlist tab - Current session icon - color
 `--alpheios-word-list-default-item-color` | `--alpheios-highlight-color` | Wordlist tab - Other icons - color
   | | 
 `--alpheios-word-list-select-item-bg` | `--alpheios-text-bg-color` | Wordlist tab - filters select - background for options
 `--alpheios-word-list-select-item-bg-hover` | `--alpheios-highlight-color` | Wordlist tab - filters select - background for the __hover__ state
 `--alpheios-word-list-select-item-input-part-color` | `--alpheios-link-special-color` | Wordlist tab - filters select - background for matched part
 `--alpheios-word-list-sorting-link-color` | `--alpheios-text-color` | Wordlist tab - sorting icon - color
 `--alpheios-word-list-sorting-link-color-hover` | `--alpheios-link-color` | Wordlist tab - sorting icon - color - __hover__ state
 `--alpheios-word-list-context-back-link-color` | `--alpheios-link-color` | Wordlist tab - context back icon - color
 `--alpheios-word-list-context-source-link-color` | `--alpheios-link-color` | Wordlist tab - source link  on context block - color
 `--alpheios-word-list-context-source-link-color-hover` | `--alpheios-link-color-hover` | Wordlist tab - source link on context block - color - __hover__ state
 `--alpheios-word-list-context-incontext-bg` | `--alpheios-highlight-color` | Wordlist tab - matched part on context block - background
 Notifications | | 
 `--alpheios-notification-color` | `--alpheios-text-color` | Notification - font color
 `--alpheios-notification-bg` | `rgba(255, 193, 77, 0.5` | Notification - background color
 `--alpheios-notification-border-color` | `--alpheios-notification-color` | Notification - border color
 `--alpheios-notification-important-color` | `--alpheios-important-notification-color` | Important notification - font color
 `--alpheios-notification-important-bg` | `rgba(198, 73, 6, 0.31` | Important notification - background color
 `--alpheios-notification-important-border-color` | `--alpheios-important-notification-color` | Important notification - border color

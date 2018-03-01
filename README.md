# Alpheios Embeddable Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Encapsulates Alpheios functionality for use as an embedded library.


# Usage

1. Add the stylesheet to your HTML page:

```
<link rel="stylesheet" href="dist/styles/style.min.css"/>
```

2. Add the script to your HTML page:

```
<script src="dist/alpheios-embedded.js"></script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      new Alpheios.Embedded().activate();
    });
</script>
```

3. Add an anchor element with the id "alpheios-main" to your HTML page to configure the library. This element
should have 2 data attributes:
   data-selector: a CSS selector string for selecting elements on the page which should have Alpheios activated for them
   data-trigger: the name of the DOM event which triggers the functionality

   e.g.

```
<div id="alpheios-main" data-trigger="dblclick" data-selector=".alpheios-enabled"></div>
```

# Developer Instructions

## Prerequisites

  * Node 8.7.0 or higher

## Install Dependencies

```
npm install
```

## Build

```
npm run test
npm run build
```

## Develop

```
npm run dev
```

runs a local web server on port 8888. Browse to the demo/ folder. Make changes to the code and they'll show up when you reload.
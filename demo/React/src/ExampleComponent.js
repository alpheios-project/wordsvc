// Import `activate` from `Alpheios.js`
// and call it in `componentDidMount` and `componentDidUpdate`

// Use the attribute `lang="grc"` or `lang="lat"` to activate
// Alpheios for any particular text

import React, { Component } from 'react';

import { activate } from './Alpheios';

class ExampleComponent extends Component {
  componentDidMount() {
    activate();
  }

  componentDidUpdate() {
    activate();
  }

  render() {
    return (
      <div>
        <p>
          Greek text:
          <span lang="grc">χαῖρε ὦ κόσμε</span>
        </p>
      
        <p>
          Latin text:
          <span lang="lat">aue munde</span>
        </p>
      </div>
    );
  }
}


export default ExampleComponent;

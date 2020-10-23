'use strict';
module.exports = (context, source, options) => {
  context.cacheable();
  return `
    import React, { Component } from 'react';
    import App from '${context.resourcePath.replace(/\\/g, '\\\\')}';
    export default class Page extends Component {
      render() {
        return <App {...this.props} />;
      }
    }
  `;
};

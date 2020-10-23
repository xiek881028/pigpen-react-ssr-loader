'use strict';
module.exports = (context, source, options) => {
  context.cacheable();
  return `
    import React from 'react';
    import ReactDom from 'react-dom';
    import Entry from '${context.resourcePath.replace(/\\/g, '\\\\')}';
    const state = window.__INITIAL_STATE__;
    const render = (App)=>{
      const root = document.getElementById('app');
      const renderMode = root.childNodes.length > 0 ? 'hydrate' : 'render';
      ReactDom[renderMode](<App {...state} />, root);
    };
    render(Entry);
  `;
};

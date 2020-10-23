'use strict';
const loaderUtils = require('loader-utils');
const node = require('./lib/node');
const web = require('./lib/web');
module.exports = function(source) {
  this.cacheable();
  const options = loaderUtils.getOptions(this) || {};
  const loader = this.target === 'node' ? node : web;
  return loader(this, source, options);
};

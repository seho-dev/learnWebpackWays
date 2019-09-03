'use strict';

var path = require('path');
var webpack = require('webpack');
var MemoryFS = require('memory-fs');
var assign = require('lodash/fp').assign;

function getFileName(fpath) {
  return path.basename(fpath, path.extname(fpath));
}

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var opts = this.options;
  var loaderOpts = this.options.webpackLoader;

  var callback = this.async();
  var fpath = this.resource;

  var entry = {};
  entry[getFileName(fpath)] = fpath;

  var compiler = webpack(assign(loaderOpts, {entry: entry}));

  compiler.run(function (err, stats) {
    var fpath = path.relative(
      opts.output.path,
      path.join(loaderOpts.output.path, stats.toJson().assets[0].name)
    );
    callback(err, `module.exports = ${JSON.stringify(fpath)}`);
  });
};

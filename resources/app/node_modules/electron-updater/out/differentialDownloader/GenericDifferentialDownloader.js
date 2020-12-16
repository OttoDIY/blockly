"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericDifferentialDownloader = void 0;

function _DifferentialDownloader() {
  const data = require("./DifferentialDownloader");

  _DifferentialDownloader = function () {
    return data;
  };

  return data;
}

class GenericDifferentialDownloader extends _DifferentialDownloader().DifferentialDownloader {
  download(oldBlockMap, newBlockMap) {
    return this.doDownload(oldBlockMap, newBlockMap);
  }

} exports.GenericDifferentialDownloader = GenericDifferentialDownloader;
// __ts-babel@6.0.4
//# sourceMappingURL=GenericDifferentialDownloader.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFile = findFile;
exports.parseUpdateInfo = parseUpdateInfo;
exports.getFileList = getFileList;
exports.resolveFiles = resolveFiles;
exports.Provider = void 0;

function _builderUtilRuntime() {
  const data = require("builder-util-runtime");

  _builderUtilRuntime = function () {
    return data;
  };

  return data;
}

function _jsYaml() {
  const data = require("js-yaml");

  _jsYaml = function () {
    return data;
  };

  return data;
}

function _main() {
  const data = require("../main");

  _main = function () {
    return data;
  };

  return data;
}

class Provider {
  constructor(runtimeOptions) {
    this.runtimeOptions = runtimeOptions;
    this.requestHeaders = null;
    this.executor = runtimeOptions.executor;
  }

  get isUseMultipleRangeRequest() {
    return this.runtimeOptions.isUseMultipleRangeRequest !== false;
  }

  getChannelFilePrefix() {
    if (this.runtimeOptions.platform === "linux") {
      const arch = process.env.TEST_UPDATER_ARCH || process.arch;
      const archSuffix = arch === "x64" ? "" : `-${arch}`;
      return "-linux" + archSuffix;
    } else {
      return this.runtimeOptions.platform === "darwin" ? "-mac" : "";
    }
  } // due to historical reasons for windows we use channel name without platform specifier


  getDefaultChannelName() {
    return this.getCustomChannelName("latest");
  }

  getCustomChannelName(channel) {
    return `${channel}${this.getChannelFilePrefix()}`;
  }

  get fileExtraDownloadHeaders() {
    return null;
  }

  setRequestHeaders(value) {
    this.requestHeaders = value;
  }
  /**
   * Method to perform API request only to resolve update info, but not to download update.
   */


  httpRequest(url, headers, cancellationToken) {
    return this.executor.request(this.createRequestOptions(url, headers), cancellationToken);
  }

  createRequestOptions(url, headers) {
    const result = {};

    if (this.requestHeaders == null) {
      if (headers != null) {
        result.headers = headers;
      }
    } else {
      result.headers = headers == null ? this.requestHeaders : Object.assign({}, this.requestHeaders, headers);
    }

    (0, _builderUtilRuntime().configureRequestUrl)(url, result);
    return result;
  }

}

exports.Provider = Provider;

function findFile(files, extension, not) {
  if (files.length === 0) {
    throw (0, _builderUtilRuntime().newError)("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
  }

  const result = files.find(it => it.url.pathname.toLowerCase().endsWith(`.${extension}`));

  if (result != null) {
    return result;
  } else if (not == null) {
    return files[0];
  } else {
    return files.find(fileInfo => !not.some(ext => fileInfo.url.pathname.toLowerCase().endsWith(`.${ext}`)));
  }
}

function parseUpdateInfo(rawData, channelFile, channelFileUrl) {
  if (rawData == null) {
    throw (0, _builderUtilRuntime().newError)(`Cannot parse update info from ${channelFile} in the latest release artifacts (${channelFileUrl}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  }

  let result;

  try {
    result = (0, _jsYaml().safeLoad)(rawData);
  } catch (e) {
    throw (0, _builderUtilRuntime().newError)(`Cannot parse update info from ${channelFile} in the latest release artifacts (${channelFileUrl}): ${e.stack || e.message}, rawData: ${rawData}`, "ERR_UPDATER_INVALID_UPDATE_INFO");
  }

  return result;
}

function getFileList(updateInfo) {
  const files = updateInfo.files;

  if (files != null && files.length > 0) {
    return files;
  } // noinspection JSDeprecatedSymbols


  if (updateInfo.path != null) {
    // noinspection JSDeprecatedSymbols
    return [{
      url: updateInfo.path,
      sha2: updateInfo.sha2,
      sha512: updateInfo.sha512
    }];
  } else {
    throw (0, _builderUtilRuntime().newError)(`No files provided: ${(0, _builderUtilRuntime().safeStringifyJson)(updateInfo)}`, "ERR_UPDATER_NO_FILES_PROVIDED");
  }
}

function resolveFiles(updateInfo, baseUrl, pathTransformer = p => p) {
  const files = getFileList(updateInfo);
  const result = files.map(fileInfo => {
    if (fileInfo.sha2 == null && fileInfo.sha512 == null) {
      throw (0, _builderUtilRuntime().newError)(`Update info doesn't contain nor sha256 neither sha512 checksum: ${(0, _builderUtilRuntime().safeStringifyJson)(fileInfo)}`, "ERR_UPDATER_NO_CHECKSUM");
    }

    return {
      url: (0, _main().newUrlFromBase)(pathTransformer(fileInfo.url), baseUrl),
      info: fileInfo
    };
  });
  const packages = updateInfo.packages;
  const packageInfo = packages == null ? null : packages[process.arch] || packages.ia32;

  if (packageInfo != null) {
    result[0].packageInfo = Object.assign({}, packageInfo, {
      path: (0, _main().newUrlFromBase)(pathTransformer(packageInfo.path), baseUrl).href
    });
  }

  return result;
} 
// __ts-babel@6.0.4
//# sourceMappingURL=Provider.js.map
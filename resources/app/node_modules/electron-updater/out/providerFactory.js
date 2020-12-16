"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrlProbablySupportMultiRangeRequests = isUrlProbablySupportMultiRangeRequests;
exports.createClient = createClient;

function _builderUtilRuntime() {
  const data = require("builder-util-runtime");

  _builderUtilRuntime = function () {
    return data;
  };

  return data;
}

function _BintrayProvider() {
  const data = require("./providers/BintrayProvider");

  _BintrayProvider = function () {
    return data;
  };

  return data;
}

function _GenericProvider() {
  const data = require("./providers/GenericProvider");

  _GenericProvider = function () {
    return data;
  };

  return data;
}

function _GitHubProvider() {
  const data = require("./providers/GitHubProvider");

  _GitHubProvider = function () {
    return data;
  };

  return data;
}

function _PrivateGitHubProvider() {
  const data = require("./providers/PrivateGitHubProvider");

  _PrivateGitHubProvider = function () {
    return data;
  };

  return data;
}

function isUrlProbablySupportMultiRangeRequests(url) {
  return !url.includes("s3.amazonaws.com");
}

function createClient(data, updater, runtimeOptions) {
  // noinspection SuspiciousTypeOfGuard
  if (typeof data === "string") {
    throw (0, _builderUtilRuntime().newError)("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
  }

  const provider = data.provider;

  switch (provider) {
    case "github":
      const githubOptions = data;
      const token = (githubOptions.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || githubOptions.token;

      if (token == null) {
        return new (_GitHubProvider().GitHubProvider)(githubOptions, updater, runtimeOptions);
      } else {
        return new (_PrivateGitHubProvider().PrivateGitHubProvider)(githubOptions, updater, token, runtimeOptions);
      }

    case "s3":
    case "spaces":
      return new (_GenericProvider().GenericProvider)({
        provider: "generic",
        url: (0, _builderUtilRuntime().getS3LikeProviderBaseUrl)(data),
        channel: data.channel || null
      }, updater, Object.assign({}, runtimeOptions, {
        // https://github.com/minio/minio/issues/5285#issuecomment-350428955
        isUseMultipleRangeRequest: provider === "spaces"
      }));

    case "generic":
      const options = data;
      return new (_GenericProvider().GenericProvider)(options, updater, Object.assign({}, runtimeOptions, {
        isUseMultipleRangeRequest: options.useMultipleRangeRequest !== false && isUrlProbablySupportMultiRangeRequests(options.url)
      }));

    case "bintray":
      return new (_BintrayProvider().BintrayProvider)(data, runtimeOptions);

    default:
      throw (0, _builderUtilRuntime().newError)(`Unsupported provider: ${provider}`, "ERR_UPDATER_UNSUPPORTED_PROVIDER");
  }
} 
// __ts-babel@6.0.4
//# sourceMappingURL=providerFactory.js.map
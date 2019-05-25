"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined")) {
  // We are in the browser and metamask is running.

  // Select the correct provider
  window.web3.currentProvider.enable();
  var provider = window["ethereum"] || window.web3.currentProvider;

  web3 = new _web2.default(provider);
} else {
  // We are on the server *OR* the user is not running metamask
  var _provider = new _web2.default.providers.HttpProvider("https://ropsten.infura.io/v3/aab371db0ba44cf29f5c02f01578358b");
  web3 = new _web2.default(_provider);
}

exports.default = web3;
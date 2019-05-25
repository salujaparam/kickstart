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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImN1cnJlbnRQcm92aWRlciIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUNFLE9BQU8sQUFBUCxXQUFrQixBQUFsQixnQkFDQyxPQUFPLE9BQU8sQUFBZCxhQUEyQixBQUEzQixlQUEwQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQURsRSxBQURGLGNBR0UsQUFDQTtBQUVBOztBQUNBO1NBQU8sQUFBUCxLQUFZLEFBQVosZ0JBQTRCLEFBQTVCLEFBQ0E7TUFBTSxXQUFXLE9BQU8sQUFBUCxlQUFzQixPQUFPLEFBQVAsS0FBWSxBQUFuRCxBQUVBOztTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQVhELE9BV08sQUFDTDtBQUNBO01BQU0sWUFBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2YsQUFEZSxBQUFqQixBQUdBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNEO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYXJhbS9raWNrc3RhcnQifQ==
import Web3 from "web3";

let web3;

if (
  typeof window !== "undefined" &&
  (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined")
) {
  // We are in the browser and metamask is running.

  // Select the correct provider
  window.web3.currentProvider.enable();
  const provider = window["ethereum"] || window.web3.currentProvider;

  web3 = new Web3(provider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/aab371db0ba44cf29f5c02f01578358b"
  );
  web3 = new Web3(provider);
}

export default web3;

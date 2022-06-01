import Web3 from "web3";

export const getWeb3 = async () => {
  return new Promise<Web3>((resolve) => {
    window.addEventListener("load", async () => {
      const provider = new Web3.providers.WebsocketProvider(
        "ws://127.0.0.1:8545"
      );
      const web3 = new Web3(provider);
      console.log("using Local web3.");
      resolve(web3);
    });
  });
};

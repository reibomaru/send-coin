import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { getWeb3 } from "./helper";
import SendCoinContract from "../../contracts/SendCoin.json";

type web3Context = {
  web3: Web3;
  accounts: string[];
  contract: Contract;
};

type props = {
  children: React.ReactNode;
};

const Web3Context = createContext<web3Context | null>(null);

const Web3Provider = ({ children }: props) => {
  const [web3Obj, setWeb3Obj] = useState<web3Context | null>(null);

  useEffect(() => {
    (async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const deployedNetwork = SendCoinContract.networks[5777];
      const contract = new web3.eth.Contract(
        SendCoinContract.abi as any,
        deployedNetwork && deployedNetwork.address
      );
      setWeb3Obj({
        web3,
        accounts,
        contract,
      });
    })();
  }, []);

  return (
    <>
      {web3Obj ? (
        <Web3Context.Provider value={web3Obj}>{children}</Web3Context.Provider>
      ) : (
        <div>読み込み中です</div>
      )}
    </>
  );
};

export default Web3Provider;
export const useWeb3 = () => {
  const web3 = useContext(Web3Context);
  if (web3) {
    return web3;
  } else {
    throw new Error("web3の読み込みに失敗しました");
  }
};

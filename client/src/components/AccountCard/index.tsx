import React, { useCallback, useEffect, useState } from "react";
import { useWeb3 } from "../Web3Context";

type props = {
  account: string;
};

const AccountCard = ({ account }: props) => {
  const [balance, setBalance] = useState(0);
  const [form, setForm] = useState({
    to: "",
    amount: 0,
  });
  const [eth, setEth] = useState("");
  const { contract, web3 } = useWeb3();

  const updateBalance = useCallback(async () => {
    const _balance = await contract.methods.getBalance(account).call();
    setBalance(_balance);
  }, [account, contract.methods]);

  const updateEthBalance = useCallback(async () => {
    const _balance = await web3.eth.getBalance(account);
    setEth(web3.utils.fromWei(_balance));
  }, [account, web3.eth, web3.utils]);

  useEffect(() => {
    (async () => {
      await updateEthBalance();
    })();
  }, [updateEthBalance]);

  useEffect(() => {
    (async () => {
      await updateBalance();
    })();
    contract.events.Transfer(
      { filter: [{ _to: account }, { _from: account }] },
      async (err: Error, event: any) => {
        if (err) console.error(err);
        else {
          // Print on terminal only when value set is equal to 10
          console.log(event);
          await updateBalance();
        }
      }
    );
    contract.events.Buy(
      { filter: { _from: account } },
      async (err: Error, event: any) => {
        if (err) console.error(err);
        else {
          // Print on terminal only when value set is equal to 10
          console.log(event);
          await updateEthBalance();
          await updateBalance();
        }
      }
    );
  }, [account, contract.events, updateBalance, updateEthBalance]);

  const changeTargetInput = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setForm((prevForm) => {
      return { ...prevForm, to: event.target.value };
    });
  }, []);

  const changeAmountInput = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setForm((prevForm) => {
      return { ...prevForm, amount: Number(event.target.value) };
    });
  }, []);

  const submitForm = useCallback(async () => {
    const receipt = await contract.methods
      .sendCoin(form.to, form.amount)
      .send({ from: account });
    console.log(receipt);
  }, [account, contract.methods, form.amount, form.to]);

  const buyCoin = useCallback(async () => {
    const receipt = await contract.methods.buyCoin().send({
      from: account,
      value: web3.utils.toWei("1", "ether"),
    });
    console.log(receipt);
  }, [account, contract.methods, web3.utils]);

  return (
    <div>
      <ul>
        <li>アカウント名: {account}</li>
        <li>残高: {balance} coin</li>
        <li>ethreum wallet 残高: {eth} eth</li>
      </ul>
      <div>
        <input onChange={changeTargetInput} type="text" />へ
        <input onChange={changeAmountInput} type="number" />
        coinを
        <input onClick={submitForm} type="submit" value="送金" />
      </div>
      <div>
        1000coinを
        <input onClick={buyCoin} type="submit" value="購入" />
      </div>
    </div>
  );
};

export default AccountCard;

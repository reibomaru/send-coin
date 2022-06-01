import { useWeb3 } from "../Web3Context";
import AccountCard from "../AccountCard";

const Dashboard = () => {
  const { accounts } = useWeb3();
  return (
    <div>
      {accounts.map((account) => {
        return <AccountCard account={account} key={account} />;
      })}
    </div>
  );
};

export default Dashboard;

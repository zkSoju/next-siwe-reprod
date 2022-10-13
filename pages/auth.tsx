import { useAccount, useConnect } from "wagmi";
import { useSIWE } from "next-siwe";
import { InjectedConnector } from "wagmi/connectors/injected";

const Auth = () => {
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { isAuthenticated, login, logout } = useSIWE();

  if (!isConnected) {
    return <button onClick={() => connect()}>Connect Wallet</button>;
  }

  if (!isAuthenticated) {
    return <button onClick={login}>Sign in with Ethereum</button>;
  }

  return (
    <span>
      Connected to {activeConnector?.name}{" "}
      <button onClick={logout}>Disconnect</button>
    </span>
  );
};

export default Auth;

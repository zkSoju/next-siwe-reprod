import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createClient, WagmiConfig } from "wagmi";
import { getDefaultProvider } from "ethers";
import { SIWEProvider } from "next-siwe";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <SIWEProvider>
        <Component {...pageProps} />
      </SIWEProvider>
    </WagmiConfig>
  );
}

export default App;

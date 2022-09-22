import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import {
  Chain,
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const scaleChain: Chain = {
  id: 256236330,
  name: "Skale-Live-Vega-Chain",
  network: "skale",
  nativeCurrency: {
    decimals: 18,
    name: "Skale Fuel",
    symbol: "sFUEL",
  },
  rpcUrls: {
    default: "https://eth-online.skalenodes.com/v1/hackathon-content-live-vega",
  },
  blockExplorers: {
    default: {
      name: "Skale Explorer",
      url: "https://hackathon-content-live-vega.explorer.eth-online.skalenodes.com/",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

// const { chains, provider } = configureChains(
//   [scaleChain],
//   [
//     jsonRpcProvider({
//       rpc: (chain) => {
//         if (chain.id !== scaleChain.id) return null;
//         return { http: chain.rpcUrls.default };
//       },
//     }),
//   ]
// );

const { connectors } = getDefaultWallets({
  appName: "NFTicket",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={lightTheme({
          accentColor: "whitesmoke",
          accentColorForeground: "black",
          borderRadius: "small",
          fontStack: "rounded",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

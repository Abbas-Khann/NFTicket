import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import {
  Chain,
  configureChains,
  createClient,
  WagmiConfig
} from "wagmi";
import { ToastContainer } from "react-toastify";
import { SnackbarProvider } from "notistack";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";


const mumbaiChain: Chain = {
  id: 80001,
  name: "Mumbai",
  network: "mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "Polygon",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: "https://matic-mumbai.chainstacklabs.com",
  },
  blockExplorers: {
    default: {
      name: "Mumbai Explorer",
      url: "https://mumbai.polygonscan.com/",
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [mumbaiChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== mumbaiChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

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
    <>
  <Head>
    <link rel="shortcut icon" href="/valist.ico" />
  </Head>
    <SnackbarProvider autoHideDuration={2000}>
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
          <ToastContainer
            theme="dark"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </RainbowKitProvider>
      </WagmiConfig>
    </SnackbarProvider>
    </>
  );
}

export default MyApp;

import { WagmiConfig, useSigner } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import '../styles/globals.css';
import { useEffect } from 'react';
import {useSetWallet} from "@relaycc/receiver"

import { wagmiClient, chains } from '../components/connectButton';

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          // ...darkTheme.accentColors.green
          accentColor: '#13DA92',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
          overlayBlur: 'small'
        })}
      >
        <SetWalletExample/>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

function SetWalletExample() {
  const { data: wallet } = useSigner();
  const setWallet = useSetWallet();
  console.log(wallet);

  useEffect(() => {
    setWallet( wallet || null);
  }, [wallet, setWallet]);

  return <></>;
}

export default MyApp;

// npm install web3.storage

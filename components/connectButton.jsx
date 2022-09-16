import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import down from '../assest/down.png';
import profile from '../assest/profile.png';
import Image from 'next/image';

export const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.polygonMumbai
  ],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export const COnnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="px-5 py-2 rounded-lg font-semibold text-white-background bg-Text-green flex  hover:scale-110 transition ease-in duration-150"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    className="text-lg  text-light-green  flex items-center justify-center mr-4 hover:scale-110 transition ease-in duration-150"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 28,
                          height: 28,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 6
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 28, height: 28 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                    <span className="items-center justify-center mt-2 ml-1  ">
                      <Image src={down} alt="Down Button" />
                    </span>
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-xl flex items-center justify-center mr-2 hover:scale-110 transition ease-in duration-150 "
                  >
                    <span className="items-center justify-center w-9 h-9 mr-2">
                      <Image src={profile} alt="Down Button" />
                    </span>
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''} */}
                    <span className="items-center justify-center mt-3 ml-1">
                      <Image src={down} alt="Down Button" />
                    </span>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

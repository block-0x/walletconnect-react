import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: '647c7f609ecd46b58a534261c8f3e46b'
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: '647c7f609ecd46b58a534261c8f3e46b'
    }
  }
};

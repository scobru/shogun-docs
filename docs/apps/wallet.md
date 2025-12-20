# Wallet

> **Multi-Chain Cryptocurrency Wallet**

Shogun Wallet is a comprehensive, non-custodial cryptocurrency wallet supporting multiple blockchains, Bitcoin, ERC-20 tokens, NFTs, and WalletConnect integration.

**Live**: [wallet.shogun-eco.xyz](https://wallet.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/wallet)

## Supported Networks

| Network | Symbol | Chain ID |
|---------|--------|----------|
| Ethereum Mainnet | ETH | 1 |
| Polygon | MATIC | 137 |
| BNB Smart Chain | BNB | 56 |
| Optimism | OP | 10 |
| Arbitrum | ARB | 42161 |
| Sepolia Testnet | SepoliaETH | 11155111 |
| Bitcoin | BTC | - |
| Custom Networks | - | User-defined |

## Features

### Core Functionality

- 💼 **HD Wallet** - BIP39 mnemonic phrases, BIP32/BIP44 derivation
- 👥 **Multiple Accounts** - Manage multiple accounts from one seed
- 🪙 **Token Management** - Add and manage ERC-20 tokens
- 🖼️ **NFT Support** - Import, view, and send ERC-721 NFTs
- 📊 **Portfolio View** - Balance history charts
- 💱 **Price Tracking** - Real-time prices via CoinGecko

### WalletConnect v2

Full WalletConnect integration using WalletKit SDK:

- Connect to web and native dApps
- Automatic session persistence
- Real-time event emission (`chainChanged`, `accountsChanged`)
- QR code generation for connections

### Bitcoin Support

- **BIP44**: Legacy addresses (P2PKH)
- **BIP84**: Native SegWit (P2WPKH)
- **BIP49**: Nested SegWit (P2SH-P2WPKH)

## Security

- **Encryption**: AES-256-GCM with PBKDF2 (100,000 iterations)
- **Local Storage**: All data encrypted locally
- **No Server**: Private keys never leave your device
- **Password Requirements**: Min 7 chars, 1 number, 1 special char

## Quick Start

```bash
# Install dependencies
yarn install

# Optional: Configure Alchemy API for better RPC
# Create .env file:
# VITE_ALCHEMY_ETH_API_KEY=your_key

# Start development
yarn dev

# Build for production
yarn build
```

## Usage

### Create Wallet
1. Click "Create New Wallet"
2. Set a strong password
3. Save your 12/24-word seed phrase securely
4. Confirm seed phrase

### Send Tokens
1. Click "Send" on dashboard
2. Enter recipient address
3. Enter amount
4. Review and confirm with password

### WalletConnect
1. Go to Settings → Enable WalletConnect
2. Connect via:
   - Automatic URI from dApp
   - Manual paste of WalletConnect URI
   - QR code scan

## Related

- [Auth](auth) - Shogun authentication
- [Deals](deals) - On-chain payments
- [L2 Bridge](l2-bridge) - L1/L2 transfers

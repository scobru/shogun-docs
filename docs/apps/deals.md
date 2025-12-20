# Deals

> **On-Chain Storage Deals**

Shogun Deals is a standalone web application for creating and managing decentralized storage deals on the Shogun Protocol with on-chain guarantees.

**Live**: [deals.shogun-eco.xyz](https://deals.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-deals)

## Overview

Create storage deals directly on Base blockchain via `StorageDealRegistry`, with USDC payments and griefing protection if relays fail to fulfill commitments.

## Features

### Core Functionality

- 📜 **On-Chain Deals** - Create deals via `StorageDealRegistry`
- 🔍 **Relay Discovery** - Browse active relays from `ShogunRelayRegistry`
- 📊 **Deal Management** - Monitor and manage active deals
- 💰 **Pricing Calculator** - Calculate costs for different tiers
- 🔌 **Wallet Integration** - MetaMask with auto network switching
- ⭐ **Reputation System** - View relay uptime and proof success
- ⚔️ **Griefing** - Recover stake if relay fails commitments

### Pricing Tiers

| Tier | Price/MB/Month | Replication | Features |
|------|----------------|-------------|----------|
| **Standard** | $0.0001 | 1x | Basic storage |
| **Premium** | $0.0002 | 3x | Erasure coding |
| **Enterprise** | $0.0005 | 5x | Erasure coding, SLA |

## Data Flow

```
1. Connect Wallet → MetaMask
2. Select Relay → From on-chain registry
3. Upload File → To relay's IPFS
4. Create Deal → On-chain with USDC payment
5. Relay Registers → Pins content, provides storage
6. Proof Verification → Relay submits proofs
7. Management → Monitor, extend, or grief deals
```

## Quick Start

```bash
# Install dependencies
yarn install

# Start development
yarn dev
# Opens at http://localhost:5174

# Build for production
yarn build
```

## SDK Usage

```javascript
import { ShogunSDK } from 'shogun-contracts/sdk';

// Initialize
const sdk = new ShogunSDK({
  provider,
  signer,
  chainId: 84532 // Base Sepolia
});

// Get contracts
const relayRegistry = sdk.getRelayRegistry();
const storageDealRegistry = sdk.getStorageDealRegistry();

// Get address
console.log(relayRegistry.getAddress());
```

## Supported Networks

### Base Sepolia (Testnet) - Chain ID: 84532

- **USDC**: `0x036CbD53842c5426634e7929541eC2318f3dCF7e`
- **RPC**: `https://sepolia.base.org`
- **Explorer**: `https://sepolia.basescan.org`

### Base Mainnet - Chain ID: 8453

- **USDC**: `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`
- **RPC**: `https://mainnet.base.org`
- **Explorer**: `https://basescan.org`

## Security

- Private keys via MetaMask only
- GunDB keys derived from wallet signatures
- Always verify contract addresses before approving
- Review relay reputation before creating deals

## Related

- [Contracts SDK](../sdk/javascript-sdk) - SDK documentation
- [Storage Deals Contract](../contracts/storage-deals) - Contract details
- [Relay](../relay/getting-started) - Run your own relay

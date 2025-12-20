# Smart Contracts Overview

The Shogun Protocol's logic is enforced by smart contracts on Base (L2). These contracts handle identity, payments, bridge, and storage agreements.

## Core Contracts

### 1. ShogunRelayRegistry
**Network**: Base Sepolia  
Central directory for the relay network.
- **Relays**: Registers active relays, endpoints, and GunDB public keys
- **Staking**: Holds USDC stakes from relay operators
- **Slashing**: Enforces penalties for bad behavior
- **Reputation**: Tracks relay uptime and reliability

### 2. StorageDealRegistry
**Network**: Base Sepolia  
Manages the lifecycle of storage deals.
- **Deal Creation**: Locks client funds and defines terms (CID, size, duration, price)
- **Deal Activation**: Relay confirms acceptance of the deal
- **Proof Submission**: Relays submit periodic proofs of storage
- **Payouts**: Releases funds upon deal completion

### 3. GunL2Bridge
**Network**: Base Sepolia  
L1/L2 ETH bridge for GunDB off-chain accounts.
- **Deposits**: Lock ETH on L1, credit on L2 (GunDB)
- **Withdrawals**: Merkle proof verified withdrawals back to L1
- **Batch Processing**: Sequencer batches withdrawals for gas efficiency
- **Dual Signatures**: Both SEA and Ethereum signatures required

### 4. DataSaleRegistry
**Network**: Base Sepolia  
Marketplace for data sales.
- **List Data**: Sellers list CIDs with prices
- **Purchase**: Buyers pay USDC for access
- **Access Control**: Encrypted key delivery on purchase

### 5. StealthKeyRegistry & PaymentForwarder
**Network**: Base Sepolia  
Privacy infrastructure for anonymous transactions.
- **StealthKeyRegistry**: Maps users to stealth meta-keys
- **PaymentForwarder**: Sends tokens to stealth addresses

## Contract Addresses

| Contract | Base Sepolia | Base Mainnet |
|----------|--------------|--------------|
| ShogunRelayRegistry | `0x...` | Coming Soon |
| StorageDealRegistry | `0x...` | Coming Soon |
| GunL2Bridge | `0x...` | Coming Soon |
| DataSaleRegistry | `0x...` | Coming Soon |
| StealthKeyRegistry | `0x...` | Coming Soon |

> **Note**: See [shogun-contracts](https://github.com/scobru/shogun-contracts) for latest deployed addresses.

## Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| Base Sepolia | 84532 | ✅ Testnet |
| Base Mainnet | 8453 | 🔜 Coming Soon |
| Optimism Sepolia | 11155420 | ✅ Testnet |

## Interaction

Interact with contracts using:
- **Shogun Contracts SDK** - TypeScript bindings
- **Ethers.js / Viem** - Standard Web3 libraries
- **Shogun Apps** - UI for deals, bridge, wallet

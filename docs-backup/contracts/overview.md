# Smart Contracts Overview

The Shogun Protocol's logic is enforced by a suite of smart contracts on the Ethereum Virtual Machine (EVM). These contracts handle identity, payments, and storage agreements.

## Core Contracts

### 1. ShogunRelayRegistry
**Address**: `0x...` (Base Sepolia)
The central directory for the ecosystem.
*   **Relays**: Registers active relays, their endpoints, and public keys.
*   **Staking**: Holds USDC stakes from relay operators.
*   **Slashing**: Enforces penalties for bad behavior.

### 2. StorageDealRegistry
**Address**: `0x...` (Base Sepolia)
Manages the lifecycle of storage deals.
*   **Deal Creation**: Locks client funds and defines terms (CID, size, duration, price).
*   **Deal Activation**: Relay confirms acceptance of the deal.
*   **Payouts**: Releases funds to the relay over time or upon completion.

### 3. StealthKeyRegistry & PaymentForwarder
Privacy infrastructure for anonymous transactions.
*   **StealthKeyRegistry**: Maps users to their stealth meta-keys.
*   **PaymentForwarder**: Allows sending tokens to a stealth address without the sender knowing the recipient's true identity.

## Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| Base Sepolia | 84532 | Testnet |
| Base Mainnet | 8453 | Coming Soon |
| Optimism Sepolia | 11155420 | Testnet |

## Interaction

Developers can interact with these contracts using:
*   **Ethers.js / Viem**: Standard Web3 libraries.
*   **Shogun SDK**: Wraps contract interactions in easy-to-use methods.
*   **Shogun Deals App**: A UI for managing deals.

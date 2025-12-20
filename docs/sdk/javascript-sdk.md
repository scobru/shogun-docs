# Shogun SDKs

The Shogun ecosystem provides multiple SDKs for different use cases.

## Available Packages

| Package | Purpose | Install |
|---------|---------|---------|
| `shogun-core` | Authentication, GunDB, Wallet | `npm install shogun-core` |
| `shogun-relay-sdk` | Relay API client | `npm install shogun-relay-sdk` |
| `shogun-contracts-sdk` | Smart contract interaction | `npm install shogun-contracts-sdk` |

---

## Shogun Core

Core SDK for authentication and GunDB integration.

### Installation

```bash
npm install shogun-core gun
```

### Initialization

```typescript
import { ShogunCore } from 'shogun-core';

const shogun = new ShogunCore({
  peers: ['https://relay.shogun-eco.xyz/gun'],
  scope: 'myapp'
});

await shogun.init();
```

### Authentication

```typescript
// Password authentication
const result = await shogun.auth.signUp('username', 'password');
const user = await shogun.auth.signIn('username', 'password');

// MetaMask authentication
const ethResult = await shogun.auth.createWithEthereum(signer);

// Get current user
const currentUser = shogun.auth.getCurrentUser();
```

### Wallet Management

```typescript
// Get Ethereum wallet from GunDB keys
const wallet = shogun.wallet.getWallet();
console.log(wallet.address);

// Sign messages
const signature = await shogun.wallet.signMessage('Hello');
```

---

## Shogun Relay SDK

Client for interacting with Shogun Relay APIs.

### Installation

```bash
npm install shogun-relay-sdk
```

### Usage

```typescript
import { ShogunRelaySDK } from 'shogun-relay-sdk';

const relay = new ShogunRelaySDK({
  baseUrl: 'http://localhost:8765',
  authToken: 'YOUR_ADMIN_PASSWORD' // Optional
});

// System health
const health = await relay.system.getHealth();

// IPFS upload
const result = await relay.ipfs.upload(file);
console.log(`CID: ${result.cid}`);

// L2 Bridge
const balance = await relay.bridge.getBalance('0xUserAddress');
await relay.bridge.transfer(from, to, amount, nonce, signature, seaSignature);
```

---

## Shogun Contracts SDK

TypeScript bindings for Shogun smart contracts.

### Installation

```bash
npm install shogun-contracts-sdk ethers
```

### Usage

```typescript
import { ShogunContractsSDK } from 'shogun-contracts-sdk';
import { ethers } from 'ethers';

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contracts = new ShogunContractsSDK(signer, 84532); // Base Sepolia

// Relay Registry
const relays = await contracts.registry.getActiveRelays();

// Storage Deals
await contracts.deals.createDeal(cid, size, duration, price);

// L2 Bridge
await contracts.bridge.deposit({ value: ethers.parseEther('0.1') });
```

---

## Related

- [Relay API Reference](../relay/api-reference) - Full API documentation
- [Smart Contracts](../contracts/overview) - Contract details

# Shogun JavaScript SDK

The Shogun SDK provides a convenient wrapper around the Relay API and Smart Contracts.

## Installation

```bash
npm install @shogun/sdk
```

## Initialization

```javascript
import { ShogunClient } from '@shogun/sdk';

const client = new ShogunClient({
  relayUrl: 'http://localhost:8765',
  // Optional: For authenticated actions
  authToken: 'YOUR_ADMIN_PASSWORD' 
});
```

## Usage Examples

### System Health

```javascript
const health = await client.system.getHealth();
console.log(health);
```

### IPFS Operations

```javascript
// Upload a file
const file = new File(["hello world"], "hello.txt", { type: "text/plain" });
const result = await client.ipfs.upload(file);
console.log(`Uploaded CID: ${result.cid}`);

// Pin content
await client.ipfs.pin(result.cid);
```

### x402 Subscriptions

```javascript
// Check subscription
const status = await client.x402.getSubscription('0xUserAddress...');
if (status.active) {
  console.log('User has an active subscription');
}

// Purchase subscription (requires signer)
await client.x402.subscribe(signer, 'basic');
```

### Network Discovery

```javascript
const relays = await client.network.getRelays();
relays.forEach(relay => {
  console.log(`Found relay: ${relay.host} (Reputation: ${relay.reputation})`);
});

### Griefing & Disputes

```javascript
// Report a missed proof
await client.registry.griefMissedProof(
  '0xRelayAddress...', 
  'deal-id-123', 
  'QmProofEvidence...'
);

// Report data loss
await client.registry.griefDataLoss(
  '0xRelayAddress...', 
  'deal-id-123', 
  'QmEvidence...'
);

// Grief a specific deal
await client.deals.grief(
  'deal-id-123', 
  '10', // Slash 10 USDC
  'Relay failed to provide proof'
);
```

```

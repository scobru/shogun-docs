# Relay API Reference

The Shogun Relay exposes a RESTful API for managing the node, IPFS content, and system status.

**Base URL**: `http://localhost:8765/api/v1`

**Authentication**: Most endpoints require the `Authorization: Bearer <ADMIN_PASSWORD>` header.

## System

### Get Health Status
`GET /system/health`
Returns the health status of the relay and connected services.

### Get System Stats
`GET /system/stats`
Returns detailed metrics about memory usage, uptime, and connections.

## IPFS Management

### Upload File
`POST /ipfs/upload`
Upload a file to IPFS.
*   **Body**: `multipart/form-data` with a `file` field.
*   **Response**: JSON containing the CID, size, and filename.

### Pin Content
`POST /ipfs/pin/add`
Pin an existing CID to the local node.
*   **Body**: `{ "hash": "Qm..." }`

### List Pins
`GET /ipfs/pin/ls`
List all content pinned on the node.

### Get Content
`GET /ipfs/cat/:cid`
Stream the content of a file by its CID.

## L2 Bridge

### Deposit ETH
`POST /bridge/deposit`
Record an L1 deposit on L2.
*   **Body**: `{ "userAddress": "0x...", "amount": "0.1", "txHash": "0x..." }`

### Get Balance
`GET /bridge/balance/:userAddress`
Get user's L2 balance.

### Get Balance Info
`GET /bridge/balance-info/:userAddress`
Get detailed balance with Merkle proof for verification.

### Transfer
`POST /bridge/transfer`
Transfer ETH between L2 users.
*   **Body**: `{ "from": "0x...", "to": "0x...", "amount": "0.01", "nonce": 1, "signature": "...", "seaSignature": "..." }`

### Request Withdrawal
`POST /bridge/withdraw`
Request a withdrawal from L2 to L1.
*   **Body**: `{ "userAddress": "0x...", "amount": "0.1", "nonce": 1 }`

### Get Pending Withdrawals
`GET /bridge/pending/:userAddress`
Get pending withdrawal requests for a user.

### Get Withdrawal Proof
`GET /bridge/proof/:userAddress/:nonce`
Get Merkle proof for a withdrawal request.

## Storage Deals

### Create Deal
`POST /deals/create`
Create a new storage deal.
*   **Body**: `{ "cid": "Qm...", "size": 1024, "duration": 3600, "price": "1.00" }`

### Get Deal
`GET /deals/:dealId`
Get details of a storage deal.

### List User Deals
`GET /deals/user/:userAddress`
List all deals for a user.

### Activate Deal
`POST /deals/:dealId/activate`
Relay activates a deal to begin storage.

## x402 Subscriptions

### Get Tiers
`GET /x402/tiers`
List available subscription tiers and prices.

### Check Subscription
`GET /x402/subscription/:userAddress`
Check the active subscription status for a wallet address.

### Subscribe
`POST /x402/subscribe`
Submit a signed payment authorization to purchase a subscription.

## Network & Discovery

### List Relays
`GET /network/relays`
Get a list of all discovered relays in the network.

### Get Reputation
`GET /network/reputation/:host`
Get the reputation score of a specific relay.

## Registry

### Register Relay
`POST /registry/register`
Register this relay to the on-chain registry.

### Get Relay Info
`GET /registry/relay/:address`
Get information about a registered relay.

### List All Relays
`GET /registry/relays`
List all relays registered on-chain.


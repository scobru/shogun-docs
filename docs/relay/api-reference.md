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

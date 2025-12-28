# Relay API Reference

The Shogun Relay exposes a RESTful API for managing the node, IPFS content, and system status.

**Base URL**: `http://localhost:8765`

## Authentication

Most endpoints require authentication via one of these methods:

### Admin Authentication
- **Bearer Token**: `Authorization: Bearer <ADMIN_PASSWORD>`
- **Custom Header**: `token: <ADMIN_PASSWORD>`
- **Session Token**: `X-Session-Token: <session_id>` (after initial auth)

### User Authentication (Wallet Signature)
For user-based operations (uploads, deals, subscriptions):
- **Wallet Address**: `X-User-Address: <ethereum_address>`
- **Wallet Signature**: `X-Wallet-Signature: <signature>` (EIP-191 signature of "I Love Shogun")

### Deal Upload Authentication
For storage deal uploads (paid on-chain):
- `X-User-Address: <address>`
- `X-Wallet-Signature: <signature>`
- `X-Deal-Upload: true` (or `?deal=true` query parameter)

---

## System

### Get Health Status
`GET /health`
Returns the health status of the relay and connected services.

### Get System Stats
`GET /api/v1/system/stats`
Returns detailed metrics about memory usage, uptime, and connections.

---

## IPFS Management

### Upload File
`POST /api/v1/ipfs/upload`
Upload a file to IPFS.
- **Body**: `multipart/form-data` with a `file` field.
- **Response**: JSON containing the CID, size, and filename.

### Upload Directory
`POST /api/v1/ipfs/upload-directory`
Upload multiple files as a directory to IPFS, maintaining structure.
- **Body**: `multipart/form-data` with multiple `files` fields.
- **Response**: Directory CID and file listing.

### Pin Content
`POST /api/v1/ipfs/pin/add`
Pin an existing CID to the local node.
- **Body**: `{ "cid": "Qm..." }`

### List Pins
`GET /api/v1/ipfs/pin/ls`
List all content pinned on the node.

### Get Content
`GET /api/v1/ipfs/cat/:cid`
Stream the content of a file by its CID.

### Decrypt Content
`GET /api/v1/ipfs/cat/:cid/decrypt`
Decrypt and retrieve encrypted file content from IPFS.
- **Query**: `token` - Encryption token (wallet signature used for encryption)

---

## x402 Subscriptions

### Get Tiers
`GET /api/v1/x402/tiers`
List available subscription tiers and prices.

### Check Subscription
`GET /api/v1/x402/subscription/:userAddress`
Check the active subscription status for a wallet address.

### Subscribe
`POST /api/v1/x402/subscribe`
Submit a signed payment authorization to purchase a subscription.

### Get Payment Requirements
`GET /api/v1/x402/payment-requirements/:tier`
Get x402 payment requirements for a specific tier.

### Check Upload Permission
`GET /api/v1/x402/can-upload/:userAddress`
Check if a user can upload based on subscription status.

### Get Storage Info
`GET /api/v1/x402/storage/:userAddress`
Get storage usage info for a subscribed user.

---

## Storage Deals

### Get Pricing
`GET /api/v1/deals/pricing`
Get storage deal pricing and tier information.

### Create Deal
`POST /api/v1/deals/create`
Create a new storage deal for a file.

### Get Deal
`GET /api/v1/deals/:dealId`
Get information about a specific deal.

### Activate Deal
`POST /api/v1/deals/:dealId/activate`
Activate a deal after payment verification.

### Renew Deal
`POST /api/v1/deals/:dealId/renew`
Renew an existing storage deal.



## Network & Discovery

### List Relays
`GET /api/v1/network/relays`
Get a list of all discovered relays in the network.

### Get Reputation
`GET /api/v1/network/reputation/:host`
Get the reputation score of a specific relay.

---

## Anna's Archive (Torrent Manager)

### Get Status
`GET /api/v1/annas-archive/status`
Get Anna's Archive integration status and active torrents.

### Add Torrent
`POST /api/v1/annas-archive/add`
Add a torrent manually via magnet link.
- **Body**: `{ "magnet": "magnet:?xt=urn:btih:..." }`

### Get Catalog
`GET /api/v1/torrent/catalog`
Get the local torrent catalog with IPFS mappings.

### Fetch From Anna's Archive
`POST /api/v1/torrent/refetch`
Refetch and add torrents from Anna's Archive.
- **Body**: `{ "maxTb": 1 }` (optional, max TB to fetch)

---

## User Uploads & Metadata

### Get System Hashes Map
`GET /api/v1/user-uploads/system-hashes-map`
Get the complete file metadata map (admin only).

### Save System Hash
`POST /api/v1/user-uploads/save-system-hash`
Save file metadata to the system hash map (admin only).

### Remove System Hash
`DELETE /api/v1/user-uploads/remove-system-hash/:cid`
Remove file metadata from the system hash map (admin only).

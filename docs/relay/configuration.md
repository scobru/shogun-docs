# Relay Configuration

The Shogun Relay is configured via environment variables. You can set these in a `.env` file in the `relay/` directory or pass them directly to the process.

## Module Enable Flags

Shogun Relay supports modular configuration. Each module can be independently enabled or disabled:

| Variable | Description | Default |
|----------|-------------|---------|
| `IPFS_ENABLED` | Enable IPFS integration (gateway, upload, pin) | `false` |
| `HOLSTER_ENABLED` | Enable Holster (Nostr NIP-01 relay) | `false` |
| `X402_ENABLED` | Enable x402 payment/subscription system | `false` |
| `REGISTRY_ENABLED` | Enable on-chain registry functionality | `false` |
| `DEALS_ENABLED` | Enable storage deals | `false` |
| `WORMHOLE_ENABLED` | Enable wormhole P2P file transfer | `false` |
| `TORRENT_ENABLED` | Enable Anna's Archive torrent integration | `false` |

When a module is disabled, its routes return `503 Service Unavailable`.

---

---

## Essential Configuration {#ipfs-configuration}

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `ADMIN_PASSWORD` | Master password for admin APIs and dashboards | - | ✅ |
| `RELAY_PORT` | HTTP port the relay will listen on | `8765` | ❌ |
| `IPFS_API_URL` | URL of your IPFS node's API | `http://127.0.0.1:5001` | ❌ |
| `IPFS_GATEWAY_URL` | URL of your IPFS node's Gateway | `http://127.0.0.1:8080` | ❌ |

---

## Relay Identity

| Variable | Description | Default |
|----------|-------------|---------|
| `RELAY_HOST` | Public hostname/IP of your relay (for discovery) | Auto-detected |
| `RELAY_NAME` | Friendly name for your relay node | `shogun-relay` |
| `RELAY_PEERS` | Comma-separated list of GunDB peers to sync with | Public peers |
| `RELAY_PROTECTED` | If `true`, requires authentication for GunDB writes | `true` |

---

## GunDB / Storage Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `RELAY_SEA_KEYPAIR` | Direct SEA keypair as JSON string (required) | - |
| `RELAY_SEA_KEYPAIR_PATH` | Path to keypair JSON file (alternative) | - |
| `STORAGE_TYPE` | Storage backend: `sqlite` or `radisk` | `sqlite` |
| `DATA_DIR` | Directory for GunDB data persistence | `./data` |
| `RELAY_MAX_STORAGE_GB` | Maximum IPFS storage in GB (0 = unlimited) | `0` |

> [!IMPORTANT]
> You must configure either `RELAY_SEA_KEYPAIR` or `RELAY_SEA_KEYPAIR_PATH` to prevent "Signature did not match" errors. Generate with: `node scripts/generate-relay-keys.js`

---

## x402 & Payments Configuration

To enable paid subscriptions and on-chain features:

| Variable | Description |
|----------|-------------|
| `X402_PAY_TO_ADDRESS` | EVM address that will receive subscription payments |
| `X402_NETWORK` | Blockchain network (`base-sepolia`, `base`, `polygon`, `polygon-amoy`) |
| `X402_SETTLEMENT_MODE` | `facilitator` (uses x402.org) or `direct` (needs ETH for gas) |
| `X402_PRIVATE_KEY` | Private key for direct settlement (optional) |
| `RELAY_PRIVATE_KEY` | Private key for relay registration and on-chain operations |

### Subscription Pricing

| Variable | Description | Default |
|----------|-------------|---------|
| `SUB_BASIC_PRICE` | Basic tier price in USDC | `0.001` |
| `SUB_BASIC_STORAGE_MB` | Basic tier storage limit | `100` |
| `SUB_STANDARD_PRICE` | Standard tier price in USDC | `0.004` |
| `SUB_STANDARD_STORAGE_MB` | Standard tier storage limit | `500` |
| `SUB_PREMIUM_PRICE` | Premium tier price in USDC | `0.01` |
| `SUB_PREMIUM_STORAGE_MB` | Premium tier storage limit | `2000` |
| `SUB_DURATION_DAYS` | Subscription duration in days | `30` |

---

## Holster Relay

Shogun includes an integrated Holster relay (Nostr NIP-01 compatible).

| Variable | Description | Default |
|----------|-------------|---------|
| `HOLSTER_RELAY_PORT` | Port for the Holster relay | `RELAY_PORT + 1` |
| `HOLSTER_RELAY_STORAGE` | Enable disk persistence for Holster | `true` |
| `HOLSTER_RELAY_STORAGE_PATH` | Path for Holster data storage | `./holster-data` |

---

## Wormhole P2P Transfer

Wormhole enables peer-to-peer file transfers via IPFS with automatic cleanup.

| Variable | Description | Default |
|----------|-------------|---------|
| `WORMHOLE_CLEANUP_ENABLED` | Enable automatic cleanup of orphaned transfers | `true` |
| `WORMHOLE_CLEANUP_INTERVAL_MS` | Interval between cleanup runs | `3600000` (1 hour) |
| `WORMHOLE_MAX_AGE_SECS` | Max age for uncompleted transfers | `86400` (24 hours) |

---

## Anna's Archive / Torrent Integration

Support the Anna's Archive project by seeding preservation torrents.

| Variable | Description | Default |
|----------|-------------|---------|
| `TORRENT_ENABLED` | Enable torrent manager integration | `false` |
| `TORRENT_ANNAS_ARCHIVE_URL` | URL for dynamic torrent list | `https://annas-archive.li/dyn/generate_torrents` |
| `TORRENT_DATA_DIR` | Directory for torrent data | `./data/torrents` |
| `TORRENT_MAX_TB` | Maximum TB to fetch from Anna's Archive | `0` |



## Security Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `STRICT_SESSION_IP` | Tie admin sessions to IP address | `true` |
| `CORS_ORIGINS` | Comma-separated allowed CORS origins | `*` |
| `CORS_CREDENTIALS` | Allow credentials in CORS requests | `false` |

---

## Logging

| Variable | Description | Default |
|----------|-------------|---------|
| `LOG_LEVEL` | Logging level: `error`, `warn`, `info`, `debug`, `trace` | `info` |
| `VERBOSE_LOGGING` | Enable verbose logging output | `false` |
| `DEBUG` | Enable debug mode | `false` |

---

## Full Reference

For the complete list of all environment variables, see the [Environment Variables Reference](https://github.com/scobru/shogun-relay/blob/main/docs/ENVIRONMENT_VARIABLES.md) in the relay repository.

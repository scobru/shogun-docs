# Relay Configuration

The Shogun Relay is configured via environment variables. You can set these in a `.env` file in the `relay/` directory or pass them directly to the process.

## Essential Configuration

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `ADMIN_PASSWORD` | The master password for accessing admin APIs and dashboards. **Change this!** | - | ✅ |
| `RELAY_PORT` | The HTTP port the relay will listen on. | `8765` | ❌ |
| `IPFS_API_URL` | The URL of your IPFS node's API. | `http://127.0.0.1:5001` | ❌ |
| `IPFS_GATEWAY_URL` | The URL of your IPFS node's Gateway. | `http://127.0.0.1:8080` | ❌ |

## Advanced Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `RELAY_HOST` | The public hostname/IP of your relay. Used for discovery. | Auto-detected |
| `RELAY_NAME` | A friendly name for your relay node. | `shogun-relay` |
| `DATA_DIR` | Directory where GunDB data is persisted (RADISK). | `./data` |
| `RELAY_PEERS` | Comma-separated list of other GunDB peers to sync with. | - |
| `RELAY_PROTECTED` | If `true`, requires authentication for GunDB write operations. | `true` |

## x402 & Payments Configuration

To enable paid subscriptions and on-chain features:

| Variable | Description |
|----------|-------------|
| `X402_PAY_TO_ADDRESS` | The EVM address that will receive subscription payments. |
| `X402_NETWORK` | The blockchain network ID (e.g., `base-sepolia`, `base`). |
| `X402_PRIVATE_KEY` | (Optional) Private key for direct settlement of transactions. |
| `RELAY_PRIVATE_KEY` | Private key used for signing relay announcements and registry operations. |

## Holster Relay

Shogun includes an integrated "Holster" relay (a lightweight GunDB relay).

| Variable | Description | Default |
|----------|-------------|---------|
| `HOLSTER_RELAY_PORT` | Port for the Holster relay. | `8766` |
| `HOLSTER_RELAY_STORAGE` | Enable disk persistence for Holster. | `true` |

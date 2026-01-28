# Getting Started with Shogun Relay

This guide will help you set up and run your own **Shogun Relay**.

## Prerequisites

- **Node.js**: Version 18 or higher
- **IPFS Node**: A running IPFS Kubo node (local or remote)
- **Git**: To clone the repository

## Quick Start (Docker)

The easiest way to run a relay is using Docker.

1. **Clone the repository**
   ```bash
   git clone https://github.com/scobru/shogun-relay.git
   cd shogun-relay
   ```

2. **Configure environment**
   ```bash
   cp relay/env.example relay/.env
   nano relay/.env
   ```

3. **Start the Relay**
   ```bash
   docker-compose up -d
   ```
   This script will start the Relay and a bundled IPFS node using Docker Compose.

4. **Verify Installation**
   ```bash
   curl http://localhost:8765/health
   # Output: {"success":true,"status":"healthy",...}
   ```

## Manual Installation

If you prefer to run it without Docker:

1. **Install Dependencies**
   ```bash
   cd relay
   yarn install
   ```

2. **Generate Relay Keypair**
   ```bash
   node scripts/generate-relay-keys.js
   ```
   
   > [!IMPORTANT]
   > Copy the output to your `.env` file as `RELAY_SEA_KEYPAIR='...'`

3. **Configure Environment**
   ```bash
   cp env.example .env
   nano .env
   ```
   
   Minimum required configuration:
   ```bash
   ADMIN_PASSWORD=your_secure_password
   RELAY_SEA_KEYPAIR='{"pub":"...","priv":"...","epub":"...","epriv":"..."}'
   ```

4. **Enable Features**
   
   Enable the modules you need:
   ```bash
   IPFS_ENABLED=true
   X402_ENABLED=true
   # ... other modules
   ```

5. **Start the Server**
   ```bash
   yarn start
   # Or for development with auto-reload:
   yarn dev
   ```

## Accessing the Dashboards

Once running, you can access the Admin Dashboard at:
`http://localhost:8765/`

You will need the `ADMIN_PASSWORD` defined in your `.env` file to log in.

### Available Dashboards

| Path | Description |
|------|-------------|
| `/admin` | Main control panel |
| `/stats` | Live metrics & charts |
| `/services-dashboard` | Service health overview |
| `/pin-manager` | IPFS pin manager |
| `/upload` | IPFS uploads |
| `/visualGraph` | GunDB explorer |
| `/registry-dashboard` | On-chain registry |
| `/endpoints` | API documentation |

## Next Steps

- [Configuration Reference](./configuration.md) - Full list of environment variables
- [API Reference](./api-reference.md) - REST API documentation
- [Provider Guide](./provider-guide.md) - Run a relay and earn revenue
- [Anna's Archive Integration](./annas-archive.md) - Support digital preservation
- [Wormhole P2P](./wormhole.md) - Peer-to-peer file transfers

# Scan

> **GunDB Network Monitor**

Shogun Scan is a minimalist network monitor for the GunDB relay ecosystem, inspired by [swarmscan.io](https://swarmscan.io/).

**Live**: [scan.shogun-eco.xyz](https://scan.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-scan)

## Features

- 📡 **Real-time Monitoring** - Live node health checks
- 🗺️ **Geographic Map** - Interactive visualization of relay locations
- ⏱️ **Latency Tracking** - Response time for each node
- 🔍 **Status Filtering** - Filter by online/offline
- 🔄 **Auto-refresh** - Updates every 60 seconds
- 🌙 **Dark Theme** - Minimalist UI

## What It Monitors

| Metric | Description |
|--------|-------------|
| **Health Status** | Online/offline detection |
| **Latency** | Response time in ms |
| **Location** | Geographic position |
| **Uptime** | Historical availability |

## Quick Start

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build for production
yarn build
```

## Adding Relay Nodes

Edit `CONFIG.RELAY_NODES` in `src/main.js`:

```javascript
RELAY_NODES: [
  'https://relay.shogun-eco.xyz/gun',
  'https://peer.wallie.io/gun',
  'https://your-relay.example.com/gun',
  // ...
],
```

Or contribute to the official [volunteer DHT list](https://github.com/amark/gun/wiki/volunteer.dht).

## Tech Stack

- **Core**: Vanilla JavaScript (ES6+)
- **Maps**: [Leaflet](https://leafletjs.com/)
- **Geolocation**: [ip-api.com](https://ip-api.com/)
- **Build**: [Vite](https://vitejs.dev/)

## Architecture

```
Scan                           External Services
  │                                   │
  ├── Ping relay nodes ──────────────►│ Relay endpoints
  │                                   │
  ├── Get IP geolocation ────────────►│ ip-api.com
  │                                   │
  └── Render on Leaflet map ◄─────────┘
```

## Related

- [Relay](../relay/getting-started) - Run your own relay
- [Relay Registry](../contracts/registry) - On-chain relay registry

# Shogun Mule

> **Desktop P2P File Sharing Application**

Shogun Mule is a cross-platform desktop application for peer-to-peer file sharing, similar to eMule/LimeWire but built on the Shogun network. It connects to Shogun relays for decentralized file discovery and sharing.

**Status**: Desktop Application  
**Source**: [GitHub](https://github.com/scobru/shogun)

## Features

- 🔐 **GunDB Authentication** — Register/login with username and password
- ⬇️ **Download Torrents** — Add magnet links or search the network
- ⬆️ **Share Files** — Create torrents from local files and seed them
- 🔍 **Network Search** — Search across all Shogun relays
- 🖥️ **Cross-Platform** — Windows, macOS, and Linux support

## Quick Start

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/scobru/shogun.git
cd shogun

# Install dependencies
npm install
# or
yarn install

# Run in development mode
npm run dev
# or
yarn dev
```

### Building for Production

```bash
# Build for current platform
npm run build

# Build for specific platforms
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## How It Works

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Shogun Mule                          │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────────────────┐  │
│  │  Electron       │  │  React UI                   │  │
│  │  (Main Process) │  │  (Renderer Process)         │  │
│  └────────┬────────┘  └──────────────┬──────────────┘  │
│           │                          │                  │
│           ▼                          ▼                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │              WebTorrent Client                   │   │
│  │  • Download torrents via magnet links            │   │
│  │  • Create torrents from local files              │   │
│  │  • Seed files to the network                     │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│                    Network Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   GunDB      │  │   Shogun     │  │  BitTorrent  │  │
│  │   Network    │  │   Relays     │  │   DHT        │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Core Functionality

1. **Authentication**
   - Users authenticate via GunDB with username/password
   - Credentials are stored securely using SEA encryption
   - Session persists across app restarts

2. **File Sharing**
   - Select a folder to share with the network
   - Mule automatically creates torrents and announces them
   - Other users can discover and download your files

3. **Downloading**
   - Add torrents via magnet links
   - Search the network for available files
   - Download progress shown in real-time

4. **Network Discovery**
   - Connects to Shogun relays for peer discovery
   - Fetches torrent catalogs from relay HTTP endpoints
   - Peers and torrents are indexed in GunDB

## Technology Stack

| Component | Technology |
|-----------|------------|
| **Desktop Framework** | Electron |
| **UI Library** | React |
| **Torrent Engine** | WebTorrent |
| **Database** | GunDB (P2P) |
| **Styling** | TailwindCSS + DaisyUI |
| **Build Tool** | Vite |

## Network Integration

Shogun Mule connects to the same relay network as Shogun Relay servers:

- **Relay Discovery**: Finds available relays through GunDB
- **Torrent Catalogs**: Fetches file listings from relay `/api/v1/torrent` endpoints
- **Peer Exchange**: Shares peer information through GunDB nodes
- **Magnet Links**: Compatible with standard BitTorrent magnet URIs

## Configuration

The app stores configuration in the user's app data directory:

| Platform | Path |
|----------|------|
| Windows | `%APPDATA%/shogun-mule/` |
| macOS | `~/Library/Application Support/shogun-mule/` |
| Linux | `~/.config/shogun-mule/` |

## Troubleshooting

**Problem**: Cannot connect to network
- **Solution**: Check internet connection and firewall settings
- **Verify**: Ensure at least one Shogun relay is reachable

**Problem**: Downloads not starting
- **Solution**: Wait for peer discovery (can take 30-60 seconds)
- **Alternative**: Try adding a different magnet link to test connectivity

**Problem**: Authentication fails
- **Solution**: Check if GunDB relay is accessible
- **Alternative**: Try registering a new account

## Related

- [Shogun Relay](../relay/getting-started) — Run your own relay node
- [Wormhole](wormhole) — P2P file transfer in browser
- [Drive](drive) — Encrypted cloud storage

---

**Happy File Sharing! 📁🚀**

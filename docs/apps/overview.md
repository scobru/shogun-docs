# Ecosystem Applications

The Shogun ecosystem provides a comprehensive suite of decentralized applications built on GunDB and blockchain technology. All apps prioritize **privacy**, **user ownership**, and **decentralization**.

## Application Categories

### 🔐 Authentication & Identity

| App | Description | Live |
|-----|-------------|------|
| [Auth](auth) | Multi-method authentication (Password, MetaMask, WebAuthn, Nostr, OAuth) | [auth.shogun-eco.xyz](https://auth.shogun-eco.xyz) |

### 💬 Communication

| App | Description | Live |
|-----|-------------|------|
| [Linda](linda) | End-to-end encrypted messaging with hourly key rotation | [linda.shogun-eco.xyz](https://linda.shogun-eco.xyz) |
| [GYPT](gypt) | Location-based encrypted messaging | [gypt.shogun-eco.xyz](https://gypt.shogun-eco.xyz) |

### 📁 Storage & Files

| App | Description | Live |
|-----|-------------|------|
| [Drive](drive) | Decentralized encrypted file storage (Google Drive-style) | [drive.shogun-eco.xyz](https://drive.shogun-eco.xyz) |
| [Wormhole](wormhole) | Secure P2P file transfer with IPFS | [wormhole.shogun-eco.xyz](https://wormhole.shogun-eco.xyz) |
| [Binnu](binnu) | Decentralized P2P pastebin with syntax highlighting | [binnu.shogun-eco.xyz](https://binnu.shogun-eco.xyz) |

### 📝 Productivity

| App | Description | Live |
|-----|-------------|------|
| [Notes](notes) | Encrypted note-taking (Google Keep-style) | [notes.shogun-eco.xyz](https://notes.shogun-eco.xyz) |
| [Linko](linko) | Linktree-style page builder with GunDB sync | [linko.shogun-eco.xyz](https://linko.shogun-eco.xyz) |

### 💰 Wallet & Finance

| App | Description | Live |
|-----|-------------|------|
| [Wallet](wallet) | Multi-chain cryptocurrency wallet with Bitcoin support | [wallet.shogun-eco.xyz](https://wallet.shogun-eco.xyz) |
| [Deals](deals) | On-chain storage deals with USDC payments | [deals.shogun-eco.xyz](https://deals.shogun-eco.xyz) |
| [L2 Bridge](l2-bridge) | ETH bridge between L1 (Base) and L2 (GunDB) | [l2.shogun-eco.xyz](https://l2.shogun-eco.xyz) |

### 🔍 Infrastructure

| App | Description | Live |
|-----|-------------|------|
| [Scan](scan) | GunDB network monitor with geographic visualization | [scan.shogun-eco.xyz](https://scan.shogun-eco.xyz) |
| [DWeb Gateway](dweb) | Decentralized web publishing platform for HTML sites | Integrated in Shogun Starter |

## Common Features

All Shogun apps share these core features:

- **Decentralized Storage** - Data stored on GunDB P2P network
- **End-to-End Encryption** - SEA (Security, Encryption, Authorization) encryption
- **No Central Authority** - Users control their own data and keys
- **Multi-Auth Support** - Various authentication methods via Shogun Core
- **Real-time Sync** - Live data synchronization across devices
- **Privacy First** - No tracking, no analytics, no data collection

## Technology Stack

```
┌─────────────────────────────────────────────────────┐
│                  Shogun Ecosystem                    │
├─────────────────────────────────────────────────────┤
│  Apps Layer                                          │
│  ┌─────┐ ┌─────┐ ┌──────────┐ ┌──────┐ ┌──────────┐ │
│  │Auth │ │Linda│ │Wormhole  │ │Drive │ │  ...     │ │
│  └──┬──┘ └──┬──┘ └────┬─────┘ └──┬───┘ └────┬─────┘ │
├─────┼───────┼─────────┼──────────┼──────────┼───────┤
│  Core Layer                                          │
│  ┌──────────────────────────────────────────────┐   │
│  │              Shogun Core SDK                  │   │
│  │  • Authentication   • Wallet Management       │   │
│  │  • Plugin System    • Reactive Programming    │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  Infrastructure Layer                                │
│  ┌──────────────┐  ┌─────────────┐  ┌────────────┐  │
│  │  Shogun      │  │   GunDB     │  │   IPFS     │  │
│  │  Relay       │  │   Network   │  │  Network   │  │
│  └──────────────┘  └─────────────┘  └────────────┘  │
├─────────────────────────────────────────────────────┤
│  Blockchain Layer                                    │
│  ┌────────────────────────────────────────────────┐ │
│  │  Base / Optimism Smart Contracts               │ │
│  │  • RelayRegistry  • StorageDealRegistry        │ │
│  │  • StealthPayments • L2Bridge                  │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

## Getting Started

1. **Try an App** - Visit any live app link above
2. **Authenticate** - Use Shogun authentication (password, MetaMask, WebAuthn, or Nostr)
3. **Explore** - Your data syncs automatically across all Shogun apps

For developers, see the [SDK documentation](../sdk/javascript-sdk) to build your own apps.

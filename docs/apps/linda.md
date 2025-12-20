# Linda

> **Decentralized End-to-End Encrypted Messaging**

Linda is a messaging application built with React and GunDB, providing end-to-end encryption with a custom protocol featuring hourly key rotation.

**Live**: [linda.shogun-eco.xyz](https://linda.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-linda)

## Features

### Encryption Protocol

- **AES-GCM Encryption** - Standard encryption via GunDB SEA
- **ECDH Key Agreement** - Elliptic curve key exchange
- **HMAC Authentication** - Message integrity verification
- **Replay Protection** - Nonce and sequence number validation
- **Hourly Key Rotation** - Limited forward secrecy

### Messaging Types

| Type | Description |
|------|-------------|
| 💬 **Private Chats** | 1-to-1 encrypted messaging |
| 👥 **Group Chats** | Encrypted group conversations |
| 📢 **Public Rooms** | Open discussions with digital signatures |

### Real-time Features

- **Typing Indicators** - See when contacts are typing
- **Read Receipts** - Message delivery confirmations
- **User Presence** - Online/offline status with timestamps

## Architecture

```
Client (React)          Protocol Layer           Relay Server
├── UI Components  ←→   ├── Linda Protocol  ←→   ├── GunDB Relay
├── Authentication      │   ├── ECDH             ├── Data Storage
├── Real-time UI        │   ├── AES-GCM          ├── Peer Network
└── Socket.IO           │   └── HMAC             └── WebSocket
```

## Security Model

### What is Protected

- **Message Content** - Encrypted end-to-end, unreadable by relays
- **Message Integrity** - HMAC prevents tampering
- **Replay Attacks** - Nonces and sequence numbers prevent replay

### Limitations

:::caution Security Notice
- **Limited Forward Secrecy** - Keys rotate hourly, not per-message
- **No Post-Compromise Security** - Compromised keys don't "heal"
- **Metadata Visible** - Who talks to whom may be visible on GunDB
- **Not Audited** - Custom protocol, not as mature as Signal
:::

## Quick Start

```bash
# Clone repository
git clone https://github.com/scobru/shogun-linda.git
cd shogun-linda

# Start relay server
cd relay && npm install && npm run build && npm start

# Start client (in another terminal)
cd client && npm install && npm run dev
# Opens at http://localhost:3000
```

## Configuration

### Client Environment (`.env.local`)

```env
VITE_APP_NAME=Linda
VITE_SHOGUN_PEERS=http://localhost:8765/gun,https://relay.shogun-eco.xyz/gun
VITE_SHOW_METAMASK=true
VITE_SHOW_WEBAUTHN=true
VITE_SHOW_NOSTR=true
```

## API Example

```typescript
// Initialize Linda Protocol
const lindaLib = new LindaLib(shogunCore);

// Send private message
await lindaLib.sendMessageAsync(recipientPub, recipientEpub, "Hello!");

// Listen for messages (Observable stream)
lindaLib.listenForMessages(senderPub, senderEpub).subscribe(message => {
  console.log('New message:', message);
});

// Create group
await lindaLib.createGroup("My Group", [member1Pub, member2Pub]);

// Send public room message
await lindaLib.sendPublicRoomMessage(roomId, content);
```

## Related

- [Auth](auth) - Authentication for Linda
- [GYPT](gypt) - Location-based messaging alternative

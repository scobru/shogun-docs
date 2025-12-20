# Wormhole

> **Secure P2P File Transfer**

Shogun Wormhole is a secure peer-to-peer file transfer tool built with GunDB and IPFS, offering both CLI and web interfaces for seamless file sharing.

**Live**: [wormhole.shogun-eco.xyz](https://wormhole.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-wormhole)

## Features

- 🔒 **End-to-End Secure** - Encrypted file transfers
- 🌐 **P2P Architecture** - Built on GunDB
- 📁 **IPFS Storage** - Content-addressed file storage
- 🔗 **Human-Readable Codes** - Simple sharing codes
- 🚀 **Progress Tracking** - Real-time status updates
- 🔄 **Auto Cleanup** - Automatic cleanup after transfers

## How It Works

```
Sender                          Receiver
  │                                │
  ├─ Upload file to IPFS ─────────►│
  │                                │
  ├─ Generate share code ─────────►│
  │      e.g. "purple-cat-42"      │
  │                                │
  │◄────────── Enter code ─────────┤
  │                                │
  │◄──── Download from IPFS ───────┤
  │                                │
  └─ Auto cleanup ─────────────────┘
```

## Usage

### CLI Interface

```bash
# Install globally
npm install -g gundb-wormhole

# Send a file
gwh send myfile.zip

# Receive a file
gwh receive purple-cat-42

# List active transfers
gwh list
```

### Web Interface

1. Open [wormhole.shogun-eco.xyz](https://wormhole.shogun-eco.xyz)
2. Choose **Send** or **Receive**
3. For sending: Drop a file, share the generated code
4. For receiving: Enter the code, file downloads automatically

## Integration

```javascript
const wormhole = new WormholeCore({
  gun: gunInstance,
  onStatusChange: (status) => console.log(status),
  onProgress: (percent) => console.log(`${percent}%`)
});

// Send a file
const code = await wormhole.send({
  file: fileBlob,
  relayUrl: "https://relay.shogun-eco.xyz",
  authToken: "your-token"
});
console.log(`Share code: ${code}`);

// Receive a file
await wormhole.receive(code, relayUrl);
```

## Status Codes

| Status | Description |
|--------|-------------|
| `uploading` | File being uploaded to IPFS |
| `pinning` | Waiting for IPFS pin confirmation |
| `sent` | File ready for recipient |
| `connecting` | Searching for transfer |
| `downloading` | File download in progress |
| `completed` | Transfer successful |
| `error` | An error occurred |

## Configuration

```env
RELAY_URL=https://relay.shogun-eco.xyz
AUTH_TOKEN=your-admin-token
MULTICAST_ADDRESS=224.0.0.1
MULTICAST_PORT=5000
```

## Security

- Files transferred through IPFS with temporary pinning
- Automatic cleanup after successful transfers
- No direct P2P connection required
- Codes are randomly generated and unique

## Related

- [Drive](drive) - Persistent encrypted storage
- [Relay](../relay/getting-started) - IPFS pinning service

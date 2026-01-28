# Wormhole P2P File Transfer

Wormhole enables peer-to-peer file transfers through the Shogun Relay, allowing users to share files securely using short transfer codes.

## Overview

Wormhole provides:

- **Code-based transfers**: Share files using simple transfer codes
- **IPFS-backed**: Files are temporarily stored on IPFS during transfer
- **Automatic cleanup**: Orphaned transfers are automatically removed
- **End-to-end encryption**: Optional encryption for sensitive files
- **GunDB signaling**: Uses GunDB for transfer coordination

## How It Works

```
Sender                    Relay                     Receiver
  │                         │                          │
  ├─── Upload File ────────►│                          │
  │    (Get Code)           │                          │
  │◄── Return Code ─────────┤                          │
  │                         │                          │
  │        Share Code                                  │
  │────────────────────────────────────────────────────►
  │                         │                          │
  │                         │◄──── Request File ───────┤
  │                         │      (With Code)         │
  │                         ├──── Return File ────────►│
  │                         │                          │
  │                         │ (Auto-cleanup after 24h) │
```

1. **Sender** uploads a file to the relay
2. Relay stores the file on IPFS and generates a **transfer code**
3. Sender shares the code with the receiver (via any channel)
4. **Receiver** uses the code to download the file
5. Relay automatically cleans up orphaned transfers

## Configuration

Enable Wormhole in your `.env`:

```bash
# Enable wormhole P2P transfer
WORMHOLE_ENABLED=true

# Automatic cleanup of orphaned transfers
WORMHOLE_CLEANUP_ENABLED=true

# Cleanup interval (default: 1 hour)
WORMHOLE_CLEANUP_INTERVAL_MS=3600000

# Max age for uncompleted transfers (default: 24 hours)
WORMHOLE_MAX_AGE_SECS=86400
```

## API Usage

### Upload File for Transfer

```bash
POST /api/v1/wormhole/upload
Content-Type: multipart/form-data

file: <your-file>
```

Response:
```json
{
  "success": true,
  "code": "abc123",
  "expiresAt": 1703980800000
}
```

### Download File

```bash
GET /api/v1/wormhole/download/:code
```

Returns the file content directly.

### Check Transfer Status

```bash
GET /api/v1/wormhole/status/:code
```

Response:
```json
{
  "success": true,
  "exists": true,
  "createdAt": 1703894400000,
  "completed": false,
  "ipfsHash": "Qm..."
}
```

## Automatic Cleanup

The Wormhole cleanup service runs periodically to remove orphaned transfers:

| Behavior | Description |
|----------|-------------|
| **Scan interval** | Configured by `WORMHOLE_CLEANUP_INTERVAL_MS` |
| **Max age** | Transfers older than `WORMHOLE_MAX_AGE_SECS` are removed |
| **Completed transfers** | Not removed (marked as completed) |
| **Actions** | Unpins from IPFS, removes from GunDB |

### Cleanup Process

1. Scans all transfers in GunDB (`shogun-wormhole.wormhole-transfers`)
2. Checks if each transfer is completed
3. If not completed and older than max age:
   - Unpins the file from IPFS
   - Removes the transfer record from GunDB

### Logs

```
🔄 Starting wormhole cleanup scheduler
🔄 Scanning for orphaned wormhole transfers
🧹 Cleaning up orphaned wormhole transfer code=abc123 ageHours=25
📌 Successfully unpinned from IPFS cid=Qm...
🔄 Wormhole cleanup completed cleaned=3 errors=0
```

## GunDB Data Structure

Wormhole transfers are stored in GunDB:

```javascript
// Transfer metadata
gun.get('shogun-wormhole').get('wormhole-transfers').get(code).put({
  createdAt: Date.now(),
  ipfsHash: 'Qm...',
  completed: false
});

// Completion status
gun.get(`${code}-received`).put({
  status: 'completed',
  downloadedAt: Date.now()
});
```

## Security Considerations

1. **Transfer codes** are short and should be shared securely
2. **Files are temporary** - they are removed after the configured max age
3. **IPFS content** can be accessed by anyone with the CID during the transfer window
4. For sensitive files, consider **encrypting** before upload

## Use Cases

- **Quick file sharing** between devices
- **One-time transfers** without creating accounts
- **Cross-platform sharing** (web, mobile, desktop)
- **Temporary file hosting** with automatic cleanup

## Related Documentation

- [IPFS Configuration](./configuration.md#ipfs-configuration)
- [API Reference](./api-reference.md)

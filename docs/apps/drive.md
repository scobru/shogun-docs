# Drive

> **Decentralized Encrypted File Storage**

Shogun Drive is a Google Drive-like application for decentralized encrypted file storage, using IPFS as the storage backend with SEA encryption.

**Live**: [drive.shogun-eco.xyz](https://drive.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-drive)

## Features

- 📁 **Decentralized Storage** - Files stored on IPFS via Shogun Relay
- 🔒 **End-to-End Encryption** - Files encrypted with SEA before upload
- 🎨 **Modern UI** - Google Drive-like file grid interface
- 📤 **Easy Upload** - Drag-and-drop or click to upload
- 🔍 **Search** - Find files by name or CID
- 📊 **Metadata** - Automatic tracking for all files

## How It Works

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Your File  │ →  │  SEA Encrypt │ →  │    IPFS     │
│             │    │  (with key)  │    │  (pinned)   │
└─────────────┘    └──────────────┘    └─────────────┘
                          ↓
                 ┌──────────────┐
                 │   Metadata   │
                 │   (GunDB)    │
                 └──────────────┘
```

## Usage

1. **Configure Settings** - Click the settings icon:
   - Enter your Auth Token (from Shogun Relay)
   - Set Relay URL (defaults to current origin)

2. **Upload Files**:
   - Click "Upload Files" or drag-and-drop
   - Files are automatically encrypted before upload

3. **Manage Files**:
   - Click a file to preview/download
   - Use download button to save locally
   - Use delete button to remove from IPFS

4. **Search** - Filter files by name or CID

## Architecture

| Component | Purpose |
|-----------|---------|
| `drive-core.js` | IPFS operations, encryption/decryption |
| `DriveApp.js` | Main application component |
| `FileGrid.js` | File grid display |
| `UploadArea.js` | Drag-and-drop upload |
| `SettingsPanel.js` | Configuration UI |

## Quick Start

```bash
# Install dependencies
yarn install

# Configure relay URL and auth token in settings

# Start development server
yarn dev

# Build for production
yarn build
```

## Encryption

Files are encrypted using GunDB's SEA library:

```javascript
// Encryption flow (simplified)
const encrypted = await SEA.encrypt(fileData, authToken);
const cid = await ipfs.add(encrypted);
await metadata.store({ cid, name, size, type });
```

Only users with the correct auth token can decrypt files.

## Requirements

- Shogun Relay server running
- Valid admin token for authentication
- Modern browser with:
  - ES6 modules
  - Fetch API
  - File API
  - Crypto API

## Related

- [Wormhole](wormhole) - P2P file transfer
- [Relay](../relay/getting-started) - IPFS backend
- [Deals](deals) - On-chain storage guarantees

# Anna's Archive Integration

Shogun Relay includes built-in support for [Anna's Archive](https://annas-archive.org/), the largest open-source library in the world. By enabling this feature, your relay can contribute to digital preservation by seeding torrents and bridging content to IPFS.

## Overview

The **Torrent Manager** integrates with Anna's Archive to:

- **Auto-fetch torrents** from Anna's Archive dynamic torrent list
- **Seed preservation torrents** using WebTorrent (DHT, uTP, WebSocket trackers)
- **Bridge to IPFS** by automatically pinning completed torrent files to IPFS
- **Network discovery** via GunDB for finding other seeding relays
- **AAC metadata** support (Anna's Archive Container format)

## How It Works

```
Anna's Archive API ──► Torrent Manager ──► WebTorrent Client
                             │
                             ▼
                     Download Torrents
                             │
                             ▼
                      Pin to IPFS ◄──► Catalog (GunDB)
                             │
                             ▼
                    Serve via IPFS Gateway
```

1. **Fetch**: The relay fetches torrent magnet links from Anna's Archive API
2. **Download**: WebTorrent downloads the files to local storage
3. **Seed**: The relay seeds the torrents back to the BitTorrent network
4. **Pin**: Completed files are automatically pinned to the IPFS node
5. **Catalog**: File mappings (torrent hash → IPFS CID) are published to GunDB
6. **Discovery**: Other relays can discover your catalog via GunDB network

## Configuration

Enable the torrent integration in your `.env`:

```bash
# Enable torrent manager
TORRENT_ENABLED=true

# Optional: Maximum TB to fetch (0 = unlimited)
TORRENT_MAX_TB=1

# Optional: Custom Anna's Archive API URL
TORRENT_ANNAS_ARCHIVE_URL=https://annas-archive.li/dyn/generate_torrents

# Optional: Custom data directory
TORRENT_DATA_DIR=./data/torrents
```

> [!NOTE]
> You should also enable IPFS (`IPFS_ENABLED=true`) for the full experience.

## API Endpoints

### Get Status

```bash
GET /api/v1/annas-archive/status
```

Returns the current status of the torrent manager:

```json
{
  "success": true,
  "data": {
    "enabled": true,
    "activeTorrents": 5,
    "downloadSpeed": 1024000,
    "uploadSpeed": 512000,
    "ratio": 2.5,
    "torrents": [
      {
        "infoHash": "abc123...",
        "name": "scidb-2023-01",
        "progress": 0.85,
        "downloadSpeed": 204800,
        "uploadSpeed": 102400,
        "peers": 12
      }
    ]
  }
}
```

### Add Torrent Manually

```bash
POST /api/v1/annas-archive/add
Content-Type: application/json

{
  "magnet": "magnet:?xt=urn:btih:..."
}
```

### Refetch from Anna's Archive

```bash
POST /api/v1/torrent/refetch
Content-Type: application/json

{
  "maxTb": 1
}
```

Fetches and adds new torrents from the Anna's Archive dynamic list.

### Get Local Catalog

```bash
GET /api/v1/torrent/catalog
```

Returns the local catalog of completed torrents with IPFS mappings:

```json
{
  "success": true,
  "catalog": [
    {
      "torrentHash": "abc123...",
      "torrentName": "scidb-2023-01",
      "magnetLink": "magnet:?xt=urn:btih:...",
      "completedAt": 1703980800000,
      "files": [
        {
          "name": "paper1.pdf",
          "path": "scidb-2023-01/paper1.pdf",
          "size": 1048576,
          "ipfsCid": "QmXxx..."
        }
      ]
    }
  ],
  "count": 1
}
```

### Get Network Catalog

```bash
GET /api/v1/torrent/network-catalog
```

Discovers and fetches catalogs from other relays in the network.

## Dashboard

Access the Anna's Archive dashboard at:

```
http://your-relay:8765/annas-archive
```

The dashboard allows you to:
- View active torrents and their status
- Add new torrents manually
- Refetch from Anna's Archive
- Browse the local and network catalog
- Manually pin files to IPFS

## AAC Metadata Format

Files are cataloged using the [Anna's Archive Container (AAC)](https://annas-archive.org/blog/annas-archive-containers.html) format:

```json
{
  "aacid": "aacid__ia2_records__20230101T000000Z__abc123...",
  "metadata": {
    "filename": "paper.pdf",
    "filesize": 1048576,
    "source": "shogun_relay",
    "torrentHash": "abc123...",
    "ipfsCid": "QmXxx..."
  }
}
```

## Disk Space Considerations

> [!WARNING]
> Anna's Archive torrents can be very large (terabytes). Configure `TORRENT_MAX_TB` appropriately for your available disk space.

Recommended minimum:
- **1 TB**: For basic participation
- **10 TB+**: For significant contribution

## Network Discovery

Relays publish their catalog metadata to GunDB:

```javascript
gun.get('annas-archive').get('catalog').get(relayPubKey).put({
  relayUrl: 'https://your-relay.com',
  ipfsGateway: 'https://your-relay.com/ipfs',
  lastUpdated: Date.now(),
  torrentCount: 42,
  annasArchiveEnabled: true
});
```

Other relays can discover your content and users can access files via your IPFS gateway.

## Related Documentation

- [IPFS Configuration](./configuration.md#ipfs-configuration)
- [Storage Deals](./storage-deals.md)
- [Network Federation](https://github.com/scobru/shogun-relay/blob/main/docs/NETWORK_FEDERATION.md)

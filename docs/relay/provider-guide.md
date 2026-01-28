# Provider Guide

Become a Shogun Relay Provider and earn revenue by offering storage and relay services to the network.

## Why Run a Relay?

*   **Earn Fees**: Earn USDC for storing user data via Storage Deals and x402 subscriptions.
*   **Support the Network**: Strengthen the decentralized infrastructure.
*   **Reputation**: Build a high-reputation node to attract more deals.
*   **Digital Preservation**: Contribute to Anna's Archive torrent seeding.

## Requirements

*   **Reliable Server**: 24/7 uptime is critical for reputation.
*   **Storage**: Sufficient disk space for IPFS data (SSD recommended).
    - Minimum: 100GB for basic operation
    - Recommended: 1TB+ for Anna's Archive participation
*   **Public IP**: Your relay must be accessible from the internet.
*   **Stake**: A minimum of 100 USDC to stake in the Registry contract.
*   **ETH**: Small amount of ETH for gas fees (~0.01 ETH).

## Setup Steps

1.  **Deploy Shogun Relay**: Follow the [Getting Started](./getting-started.md) guide.

2.  **Generate Keypair**:
    ```bash
    cd relay
    node scripts/generate-relay-keys.js
    ```
    Add the output to your `.env` as `RELAY_SEA_KEYPAIR='...'`

3.  **Configure Wallet**:
    *   Set `RELAY_PRIVATE_KEY` in your `.env`.
    *   Ensure the wallet has ETH (for gas) and USDC (for staking) on Base.

4.  **Enable Modules**:
    Configure which features to enable in your `.env`:
    ```bash
    IPFS_ENABLED=true
    X402_ENABLED=true
    DEALS_ENABLED=true
    REGISTRY_ENABLED=true
    # Optional: Digital preservation
    TORRENT_ENABLED=true
    ```

5.  **Register On-Chain**:
    *   Use the Admin Dashboard or API to call the registration endpoint.
    *   Or interact directly with the `ShogunRelayRegistry` contract.
    ```javascript
    // Example registration
    await registry.registerRelay(
        "https://your-relay-url.com",
        "YOUR_GUN_PUB_KEY",
        ethers.parseUnits("100", 6) // 100 USDC stake
    );
    ```

6.  **Announce Presence**: The relay will automatically start gossiping its presence to the GunDB network.

## Economics

*   **Staking**: You stake USDC to prove commitment. If you lose data or go offline during a deal, you may be slashed.
*   **Pricing**: You set your own prices for storage (per MB/month) via environment variables.
*   **Payments**: Payments are settled in USDC. You can withdraw your earnings from the contract at any time.

### Revenue Streams

| Source | Description | Typical Revenue |
|--------|-------------|-----------------|
| Subscriptions | Monthly storage plans | $1-5/user/month |
| Storage Deals | Per-file contracts | $0.0001-0.0005/MB/month |

### Costs

| Item | Typical Cost |
|------|--------------|
| VPS Server | $5-30/month |
| Domain + SSL | ~$1/month |
| Gas fees | ~$1-5/month |

## Maintenance

*   **Monitor Storage**: Keep an eye on your disk usage via `/stats` dashboard.
*   **Update Software**: Keep your relay software up to date.
*   **Backup**: Regularly backup your `data/` directory (GunDB data) and IPFS repo.
*   **IPFS GC**: Run garbage collection weekly to reclaim space.

## Additional Features

### Anna's Archive (Optional)

Support digital preservation by seeding Anna's Archive torrents:
- Enable with `TORRENT_ENABLED=true`
- Configure max storage with `TORRENT_MAX_TB`
- See [Anna's Archive Integration](./annas-archive.md) for details.

### Wormhole P2P (Optional)

Enable peer-to-peer file transfers:
- Enable with `WORMHOLE_ENABLED=true`
- Automatic cleanup of orphaned transfers
- See [Wormhole P2P](./wormhole.md) for details.

## Related Documentation

- [Configuration Reference](./configuration.md)
- [API Reference](./api-reference.md)
- [Anna's Archive Integration](./annas-archive.md)
- [Wormhole P2P](./wormhole.md)


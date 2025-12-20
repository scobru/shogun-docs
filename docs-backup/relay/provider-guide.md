# Provider Guide

Become a Shogun Relay Provider and earn revenue by offering storage and relay services to the network.

## Why Run a Relay?

*   **Earn Fees**: Earn USDC for storing user data via Storage Deals and x402 subscriptions.
*   **Support the Network**: Strengthen the decentralized infrastructure.
*   **Reputation**: Build a high-reputation node to attract more deals.

## Requirements

*   **Reliable Server**: 24/7 uptime is critical for reputation.
*   **Storage**: Sufficient disk space for IPFS data (SSD recommended).
*   **Public IP**: Your relay must be accessible from the internet.
*   **Stake**: A minimum amount of USDC (e.g., 100 USDC) to stake in the Registry contract.

## Setup Steps

1.  **Deploy Shogun Relay**: Follow the [Getting Started](./getting-started.md) guide.
2.  **Configure Wallet**:
    *   Set `RELAY_PRIVATE_KEY` in your `.env`.
    *   Ensure the wallet has some ETH (for gas) and USDC (for staking) on Base/Optimism.
3.  **Register On-Chain**:
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
4.  **Announce Presence**: The relay will automatically start gossiping its presence to the GunDB network.

## Economics

*   **Staking**: You stake USDC to prove commitment. If you lose data or go offline during a deal, you may be slashed.
*   **Pricing**: You set your own prices for storage (per MB/month) via the `StorageDealRegistry`.
*   **Payments**: Payments are settled in USDC. You can withdraw your earnings from the contract at any time.

## Maintenance

*   **Monitor Storage**: Keep an eye on your disk usage.
*   **Update Software**: Keep your relay software up to date.
*   **Backup**: Regularly backup your `data/` directory (GunDB data) and IPFS repo.

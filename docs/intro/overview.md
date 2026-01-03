# Introduction to Shogun Protocol

**Shogun Protocol** is a decentralized infrastructure layer that bridges the gap between real-time data synchronization, permanent storage, and blockchain incentives.

It is designed to solve the fragmentation problem in Web3 development, where developers currently have to stitch together disparate services for database (Firebase/Supabase), storage (IPFS/Arweave), and payments (Stripe/Crypto).

## Core Components

Shogun unifies three powerful technologies:

1.  **GunDB (The Database Layer)**
    *   A decentralized, offline-first, real-time graph database.
    *   Handles user data, application state, and peer-to-peer communication.
    *   Provides the "glue" that syncs data between users and relays instantly.

2.  **IPFS (The Storage Layer)**
    *   InterPlanetary File System for immutable, content-addressed storage.
    *   Used for storing large files (images, videos, documents) and static assets.
    *   Shogun Relay manages pinning, garbage collection, and availability.

3.  **Blockchain (The Incentive Layer)**
    *   Smart contracts for incentives and registry.
    *   **ShogunRelayRegistry**: Tracks active relays and their reputation.
    *   **StorageDealRegistry**: Manages paid storage agreements (Deals).
    *   **x402**: A protocol for streaming micropayments and subscriptions.

## Key Features

*   **Unified Relay**: A single server (`shogun-relay`) that runs GunDB, manages IPFS, and talks to the blockchain. No more juggling 5 different microservices.
*   **Incentivized Storage**: Relays can earn USDC by pinning content for users. Users pay for guaranteed storage via Smart Contracts or x402 subscriptions.
*   **Privacy & Stealth**: Built-in support for stealth addresses and private payments, allowing for anonymous interactions.
*   **Developer Experience**: A simple SDK and REST API that abstracts away the complexity of P2P networking and crypto payments.

## Use Cases

*   **Decentralized Social Media**: Store user profiles and posts in GunDB, media in IPFS.
*   **Encrypted Data Vaults**: Private, encrypted storage for sensitive user data.
*   **Content Marketplaces**: Buy and sell digital assets with atomic delivery and payment.
*   **Resilient Apps**: Applications that work offline and sync automatically when connected.

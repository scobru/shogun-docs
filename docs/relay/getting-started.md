# Getting Started with Shogun Relay

This guide will help you set up and run your own **Shogun Relay**.

## Prerequisites

*   **Node.js**: Version 18 or higher.
*   **IPFS Node**: You need a running IPFS Kubo node (local or remote).
*   **Git**: To clone the repository.

## Quick Start (Docker)

The easiest way to run a relay is using Docker.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/scobru/shogun-relay.git
    cd shogun-relay
    ```

2.  **Start the Relay**
    ```bash
    ./docker-start.sh
    ```
    This script will start the Relay and a bundled IPFS node using Docker Compose.

3.  **Verify Installation**
    Check if the relay is responding:
    ```bash
    curl http://localhost:8765/health
    # Output: {"status":"ok", ...}
    ```

## Manual Installation

If you prefer to run it without Docker:

1.  **Install Dependencies**
    ```bash
    cd relay
    npm install
    ```

2.  **Configure Environment**
    Create a `.env` file in the `relay` directory. See [Configuration](./configuration.md) for details.
    ```bash
    cp .env.example .env
    ```

3.  **Start the Server**
    ```bash
    npm run start
    # Or for development with auto-reload:
    npm run dev
    ```

## Accessing the Dashboard

Once running, you can access the Admin Dashboard at:
`http://localhost:8765/`

You will need the `ADMIN_PASSWORD` defined in your `.env` file to log in.

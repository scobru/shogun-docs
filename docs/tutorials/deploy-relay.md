# Tutorial: Deploying a Shogun Relay

In this tutorial, we will deploy a production-ready Shogun Relay on a Linux server (Ubuntu 22.04 recommended).

## Prerequisites

*   A VPS with at least 2GB RAM and 20GB SSD.
*   Domain name pointing to your server IP (e.g., `relay.yourdomain.com`).
*   Docker and Docker Compose installed.

## Step 1: Prepare the Server

Install Docker if you haven't already:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## Step 2: Clone and Configure

Clone the repository:

```bash
git clone https://github.com/scobru/shogun-relay.git
cd shogun-relay
```

Create your configuration file:

```bash
cp relay/.env.example relay/.env
nano relay/.env
```

Set the following variables:
*   `ADMIN_PASSWORD`: Generate a strong password.
*   `RELAY_HOST`: Set to your domain (e.g., `relay.yourdomain.com`).
*   `RELAY_PORT`: `8765` (default).

## Step 3: Setup SSL (Optional but Recommended)

It is highly recommended to run your relay behind a reverse proxy like Nginx or Caddy to handle SSL.

**Example Caddyfile:**

```
relay.yourdomain.com {
    reverse_proxy localhost:8765
}
```

## Step 4: Start the Relay

```bash
./docker-start.sh
```

## Step 5: Verify

Visit `https://relay.yourdomain.com/health` in your browser. You should see a JSON response indicating the system is healthy.

## Step 6: Register On-Chain

To make your relay discoverable:
1.  Go to your Relay Dashboard (`/admin`).
2.  Navigate to the "Registry" tab.
3.  Connect your wallet.
4.  Click "Register Relay" and confirm the transaction.

Congratulations! Your relay is now part of the Shogun Network.

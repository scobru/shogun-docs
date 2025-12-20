# L2 Bridge

> **Trustless ETH Bridge**

Shogun L2 Bridge enables deposits, withdrawals, and transfers of ETH between L1 (Base) and L2 (GunDB) using Merkle proofs and dual signatures.

**Live**: [l2.shogun-eco.xyz](https://l2.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-l2)

**Network**: Base Sepolia (Chain ID: 84532)

## Features

- 💰 **Deposit (L1 → L2)** - Deposit ETH from wallet to bridge contract
- 💸 **Withdraw (L2 → L1)** - Withdraw ETH using Merkle proofs
- 🔄 **Transfer (L2 → L2)** - Transfer ETH between L2 users
- 📊 **Balance View** - Show L1, L2, and bridge contract balances
- ⏳ **Pending Withdrawals** - Manage pending withdrawal requests
- 🔄 **Auto-refresh** - Balances update every 30 seconds

## How It Works

### Deposit (L1 → L2)

```
User Wallet (L1)                    L2 Balance
      │                                  │
      ├── Send ETH to Bridge Contract ──►│
      │                                  │
      │   Relay listener detects         │
      │   Deposit event                  │
      │                                  │
      └── Balance credited on L2 ◄───────┘
```

### Withdraw (L2 → L1)

```
User (L2)                    Sequencer              User Wallet (L1)
    │                            │                        │
    ├── Request withdrawal ─────►│                        │
    │                            │                        │
    │   Wait for batch           │                        │
    │                            │                        │
    ├── Get Merkle proof ◄───────┤                        │
    │                            │                        │
    └── Submit proof + claim ───────────────────────────►│
                                                    ETH received
```

### Transfer (L2 → L2)

```
Sender (L2)                  GunDB                  Recipient (L2)
    │                          │                         │
    ├── Sign with SEA ────────►│                         │
    │   + Sign with ETH        │                         │
    │                          │                         │
    │   Relay verifies dual ───┤                         │
    │   signatures             │                         │
    │                          │                         │
    └── Balance transferred ──────────────────────────►│
```

## Security

- **Dual Signatures** - Both SEA and Ethereum signatures required
- **Merkle Proofs** - Withdrawals verified mathematically
- **Nonce Protection** - Prevents replay attacks
- **Batched Withdrawals** - Sequencer batches for efficiency

## Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev
# Opens at http://localhost:3001

# Build for production
npm run build
```

## Usage

1. **Connect Wallet** - Click "Connect Wallet" and approve
2. **Deposit** - Enter amount, click "Deposit"
3. **Withdraw**:
   - Enter amount and nonce
   - Click "Request Withdrawal"
   - Wait for batch to be processed
   - Click "Check Proof & Withdraw"
4. **Transfer** - Enter recipient address and amount

## Architecture

The app uses:

| Component | Purpose |
|-----------|---------|
| Shogun Contracts SDK | `GunL2Bridge` contract interaction |
| Shogun Relay SDK | Balance, transfer, withdraw, proof APIs |
| Shogun Core | Derive GunDB keypair from Ethereum wallet |
| GunDB SEA | Dual signatures (SEA + Ethereum) |

## Requirements

- Node.js 18+
- MetaMask or EIP-1193 compatible wallet
- Shogun Relay running (default: `http://localhost:8765`)

## Related

- [Contracts](../contracts/overview) - Bridge contract details
- [Wallet](wallet) - Multi-chain wallet
- [Relay](../relay/getting-started) - Relay that processes deposits

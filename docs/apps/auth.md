# Auth

> **Decentralized Authentication Hub**

Shogun Auth is a comprehensive React-based authentication application that serves as the central identity provider for the Shogun ecosystem. It provides multiple authentication methods with encrypted data storage.

**Live**: [auth.shogun-eco.xyz](https://auth.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-auth-app)

## Features

### Authentication Methods

| Method | Description |
|--------|-------------|
| 📧 **Password** | Traditional username/password with GunDB |
| 🦊 **MetaMask** | Web3 wallet authentication |
| 🔐 **WebAuthn** | Biometric authentication (fingerprint, Face ID) |
| ⚡ **Nostr** | Decentralized protocol authentication |
| 🔑 **OAuth** | Google and extensible to other providers |
| 📱 **Gun Pair** | Import/export for account recovery |

### Secure Data Vault

- **End-to-End Encryption** - All data encrypted using SEA before storage
- **Personal Storage** - Private encrypted space for sensitive data
- **Key-Value Store** - Store API keys, passwords, and secrets
- **Decentralized** - Data stored across GunDB relays

### Cross-Application Integration

Auth can serve as an authentication provider for other applications:

```javascript
// Redirect users to Auth for authentication
const authUrl = "https://auth.shogun-eco.xyz?redirect=" + 
  encodeURIComponent(window.location.origin + "/auth-callback");
window.open(authUrl, "_blank");

// Listen for credentials via PostMessage API
window.addEventListener("message", (event) => {
  if (event.data.type === "shogun:auth:credentials") {
    const { pair, session } = event.data.data;
    // Use credentials in your app
  }
});
```

## Quick Start

```bash
# Clone and install
git clone https://github.com/scobru/shogun-auth-app
cd shogun-auth-app
npm install

# Start development server
npm run dev
# Opens at http://localhost:8080
```

## Configuration

Configure Shogun Core in the app:

```javascript
const shogunCore = new ShogunCore({
  gunInstance: gun,
  peers: ["https://relay.shogun-eco.xyz/gun"],
  web3: { enabled: true },
  webauthn: { enabled: true, rpName: "My App" },
  nostr: { enabled: true },
  oauth: {
    enabled: true,
    providers: {
      google: {
        clientId: "your-client-id",
        // ...
      }
    }
  }
});
```

## Security

- All user data encrypted with SEA before storage
- No central authority - users control their keys
- Secure credential transfer via PostMessage with origin validation
- Session management with automatic cleanup

## Related

- [Shogun Core](../sdk/javascript-sdk) - Core SDK for authentication
- [Smart Contracts](../contracts/overview) - On-chain identity

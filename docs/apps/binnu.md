# Binnu

> **Decentralized P2P Pastebin**

Binnu is a fully decentralized pastebin using GunDB for peer-to-peer data storage, offering censorship-resistant code and text sharing.

**Live**: [binnu.shogun-eco.xyz](https://binnu.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-binnu)

## Features

- 🌐 **Decentralized** - Data stored across P2P network
- 🔒 **Optional Encryption** - Password-based SEA encryption
- 🎨 **Syntax Highlighting** - 100+ programming languages
- ✏️ **Dual Editor Modes**:
  - Monaco Editor (VS Code-like)
  - Simple text editor
- 🎭 **Multiple Themes** - Shogun, VS Dark, Monokai, Dracula, Nord, etc.
- 📜 **Local History** - Auto-saves pastes locally
- 🔗 **Hash-Based URLs** - Content-addressed storage
- 📱 **Responsive** - Works on all devices
- ✅ **No Account Required** - Start sharing immediately

## How It Works

```
Your Code                     GunDB Network
    │                              │
    ├── SHA-256 hash ─────────────►│
    │   (content-addressed)        │
    │                              │
    ├── Optional: SEA encrypt ────►│
    │   (with password)            │
    │                              │
    └── Share URL with hash ◄──────┘
```

Data is stored at: `gun.get("binnu").get("bin").get("#").get(hash)`

## Quick Start

```bash
# Clone repository
git clone https://github.com/scobru/shogun-binnu.git
cd shogun-binnu

# Install dependencies
yarn install

# Start development
yarn start
# Opens at http://localhost:3000

# Build for production
yarn build
```

## Usage

### Create a Paste

1. Type or paste code in editor
2. Select language from sidebar
3. (Optional) Set password for encryption
4. Click **"Save Permanently"**
5. Share the generated URL

### View a Paste

1. Open paste URL
2. If encrypted, enter password in sidebar
3. Content decrypts and displays

### Editor Modes

- **Monaco**: Full VS Code features, IntelliSense, themes
- **Simple**: Lightweight for quick edits

## Available Themes

- Shogun (default)
- VS Dark / VS Light
- GitHub Dark / GitHub Light
- Monokai
- Dracula
- Nord
- One Dark Pro
- Solarized Dark / Light
- High Contrast themes

## Architecture

```
shogun-binnu/
├── src/
│   ├── components/
│   │   ├── Monaco.jsx    # Monaco editor
│   │   ├── CodeArea.jsx  # Simple editor
│   │   ├── Languages.jsx # Language picker
│   │   └── Loading.jsx   # Loading state
│   ├── utils/
│   │   └── index.js      # Base64 utilities
│   └── App.jsx           # Main app
└── relay.js              # Optional relay server
```

## Related

- [Drive](drive) - File storage
- [Notes](notes) - Note-taking

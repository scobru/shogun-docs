# Shogun NoBackend

> **14 Minimalist Serverless Web Tools**

Shogun NoBackend is a suite of privacy-first web tools that store state entirely in the URL. Zero backend, zero tracking, 100% shareable.

**Status**: Live  
**Live URL**: [nobackend.shogun-eco.xyz](https://nobackend.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun) (textarea folder)

## Features

- 🚫 **No Backend** — State is stored in the URL hash (compressed with LZ-String)
- 🔒 **Privacy First** — No data leaves your browser
- 🌙 **Light/Dark Mode** — Automatic detection with manual toggle
- 💎 **Premium Design** — Glassmorphism, smooth animations, responsive layouts
- 📱 **Mobile Friendly** — Works perfectly on phone and desktop

## How It Works

1. **Open any tool** in your browser
2. **Use the tool** (write notes, create lists, split bills, etc.)
3. **Share**: Copy the URL to share your exact state with others

The entire application state is compressed and stored in the URL hash. When someone opens your shared URL, they see exactly what you saw.

## Available Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| **Collect** | Link manager with versioning | Bookmark collections |
| **Event** | Event countdown and tracker | Countdown timers |
| **List** | Simple checklist/todo list | Task management |
| **Meet** | Timezone planner for meetings | International scheduling |
| **Message** | Distraction-free letter writer | Long-form messages |
| **Note** | Minimal text editor with Markdown | Quick notes |
| **Pic** | Private image viewer/sharer (Base64) | Image sharing |
| **Poll** | Quick voting and polls | Group decisions |
| **QR** | Instant QR code generator | QR codes |
| **Secret** | Client-side encrypted notes (AES-GCM) | Sensitive data |
| **Snippet** | Code snippet runner (HTML/JS) | Code demos |
| **Split** | Bill splitter with tip calculator | Expense sharing |
| **Wheel** | Decision making wheel | Random selection |
| **Where** | Anonymous location sharing | Meeting points |

## Technical Details

### URL Compression

State is serialized to JSON, compressed using LZ-String, and stored in the URL hash:

```javascript
// Save state to URL
const state = { notes: "Hello", items: [1, 2, 3] };
const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(state));
window.location.hash = compressed;

// Load state from URL
const hash = window.location.hash.slice(1);
const state = JSON.parse(LZString.decompressFromEncodedURIComponent(hash));
```

### Security

- **Secret Tool**: Uses AES-GCM 256-bit encryption
- **Pic Tool**: Images converted to Base64 (no external requests)
- **All Tools**: No cookies, no localStorage, no tracking

### Technology Stack

- **HTML5** — Semantic, accessible markup
- **Vanilla JavaScript** — No frameworks, minimal dependencies
- **CSS3** — Modern styling with CSS variables
- **LZ-String** — URL-safe compression

## Self-Hosting

All tools are static HTML files that can be hosted anywhere:

```bash
# Clone the repository
git clone https://github.com/scobru/shogun.git
cd shogun/textarea

# Serve with any static server
npx serve .
# or
python -m http.server 8000
```

## Related

- [DWeb Gateway](dweb) — Publish your own decentralized websites
- [Binnu](binnu) — Decentralized pastebin with syntax highlighting
- [Notes](notes) — Full-featured encrypted note-taking app

---

**Made with ❤️ and Vanilla JS**

*Inspired by [textarea.my](https://textarea.my) by @antonmedv*

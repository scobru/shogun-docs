# Tunecamp

> **Static Music Site Generator**

Tunecamp is a Faircamp-style static site generator for musicians and labels. Create beautiful, fully-featured music websites with no server required.

**Source**: [GitHub](https://github.com/scobru/tunecamp)

## Features

### Core
- 🎵 **Web Audio Player** - Stream tracks directly in browser
- 📦 **Static Site** - Deploy anywhere (GitHub Pages, IPFS, Vercel)
- 🎨 **5 Themes** - Pre-built themes with dark/light mode
- 📱 **Responsive** - Mobile-first design

### Feeds & Playlists
- 📡 **RSS/Atom Feeds** - Auto-generated for syndication
- 🎙️ **Podcast RSS** - iTunes-compatible podcast feed
- 🎶 **M3U Playlists** - Per-release and catalog playlists

### Discovery
- 🔍 **Search & Browse** - Filter by genre, sort by date/title
- 🏷️ **Label Mode** - Multi-artist catalog support
- 🙈 **Unlisted Releases** - Hidden but accessible via direct link

### Customization
- 🎨 **Interactive Theme Widget** - Live color customization
- 🖼️ **Procedural Covers** - Auto-generated SVG art for releases without artwork
- 📦 **Embed Widgets** - Embeddable players for blogs/social

### Monetization
- 🔐 **Unlock Codes (GunDB)** - Decentralized download codes
- 💰 **Paycurtain** - Honor-based payment system
- 🆓 **Free Downloads** - Direct download option

## Quick Start

```bash
# Install
npm install -g tunecamp

# Create catalog structure
mkdir my-music && cd my-music
tunecamp init

# Build site
tunecamp build . -o ./dist

# Preview
npx serve dist
```

## Catalog Structure

```
my-catalog/
├── catalog.yaml          # Site config
├── artist.yaml           # Artist info
└── releases/
    └── my-album/
        ├── release.yaml  # Release config
        ├── cover.jpg     # Album artwork
        └── *.mp3         # Audio files
```

## Configuration

### catalog.yaml
```yaml
title: "My Music Catalog"
description: "Official music releases"
url: "https://mysite.com"
theme: "default"
language: "en"
podcast:
  enabled: true
  category: "Music"
```

### release.yaml
```yaml
title: "Album Title"
date: "2024-01-15"
genres: ["Electronic", "Ambient"]
download: free    # free | paycurtain | codes | none
```

## Unlock Codes (GunDB)

Generate decentralized download codes:

```bash
npx ts-node src/tools/generate-codes.ts my-album --count 20
```

See [Unlock Codes Guide](https://github.com/scobru/tunecamp/blob/main/docs/unlock-codes-guida.md) for details.

## Build Output

```
dist/
├── index.html          # Homepage with search
├── feed.xml            # RSS feed
├── atom.xml            # Atom feed
├── podcast.xml         # Podcast feed
├── catalog.m3u         # Full catalog playlist
└── releases/album/
    ├── index.html      # Release page
    ├── embed.html      # Embeddable widget
    ├── playlist.m3u    # Release playlist
    └── cover-procedural.svg  # Generated cover
```

## Related

- [Faircamp](https://codeberg.org/simonrepp/faircamp) - Inspiration project
- [Shogun Core](../sdk/javascript-sdk) - Authentication for unlock codes

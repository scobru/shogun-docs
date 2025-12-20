# Notes

> **Encrypted Note-Taking**

Shogun Notes is a Google Keep-style notes application with decentralized encrypted storage via GunDB.

**Live**: [notes.shogun-eco.xyz](https://notes.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-notes)

## Features

- 📝 **Google Keep UI** - Familiar grid-based layout
- 🔒 **Encrypted Storage** - Notes encrypted with SEA
- 🎨 **Color Coding** - 12 colors available
- 📌 **Pin Notes** - Keep important notes at top
- 🏷️ **Labels/Tags** - Organize with labels
- 📦 **Archive** - Archive old notes
- 🔍 **Search** - Find by title, content, or labels
- 🌓 **Themes** - Dark and light modes
- 🔄 **Cross-Device Sync** - Automatic via GunDB

## How It Works

```
Your Note                  GunDB Storage
    │                           │
    ├── Encrypt with SEA ──────►│
    │   (using epriv)           │
    │                           │
    │◄── Decrypt with SEA ──────┤
    │                           │
    └── Sync across devices ◄───┘
```

Notes are stored in your private GunDB space:
- **Path**: `user().get('notes').get(noteId)`
- **Encryption**: SEA with user's private key (epriv)
- **Privacy**: Only you can read your notes

## Quick Start

```bash
# Navigate to project
cd shogun-notes

# Install dependencies
yarn install

# Start development
yarn dev
# Opens at http://localhost:8080

# Production build
yarn build
```

## Usage

1. **Authenticate** - Use Shogun button in header
2. **Create Note** - Click "New Note"
3. **Edit** - Click any note to edit
4. **Color** - Click color picker icon
5. **Pin** - Use three-dot menu → Pin
6. **Labels** - Add labels for organization
7. **Archive** - Archive notes via menu
8. **Search** - Use search bar

## Project Structure

```
shogun-notes/
├── src/
│   ├── components/
│   │   ├── NoteCard.tsx      # Individual note
│   │   ├── NoteEditor.tsx    # Edit modal
│   │   ├── NoteGrid.tsx      # Grid layout
│   │   ├── NotesApp.tsx      # Main app
│   │   └── SearchBar.tsx     # Search
│   ├── hooks/
│   │   └── useNotes.ts       # GunDB operations
│   └── types/
│       └── Note.ts           # TypeScript types
└── ...
```

## Related

- [Auth](auth) - Authentication for Notes
- [Drive](drive) - File storage companion

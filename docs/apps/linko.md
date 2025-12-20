# Linko

> **Decentralized Link Page Builder**

Linko is a Linktree-style page builder powered by GunDB and Shogun Core, with real-time sync and multilingual support.

**Live**: [linko.shogun-eco.xyz](https://linko.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-linko)

## Features

- 🎨 **Linktree-Inspired** - Clean, modern design
- 🌍 **Multilingual** - English and Italian with instant switching
- ⚡ **Real-time Sync** - Powered by GunDB
- 🔐 **Authenticated** - Secure with Shogun Core
- 📱 **Responsive** - Mobile-first with TailwindCSS
- 🎯 **TypeScript** - Full type safety
- 🔗 **Custom Slugs** - Personalized URLs

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Editor - create/edit pages |
| `/view/:pageId` | View a specific page |
| `/my-pages` | User's pages list |
| `/:slug` | Custom slug pages |

## Quick Start

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build for production
yarn build

# Preview build
yarn preview
```

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: TailwindCSS + CSS Variables
- **i18n**: react-i18next (IT/EN)
- **Database**: GunDB via Shogun Core
- **Build**: Vite
- **Icons**: Font Awesome 6

## Project Structure

```
shogun-linko/
├── src/
│   ├── components/     # React components
│   ├── hooks/
│   │   ├── useShogun.ts   # Shogun integration
│   │   └── useTheme.ts    # Theme management
│   ├── pages/
│   │   ├── EditorPage.tsx # Page editor
│   │   └── ViewerPage.tsx # Page viewer
│   ├── types/          # TypeScript types
│   └── utils/          # Utilities
└── ...
```

## Internationalization

- **Default**: Italian 🇮🇹
- **Supported**: English 🇬🇧
- **Switch**: Click 🌐 button in header
- **Persistence**: Saved in localStorage
- **Coverage**: 100% translated

## Related

- [Auth](auth) - Authentication for Linko

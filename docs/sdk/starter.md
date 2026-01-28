# Shogun Starter

**TypeScript/React Starter Template**

A comprehensive starter template for building decentralized applications within the Shogun ecosystem. It comes pre-configured with authentication, GunDB, and UI components.

## Features

- **TypeScript**: Full type safety.
- **React 18**: Modern hooks and patterns.
- **Shogun Auth**: Integrated login with multiple methods (WebAuthn, Nostr, Crypto).
- **GunDB**: Pre-configured decentralized database instance.
- **Tailwind + DaisyUI**: Shogun-themed UI components.
- **Vite**: Blazing fast build tool.

## specific Shogun Packages

- `@shogun/core`: Core SDK
- `@shogun/button-react`: Auth components
- `@shogun/relays`: Relay management

## Quick Start

```bash
# Clone the template
git clone https://github.com/scobru/shogun-starter

# Install dependencies
cd shogun-starter
yarn install

# Start dev server
yarn dev
```

## Structure

- `src/components/ui`: Reusable UI components.
- `src/App.tsx`: Main entry with Shogun Provider setup.
- `src/polyfills.ts`: Buffer/Process polyfills for Web3 compatibility.

## Usage

Access the SDK in any component:

```tsx
import { useShogun } from 'shogun-button-react';

const MyComponent = () => {
  const { sdk, userPub } = useShogun();

  // Use sdk.gun or sdk.auth
};
```

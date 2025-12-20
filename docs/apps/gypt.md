# GYPT

> **Geospatial Your Private Thoughts**

GYPT is a location-based encrypted messaging platform that combines geolocation with end-to-end encryption to create location-bound secret messages.

**Live**: [gypt.shogun-eco.xyz](https://gypt.shogun-eco.xyz)  
**Source**: [GitHub](https://github.com/scobru/shogun-gypt)

## Concept

Leave encrypted messages at specific GPS coordinates that can only be decrypted by others who physically visit those locations.

```
You (at location A)                    Friend (visits location A)
       │                                        │
       ├── Write message ──────────────────────►│
       │   Encrypt with GPS coords              │
       │                                        │
       │                               ◄────────┤ Decrypt with their GPS
       │                                        │ (must be within ~1.1 km)
```

## Features

### Triple-Layer Security

1. **Location-based AES** - Messages locked to GPS coordinates
2. **Visual Lock System** - Time-based expiration (7 days)
3. **Private Encryption** - GunDB SEA for user-to-user messages

### Rich Media

- 📷 **Photo Attachments** - Camera capture support
- 🎤 **Voice Messages** - Up to 30 seconds
- 📌 **Message Pinning** - Save important messages locally

### Automatic Expiration

Messages automatically expire after 24 hours, keeping the network clean.

## How Location Encryption Works

```javascript
// 1. Round GPS to 2 decimals (~1.1 km precision)
const precise = { lat: 45.07, lon: 7.69 }

// 2. Generate location hash
const locationKey = SHA256(`${precise.lat},${precise.lon}`)

// 3. Combine with app token
const combinedKey = SHA256(`${APP_TOKEN}:${locationKey}`)

// 4. Encrypt message with AES
const encrypted = AES.encrypt(message, combinedKey)
```

To decrypt, you must be at the same location (rounded to same precision).

## Private Messages

For user-to-user private messages, **double encryption** is applied:

```
Plain Text → [AES with Location Key] → [SEA with Recipient Key] → Stored
```

Both the correct location AND correct recipient key are needed to decrypt.

## Quick Start

```bash
# Install dependencies
npm install

# Start development
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build
```

### Mobile Development (Capacitor)

```bash
# Add platforms
npx cap add ios
npx cap add android

# Sync and open
npx cap sync
npx cap open ios    # Opens Xcode
npx cap open android # Opens Android Studio
```

## Configuration

```env
# .env file
VITE_GUNDB_PEERS=https://relay.shogun-eco.xyz/gun
VITE_SEARCH_RADIUS=0.5  # 500 meters
VITE_MAX_VOICE_DURATION=30
VITE_MESSAGE_EXPIRY=604800  # 7 days
```

## Use Cases

- 🎯 **Geocaching** - Treasure hunts and scavenger games
- 📍 **Location Boards** - Campus announcements, neighborhood boards
- 🔒 **Private Comms** - Confidential location-verified messages
- ⏰ **Ephemeral Boards** - Event-specific discussions

## Related

- [Linda](linda) - Non-location messaging
- [Auth](auth) - Authentication for GYPT

# DWeb Gateway

> **Decentralized Web Publishing Platform**

DWeb is a SaaS platform for publishing decentralized websites on GunDB. Users can register, upload HTML files, and publish them instantly to the decentralized network with custom URLs.

**Status**: Integrated in Shogun Starter  
**Source**: Included in `shogun-starter copy/dweb/`

## Features

- 🌐 **Decentralized Hosting** - Publish HTML sites on GunDB P2P network
- 🔐 **User Authentication** - Secure registration and login with GunDB/SEA
- 📤 **Easy Publishing** - Drag & drop HTML file upload
- 🔗 **Custom URLs** - Access sites via `/view/username` or subdomain routing
- ⚡ **Instant Deployment** - Sites go live immediately after publishing
- 🔒 **Cryptographic Signing** - All content is signed with user keys
- 📊 **Dashboard** - Manage your published sites

## Quick Start

### Installation

DWeb is integrated in the Shogun Starter template:

```bash
cd shogun-starter
cd dweb
npm install
npm start
```

### Access Points

- **SaaS Platform**: `http://localhost:3000/dweb` - Login and dashboard
- **Viewer**: `http://localhost:3000/dweb/view/username` - View published sites
- **Admin (Legacy)**: `http://localhost:3000/dweb/admin` - Legacy admin interface

## How It Works

### Architecture

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ├─> /dweb (saas-app.html) - Login/Dashboard
       ├─> /dweb/view/username (viewer.html) - View published app
       └─> /dweb/admin (admin.html) - Legacy admin
```

### Publishing Flow

1. **Registration/Login**
   - User creates account with username/password
   - GunDB/SEA generates cryptographic keys automatically
   - Credentials are securely managed by GunDB

2. **Publishing**
   - User uploads HTML file via drag & drop
   - Content is saved to: `user.get('site').put({ html: ... })`
   - Global mapping created: `dweb.users[username] -> pub key`
   - Enables fast username lookup

3. **Viewing**
   - Viewer looks up username -> pub key mapping
   - Loads app from user's GunDB node using pub key
   - Renders published HTML content

## URL Structure

All DWeb URLs are prefixed with `/dweb/`:

| Path | Description |
|------|-------------|
| `/dweb` | SaaS dashboard (login/dashboard) |
| `/dweb/admin` | Legacy admin interface |
| `/dweb/view/username` | View published app |
| `/dweb/api/publish` | Publishing API endpoint |
| `/dweb/api/pubkey` | Public key lookup API |

## Custom Domains

### Subdomain Routing

Configure your reverse proxy (Nginx/Caddy) for subdomain routing:

```nginx
# Nginx config
server {
    server_name *.dweb.app;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### DNS Wildcard

1. Configure DNS wildcard: `*.dweb.app` → server IP
2. Server reads subdomain from `Host` header
3. Automatically routes to `/dweb/view/subdomain`

## Project Structure

```
dweb/
├── saas-app.html         # Main SaaS interface (login/dashboard)
├── viewer.html           # Viewer for published apps
├── admin.html            # Legacy admin interface
├── index.html            # Legacy viewer
├── server.js             # HTTP server with routing
├── admin-publish-core.js # Legacy publishing logic
├── saas-publish-core.js  # SaaS publishing logic
├── publish.js            # CLI publishing tool
└── package.json
```

## Configuration

### Environment Variables

```bash
RELAY_URL=https://shogun-relay.scobrudot.dev/gun
PLATFORM_DOMAIN=dweb.app
PORT=3000
```

### GunDB Relay

DWeb requires a GunDB relay for network connectivity. Configure the relay URL in your environment or in the code:

```javascript
const gun = new Gun({
  peers: [process.env.RELAY_URL || 'https://shogun-relay.scobrudot.dev/gun']
});
```

## Security

- **Authentication**: GunDB/SEA handles username/password securely
- **Cryptographic Signing**: Every app is signed with user's keys
- **Access Control**: Only the owner can update their published app
- **Public Access**: Published apps are publicly accessible (like a website)

## API Usage

### Publish App (via GunDB)

```javascript
const gun = new Gun({ peers: [RELAY_URL] });
const user = gun.user();

user.auth('username', 'password', () => {
  user.get('site').put({
    html: '<html>...</html>',
    publishedAt: Date.now()
  });
});
```

### Read Published App

```javascript
// Lookup username -> pub key
const mapping = await gun.get('dweb').get('users').get('username').once();

// Load app from user's node
const app = await gun.get('~' + mapping.pub).get('site').once();
console.log(app.html);
```

## Integration with Shogun Starter

DWeb is integrated into `shogun-starter copy` in the `dweb/` directory:

```
shogun-starter copy/
├── dweb/                    # DWeb module
│   ├── saas-app.html       # Main SaaS interface
│   ├── viewer.html         # App viewer
│   ├── server.js           # Standalone HTTP server
│   └── ...
├── src/                    # Main React app
├── index.html              # React entry point
└── ...
```

### Standalone Mode

Run DWeb independently:

```bash
cd dweb
npm install
npm start
```

### Integrated Mode

DWeb can be integrated with the Vite dev server by configuring proxy routes or adding custom middleware.

## Deployment

### Docker Example

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

### Production Considerations

- Configure reverse proxy (Nginx/Caddy) for subdomain routing
- Set up SSL/TLS certificates for custom domains
- Configure GunDB relay for production network
- Set environment variables for production

## Troubleshooting

**Problem**: App not found after publishing
- **Solution**: Wait a few seconds for GunDB propagation
- **Verify**: Check browser console for errors

**Problem**: Login not working
- **Solution**: Ensure GunDB relay is reachable
- **Verify**: Check console for connection errors

**Problem**: Username mapping not found
- **Solution**: Re-publish the app (recreates mapping)
- **Alternative**: Viewer also tries direct lookup by alias

## Future Development

- [ ] Integration with shogun-core for advanced authentication
- [ ] Support for fully custom domains
- [ ] Payment/subscription system
- [ ] Analytics dashboard for apps
- [ ] Multi-app support per user
- [ ] Template marketplace
- [ ] CDN caching for performance

## Related

- [Shogun Starter](../../../shogun-starter%20copy/README) - Starter template with DWeb integration
- [Relay](../relay/getting-started) - Run your own GunDB relay
- [GunDB Documentation](https://gun.eco) - GunDB network documentation

---

**Happy Decentralized Publishing! 🌐✨**


# Tutorial: Storing Data & Managing Deals

This guide walks you through uploading a file and creating a storage deal to ensure its persistence.

## 1. Uploading a File

You can upload a file using the Relay API or the Dashboard.

**Using curl:**

```bash
curl -X POST http://localhost:8765/api/v1/ipfs/upload \
  -H "Authorization: Bearer YOUR_ADMIN_PASSWORD" \
  -F "file=@./my-important-data.zip"
```

Response:
```json
{
  "cid": "QmHash...",
  "size": 1048576,
  "name": "my-important-data.zip"
}
```

## 2. Creating a Storage Deal

Now that the file is on IPFS, you want to pay a relay to keep it pinned.

1.  **Open Shogun Deals App**: Navigate to the Deals UI (or use the SDK).
2.  **Connect Wallet**: Connect your MetaMask (Base Sepolia).
3.  **Select Relay**: Choose a relay with good reputation and pricing.
4.  **Create Deal**:
    *   Enter the CID (`QmHash...`).
    *   Enter the file size (in MB).
    *   Select duration (e.g., 30 days).
    *   Click "Create Deal".
5.  **Sign Transaction**: Approve the USDC spend and sign the creation transaction.

## 3. Verifying Storage

Once the deal is active:

*   **Check Status**: The deal status should change to `Active`.
*   **Retrieve File**: Try fetching the file from the relay's gateway:
    `http://relay-host:8765/ipfs/QmHash...`

If the file downloads successfully, the relay is doing its job!

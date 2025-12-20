# Stealth Payments

Shogun integrates a stealth address system to allow for private payments between users and relays.

## Concept

Stealth addresses allow a sender to generate a unique, one-time address for a recipient based on the recipient's "stealth meta-address". Only the recipient can generate the private key for this one-time address and access the funds.

This breaks the link between the sender and the recipient on the public blockchain.

## Components

### StealthKeyRegistry
Users register two keys:
1.  **Viewing Key**: Used by senders to generate the shared secret.
2.  **Spending Key**: Used by the recipient to control the funds.

### PaymentForwarder
A contract that facilitates the transfer.
*   **Send**: Sender calls `send(recipientMetaAddress, amount, ...)`
*   **Withdraw**: Recipient detects the payment off-chain, generates the private key, and calls `withdraw()` to move funds to a fresh wallet or a mixer.

## Use Cases

*   **Private Subscriptions**: Paying for Shogun Relay storage without revealing your main wallet identity.
*   **Anonymous Tips**: Sending funds to content creators.
*   **Data Sales**: Buying sensitive data without public traceability.

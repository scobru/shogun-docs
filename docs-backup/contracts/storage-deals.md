# Storage Deals

Storage Deals allow users to pay relays for guaranteed storage of specific content for a fixed duration.

## Deal Lifecycle

1.  **Proposal**: The client proposes a deal by calling `createDeal` on the `StorageDealRegistry`. This locks the payment tokens.
2.  **Activation**: The target relay (or any relay, if open) accepts the deal by calling `activateDeal`. This confirms they have the data.
3.  **Storage**: The relay pins the content for the duration.
4.  **Completion**: Once the duration expires, the deal is marked complete, and funds are released to the relay.

## Deal Parameters

*   `cid`: The IPFS Content Identifier of the data.
*   `size`: Size of the data in Megabytes.
*   `duration`: How long the data should be stored (in seconds or days).
*   `price`: The total amount of USDC to be paid.
*   `collateral`: (Optional) Amount the relay must stake to accept the deal.

## Verification

Currently, verification is optimistic.
*   **Optimistic**: It is assumed the relay is storing the data.
*   **Disputes**: If a client cannot retrieve their data, they can raise a dispute.
*   **Proofs**: Future versions will implement Proof of Spacetime (PoSt) or similar cryptographic proofs to automate verification.

## Griefing & Slashing

If a relay fails to meet its obligations, clients can report them to the Registry.

### Types of Griefing

1.  **Missed Proof**: The relay failed to submit a required proof of storage.
2.  **Data Loss**: The relay lost the data entirely.
3.  **Deal Violation**: General violation of deal terms.

### Consequences

*   **Slashing**: A portion of the relay's staked USDC is burned or transferred to the reporter.
*   **Reputation Loss**: The relay's on-chain reputation score is decreased, making it harder to attract new deals.


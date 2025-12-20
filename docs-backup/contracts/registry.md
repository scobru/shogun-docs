# Relay Registry Contract

The `ShogunRelayRegistry` is the source of truth for the network topology.

## Functions

### `registerRelay(string endpoint, string gunPubKey, uint256 stakeAmount)`
Registers a new relay.
*   `endpoint`: The HTTP URL of the relay (e.g., `https://relay.example.com`).
*   `gunPubKey`: The GunDB public key (SEA) for the relay.
*   `stakeAmount`: Amount of USDC to lock as stake. Must be >= `MIN_STAKE`.

### `updateRelay(string newEndpoint, string newGunPubKey)`
Updates the stored information for a registered relay.

### `increaseStake(uint256 amount)`
Adds more USDC to the relay's stake.

### `requestUnstake()`
Initiates the unstaking process. Funds are locked for a delay period (e.g., 7 days) before they can be withdrawn.

### `withdrawStake()`
Withdraws staked funds after the delay period has passed.

### `grief(address relay, uint256 amount, string reason)`
Allows reporting a relay for misconduct. If validated (via governance or automated proofs), the relay's stake is slashed.

## Events

*   `RelayRegistered(address indexed relay, string endpoint)`
*   `RelayUpdated(address indexed relay, string endpoint)`
*   `StakeIncreased(address indexed relay, uint256 amount)`
*   `UnstakeRequested(address indexed relay, uint256 unlockTime)`

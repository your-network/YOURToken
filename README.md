# YourToken - ERC20 Contract Implementation

Interface: ERC20

This is a Solidity smart contract implementing an ERC-20 token named "YOUR token" with extended functionalities. The contract incorporates features such as minting, burning, access control, and pausability. The code is designed to be compatible with OpenZeppelin's ERC-20 implementation and extends it with additional capabilities.


## Public Deployment Information

#### Ethereum Public Link <a href="https://etherscan.io/token/0x7a538baf0e33817281eb543717ec9f847a00cf2c" target="_blank">https://etherscan.io/token/0x7a538baf0e33817281eb543717ec9f847a00cf2c</a>
#### Sepolia Testnet Link <a href="https://sepolia.etherscan.io/address/0x2d3a304C3457b0e4cAFc37c0A9673Ca14ddfD4f6" target="_blank">https://sepolia.etherscan.io/address/0x2d3a304C3457b0e4cAFc37c0A9673Ca14ddfD4f6</a>


## Features
### ERC-20 Compliance
The contract adheres to the ERC-20 standard, ensuring compatibility with various decentralized applications (DApps) and platforms.

### Access Control
Access control is implemented through the use of OpenZeppelin's AccessControl contract. Three roles are defined: DEFAULT_ADMIN_ROLE, PAUSER_ROLE, and MINTER_ROLE. These roles are assigned to specific addresses during the contract deployment.

DEFAULT_ADMIN_ROLE: The default admin role responsible for managing the contract.
PAUSER_ROLE: Allows an address to pause and unpause token transfers.
MINTER_ROLE: Permits an address to mint new tokens.

### Pausable Functionality
The contract provides a pausability mechanism, allowing the pausing and unpausing of token transfers. Only an address with the PAUSER_ROLE is authorized to invoke these functions.

pause(): Pauses token transfers.
unpause(): Unpauses token transfers.

### Minting
The contract supports the creation of new tokens through minting. Only an address with the MINTER_ROLE is authorized to mint new tokens.

mint(address to, uint256 amount): Mints a specified amount of tokens and assigns them to the provided address.
Initial Supply
The contract initializes with an initial supply of 1,000,000,000 tokens, minted to the initialOwner address.


## Prerequisite

1. Installing Node.js

2. Installing Hardhat and other dependency using this command `npm install`

3. Create a new file .env and fill in all the valid details on the environment variables.
    
> `Example: Refer .env.example`

> `Verify the env and hardhat config against network`


## Test & Local Deployment (Local Environment)

1. Compile the source code and to generate ABIs `npx hardhat compile`

2. Run Test `npx hardhat test`

2. Deploy on local environment `npx hardhat run deploy/YourToken.js`


## Deployment

During deployment, you need to provide two addresses:

defaultAdmin: The default admin for the contract, assigned the DEFAULT_ADMIN_ROLE.
initialOwner: The initial owner who receives the initial token supply.
Make sure that neither initialOwner nor defaultAdmin is set to the zero address.

### Testnet Sepolia Deployment Commands (Testing Environment)

1. Compile the source code and to generate ABIs `npx hardhat compile`

2. Deploy on testing network - sepolia `npx hardhat run deploy/YourToken.js --network sepolia`

3. Verify Contract Sepolia <Fill in Contract Address & Constructor parameters>
`npx hardhat verify --network sepolia 0x2d3a304C3457b0e4cAFc37c0A9673Ca14ddfD4f6 0x197ea9653cb1ead5de3077bc41659f99c8b8ec50 0x197ea9653cb1ead5de3077bc41659f99c8b8ec50`


### Mainnet Ethereum Deployment Commands  (Production)

1. Compile the source code and to generate ABIs `npx hardhat compile`

2. Deploy on main network - sepolia `npx hardhat run deploy/YourToken.js --network ethereum`

3. Verify Contract Ethereum <Fill in Contract Address & Constructor parameters>
`npx hardhat verify --network ethereum 0x7a538baf0e33817281eb543717ec9f847a00cf2c 0x3Ec5faF545030cdE1f3D887F876061e0B0Ffa1a0 0x3Ec5faF545030cdE1f3D887F876061e0B0Ffa1a0`


## Extra Comments:

1. To create new project `npx hardhat`

2. To cleanup, use this command `npx hardhat clean`

3. To reset hardhat testing node, use this command `npx hardhat node` - restart nodes and reset account nonce (if a Tx get stuck)


## Used Libraries

1. Hardhat

2. Openzepplin


## License

This contract is licensed under the MIT License (SPDX-License-Identifier: MIT), allowing for flexibility in use and modification.

Feel free to customize and deploy this contract for your specific use case, adhering to the terms of the MIT License.
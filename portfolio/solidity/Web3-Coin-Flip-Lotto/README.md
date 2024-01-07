# Web3-Coin-Flip-Lotto

## Live Example
[See Example](https://polygonscan.com/address/0x73d2aba9ab248fdb652c445db3dce86f93cf47a1#code)

## Description

This project is a **Solidity contract** that I developed for a lottery system. It demonstrates my skills in Solidity programming and understanding of blockchain concepts. A unique feature of this contract is its use of a decentralized third-party service to ensure true randomness in the lottery process.

## Problem Statement

The contract was developed to address the following problems:

- **Betting**: Users need a way to place their bets in the lottery.
- **Payment**: The betting process should support both gas and ERC20 payments.
- **Taxation**: A taxation system should be in place for the bets.
- **Randomness**: The lottery system needs a way to ensure true randomness in the selection process.

## Solution

The contract solves the problem by implementing the following steps:

1. **Bet**: Two users place their bets into the contract
2. **Payment**: The contract mints an NFT to the winner, which can be burned to claim rewards.
3. **Tax**: If the tax switch is on, the contract calculates and sends the taxes.
4. **Randomness**: The contract uses a decentralized third-party service to ensure true randomness in the lottery process.

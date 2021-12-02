# Lottery Solidity

A simple smart contract for a lottery.

The constract is instantiated with a seed and the deadline in minutes.

Everyone can buy a ticket until the deadline ends.

Once the deadline is reached, anyone can invoke the function startDrawing once to randomly select the winner. A non-deterministic random number is generated using a Chainlink oracle in order to choose a winner.

The winner can then invoke claimWinningPrice to receive the price.

Further calls to buyTicket, startDrawing and claimWinningPrice are forbidden.

```bash
truffle compile
truffle deploy
```



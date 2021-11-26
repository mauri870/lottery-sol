# Lottery Solidity

A simple smart contract for a lottery.

The constract is instantiated with a seed and the deadline in minutes.

Everyone can buy a ticket until the deadline ends.

Once the deadline is reached, anyone can invoke the function startDrawning once to randomly select the winner.

The winner can then invoke claimWinningPrice to receive the winning price.

> NOTE: currently the RNG is based on a predeterministic solution. I'll look forward to integrate a Chainlink Oracle instead.

```bash
truffle compile
truffle deploy
```



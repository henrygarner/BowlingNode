# Node.js Bowling Scorecard #

This code is an implementation of a linearly recursive bowling scorer following the rules from [Wikipedia](http://en.wikipedia.org/wiki/Ten-pin_bowling#Rules_and_regulations).

The main entrypoint is the `Game.score()` function which accepts rolls from one player as a sequence of arguments. The `Game.score()` function delegates work to the recursive `Game._scorer()`. This iterates over all provided rolls keeping track of any bonuses which are due.

#### To Run Tests ####

```bash
npm test
```

## On Recursion

For more information on recursion, consult the **Factorial** example from [SICP](https://mitpress.mit.edu/sicp/full-text/sicp/book/node15.html).


# Safari

A game for software developers.

## Getting started

1.  Install [nvm](http://nvm.sh)
1.  `nvm use && npm install`
1.  In separate terminals, run:

-   `npm run start` to build and serve the app.
-   `npm run tdd` to watch for file changes, build the app, and run all the tests.

## Design notes

### Higher-order components

`Players` is an example of a HOC that combines the use of Redux's `connect` HOC and another HOC, `List`, to render a list of players.

### Point-free components

### Bounded contexts

A criticism levelled at Redux is that a shared global state object is clumsy, generally "bad" architecturally, and can lead to a spread of complex reducers and "connected" components. Alternatives have been proposed, such as shunting state responsibilities off to a Graphql-based API, with React components relegated to the role of passive presenter.

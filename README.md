# InterviewDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Api Endpoint Examples

This project uses the RAWG API for data. Here are some examples:

- `https://api.rawg.io/api/games?key=API_KEY` - Fetch all games
- `https://api.rawg.io/api/games?key=API_KEY&page=2` - Fetch page 2 of games
- `https://api.rawg.io/api/games?key=API_KEY&query=Portal` - Fetch games with Portal in the name
- `https://api.rawg.io/api/games/${gameId}?key=API_KEY&query=Portal` - Fetch a game by id

[Full RAWG API docs](https://api.rawg.io/docs/)

## Prior to Interview

1. Clone project locally
1. Ensure you have AngularCLI & Node > 10
1. Run `npm i`
1. Ensure project runs without errors using `npm run start`
1. You can either get your own API key from [RAWG](https://rawg.io/apidocs) or one will be provided for you during the interview.

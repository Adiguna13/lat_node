const jokes = require(`give-me-a-joke`);

jokes.getRandomDadJoke(function (joke) {
  console.info(joke);
});

// console.info(jokes);

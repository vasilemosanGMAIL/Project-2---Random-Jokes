const jokeUrl = "https://icanhazdadjoke.com";
const jokeButton = document.getElementById("button");
const jokeElement = document.getElementById("randomJoke");

document.addEventListener("DOMContentLoaded", getJoke);
jokeButton.addEventListener("click", getJoke);

async function getJoke(e) {
  e.preventDefault();
  const joke = await fetch(`${jokeUrl}`, {
    headers: {
      Accept: "application/json",
    },
  });

  const jokeData = await joke.json();
  jokeElement.innerHTML = jokeData.joke;
}

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.style.color = "red";
        jokeEl.style.fontWeight = "bold";
        jokeEl.innerHTML =
          "AIGHT LIL BRO I KNOW THIS ISNT FUNNY JUST SHUT YO MOUTH DAMN";
      }
    }
  };
  xhr.send();
};
jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);

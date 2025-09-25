const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data && data.value && data.value.trim()) {
      jokeEl.innerHTML = data.value;
      jokeEl.style.color = "";
      jokeEl.style.fontWeight = "";
    } else {
      throw new Error("Invalid joke data received");
    }
  } catch (error) {
    jokeEl.style.color = "red";
    jokeEl.style.fontWeight = "bold";
    jokeEl.innerHTML =
      "Sorry, couldn't fetch a joke right now. Please try again later.";
    console.error("Error fetching joke:", error);
  }
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);

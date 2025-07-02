const input = document.querySelector("input");
const btn = document.querySelector("button");
const cityName = document.querySelector(".city p:last-child");
const sun = document.querySelector(".weather-state img");
const temp = document.querySelector(".city p:first-child");
const humid = document.querySelector(".img-and-percent p");
const windSpead = document.querySelector(".img-and-wind-speed p");

function details() {
  cityName.textContent = input.value;
  if (cityName.textContent.toLowerCase() === "new york") {
    sun.src = "./images/clear.png";
    temp.textContent = "7 C";
    humid.textContent = "48% Humidity";
    windSpead.textContent = "10.29 km/h Wind Speed";
  } else if (cityName.textContent.toLowerCase() === "berlin") {
    sun.src = "./images/clouds.png";
    temp.textContent = "1 C";
    humid.textContent = "90% Humidity";
    windSpead.textContent = "2.68 km/h Wind Speed";
  } else if (cityName.textContent.toLowerCase() === "cairo") {
    sun.src = "./images/clear.png";
    temp.textContent = "30 C";
    humid.textContent = "48% Humidity";
    windSpead.textContent = "5.66 km/h Wind Speed";
  } else if (cityName.textContent.toLowerCase() === "germany") {
    sun.src = "./images/drizzle.png";
    temp.textContent = "0 C";
    humid.textContent = "53% Humidity";
    windSpead.textContent = "1.85 km/h Wind Speed";
  } else {
    sun.src = "./images/drizzle.png";
    temp.textContent = "-23 C";
    humid.textContent = "50% Humidity";
    windSpead.textContent = "8 km/h Wind Speed";
  }
}

// Specify the city name to the entered one
btn.addEventListener("click", () => {
  details();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    details();
  }
});

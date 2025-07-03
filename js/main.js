const input = document.querySelector("input");
const btn = document.querySelector("button");
const cityName = document.querySelector(".city p:last-child");
const sun = document.querySelector(".weather-state img");
const temp = document.querySelector(".city p:first-child");
const humid = document.querySelector(".img-and-percent p");
const windSpead = document.querySelector(".img-and-wind-speed p");
const apiKey = `e2efed1ca0da66b9d590597718dad2ab`;
async function details() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=${apiKey}&units=metric`
  );
  try {
    if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const jsonData = await response.json();
  cityName.textContent = input.value;
  temp.textContent = `${parseInt(jsonData.main.temp)} °C`;
  humid.textContent = `${jsonData.main.humidity}% Humidity`;
  windSpead.textContent = `${jsonData.wind.speed} km/h Wind Speed`;
  if (jsonData.clouds.all === 0) {
    sun.src = "./images/clear.png";
  } else if (jsonData.clouds.all > 40 && jsonData.weather[0].main === "Rain") {
    sun.src = "./images/drizzle.png";
  } else sun.src = "./images/clouds.png";
  } catch (reason) {
    console.log(reason);
    
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

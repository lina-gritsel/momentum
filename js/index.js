const time = document.querySelector(".time");
const theDate = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");
const body = document.querySelector("body");
let randomNum = getRandomIntInclusive(1, 20);
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");

const url =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images";

function showDate() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);
  theDate.textContent = currentDate;
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour <= 23) return "evening";
  if (hour >= 0 && hour < 6) return "night";
}

function showGreetingText() {
  const greetingText = `Good ${getTimeOfDay()},`;
  greeting.textContent = greetingText;
}
showGreetingText();

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreetingText();
}
showTime();

function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg(randomNum) {
  const img = new Image();
  img.src = getBgUrl(randomNum);
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}

const getBgUrl = (randomNum) => {
  const index = randomNum.toString().padStart(2, "0");
  const timeOfDay = getTimeOfDay();
  const imageUrl = `${url}/${timeOfDay}/${index}.jpg`;
  return (body.style.backgroundImage = imageUrl);
};
setBg(randomNum);

const slideNext = document.querySelector(".slide-next");
function getSlideNext() {
  randomNum++;
  if (randomNum > 20) {
    randomNum = 1;
  }
  setBg(randomNum);
}
slideNext.addEventListener("click", getSlideNext);

const slidePrev = document.querySelector(".slide-prev");
function getSlidePrev() {
  randomNum--;
  if (randomNum < 1) {
    randomNum = 20;
  }
  setBg(randomNum);
}
slidePrev.addEventListener("click", getSlidePrev);

async function getWeather() {
  const defaultCity = city.value || "Minsk";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&lang=en&appid=a3af42ebefd88cd481454f659190bc54&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${data.wind.speed}m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather();
city.addEventListener("change", getWeather);


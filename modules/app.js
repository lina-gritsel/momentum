
import { getTimeOfDay } from "../utils/index.js";

const time = document.querySelector(".time");
const theDate = document.querySelector(".date");
const greeting = document.querySelector(".greeting");

const showDate = () => {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", options);
  theDate.textContent = currentDate;
}

const showGreetingText = () => {
  const greetingText = `Good ${getTimeOfDay()},`;
  greeting.textContent = greetingText;
}
showGreetingText();

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
}
showTime();






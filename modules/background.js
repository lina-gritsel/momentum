import { getRandomNum, getTimeOfDay } from "../utils/index.js";

const body = document.querySelector("body");
let randomNum = getRandomNum(20);
const url =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images";

const setBg=(randomNum) => {
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
const getSlideNext = () => {
  randomNum++;
  if (randomNum > 20) {
    randomNum = 1;
  }
  setBg(randomNum);
}
slideNext.addEventListener("click", getSlideNext);

const slidePrev = document.querySelector(".slide-prev");
const getSlidePrev=() => {
  randomNum--;
  if (randomNum < 1) {
    randomNum = 20;
  }
  setBg(randomNum);
}
slidePrev.addEventListener("click", getSlidePrev);

import { playlist } from "./constants.js";

const play = document.querySelector(".play");
const playNextAudio = document.querySelector(".play-next");
const playPrevAudio = document.querySelector(".play-prev");

let isPlay = false;
let currentTime = 0;
let playNum = 0;
const totalTrack = playlist.length - 1;

const audio = new Audio();
const playAudio = () => {
  audio.src = playlist[playNum].src;
  audio.currentTime = currentTime;
  audio.play();
  isPlay = true;
};
const stopAudio = () => {
  audio.pause();
  isPlay = false;
};

function toggleBtn() {
  play.classList.toggle("pause");
  isPlay ? stopAudio() : playAudio();
}
play.addEventListener("click", toggleBtn);

function playNext() {
  play.classList.add("pause");
  playNum++;
  if (playNum > totalTrack) playNum = 0;
  playAudio();
}
playNextAudio.addEventListener("click", playNext);

function playPrev() {
  play.classList.add("pause");
  playNum--;
  if (playNum < 0) {
    playNum = totalTrack;
  }
  playAudio();
}
playPrevAudio.addEventListener("click", playPrev);

document.querySelector(".play-list").innerHTML = playlist.map(
  ({ title }) => `<li>${title}</li>`
);

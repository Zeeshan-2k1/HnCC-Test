//JavaScript - OOPs Interpreted and High Level Language
document.getElementsByTagName('button')[0].onclick = function () {
  alert('Hello');
};

const playbtn = document.getElementById('play');
playbtn.onclick = function () {
  let x = prompt('Enter name');
  let y = prompt('Enter ur crush name');

  let love = Math.floor(Math.random() * 101);
  const headLove = document.getElementById('love');
  headLove.style.color = 'black';
  headLove.textContent = `Love between ${x} and ${y} is ${love}.`;
};

const wlcm = document.getElementById('wlcm');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

document.onload = setInterval(function () {
  const date = new Date();
  hr.textContent = `${date.getHours()} : `;
  min.textContent = `${date.getMinutes()} :`;
  sec.textContent = date.getSeconds();

  if (date.getHours() >= 5 && date.getHours() < 12) {
    wlcm.textContent = 'Good Morning';
  } else if (date.getHours() >= 12 && date.getHours() < 5) {
    wlcm.textContent = 'Good Afternoon';
  } else {
    wlcm.textContent = 'Good Evening';
  }
}, 1000);

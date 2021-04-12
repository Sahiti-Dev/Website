
    // Counts down to date below regardless of user time zone.
// If you want time zones taken into account, get rid of Date.UTC and TimezoneOffset

// (Year, Month, Day, Hour (offset by + 7 for IST), Min, Sec)
const end = new Date(Date.UTC(2021, 2, 28, 09, 15, 0));
// Change only this for new end dates (zero-indexed and military time). Current: UTC June 21 2021, 7am (12am AZ time)

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function timeLeft() {
  let now = new Date();
  let utc = new Date(now.getTime() + now.getTimezoneOffset()); // Pseudo UTC with timezone offset
  let distance = end - utc;
  let countdown = document.getElementById('countdown');

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  // Once time runs out, set all to 0 and stay
  if (distance <= 0) {
    clearInterval(timer);
    days = hours = minutes = seconds = 0;
  }

  // DOM manipulation with template literals
  countdown.innerHTML = ` <p> <span id='days'> ${days} </span> <span id='days-text'> days </span> </p> `;
  countdown.innerHTML += ` <p> <span id='hours'> ${hours} </span> <span id='hours-text'> hours </span> </p> `;
  countdown.innerHTML += ` <p> <span id='minutes'> ${minutes} </span> <span id='minutes-text'> minutes </span> </p> `;
  countdown.innerHTML += ` <p> <span id='seconds'> ${seconds} </span> <span id='seconds-text'> seconds </span> </p> `;
}

// Update every second (1000ms)
let timer = setInterval(timeLeft, 1000);
// Let DOM load before function runs 
document.addEventListener("DOMContentLoaded", timeLeft);

// Initialise Values for time units i.e. Day, hour, minute and second
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const timeUnit = [1, day, hour, minute, second];
// Initialise the event launch date and time
const countDate = new Date("May 11, 2021 15:13:00").getTime();

// CountDown Timer
const countDown = () => {
  const now = new Date().getTime();
  const gap = countDate - now;

  let remainTime = [];
  for (let index = 0; index < 4; index++) {
    var remain = Math.floor(
      (gap % timeUnit[index]) / timeUnit[index + 1]
    ).toString();
    remainTime[index] = remain.length === 1 ? "0" + remain : remain;
  }

  // This condition ensures zero value to be shown in case of event is already launched
  remainTime.some((element) => {
    if (element < 0) {
      clearInterval(launchTimer);
    }
  });

  document.querySelector(".day").innerText = remainTime[0];
  document.querySelector(".hour").innerText = remainTime[1];
  document.querySelector(".minute").innerText = remainTime[2];
  document.querySelector(".second").innerText = remainTime[3];

  // This condition ensures at the time of event launch countdown timer to be stop and latest change
  if (gap < 1000) {
    clearInterval(launchTimer);
    document.querySelector(".coming-soon").classList.add("hide");
  }
};

const launchTimer = setInterval(countDown, 1000);

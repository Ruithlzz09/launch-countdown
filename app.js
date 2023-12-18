// Initialise the event launch date and time

const delay = ms => new Promise(res => setTimeout(res, ms));

// CountDown Timer
const countDown = async() => {
  const now = new Date()
  const target = new Date("January 01, 2024 00:00:00")
  // Calculate the difference in milliseconds
  const difference = target - now;
  await delay(3000)
  loadingScreen.style.display = 'none';
  document.querySelector('.main-section').style.display='flex'
  if (difference <= 0) {
    // Target date has already passed
    // This condition ensures zero value to be shown in case of the event is already launched
    // This condition ensures at the time of event launch countdown timer to be stop and latest change
    console.log("Event has already passed.")
    clearInterval(launchTimer);
    document.querySelector(".coming-soon").classList.add("hide");
    document.querySelector(".img-section").classList.add("hide");
    document.querySelector(".launched-site").classList.remove("hide");
    return
  }else{
    document.querySelector(".launched-site").classList.add("hide");
  }
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const remainTime = [days,hours,minutes,seconds]

  document.querySelector(".day").innerText = remainTime[0];
  document.querySelector(".hour").innerText = remainTime[1];
  document.querySelector(".minute").innerText = remainTime[2];
  document.querySelector(".second").innerText = remainTime[3];
};

const loadingScreen = document.querySelector('.loading-screen');
const launchTimer = setInterval(countDown, 1000);

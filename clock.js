let clock = null;

function formatNumber(number) {
  return `${number < 10 ? "0" + number : number}`;
}

function runClock() {
  clock = new Date();
  document.getElementById("clock").innerHTML = `${formatNumber(
    clock.getHours() > 12 ? clock.getHours() % 12 : clock.getHours()
  )}:${formatNumber(clock.getMinutes())}:${formatNumber(clock.getSeconds())} ${
    clock.getHours() > 12 ? "PM" : "AM"
  }`;
}

function startClock() {
  runClock();
  setInterval(runClock, 1000);
}

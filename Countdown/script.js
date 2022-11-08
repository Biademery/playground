function updateTimer() {
  let future = Date.parse("jan 03, 2023 00:00:00");
  let now = new Date();
  let countdown = future - now;

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const mins = Math.floor(countdown / (1000 * 60));
  const secs = Math.floor(countdown / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>:</span></div>" +
    "<div>" +
    h +
    "<span>:</span></div>" +
    "<div>" +
    m +
    "<span>:</span></div>" +
    "<div>" +
    s;
}

setInterval("updateTimer()", 1000);

function updateTimer() {
  const timer = document.querySelector('#timer');
  const future = Date.parse('mar 07, 2023 00:00:00');
  const now = new Date();
  const countdown = future - now;

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const mins = Math.floor(countdown / (1000 * 60));
  const secs = Math.floor(countdown / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  const timerHTML = `
  <div>${String(d).length === 1 ? `0${d}` : d}</div> :
  <div>${String(h).length === 1 ? `0${h}` : h}</div> :
  <div>${String(m).length === 1 ? `0${m}` : m}</div> :
  <div>${String(s).length === 1 ? `0${s}` : s}</div>
`;

  timer.innerHTML = timerHTML;
}

setInterval('updateTimer()', 1000);

function updateTimer() {
  const future = Date.parse('jan 03, 2024 00:00:00');
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

  document.getElementById('timer').innerHTML = `
  <span>${String(d).length === 1 ? `0${d}` : d}</span> :
  <span>${String(m).length === 1 ? `0${m}` : m}</span> :
  <span>${String(h).length === 1 ? `0${h}` : h}</span> :
  <span>${String(s).length === 1 ? `0${s}` : s}</span>
`;
}

setInterval(updateTimer(), 1000);

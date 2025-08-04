function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById("ampm").textContent = ampm;

  const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
  document.getElementById("date").textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
});

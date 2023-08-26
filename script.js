function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12; // Turns the hours into 12 hour clock
  hours = hours ? hours : 12; // This will turn 0 to 12, so if the above returns 0 then it will assign 12. eg. 12 % 12 = 0 at midnight or at midday this becomes 12.
  hours = hours < 10 ? "0" + hours : hours; // This makes sure there is always going to be a preciding 0 for any number less than 10. eg, 9am or 9pm becomes 09am or 09pm
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update our html
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
}

// Run the time every second
setInterval(updateTime, 1000);

// Function runs when refresh the page
updateTime();
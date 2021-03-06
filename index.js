//  Show current Day and Time
function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[new Date().getDay()];
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
    }
  let ampm = (hours >= 12) ? "PM" : "AM";

  let today = `${day}, ${hours}:${minutes} ${ampm}`;
  return today;
}

let currentTime = document.getElementById("current-time");
currentTime.innerHTML = formatDate();

// Search city- show city

function enterCity(event) {
  event.preventDefault();
  let citySearched = document.getElementById("city-searched").value;
  let displayCity = document.getElementById("display-city");
  displayCity.innerHTML = citySearched;
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", enterCity)

// //Bonus challenge - change temp based on slection of units

let fahrenheit = document.getElementById("fahrenheit-link");
fahrenheit.addEventListener("click", changeToFahrenheit)

let celcius = document.getElementById("celcius-link");
celcius.addEventListener("click", changeToCelcius)


function changeToCelcius(event) {
  if (!event.target.classList.contains("active")) {
    event.preventDefault();
    let fTemp = document.querySelectorAll(".temp");
    function convertTempToC(element) {
      let temp = parseInt(element.innerText)
      let fToCel = (temp - 32) * 5 / 9;
      element.innerText = Math.round(fToCel) + `°`;
    }
    fTemp.forEach(convertTempToC)
    event.target.classList.add("active");
    fahrenheit.classList.remove("active");
  } 
}
  
function changeToFahrenheit(event) {
  if (!event.target.classList.contains("active")) {
    event.preventDefault();
    let cTemp = document.querySelectorAll(".temp");
    function convertTempToF(element) {
      let temp = parseInt(element.innerText)
      let CToFar = (temp * 9 / 5) + 32;
      element.innerText = Math.round(CToFar) + `°`;
    }
    cTemp.forEach(convertTempToF)
    event.target.classList.add("active");
    celcius.classList.remove("active");
  }
}


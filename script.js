let givenCity = document.querySelector(".search input");
let showCity = document.getElementById("cityName");
let searchBtn = document.querySelector(".search button");
let tempVal = document.querySelector("#tempVal");
let humidity = document.querySelector(".colInnerDiv>h2");
let windSpeed = document.querySelector(".col2 .colInnerDiv>h2");

let city = "delhi";

const weatherIcon = document.querySelector(".WeatherIcon");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "23ae266497msh68a6b66dd11802cp180374jsn5afb3c05acd0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

searchBtn.addEventListener("click", () => {
  if (givenCity.value.length === 0) {
    alert("Please enter a city name..");
  } else {
    city = givenCity.value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    check(url);
  }
});

let upDateDisplay = (result) => {
  if (result.temp === undefined) {
    document.querySelector(".card::after").style.zIndex = 10;
    return;
  }
  tempVal.innerText = `${result.temp}°C`;
  humidity.innerText = `${result.humidity}%`;
  showCity.innerText = `${city.toUpperCase()}`;
  // console.log(city.toUpperCase());
  windSpeed.innerText = `${Math.floor(
    result.wind_speed * 3.5999999999971
  )}km/h`;
};

async function check(url) {
  try {
    console.log(city);
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    upDateDisplay(result);
    givenCity.value = "";
  } catch (error) {
    alert("Enter a valid city");
    resetFun();
  }
}

let resetFun = () => {
  tempVal.innerText = `_ _°C`;
  humidity.innerText = `_ _%`;
  showCity.innerText = `___ ___`;
  // console.log(city.toUpperCase());
  windSpeed.innerText = `_ _km/h`;
};

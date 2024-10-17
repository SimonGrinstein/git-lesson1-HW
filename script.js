//console.log(document.body);

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "355548bf7a071b0b0eb5dd6303929c7d";

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

getWeatherButton.onclick = () => {
    const cityName = locationInput.value.trim();
    //console.log("cityName: " + cityName);
    fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=de&units=metric`)
        .then(res => res.json())
        .then(weather => {
            weatherContainer.innerHTML = `
                <h2>${weather.name}</h2>
                <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="picture" />
                <p>Temperature: ${weather.main.temp}°C</p>
                <p>Description: ${weather.weather[0].description}</p>
                <p>WindSpeed: ${weather.wind.speed}m/s</p>
            `;
        })
}




//355548bf7a071b0b0eb5dd6303929c7d
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
/*
async function fetchPosts(cityName) {
    const response = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=de&units=metric`);
    // console.log(response);
    const whetherArr = await response.json();
    //console.log("whetherArr: " + whetherArr.main.temp);
    return whetherArr;
}



const result = async () => {
    const pList = await fetchPosts(city);
    //displayPosts(pList);
};
  
result();
*/
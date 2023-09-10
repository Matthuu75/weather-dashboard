// Use fetch for getting the weather website (API)
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const searchHistory = document.querySelector("#search-history");
const currentWeather = document.querySelector("#current-weather");
const forecastWeather = document.querySelector("#days-forecast");

const weatherInfo = (cityName, lat, lon) => {
    const cityCoordinates = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b647a61a800d5facb7c740cf2bda53b0`
    fetch(cityCoordinates)
        .then(response => response.json()).then(cityData => {
        console.log(cityData)
    })
}

function fetchWeather() {
    const cityName = searchBox.value;
    if (!cityName) return;
    const cityCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=b647a61a800d5facb7c740cf2bda53b0`

    fetch(cityCoordinates)
        .then(response => response.json())
        .then(cityData => {
            const { name, lat, lon} = cityData[0];
            weatherInfo(name, lat, lon);
        });
}

searchButton.addEventListener("click", fetchWeather);

// $(searchButton).on('click', function () {
//     fetchCity(searchBox.val());
// });
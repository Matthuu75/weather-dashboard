const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const searchHistory = document.querySelector("#search-history");
const currentWeather = document.querySelector("#current-weather");
const forecastWeather = document.querySelector("#days-forecast");

const apiKey = "b647a61a800d5facb7c740cf2bda53b0";

const weatherInfo = (cityName, lat, lon) => {
    const cityCoordinates = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(cityCoordinates)
        .then(response => {
            return response.json();
        })
        .then(cityData => {
            console.log(cityData);
        });
}

function fetchWeather(cityName) {
    const cityCoordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch(cityCoordinatesURL)
        .then(response => {
            return response.json();
        })
        .then(cityData => {
                const { name, lat, lon } = cityData[0];
                const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

                fetch(weatherDataURL)
                    .then(response => {
                        return response.json();
                    })
                    .then(weatherData => {
                        const temperatureCelsius = weatherData.main.temp;
                        const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
                        const wind = weatherData.wind.speed;
                        const humidity = weatherData.main.humidity;
                        const weatherType = weatherData.weather[0].description;

                        updateWeatherInfo(name, temperatureFahrenheit, wind, humidity, weatherType);
                    });
                })
}

function updateWeatherInfo(cityName, temperature, wind, humidity, weatherType) {
    document.querySelector("#city-name").textContent = cityName;
    document.querySelector("#temperature").textContent = `Temperature: ${temperature} °F`;
    document.querySelector("#humidity").textContent = `Humidity: ${humidity}%`;
    document.querySelector("#weather-type").textContent = `Weather Type: ${weatherType}`;
}

searchButton.addEventListener("click", function () {
    const cityName = searchBox.value;
    fetchWeather(cityName);
});

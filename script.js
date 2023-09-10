// Use fetch for getting the weather website (API)
const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const searchHistory = document.querySelector(".search-history");
const currentWeather = document.querySelector(".current-weather");
const forecastWeather = document.querySelector(".days-forecast");

function fetchCity() {
    const cityName = searchBox.value.trim();
    if (!cityName) return;
    console.log(cityName);
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=b647a61a800d5facb7c740cf2bda53b0')
    console.log(fetchCity);

    fetch(cityCoordinates)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

$(searchButton).on('click', function () {
    fetchCity(searchBox.val());
});
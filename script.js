// Use fetch for getting the weather website (API)

const searchBoxEl = $('#search-box');
const searchButtonEl = $('#search-button');
const searchLogEl = $('#search-log');
const weatherEl = $('#weather');

function fetchWeather (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b647a61a800d5facb7c740cf2bda53b0')
    .then(response => {
        return response.json();
    })
    .then(response => {
        lon = (response[0].lon);
        lat = (response[0].lat);

        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b647a61a800d5facb7c740cf2bda53b0')
    })
}
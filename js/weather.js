const weatherWidget = document.querySelector("#weather");
const WEATHER_KEY = "b02a9d54fb7f1ed3c2154af657459240";

function onGeoSuccess(geoLocation) {
    const lat = geoLocation.coords.latitude;
    const lng = geoLocation.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`;

    fetch(url).then((response) => response.json()).then((json) => {
        const weather = weatherWidget.querySelector("div:first-child");
        const city = weatherWidget.querySelector("div:last-child");
        weather.innerHTML = `${json.weather[0].main} ${json.main.temp}&deg;C`;
        city.innerText = `${json.name}`;
    });
}
function onGeoError() {
    alert("We don't know your location. You can't use weather widget!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
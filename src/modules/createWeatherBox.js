import '../style.css';

const container = document.getElementById('container');

function createWeatherBoxFunc() {
    // create display box for weather
    const weatherInfoBox = document.createElement('div');
    const upperBox = document.createElement('div');
    const lowerBox = document.createElement('div');
    const tempBox = document.createElement('div');
    const tempDiv = document.createElement('div');
    const locationDiv = document.createElement('div');
    const weatherDescriptionBox = document.createElement('div');
    const icon = document.createElement('img');
    const mainWeather = document.createElement('div');
    const mainWeatherDescriptionBox = document.createElement('div');
    const mainWeatherDescription = document.createElement('div');
    const feelsLikeText = document.createElement('div');
    const feelsLikeValue = document.createElement('div');
    const feelsLikeDiv = document.createElement('div');
    const humidityText = document.createElement('div');
    const humidityValue = document.createElement('div');
    const humidityDiv = document.createElement('div');
    const pressureDiv = document.createElement('div');
    const pressureText = document.createElement('div');
    const pressureValue = document.createElement('div');
    const minTempDiv = document.createElement('div');
    const minTempText = document.createElement('div');
    const minTempValue = document.createElement('div');
    const maxTempDiv = document.createElement('div');
    const maxTempText = document.createElement('div');
    const maxTempValue = document.createElement('div');
    const conversionButton = document.createElement('button');

    //name
    weatherInfoBox.setAttribute('id', 'weather-info-box');
    upperBox.setAttribute('id', 'upper-box');
    lowerBox.setAttribute('id', 'lower-box');
    tempBox.setAttribute('id', 'temp-box');
    tempDiv.setAttribute('id', 'temp-div');
    tempDiv.setAttribute('class', 'temp');
    locationDiv.setAttribute('id', 'location-div');
    weatherDescriptionBox.setAttribute('id', 'weather-description-box');
    mainWeather.setAttribute('id', 'main-weather');
    mainWeatherDescriptionBox.setAttribute('id', 'main-weather-description-box');
    mainWeatherDescription.setAttribute('id', 'main-weather-description');
    icon.setAttribute('id', 'icon');
    feelsLikeDiv.setAttribute('id', 'feels-like-div');
    feelsLikeText.setAttribute('id', 'feels-like-text');
    feelsLikeValue.setAttribute('id', 'feels-like-value');
    feelsLikeText.setAttribute('class', 'text');
    feelsLikeValue.setAttribute('class', 'temp');
    humidityDiv.setAttribute('id', 'humidity-div');
    humidityText.setAttribute('id', 'humidity-text');
    humidityText.setAttribute('class', 'text');
    humidityValue.setAttribute('id', 'humidity-value');
    pressureDiv.setAttribute('id', 'pressure-div');
    pressureText.setAttribute('id', 'pressure-text');
    pressureText.setAttribute('class', 'text');
    pressureValue.setAttribute('id', 'pressure-value');
    minTempDiv.setAttribute('id', 'min-temp-div');
    minTempText.setAttribute('id', 'min-temp-text');
    minTempText.setAttribute('class', 'text');
    minTempValue.setAttribute('id', 'min-temp-value');
    maxTempDiv.setAttribute('id', 'max-temp-div');
    maxTempText.setAttribute('id', 'max-temp-text');
    maxTempText.setAttribute('class', 'text');
    maxTempValue.setAttribute('id', 'max-temp-value');
    minTempValue.setAttribute('class', 'temp');
    maxTempValue.setAttribute('class', 'temp');
    conversionButton.setAttribute('id', 'conversion-button');

    //append to container
    container.appendChild(weatherInfoBox);
    weatherInfoBox.appendChild(upperBox);
    weatherInfoBox.appendChild(lowerBox);
    upperBox.appendChild(tempBox);
    tempBox.appendChild(conversionButton);
    tempBox.appendChild(tempDiv);
    tempBox.appendChild(locationDiv);
    upperBox.appendChild(weatherDescriptionBox);
    weatherDescriptionBox.appendChild(mainWeather);
    weatherDescriptionBox.appendChild(mainWeatherDescriptionBox);
    mainWeatherDescriptionBox.appendChild(mainWeatherDescription);
    mainWeatherDescriptionBox.appendChild(icon);
    lowerBox.appendChild(feelsLikeDiv);
    feelsLikeDiv.appendChild(feelsLikeText);
    feelsLikeDiv.appendChild(feelsLikeValue);
    lowerBox.appendChild(humidityDiv);
    humidityDiv.appendChild(humidityText);
    humidityDiv.appendChild(humidityValue);
    lowerBox.appendChild(pressureDiv);
    pressureDiv.appendChild(pressureText);
    pressureDiv.appendChild(pressureValue);
    lowerBox.appendChild(minTempDiv);
    minTempDiv.appendChild(minTempText);
    minTempDiv.appendChild(minTempValue);
    lowerBox.appendChild(maxTempDiv);
    maxTempDiv.appendChild(maxTempText);
    maxTempDiv.appendChild(maxTempValue);

    // naming
    feelsLikeText.textContent = 'Feels like';
    humidityText.textContent = 'Humidity';
    pressureText.textContent = 'Pressure';
    minTempText.textContent = 'Min Temp';
    maxTempText.textContent = 'Max Temp';

    // style
    weatherInfoBox.style.display = 'none';
    icon.src = '#';
};

export { createWeatherBoxFunc };
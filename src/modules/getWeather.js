import '../style.css';
import { changeBgImageAccToWeather } from './changeBgImageAccToWeather';

async function getWeather() {
    // get elements
    const weatherInfoBox = document.getElementById('weather-info-box');
    const tempDiv = document.getElementById('temp-div');
    const locationDiv = document.getElementById('location-div');
    const mainWeather = document.getElementById('main-weather');
    const mainWeatherDescription = document.getElementById('main-weather-description');
    const feelsLikeValue = document.getElementById('feels-like-value');
    const humidityValue = document.getElementById('humidity-value');
    const pressureValue = document.getElementById('pressure-value');
    const minTempValue = document.getElementById('min-temp-value');
    const maxTempValue = document.getElementById('max-temp-value');
    const inputField = document.getElementById('input-field');
    const errorDiv = document.getElementById('error-div');
    const sadFaceDiv = document.getElementById('sad-face-div');
    const icon = document.getElementById('icon');
    const conversionButton = document.getElementById('conversion-button');
    
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&APPID=2d3609f8b5da6e2c0a646fefc69e2f62`,
        {
            mode:  'cors'
        });
        const weatherData = await response.json(); 

        // show box
        weatherInfoBox.style.display = 'grid';
        sadFaceDiv.style.display = 'none';
        errorDiv.style.display = 'hidden';
        errorDiv.textContent = "";

        // naming
        console.log(weatherData.main.temp);
        tempDiv.textContent = `${(weatherData.main.temp - 273.15).toFixed(1)}°`;
        locationDiv.textContent = `${weatherData.name} | ${weatherData.sys.country}`;
        mainWeather.textContent = `${weatherData.weather[0].main}`;
        mainWeatherDescription.textContent = `${weatherData.weather[0].description}`;
        icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        feelsLikeValue.textContent = `${(weatherData.main.feels_like - 273.15).toFixed(1)}°`;
        humidityValue.textContent = `${weatherData.main.humidity}%`;
        pressureValue.textContent = `${weatherData.main.pressure}mb`;
        minTempValue.textContent = `${(weatherData.main.temp_min - 273.15).toFixed(1)}°`;
        maxTempValue.textContent = `${(weatherData.main.temp_max - 273.15).toFixed(1)}°`;
        conversionButton.textContent = 'C°';
        changeBgImageAccToWeather();

    } catch(error) {
        console.log(error);
        errorDiv.style.display = 'flex';
        errorDiv.textContent = '× City not found. Please try again.';
        weatherInfoBox.style.display = 'none';
        sadFaceDiv.textContent = ':(';
        sadFaceDiv.style.display = 'flex';
    } 
};

export { getWeather }; 
const container = document.getElementById('container');

(function inputFunc() {
    // search feild div
    const searchFeildDiv = document.createElement('div');

    // create elements
    const inputField = document.createElement('input');
    const searchButton = document.createElement('button');
    const errorDiv = document.createElement('div');
    const sadFaceDiv = document.createElement('div');

    // attribute
    searchFeildDiv.setAttribute('id', 'search-field-div');
    inputField.setAttribute('id', 'input-field');
    inputField.setAttribute('name', 'input-field');
    inputField.setAttribute('spellcheck', 'false');
    searchButton.setAttribute('id', 'search-button');
    sadFaceDiv.setAttribute('id', 'sad-face-div');

    // type
    inputField.setAttribute('type', 'search');
    errorDiv.setAttribute('id', 'error-div');

    // naming
    searchButton.textContent = 'SEARCH';
    inputField.setAttribute('placeholder', 'Enter City Here');
    errorDiv.style.display = 'none';
    sadFaceDiv.style.display = 'none';

    //append
    container.appendChild(searchFeildDiv);
    container.appendChild(sadFaceDiv);
    searchFeildDiv.appendChild(inputField);
    searchFeildDiv.appendChild(searchButton);
    searchFeildDiv.appendChild(errorDiv);

})();

// function to set



(function createWeatherBoxFunc() {
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
    mainWeatherDescription.setAttribute('id', 'main-weather-description');
    icon.setAttribute('id', 'icon');
    feelsLikeDiv.setAttribute('id', 'feels-like-div');
    // feelsLikeDiv
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
    weatherDescriptionBox.appendChild(mainWeatherDescription);
    weatherDescriptionBox.appendChild(icon);
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
    // icon.src = '#';
    

    // style
    weatherInfoBox.style.display = 'none';
    icon.src = '#';
})();


const searchButton = document.getElementById('search-button');

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
        tempDiv.textContent = `${(weatherData.main.temp - 273.15).toFixed(1)}°`;
        locationDiv.textContent = `${weatherData.name} | ${weatherData.sys.country}`;
        mainWeather.textContent = `${weatherData.weather[0].main}`;
        mainWeatherDescription.textContent = `${weatherData.weather[0].description}`;
        icon.src = `http://openweathermap.org/img/wn/'+${weatherData.weather[0].icon}+'.png`;
        feelsLikeValue.textContent = `${(weatherData.main.feels_like - 273.15).toFixed(1)}°`;
        humidityValue.textContent = `${weatherData.main.humidity}%`;
        pressureValue.textContent = `${weatherData.main.pressure}mb`;
        minTempValue.textContent = `${(weatherData.main.temp_min - 273.15).toFixed(1)}°`;
        maxTempValue.textContent = `${(weatherData.main.temp_max - 273.15).toFixed(1)}°`;
        
        conversionButton.textContent = 'C°';
        changeBgImageAccToWeather();
        // console.log(weatherData.main.temp);
        // console.log(weatherData.main);
        console.log(weatherData);
    } catch(error) {
        console.log(error);
        errorDiv.style.display = 'flex';
        errorDiv.textContent = '× City not found. Please try again.';
        weatherInfoBox.style.display = 'none';
        sadFaceDiv.textContent = '‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚';
        sadFaceDiv.style.display = 'flex';
        // container.textContent = ':(';
    } 
};

searchButton.addEventListener('click', getWeather);

// search through enter
const inputField = document.getElementById('input-field');
inputField.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter') {
        getWeather();
    }

    return;
})

// searchButton.addEventListener('click')

// function to change background image according to weather

function changeBgImageAccToWeather() {
    // get id
    const mainWeather = document.getElementById('main-weather');
    const weatherText = mainWeather.textContent; 
    if (weatherText.toLowerCase().match('clouds')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/cloudy.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('haze')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/haze.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('clear')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/clear.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('rain')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/rain.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('snow')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/snow.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('drizzle')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/drizzle.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('dust')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/dust.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('thunderstorm')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/thunderstorm.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('mist')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/mist.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('smoke')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/dust.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('fog')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/mist.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('sand')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/dust.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('ash')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/ash.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('squall')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/squall.jpg')";
        return;
    }
    if (weatherText.toLowerCase().match('tornado')) {
        document.body.style.background = '';
        document.body.style.background = "url('./images/tornado.jpg')";
        return;
    }

    document.body.style.background = '';
    document.body.style.background = "url('./images/home-page-image.jpg')";
}




const conversionButton = document.getElementById('conversion-button');


conversionButton.addEventListener('click', ()=> {
    // get nodes
    const elementsOfTemp = document.querySelectorAll('.temp');

    if (conversionButton.textContent === 'C°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            console.log(text);
            const filteredValue = text.match(/\d+\.\d+/).toString().replace(/,/g, '');
            const fahrenheitValue = ((filteredValue * (9/5)) + 32).toFixed(1);
            element.textContent = `${fahrenheitValue}°`;
        })

        conversionButton.textContent = 'F°';
        return;
    }
    if (conversionButton.textContent === 'F°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            console.log(text);
            const filteredValue = text.match(/\d+\.\d+/).toString().replace(/,/g, '');
            const celciusValue = ((filteredValue - 32) * (5/9)).toFixed(1);
            element.textContent = `${celciusValue}°`;
        })

        conversionButton.textContent = 'C°';
        return;
    }
});
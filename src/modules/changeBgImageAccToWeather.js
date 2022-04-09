import '../style.css';
import Cloudy from '../images/cloudy.jpg';
import Haze from '../images/haze.jpg';
import Clear from '../images/clear.jpg';
import Rain from '../images/rain.jpg';
import Snow from '../images/snow.jpg';
import Drizzle from '../images/drizzle.jpg';
import Dust from '../images/dust.jpg';
import Thunderstorm from '../images/thunderstorm.jpg';
import Mist from '../images/mist.jpg';
import Smoke from '../images/dust.jpg';
import Ash from '../images/ash.jpg';
import Squall from '../images/squall.jpg';
import Tornado from '../images/tornado.jpg';

// function to change background image according to weather
function changeBgImageAccToWeather() {
    // get id
    const mainWeather = document.getElementById('main-weather');
    const weatherText = mainWeather.textContent; 
    if (weatherText.toLowerCase().match('clouds')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Cloudy})`;
        return;
    }
    if (weatherText.toLowerCase().match('haze')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Haze})`;
        return;
    }
    if (weatherText.toLowerCase().match('clear')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Clear})`;
        return;
    }
    if (weatherText.toLowerCase().match('rain')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Rain})`;
        return;
    }
    if (weatherText.toLowerCase().match('snow')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Snow})`;
        return;
    }
    if (weatherText.toLowerCase().match('drizzle')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Drizzle})`;
        return;
    }
    if (weatherText.toLowerCase().match('dust')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Dust})`;
        return;
    }
    if (weatherText.toLowerCase().match('thunderstorm')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Thunderstorm})`;
        return;
    }
    if (weatherText.toLowerCase().match('mist')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Mist})`;
        return;
    }
    if (weatherText.toLowerCase().match('smoke')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Smoke})`;
        return;
    }
    if (weatherText.toLowerCase().match('fog')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Mist})`;
        return;
    }
    if (weatherText.toLowerCase().match('sand')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Dust})`;
        return;
    }
    if (weatherText.toLowerCase().match('ash')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Ash})`;
        return;
    }
    if (weatherText.toLowerCase().match('squall')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Squall})`;
        return;
    }
    if (weatherText.toLowerCase().match('tornado')) {
        document.body.style.background = '';
        document.body.style.background = `url(${Tornado})`;
        return;
    }
}

export { changeBgImageAccToWeather };
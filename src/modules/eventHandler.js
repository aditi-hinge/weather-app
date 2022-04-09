import { getWeather } from './getWeather';
import { conversion } from './conversion';

function eventHandler(){
    // conversion
    const conversionButton = document.getElementById('conversion-button');
    conversionButton.addEventListener('click', conversion);

    // search
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', getWeather);
    const inputField = document.getElementById('input-field');
    inputField.addEventListener('keypress', (e)=> {
        if(e.key === 'Enter') {
            getWeather();
        }

        return;
    })
}

export { eventHandler };
import { inputFunc } from './modules/searchBox';
import { createWeatherBoxFunc } from './modules/createWeatherBox';
import { eventHandler } from './modules/eventHandler';

(function onLoad(){
    inputFunc();
    createWeatherBoxFunc();
    eventHandler();
})();




import '../style.css';

function conversion(){
    // function to convert between celcius and fahrenheit
    // get nodes
    const conversionButton = document.getElementById('conversion-button');
    const elementsOfTemp = document.querySelectorAll('.temp');

    // convert from celcius to fahrenheit
    if (conversionButton.textContent === 'C°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/-?\d+\.\d+/).toString().replace(/,/g, '');
            const fahrenheitValue = ((1.8 * filteredValue) + 32).toFixed(1);
            element.textContent = `${fahrenheitValue}°`;
        })

        conversionButton.textContent = 'F°';
        return;
    }
    // convert from fahrenheit to celcius
    if (conversionButton.textContent === 'F°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/-?\d+\.\d+/).toString().replace(/,/g, '');
            const celciusValue = ((5/9) * (filteredValue - 32)).toFixed(1);
            element.textContent = `${celciusValue}°`;
        })

        conversionButton.textContent = 'C°';
        return;
    }
}

export { conversion };
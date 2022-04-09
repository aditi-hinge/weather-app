import '../style.css';

const conversionButton = document.createElement('button');

function conversion(){
    // function to convert between celcius and fahrenheit
conversionButton.addEventListener('click', ()=> {
    // get nodes
    const elementsOfTemp = document.querySelectorAll('.temp');

    if (conversionButton.textContent === 'C°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
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
            const filteredValue = text.match(/\d+\.\d+/).toString().replace(/,/g, '');
            const celciusValue = ((filteredValue - 32) * (5/9)).toFixed(1);
            element.textContent = `${celciusValue}°`;
        })

        conversionButton.textContent = 'C°';
        return;
    }
});
}

export { conversion };
import '../style.css';

const container = document.getElementById('container');

function inputFunc() {
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

};

export { inputFunc };
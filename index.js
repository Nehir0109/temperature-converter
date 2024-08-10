document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature-input');
    const unitSelect = document.getElementById('unit-select');
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    function updateTemperatures() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature) || temperatureInput.value === '') {
            return;
        }

        let celsiusTemp, fahrenheitTemp;

        if (unit === 'C') {
            fahrenheitTemp = temperature;
            celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
            document.getElementById('fahrenheit-temp').textContent = `${fahrenheitTemp.toFixed(2)} °F`;
            document.getElementById('fahrenheit-liquid').style.height = `${fahrenheitTemp * 2}px`;
            document.getElementById('celsius-liquid').style.height = '0px'; 
        } else if (unit === 'F') {
            celsiusTemp = temperature;
            fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
            document.getElementById('celsius-temp').textContent = `${celsiusTemp.toFixed(2)} °C`;
            document.getElementById('celsius-liquid').style.height = `${celsiusTemp * 2}px`;
            document.getElementById('fahrenheit-liquid').style.height = '0px'; 
        }
    }

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature) || temperatureInput.value === '') {
            errorElement.textContent = 'Please enter a valid number.';
            resultElement.textContent = '';
            return;
        }

        errorElement.textContent = '';

        let convertedTemp;

        if (unit === 'C') {
            convertedTemp = (temperature - 32) * 5 / 9;
            resultElement.textContent = `${temperature.toFixed(2)} °F has been converted to ${convertedTemp.toFixed(2)} °C.`;
            document.getElementById('celsius-temp').textContent = `${convertedTemp.toFixed(2)} °C`;
            document.getElementById('celsius-liquid').style.height = `${convertedTemp * 2}px`;
        } else if (unit === 'F') {
            convertedTemp = (temperature * 9 / 5) + 32;
            resultElement.textContent = `${temperature.toFixed(2)} °C has been converted to ${convertedTemp.toFixed(2)} °F.`;
            document.getElementById('fahrenheit-temp').textContent = `${convertedTemp.toFixed(2)} °F`;
            document.getElementById('fahrenheit-liquid').style.height = `${convertedTemp * 2}px`;
        }
    }

    temperatureInput.addEventListener('input', updateTemperatures);
    unitSelect.addEventListener('change', updateTemperatures);
    document.getElementById('convert-button').addEventListener('click', convertTemperature);
});

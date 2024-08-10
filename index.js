document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature-input');
    const unitSelect = document.getElementById('unit-select');
    const celsiusLabel = document.getElementById('celsius-label');
    const fahrenheitLabel = document.getElementById('fahrenheit-label');
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    
    function updateTemperatures() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature) || temperatureInput.value === '') {
            clearDisplay();
            return;
        }

        if (unit === 'C') {
            fahrenheitLabel.textContent = `${temperature.toFixed(2)} °F`;
            celsiusLabel.textContent = '°C';
            document.getElementById('fahrenheit-liquid').style.height = `${temperature * 2}px`;
            document.getElementById('celsius-liquid').style.height = '0px';
        } else if (unit === 'F') {
            celsiusLabel.textContent = `${temperature.toFixed(2)} °C`;
            fahrenheitLabel.textContent = '°F';
            document.getElementById('celsius-liquid').style.height = `${temperature * 2}px`;
            document.getElementById('fahrenheit-liquid').style.height = '0px';
        }
    }
    
    function clearDisplay() {
        celsiusLabel.textContent = '°C';
        fahrenheitLabel.textContent = '°F';
        document.getElementById('celsius-liquid').style.height = '0px';
        document.getElementById('fahrenheit-liquid').style.height = '0px';
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

        if (unit === 'C') {
            const celsiusTemp = (temperature - 32) * 5/9;
            resultElement.textContent = `${temperature.toFixed(2)} °F has been converted to ${celsiusTemp.toFixed(2)} °C.`;
            document.getElementById('celsius-liquid').style.height = `${celsiusTemp * 2}px`;
        } else if (unit === 'F') {
            const fahrenheitTemp = (temperature * 9/5) + 32;
            resultElement.textContent = `${temperature.toFixed(2)} °C has been converted to ${fahrenheitTemp.toFixed(2)} °F.`;
            document.getElementById('fahrenheit-liquid').style.height = `${fahrenheitTemp * 2}px`;
        }
    }
    
    temperatureInput.addEventListener('input', updateTemperatures);
    unitSelect.addEventListener('change', updateTemperatures);
    document.getElementById('convert-button').addEventListener('click', convertTemperature);
});

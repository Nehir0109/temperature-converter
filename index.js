document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperature-input');
    const unitSelect = document.getElementById('unit-select');
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');
    const celsiusLiquid = document.getElementById('celsius-liquid');
    const fahrenheitLiquid = document.getElementById('fahrenheit-liquid');
    const celsiusLabel = document.getElementById('celsius-label');
    const fahrenheitLabel = document.getElementById('fahrenheit-label');
    const convertButton = document.getElementById('convert-button');

    function updateTemperatures() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature) || temperatureInput.value === '') {
            resetThermometers();
            return;
        }

        if (unit === 'C') {
            const fahrenheitTemp = temperature;
            fahrenheitLabel.textContent = `${fahrenheitTemp.toFixed(2)} °F`;
            fahrenheitLiquid.style.height = `${fahrenheitTemp * 2}px`; 
            celsiusLabel.textContent = '°C';
            celsiusLiquid.style.height = '0px';
        } else if (unit === 'F') {
            const celsiusTemp = temperature;
            celsiusLabel.textContent = `${celsiusTemp.toFixed(2)} °C`;
            celsiusLiquid.style.height = `${celsiusTemp * 2}px`;
            fahrenheitLabel.textContent = '°F';
            fahrenheitLiquid.style.height = '0px'; 
        }
    }

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature) || temperatureInput.value === '') {
            errorElement.textContent = '* Please enter a valid number!';
            resultElement.textContent = '';
            return;
        }

        errorElement.textContent = '';

        if (unit === 'C') {
            const celsiusTemp = (temperature - 32) * 5 / 9;
            resultElement.textContent = `${temperature.toFixed(2)} °F has been converted to ${celsiusTemp.toFixed(2)} °C.`;
            celsiusLabel.textContent = `${celsiusTemp.toFixed(2)} °C`;
            celsiusLiquid.style.height = `${celsiusTemp * 2}px`; 
        } else if (unit === 'F') {
            const fahrenheitTemp = (temperature * 9 / 5) + 32;
            resultElement.textContent = `${temperature.toFixed(2)} °C has been converted to ${fahrenheitTemp.toFixed(2)} °F.`;
            fahrenheitLabel.textContent = `${fahrenheitTemp.toFixed(2)} °F`;
            fahrenheitLiquid.style.height = `${fahrenheitTemp * 2}px`; 
        }
    }

    function resetThermometers() {
        celsiusLiquid.style.height = '0px';
        fahrenheitLiquid.style.height = '0px';
        celsiusLabel.textContent = '°C';
        fahrenheitLabel.textContent = '°F';
        resultElement.textContent = '';
    }

    temperatureInput.addEventListener('input', updateTemperatures);
    unitSelect.addEventListener('change', updateTemperatures);
    convertButton.addEventListener('click', convertTemperature);

    // Enter tuşuna basıldığında hem termometreleri hem de dönüşüm işlemini günceller
    temperatureInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Formun yeniden yüklenmesini engeller
            updateTemperatures(); // Termometreleri günceller
            convertTemperature(); // Dönüşüm işlemini yapar
        }
    });
});

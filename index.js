document.getElementById('temperature').addEventListener('input', function() {
    const temp = parseFloat(this.value);
    const unit = document.getElementById('unit').value;
    const celsiusLabel = document.getElementById('celsius-value-label');
    const fahrenheitLabel = document.getElementById('fahrenheit-value-label');

    if (!isNaN(temp)) {
        if (unit === 'C') {
            celsiusLabel.textContent = `${temp.toFixed(2)}°C`;
            fahrenheitLabel.textContent = `-`;
        } else if (unit === 'F') {
            fahrenheitLabel.textContent = `${temp.toFixed(2)}°F`;
            celsiusLabel.textContent = `-`;
        }
    } else {
        celsiusLabel.textContent = `-`;
        fahrenheitLabel.textContent = `-`;
    }
});



document.getElementById('convert-btn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const celsiusLiquid = document.getElementById('celsius-liquid');
    const fahrenheitLiquid = document.getElementById('fahrenheit-liquid');
    const celsiusLabel = document.getElementById('celsius-value-label');
    const fahrenheitLabel = document.getElementById('fahrenheit-value-label');
    let convertedTemp;

    if (isNaN(temp)) {
        document.getElementById('error').textContent = '* Please enter a valid number.';
        return;
    }

    if (unit === 'C') {
        convertedTemp = (temp * 9/5) + 32;
        fahrenheitLiquid.style.height = `${convertedTemp / 212 * 100}%`;
        fahrenheitLabel.textContent = `${convertedTemp.toFixed(2)}°F`;
        document.getElementById('result').textContent = `${temp.toFixed(2)}°C is ${convertedTemp.toFixed(2)}°F.`;
    } else if (unit === 'F') {
        convertedTemp = (temp - 32) * 5/9;
        celsiusLiquid.style.height = `${convertedTemp / 100 * 100}%`;
        celsiusLabel.textContent = `${convertedTemp.toFixed(2)}°C`;
        document.getElementById('result').textContent = `${temp.toFixed(2)}°F is ${convertedTemp.toFixed(2)}°C.`;
    }

    document.getElementById('error').textContent = '';
});

function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
    const errorElement = document.getElementById('error');

    // Hata mesajlarını temizle
    resultElement.textContent = '';
    errorElement.textContent = '';

    // Kullanıcı girdisini doğrula
    if (isNaN(tempInput) || tempInput === '') {
        errorElement.textContent = '* Please enter a valid temperature value.';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;

    if (unit === 'C') {
        convertedTemp = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature.toFixed(2)}°C has been converted to ${convertedTemp.toFixed(2)}°F.`;
    } else if (unit === 'F') {
        convertedTemp = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature.toFixed(2)}°F has been converted to ${convertedTemp.toFixed(2)}°C.`;
    } else {
        errorElement.textContent = 'Please select a valid temperature unit.';
    }
}


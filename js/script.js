document.getElementById('convert').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    let convertedTemp;
    let calculationDetails;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedTemp = (temp * 9/5) + 32;
        calculationDetails = `${temp}°C * (9/5) + 32 = ${convertedTemp.toFixed(2)}°F`;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedTemp = (temp - 32) / 1.8;
        calculationDetails = `(${temp}°F - 32) / 1.8 = ${convertedTemp.toFixed(2)}°C`;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedTemp = temp + 273.15;
        calculationDetails = `${temp}°C + 273.15 = ${convertedTemp.toFixed(2)}K`;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedTemp = temp - 273.15;
        calculationDetails = `${temp}K - 273.15 = ${convertedTemp.toFixed(2)}°C`;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedTemp = (temp + 459.67) * 5/9;
        calculationDetails = `(${temp}°F + 459.67) * 5/9 = ${convertedTemp.toFixed(2)}K`;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedTemp = (temp * 9/5) - 459.67;
        calculationDetails = `(${temp}K * 9/5) - 459.67 = ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = temp;
        calculationDetails = `Nilai tidak berubah: ${temp.toFixed(2)}`;
    }

    document.getElementById('converted-temp').textContent = `${convertedTemp.toFixed(2)} ${toUnit.charAt(0).toUpperCase()}`;
    document.getElementById('calculation-details').value = calculationDetails;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('temperature').value = 50;
    document.getElementById('from-unit').value = 'celsius';
    document.getElementById('to-unit').value = 'fahrenheit';
    document.getElementById('converted-temp').textContent = '';
    document.getElementById('calculation-details').value = '';
});

function updateYear() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

updateYear();
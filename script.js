function convertirTemperatura() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(celsius)) {
        resultado.textContent = "Por favor, ingrese un número válido.";
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    resultado.textContent = `Grados Kelvin: ${kelvin.toFixed(2)}, Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
}

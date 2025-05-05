
    function solicitarTemperatura() {
    
      do {
        const entrada = prompt("Ingresa la temperatura en grados Celsius:");

        if (entrada === null) {
          alert("Cancelaste la operación.");
          return; 
        }

        celsius = parseFloat(entrada);

        if (isNaN(celsius)) {
          alert("Error: Ingresa un valor válido (Algún número).");
        }
      } while (isNaN(celsius));

      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;

      console.log("Grados Fahrenheit: " + fahrenheit.toFixed(1));
      console.log("Grados Kelvin: " + kelvin.toFixed(2));

      //DOMMMMM
      document.body.innerHTML += `<h2>Resultados:</h2><p>Temperatura en Celsius: ${celsius}°C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(1)}°F</p>
        <p>Kelvin: ${kelvin.toFixed(2)}K</p>`;
    }
    solicitarTemperatura();
function convertTemperature(){

      const temperature = parseFloat(document.getElementById('temperature').value);

      const fromUnit = document.getElementById('fromUnit').value;

      const toUnit = document.getElementById('toUnit').value;

      const resultText = document.getElementById('resultText');

      if(isNaN(temperature)){
        resultText.innerHTML = "Please enter a valid number";
        return;
      }

      let celsius;

      // Convert input to Celsius first

      if(fromUnit === 'celsius'){
        celsius = temperature;
      }

      else if(fromUnit === 'fahrenheit'){
        celsius = (temperature - 32) * 5/9;
      }

      else if(fromUnit === 'kelvin'){
        celsius = temperature - 273.15;
      }

      let result;

      // Convert Celsius to target unit

      if(toUnit === 'celsius'){
        result = celsius;
        resultText.innerHTML = `${result.toFixed(2)} °C`;
      }

      else if(toUnit === 'fahrenheit'){
        result = (celsius * 9/5) + 32;
        resultText.innerHTML = `${result.toFixed(2)} °F`;
      }

      else if(toUnit === 'kelvin'){
        result = celsius + 273.15;
        resultText.innerHTML = `${result.toFixed(2)} K`;
      }

    }
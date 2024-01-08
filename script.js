function getWeather() {
    // Get the user's input for the city
    const city = document.getElementById('city-input').value;
  
    // Make a request to the OpenWeatherMap API to get the weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43770e635440c7806adf9894f5b72e10`)
      .then(response => response.json())
      .then(data => {
        // Extract the necessary data from the API response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        // Display the weather information on the website
        document.getElementById('temperature').innerText = temperature;
        document.getElementById('description').innerText = description;
      })
      .catch(error => {
        // Handle any errors that occur during the API request
        console.error('Error:', error);
      });
  }
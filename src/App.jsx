import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const apiKey = '1c7bc325ebb36a88e6e076620146edc9';

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Weather Form</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='city' placeholder='Enter a city...' />
        <input type='submit' value='Search' />
      </form>

      {weather && (
        <ul>
          <li>Temperature: {Math.round(weather.main.temp)}°C </li>
          <li>Description: {weather.weather[0].description}</li>
          <li>Humidity: {weather.main.humidity}</li>
          <li>Wind: {weather.wind.speed} m/s</li>
          <li>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather Icon' />
          </li>
        </ul>
      )}
      <p>
        Open source code by <a href='https://github.com/MundiaNderi/weather-app.git'>Serah Nderi</a> hosted on <a href='https://funny-faun-9f2523.netlify.app'>Netlify</a>
      </p>
    </div>
  );
}

export default App;

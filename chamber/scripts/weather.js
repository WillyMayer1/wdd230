//API Key: 24a1aa44fb130edfe986a180a96be51a

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastId = document.querySelector('#forecast');

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Mendoza,argentina&units=imperial&appid=24a1aa44fb130edfe986a180a96be51a';
  const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-32.882688&lon=-68.845568&units=imperial&appid=24a1aa44fb130edfe986a180a96be51a';
  
  
  async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  async function apiForecast() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const forecast = await response.json();
        displayForecast(forecast);
      } else {
        throw Error(await response.text());
      } 
    } catch (error) {
      console.log(error);
    }
  }

  apiForecast();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    //weatherIcon.setAttribute('___', _____);
    captionDesc.innerHTML = `<p>${data.weather[0].description}</p>`;
  }


  function displayForecast(forecast) {
    console.log(forecast)

    //Object #6, 14 & 22
    const forecastul = document.createElement("ul");
    const forecastilOne = document.createElement("li");
    const forecastilTwo = document.createElement("li");
    const forecastilThree = document.createElement("li");
    const imgForecastOne = document.createElement("img");
    const gradeForecastOne = document.createElement("p");
    const imgForecastTwo = document.createElement("img");
    const gradeForecastTwo = document.createElement("p");
    const imgForecastThree = document.createElement("img");
    const gradeForecastThree = document.createElement("p");
    const forecastMessage = document.createElement("h3");
    
    forecastMessage.textContent = "Forecast for the next Three days";
    imgForecastOne.src = `https://openweathermap.org/img/w/${forecast.list[8].weather[0].icon}.png`;
    gradeForecastOne.textContent = forecast.list[8].main.temp;
    imgForecastTwo.src = `https://openweathermap.org/img/w/${forecast.list[14].weather[0].icon}.png`;
    gradeForecastTwo.textContent = forecast.list[14].main.temp;
    imgForecastThree.src = `https://openweathermap.org/img/w/${forecast.list[22].weather[0].icon}.png`;
    gradeForecastThree.textContent = forecast.list[22].main.temp;

    forecastilOne.appendChild(imgForecastOne);
    forecastilOne.appendChild(gradeForecastOne);
    forecastilTwo.appendChild(imgForecastTwo);
    forecastilTwo.appendChild(gradeForecastTwo);
    forecastilThree.appendChild(imgForecastThree);
    forecastilThree.appendChild(gradeForecastThree);
    forecastul.appendChild(forecastilOne);
    forecastul.appendChild(forecastilTwo);
    forecastul.appendChild(forecastilThree);

    forecastId.appendChild(forecastMessage);
    forecastId.appendChild(forecastul);

  }
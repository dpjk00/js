const cityContainer = document.querySelector('.container')

let button = document.querySelector('.button')
let city = document.querySelector('.city-input')

let cities = JSON.parse(localStorage.getItem('cities')) || [];

button.addEventListener('click', function() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
  .then(response => response.json())
  .then(weather => {
    if (cities.length >= 10) cities.shift()
    cities.push(weather)
    localStorage.setItem('cities', JSON.stringify(cities));
    showCities()
  })
})

function deleteCity(index) {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  cities.splice(index, 1)
  localStorage.setItem('cities', JSON.stringify(cities));
  
  showCities();
}

function showCities() {
  cityContainer.innerHTML = '';
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  cities.forEach((city, index) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(weather => {
      city.main.temp = weather.main.temp
    })

    const cityDiv = document.createElement('div')
    cityDiv.classList.add('city')

    const iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}.png`;
    const weatherIcon = document.createElement('img')
    weatherIcon.src = iconUrl

    const cityInfo = document.createElement('h1')
    const info = `${city.name}: ${city.main.temp}°C`
    cityInfo.innerText = info

    const deleteCityButton = document.createElement('button');
    deleteCityButton.classList.add('circle');
    deleteCityButton.onclick = () => deleteCity(index);

    cityDiv.appendChild(weatherIcon)
    cityDiv.appendChild(cityInfo)
    cityDiv.appendChild(deleteCityButton)
    cityContainer.appendChild(cityDiv)
  })
}

function updateCities() {
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const newCities = cities.splice()
  cities.forEach((city, index) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(weather => {
      newCities.push(weather)
      localStorage.setItem('cities', JSON.stringify(cities));
      showCities()
    })
  })
}

setInterval(updateCities, 1000);
showCities()
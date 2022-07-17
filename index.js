// Your code here
//Convert this file to use E6 Fetures
//let/const
//template literals
//arrow functions
//destructuring
//async await functions

const URL = "https://api.openweathermap.org/data/2.5/weather?q="
const key = "&units=imperial&appid=b8654bb0c6ea71c3b1056ab5f5581615"
const weatherDiv = document.getElementById('weather')
const form = document.querySelector('form')
const cityInput = document.getElementById('weather-search')


form.onsubmit = async e => {
    e.preventDefault()
    const inputLocation = cityInput.value
    if (!inputLocation) return
    try{
        const res = await fetch(URL + inputLocation + key)
        if (res.status !==200) throw new Error('Location not Found')
        const weatherData = await res.json()
        .then(displayWeather) 
    } catch(err){
        weatherDiv.innerHTML = err.message
        cityInput.value = ""
    }  
}

const displayWeather = ({
    name,
    sys: {
        country
    },
  
}) => {
    weatherDiv.innerHTML = ""
    weatherDiv.innerHTML = `<h2>${name} ${country}</h2>
    <a></a>
    <img></img>
    <p></p>
    <p></p>
    <p></p>`
}
   
   

/* -----------------------E5 Structure---------------------------
var URL = "https://api.openweathermap.org/data/2.5/weather?q="
var key = "&units=imperial&appid=b8654bb0c6ea71c3b1056ab5f5581615"
var weatherDiv = document.getElementById('weather')
var form = document.querySelector('form')
var cityInput = document.getElementById('weather-search')


form.onsubmit = function(e) {
    e.preventDefault()
    var inputLocation = cityInput.value
    if (!inputLocation) return
    fetch(URL + inputLocation + key)
    .then(function(res) {
        if (res.status !==200) throw new Error('Location not Found')
        return res.json()
    })
    .then(displayWeather) 
    .catch(function(err){
        weatherDiv.innerHTML = err.message
        cityInput.value = ""
    })   
    }


function displayWeather(weather) {
    weatherDiv.innerHTML = ""
    
   //should display city
    var city = document.createElement('h2')
    city.textContent = weather.name + "," + weather.sys.country
    weatherDiv.appendChild(city)

    //should display working map link
    var mapLink = document.createElement('a')
    mapLink.textContent = 'Click to view map'
    var lat = weather.coord.lat
    var lon = weather.coord.lon
    mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon
    weatherDiv.appendChild(mapLink)

    //should display condition icon
    var icon = document.createElement('img')
    iconCode = weather['weather'][0]['icon']
    icon.src = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"
    weatherDiv.appendChild(icon)


    //should display condition
    var condition = document.createElement('p')
    condition.textContent = weather['weather'][0]['description']
    weatherDiv.appendChild(condition)

    //should display current temp
    var temp = document.createElement('p')
    temp.textContent = "Current: " + weather.main.temp + "\u00B0 F"
    weatherDiv.appendChild(temp)

    //should display current "feels like" temp
    var feelsTemp = document.createElement('p')
    feelsTemp.textContent = "Feels like: " + weather.main.feels_like + "\u00B0 F"
    weatherDiv.appendChild(feelsTemp)


    //should display updated time
    var date = new Date(weather.dt * 1000)
    var timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
    })
*/

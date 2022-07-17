// Your code here
//Convert this file to use E6 Features
//change var to const
//template literals
//arrow functions =>
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
    coord: {
        lon,
        lat
    },
    weather: [
        {
            id,
            main,
            icon,
            description
        }
   
    ],
    main: {
        temp,
        feels_like
    },
      
}) => {
    weatherDiv.innerHTML = ""
    weatherDiv.innerHTML = `<h2>${name} ${country}</h2>
    <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lon}">Click to view map</a>
    <img src='https://openweathermap.org/img/wn/${icon}@2x.png'>
    <p>${description}</p>
    <p>${main} ${temp}</p>
    <p>${main} ${feels_like}</p>`
}
   


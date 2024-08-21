
// Api calling
const apiKey="3dcb5314017a1078e75cb6fa9ca9b1bb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// select elements
const weatherTemp=document.querySelector(".weather-temp");
const weatherHumidity=document.querySelector(".humidity");
const weatherWind=document.querySelector(".wind");
const search= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-img");
const errorMessage=document.querySelector(".error")

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404){
        errorMessage.style.display="block";
        setTimeout(()=>{
            errorMessage.style.display="none";
        },1000);
        document.querySelector(".weather-details").style.display="none";
    }
    else {
        document.querySelector(".weather-details").style.display="block"
        const data=await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML= data.name;
        weatherTemp.innerHTML= Math.round(data.main.temp) + "°C";
        weatherHumidity.innerHTML=data.main.humidity + "%";
        weatherWind.innerHTML=data.wind.speed + " km/h";

        if(data.weather[0].main === "clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main === "clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main === "rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main === "mist"){
            weatherIcon.src="images/mist.png"
        }
        else if(data.weather[0].main === "drizzle"){
            weatherIcon.src="images/drizzle.png"
        }

    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})



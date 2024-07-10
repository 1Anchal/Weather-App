const apiKey="da88217fa0389d09e4e8b6ba65209ebf";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button"); 
const weatherIcon=document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data= await response.json();
        console.log(data);
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".condition").innerText = data.weather[0].main;
        document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="cloudy.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.webp";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rainy.webp";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.webp";
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src="haze.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="snow.png";
        }
        else if(data.weather[0].main=="Smoke"){
            weatherIcon.src="smoke.png";
        }
        else if(data.weather[0].main=="Hail"){
            weatherIcon.src="hail.png";
        }
        else if(data.weather[0].main=="Fog"){
            weatherIcon.src="fog.png";
        }else if(data.weather[0].main=="Lightning"){
            weatherIcon.src="lightning.png";
        }
        
        else if(data.weather[0].main=="Thundershower"){
            weatherIcon.src="thunderstorms.png";
        }
        else if(data.weather[0].main=="Showers"){
            weatherIcon.src="shower.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        }
        
    }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

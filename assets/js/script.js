let weather = []
let data = ""
let search = document.getElementById("search")
async function getData() {
    let myReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa657672e9b94aabad5142138240101&days=7&q=${locationf()}`).catch(function(err){
      console.log(err);
    })
    let data = await myReq.json()
    weather.push(data)
    console.log(weather);
    console.log(data);
    console.log(`<img src="${weather[0].current.condition.icon}">`);
    display()
}
function display(){
    document.getElementById("content").innerHTML = `<div class="col-md-4 main my-2 rounded-start">
    <div class="header d-flex justify-content-between text-white-50">
      <div>${isDay(weather[0].current.is_day)}</div>
      <div>${weather[0].forecast.forecastday[0].date}</div>
    </div>
    <div class="p-5 inner">
      <div class="fs-4">${weather[0].location.name}</div>
      <div class="d-flex justify-content-between my-4">
        <div class="fs-1">${weather[0].current.temp_c}<sup>o</sup>C</div>
        <div class="fs-1">${`<img src="${weather[0].current.condition.icon}">`}</div>
      </div>
      <div class="text-info"><p>${weather[0].current.condition.text}</p></div>
    </div>
    <span><img src="assets/imgs/icon-umberella.png" alt="">${weather[0].forecast.forecastday[1].day.daily_chance_of_rain}%</span>
    <span><img src="assets/imgs/icon-wind.png" alt="">${weather[0].current.wind_kph}Kph</span>
    <span><img src="assets/imgs/icon-compass.png" alt="">${weather[0].current.wind_dir}</span>
  </div>
  <div class="col-md-4 main my-2">
    <div class="header d-flex justify-content-between text-white-50">
    <div>${isDay(weather[0].current.is_day+1)}</div>
    <div>${weather[0].forecast.forecastday[1].date}</div>
    </div>
    <div class="p-5 text-center inner">
      <div class="my-4">
        <div class="fs-1">${`<img src="${weather[0].forecast.forecastday[0].day.condition.icon}">`}</div>
        <div class="fs-1">${weather[0].forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C</div>
      </div>
      <div class="text-info"><p>${weather[0].forecast.forecastday[1].day.condition.text}</p></div>
    </div>
  </div>
  <div class="col-md-4 main my-2 rounded-end">
    <div class="header d-flex justify-content-between text-white-50">
    <div>${isDay(weather[0].current.is_day+2)}</div>
    <div>${weather[0].forecast.forecastday[2].date}</div>
    </div>
    <div class="p-5 text-center inner">
      <div class="my-4">
        <div class="fs-1">${`<img src="${weather[0].forecast.forecastday[0].day.condition.icon}">`}</div>
        <div class="fs-1">${weather[0].forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C</div>
      </div>
      <div class="text-info"><p>${weather[0].forecast.forecastday[2].day.condition.text}</p></div>
    </div>
  </div>`
}
getData()
function isDay(x){
    if(x==0){
        return x = "Sunday"
    }
    else if(x==1){
        return x = "Monday"
    }
    else if(x==2){
        return x = "Tuesday"
    }
    else if(x==3){
        return x = "Wednesday"
    }
    else if(x==4){
        return x = "Thursday"
    }
    else if(x==5){
        return x = "Friday"
    }
    else if(x==6){
        return x = "Saturday"
    }
}
function locationf(){
  let location = document.getElementById("location")
  if(location.value == ""){
    return `egypt`
  }
  else{
    weather = []
    return weather,location.value
  }
}
search.addEventListener("click",getData)
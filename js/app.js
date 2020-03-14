const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=b94ddb9d71b693ed8440e7263c21d6f6')
.then(response => response.json())
.then(data => {
  let tempValue = data['main']['temp'];
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];
  console.log(descValue);
  let tempCelcius = tempValue - 273.15;
  main.innerHTML = nameValue;
  /*
  Switch case
  */
    
switch(descValue) {
  case "clear sky":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/01n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "few clouds":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/02n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "scattered clouds":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/03n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "broken clouds":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/04n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "shower rain":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/09n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "rain":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/10n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "thunderstorm":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/11n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "snow":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/13n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  case "light rain":
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/10d@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
    break;
  default:
    desc.innerHTML = "<p class='lead'>Desc: "+descValue+"</p>"+"<img src='http://openweathermap.org/img/wn/02n@2x.png' width='50px' height='50px' alt=''>";
    temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
    input.value ="";
}

  temp.innerHTML = "Temp: "+tempCelcius.toFixed(1)+" &#8451;";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

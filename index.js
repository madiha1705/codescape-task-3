let inputvalue = document.querySelector('#city');
let btn = document.querySelector('#add');
let wind = document.querySelector('#wind');
let temp = document.querySelector('#temp');
let city = document.querySelector('#cityoutput');
let hum=document.querySelector('#humidity');
let vis=document.querySelector('#visibilty');
let d=document.querySelector('#dis');
let vid=document.querySelector('video');
let apiKey = "5a77a0402d1d00fe27d1bb75c3ac947a";

function convert(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var name = data['name'];
            var diss=data['weather']['0']['main'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];
        var humidity=data['main']['humidity'];
        var visi=data['visibility'];
        if(diss=="Clear"){
            vid.src="clear.mp4";
        }
        if(diss=="Haze"){
            vid.src="haze.mp4";
        }
        if(diss=="Drizzle"){
            vid.src="drizzle.mp4";
        }
        if(diss=="Clouds"){
            vid.src="cloud.mp4";
        }
        if(diss=="Smoke"){
            vid.src="smoke.mp4";
        }
        if(diss=="Rain"){
            vid.src="rain.mp4";
        }
        switch(diss){
            case 'Clear':
                d.innerHTML=`<img  src="clear.png" width="150px" height="150px"><div>${diss}</div>`
                break;
            case 'Drizzle':
               d.innerHTML=`<img  src="drizzle.png" width="150px" height="150px"><div>${diss}</div>`;
               break;
            case 'Clouds':
                d.innerHTML=`<img  src="clouds.png" width="150px" height="150px"><div>${diss}</div>`;
                break;
            case 'Rain':
                d.innerHTML=`<img  src="rain.png" width="150px" height="150px"><div>${diss}</div>`;
                break;       

            case 'Haze':
                d.innerHTML=`<img  src="mist.png" width="150px" height="150px"><div>${diss}</div>`
                break;
             
             case 'Smoke':
                d.innerHTML=`<img  src="mist.png" width="150px" height="150px"><div>${diss}</div>`;
                break;   
        }
        city.innerHTML = `<i class="fas fa-city"></i> <span>${name}</span>`;
            wind.innerHTML = `   <i class="fas fa-wind"></i> <span>${windSpeed} Km/h</span>`;
            temp.innerHTML = `<i class="fas fa-thermometer-half"></i> <span>${convert(temperature)} °C</span>`;
            hum.innerHTML=`<i class="fas fa-tint"></i><span> ${humidity} %</span>`;
            vis.innerHTML=`<i class="fas fa-eye"></i><span> ${visi} meters</span>`;
        })
});
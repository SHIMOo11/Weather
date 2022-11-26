let dday=document.getElementById("dday");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d=new Date();
document.getElementById('first-day').innerHTML=days[d.getDay()];
if(d.getDay()==5){
document.getElementById('second-day').innerHTML=days[d.getDay()+1];
document.getElementById('third-day').innerHTML=days[0];
document.getElementById('four-day').innerHTML=days[1];
document.getElementById('five-day').innerHTML=days[1];
document.getElementById('sex-day').innerHTML=days[1];
document.getElementById('seven-day').innerHTML=days[1];
}else if(d.getDay()==6){
document.getElementById('second-day').innerHTML=days[0];
document.getElementById('third-day').innerHTML=days[1];
document.getElementById('four-day').innerHTML=days[2];
document.getElementById('five-day').innerHTML=days[1];
document.getElementById('six-day').innerHTML=days[1];
document.getElementById('seven-day').innerHTML=days[1];
}else{
document.getElementById('second-day').innerHTML=days[d.getDay()+1];
document.getElementById('third-day').innerHTML=days[d.getDay()+2];
document.getElementById('four-day').innerHTML=days[d.getDay()+3];
document.getElementById('five-day').innerHTML=days[d.getDay()+4];
document.getElementById('six-day').innerHTML=days[d.getDay()+5];
document.getElementById('seven-day').innerHTML=days[d.getDay()+6];
}
document.getElementById('first-date').innerHTML=`${d.getDate()+ " "+monthNames[d.getMonth()]}`
function getImageUrl(text){
if(text=='Sunny'){
    return 'images/sunny.png'
}
else if(text=='Light rain'||text=='Moderate rain'){
return 'images/Lightrain.png'
}
else if(text=='Partly cloudy'){
    return 'images/116.png'
}
else if(text=='Overcast'){
    return 'images/overcast.png'
}
else if(text=='Patchy rain possible'){
    return 'images/176.png'
}
else if(text=='Clear'){
    return 'images/113.png'
}
else if(text=='Mist'){
    return 'images/mist.png'
}
else if(text=='Fog'){
    return 'images/fog.png'
}
else if(text=='Heavy rain'){
    return 'images/heavy rain.png'
}
else if(text=='Moderate or heavy snow showers'){
    return 'images/snow.png'
}
else if(text=='Cloudy'){
    return 'images/cloud.png'
}

}
async function search(city){
var apiData=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=835b8e40423c494cb5c164718221310&q=${city}&days=7&aqi=no&alerts=no`);
if(apiData.ok&&apiData.status!=400){
var obj=await apiData.json();
displayData(obj);
// nextDay(obj)
}
}
function displayData(w){
    //first day
    let src=getImageUrl(w.current.condition.text);
    document.getElementById('city').innerHTML=w.location.name;
    document.getElementById('firstDay-weather').innerHTML=`   ${w.current.temp_c}
    <sup>o</sup>
    C
    <img class="ml-5 imginfo" src="${src}" alt="">
    
    `
    document.getElementById('img').setAttribute('src',`${src}`)
    // document.getElementById('firstDay-weatherf').innerHTML=`   ${w.current.temp_f}
    // <sup>o</sup>
    // F`
    document.getElementById('atmosphere').innerHTML=`${w.current.condition.text}`
    document.getElementById('temp1').innerHTML=`${w.current.humidity}`
    document.getElementById('temp2').innerHTML=`${w.current.wind_mph}`
    document.getElementById('temp3').innerHTML=`${w.current.wind_degree}`
    document.getElementById('temp4').innerHTML=`${w.current.cloud}`
    document.getElementById('temp5').innerHTML=`${w.current.pressure_mb}`
    //second day
    let src2=getImageUrl(w.forecast.forecastday[1].day.condition.text);
    document.getElementById('imgDay1').innerHTML=`<img src="${src2}" alt="">`
    document.getElementById('max-temp2').innerHTML=`${w.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp2').innerHTML=`${w.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`
    document.getElementById('atmosphere2').innerHTML=`${w.forecast.forecastday[1].day.condition.text}`
    document.getElementById('imgDay1').setAttribute('src',`${src2}`)
    //third day
    let src3=getImageUrl(w.forecast.forecastday[2].day.condition.text);
    document.getElementById('imgDay2').innerHTML=`<img src="${src3}" alt="">`
    document.getElementById('max-temp3').innerHTML=`  ${w.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp3').innerHTML=`${w.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>`
    document.getElementById('imgDay2').setAttribute('src',`${src2}`)
    document.getElementById('atmosphere3').innerHTML=`${w.forecast.forecastday[2].day.condition.text}`
    let src4=getImageUrl(w.forecast.forecastday[2].day.condition.text);
    document.getElementById('imgDay3').innerHTML=`<img src="${src4}" alt="">`
    document.getElementById('max-temp4').innerHTML=`  ${w.forecast.forecastday[3].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp4').innerHTML=`${w.forecast.forecastday[3].day.mintemp_c} <sup>o</sup>`
    document.getElementById('imgDay3').setAttribute('src',`${src4}`)
    document.getElementById('atmosphere4').innerHTML=`${w.forecast.forecastday[3].day.condition.text}`
    let src5=getImageUrl(w.forecast.forecastday[2].day.condition.text);
    document.getElementById('imgDay4').innerHTML=`<img src="${src5}" alt="">`
    document.getElementById('max-temp5').innerHTML=`  ${w.forecast.forecastday[4].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp5').innerHTML=`${w.forecast.forecastday[4].day.mintemp_c} <sup>o</sup>`
    document.getElementById('imgDay4').setAttribute('src',`${src5}`)
    document.getElementById('atmosphere5').innerHTML=`${w.forecast.forecastday[4].day.condition.text}`
    let src6=getImageUrl(w.forecast.forecastday[2].day.condition.text);
    document.getElementById('imgDay5').innerHTML=`<img src="${src6}" alt="">`
    document.getElementById('max-temp6').innerHTML=`  ${w.forecast.forecastday[5].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp6').innerHTML=`${w.forecast.forecastday[5].day.mintemp_c} <sup>o</sup>`
    document.getElementById('imgDay5').setAttribute('src',`${src6}`)
    document.getElementById('atmosphere6').innerHTML=`${w.forecast.forecastday[5].day.condition.text}`
    let src7=getImageUrl(w.forecast.forecastday[2].day.condition.text);
    document.getElementById('imgDay6').innerHTML=`<img src="${src4}" alt="">`
    document.getElementById('max-temp7').innerHTML=`  ${w.forecast.forecastday[6].day.maxtemp_c}<sup>o</sup> C / `
    document.getElementById('min-temp7').innerHTML=`${w.forecast.forecastday[6].day.mintemp_c} <sup>o</sup>`
    document.getElementById('imgDay6').setAttribute('src',`${src4}`)
    document.getElementById('atmosphere7').innerHTML=`${w.forecast.forecastday[6].day.condition.text}`
}

// function nextDay(n){
//     for( let i=0; i<dday.length ;i++){
//         document.getElementById('dday')[i].innerHTML= days[date.getDate()+1];

//     }
// }
document.getElementById("search").addEventListener("keyup", function(e){
    search(e.target.value);
}
);
search('alex');
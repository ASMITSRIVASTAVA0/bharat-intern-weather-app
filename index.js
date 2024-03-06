
let inputvalue=document.querySelector("#cityinput")
let btn=document.querySelector("#add")
let city=document.querySelector("#cityoutput")
let descrip=document.querySelector("#description")
let temp=document.querySelector("#temp")
let wind=document.querySelector("#wind")



apik="ec5f606250afec57b5f3945f7f03cd33"


function convertion(val)
{
    // roundoff to 3 decimal
    return (val-273).toFixed(3)
}

btn.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue.value+"&appid="+apik)
    .then(res=>res.json())
    .then(data=>{
        let nameval=data["name"]
        let descrip=data["weather"]['0']["description"]
        let temperature=data["main"]["temp"]
        let windspeed=data["wind"]["speed"]

        city.innerHTML=`weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${convertion(temperature)}C<Span>`
        descrip.innerHTML=`Sky Condition: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed:<span>${windspeed} km/h`
    })
    .catch(err=>alert("You Entered wrong City Name"))
});
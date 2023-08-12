const form = document.getElementById('form')
form.addEventListener('submit' , GetTemperatureForPlace)

function GetTemperatureForPlace(event){
    event.preventDefault()
    const latitudeinput = document.getElementById('latitude')
    const latitudeentry = latitudeinput.value
    const longitudeinput = document.getElementById('longitude') 
    const longitudeentry = longitudeinput.value

     const url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitudeentry+'&longitude='+longitudeentry+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
     fetch(url)
    .then(response => response.json())
    .then(showtemperature)
    .catch(showerror)
}

function showtemperature(data){
    const temperature = (data.current_weather.temperature)
    const temp = document.getElementById('temp')
    temp.innerHTML = temperature

}

function showerror(error){
    console.log("some error occured")
}



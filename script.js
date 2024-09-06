function doCapitalize(daString) {
    let output = daString[0].toUpperCase();

    for (let i = 1; i < daString.length; i++) {
        if (daString[i - 1] == " ") output += daString[i].toUpperCase();
        else output += daString[i];
    }

    return output;
}

function gimmeWeather(cityID) {
    let request = new XMLHttpRequest();
    let outputBox = document.getElementById("daWeather");

    outputBox.innerHTML = "Getting weather...";

    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200) {
            console.log(this.responseText);
            let weatherJson = JSON.parse(this.responseText);
            outputBox.innerHTML = "Current weather: " + doCapitalize(weatherJson.weather[0].description.split('')) + "<br>Current temperature: " + weatherJson.main.temp + "<br>Feels like: " + weatherJson.main.feels_like + "<br>Humidity: " + weatherJson.main.humidity;
        }
    }

    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=298f2e714e6cee15db223207095ed319", true);
    request.send(null);
}
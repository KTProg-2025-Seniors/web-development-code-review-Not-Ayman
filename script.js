function doCapitalize(daString) {
    let output = daString[0].toUpperCase();

    for (let i = 1; i < daString.length; i++) {
        if (daString[i - 1] == " ") output += daString[i].toUpperCase();
        else output += daString[i];
    }

    return output;
}

function gimmeWeather(cityName, unit) {
    let request = new XMLHttpRequest();
    let outputBox = document.getElementById("daWeather");
    let unitLetter;

    outputBox.innerHTML = "Getting weather...";

    switch (unit) {
        case "imperial":
            unitLetter = "°F";
            break;

        case "metric":
            unitLetter = "°C";
            break;

        case "standard":
            unitLetter = "°K";
    }

    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200) {
            let weatherJson = JSON.parse(this.responseText);
            outputBox.innerHTML = "<br>Weather info:<br><br>Current weather: " + doCapitalize(weatherJson.weather[0].description.split('')) + "<br>Current temperature: " + weatherJson.main.temp + " " + unitLetter + "<br>Feels like: " + weatherJson.main.feels_like + " " + unitLetter + "<br>Humidity: " + weatherJson.main.humidity + "%";
        }
    }

    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + unit + "&appid=298f2e714e6cee15db223207095ed319", true);
    request.send(null);
}

function handleDropDown() {
    let daOption = document.getElementById("packsel").value;

    if (daOption == "none") {
        daWeather.innerHTML = "";
    }

    else { 
        gimmeWeather(daOption, "imperial");
    }
}
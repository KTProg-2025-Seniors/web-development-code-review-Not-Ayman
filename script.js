function gimmeWeather(cityID) {
    let request = new XMLHttpRequest();
    let outputBox = document.getElementById("daWeather");

    outputBox.innerHTML = "Getting weather...";

    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200) {
            outputBox.innerHTML = request.responseText;
        }
    }

    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=298f2e714e6cee15db223207095ed319");
    request.send(null);
}
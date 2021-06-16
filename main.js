var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        function addCity() {
            var myCity = document.createTextNode(apiResult.name),
                h1 = document.getElementById("city");

            h1.appendChild(myCity);
        }
        addCity();



        function addWeather() {
            var myWeather = document.createTextNode(apiResult.weather[0].description),
                h2 = document.getElementById("weather");

            h2.appendChild(myWeather);
        }
        addWeather();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33071,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();


// console.log(apiResult.name);
// console.log(apiResult.weather[0].description);



// function addTextNode(apiResult) {
//     var newtext = document.createTextNode(text),
//         p1 = document.getElementById("p1");

//     p1.appendChild(newtext);
// }


// function addCity(text) {
//     var myCity = document.createTextNode(apiResult.name),
//         h1 = document.getElementById("city");

//     h1.appendChild(myCity);
// }
window.onload = apipage;

function apipage() {

    var Tbutton = document.getElementById("Toronto");
    var Lbutton = document.getElementById("London");
    var location = document.getElementById("location");
    var icon = document.getElementById("icon");
    var Temp = document.getElementById("temperature");
    var output = document.getElementById("output");
    var condition = document.getElementById("conditions");
    var wind = document.getElementById("wind");



    Tbutton.onclick = function() {
        GetwData("Toronto");
        output.style.display = "block";

    };

    Lbutton.onclick = function() {
        GetwData("London");
        output.style.display = "block";

    };

    function GetwData(city) {

        const Key = "26f3a26131e5df1fcf3323cb67859ddf";

        const Url = "https://api.openweathermap.org/data/2.5/weather?q=" +
            city + "&appid=26f3a26131e5df1fcf3323cb67859ddf&units=metric";

        const iconurl = "http://openweathermap.org/img/wn/";


        const Xhr = new XMLHttpRequest;

        Xhr.onreadystatechange = function() {

            if (Xhr.readyState === 4) {

                if (Xhr.status === 200) {

                    var data = Xhr.response;

                    console.log(data);

                    location.innerHTML = data.name;
                    Temp.innerHTML = data.main.temp+""+"C";
                    condition.innerHTML = data.weather[0].description;
                    icon.innerHTML = '<img src=' +
                        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png" + ' > ';
                    wind.innerHTML = data.wind.speed + "km";

                } else {

                }

            }




        }










        Xhr.open("GET", Url, true);
        Xhr.responseType = "json";
        Xhr.send(null);






    }
























    /////////EVENT LISTNER/////////



}
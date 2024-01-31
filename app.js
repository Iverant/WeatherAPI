const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Goa&appid=cc77319bede0b7ba2c0953d3fd6db4a5&units=metric"
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            //res.write("The weather in Mumbai is" + weatherDescription);
            res.write("<h1>The temperature in Goa is "+ temp + " degree Celcius.</h1>");
           


        })
    })

    
})

app.listen(3000, function(){
    console.log("server is running on port 3000")
})
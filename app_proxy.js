const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.get('*', (req, res) => {

    const AuthStr = "Bearer ".concat(req.query.apiKey);

    app.use(cors);

    axios.get('https://api.yelp.com/v3/businesses/search?term=' + req.query.term + "&location=" + req.query.location + "&radius=" + req.query.radius + "&limit=30",
    {headers: { Authorization: AuthStr, dataType: JSON, mode: 'cors'}}
    )
    .then(response => {
        res.header('Access-Control-Allow-Origin', 'https://da-mike.github.io/Bar-Hopper/');
        res.send(response.data);
    })
    .catch(error => {
        res.header('Access-Control-Allow-Origin', 'https://da-mike.github.io/Bar-Hopper/');
        res.send(error.code);
        res.send(error);
    })
});

app.listen(process.env.PORT || 3000);

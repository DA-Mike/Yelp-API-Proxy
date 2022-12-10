const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('*', cors(), (req, res) => {

    const AuthStr = "Bearer ".concat(req.query.apiKey);
    // , dataType: JSON
    axios.get('https://api.yelp.com/v3/businesses/search?term=' + req.query.term + "&location=" + req.query.location + "&radius=" + req.query.radius + "&limit=30",
    {headers: { Authorization: AuthStr, mode: 'cors', "Access-Control-Allow-Origin": "*"}}
    )
    .then(response => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(response.data);
    })
    .catch(error => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(error.code);
        res.send(error);
    })
});

app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${PORT}`);
});
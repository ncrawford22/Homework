const express = require('express');
const port = 3000;
const app = express();

app.get("/:numberOfBottles", (req, res) => {
 let numberOfBottles = req.params.numberOfBottles;
 let nextPage = numberOfBottles - 1;

 if (numberOfBottles > 1) {
    res.send(`${numberOfBottles} Bottles of beer on the wall! <a href="/${nextPage}">Take one down, pass it around..</a>`)
 } else {
    res.send(`1 bottle of beer on the wall '<a href="/99">Start Over</a>'`)
 }

});

app.listen(port, () => {
    console.log('Listening to Port ' + port);
});
const e = require('express');
const express = require('express');
const port = 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'bugs');

const fs = require('fs');

app.engine('bugs', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      
      const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<p>'+ options.content + '</>' ).replace('#content1#','<p>'+ options.content1 + '</>' ).replace('#content2#','<p>'+ options.content2 + '</>' ).replace('#content3#','<p>'+ options.content3 + '</>' )
      return callback(null, rendered)
    })
  })
  

// app.get("/:numberOfBottles", (req, res) => {
//  let numberOfBottles = req.params.numberOfBottles;
//  let nextPage = numberOfBottles - 1;

//  if (numberOfBottles > 1) {
//     res.send(`${numberOfBottles} Bottles of beer on the wall! <a href="/${nextPage}">Take one down, pass it around..</a>`)
//  } else {
//     res.send(`1 bottle of beer on the wall '<a href="/99">Start Over</a>'`)
//  }

// });

app.get("/:numberOfBugs", (req, res) => {
    let numberOfBugs = req.params.numberOfBugs;
    let nextPage = numberOfBugs - 1;
    let randomPage = Math.floor(Math.random() * numberOfBugs * 2);
    let nextRandomPage = randomPage - 1;
   
    if (numberOfBugs == 99) {
        res.render('template', {title: numberOfBugs + ' Bugs!', message: numberOfBugs + ' Little bugs in the code!', content: numberOfBugs + ' Little bugs..', content1: 'Take one down..', content2: 'Patch it around..', content3: nextPage + ' bugs in the code! ' + `<a href="/${nextPage}">Fix more bugs?</a>`})

    //    res.send(`${numberOfBugs} Little bugs in the code!'
    //              ${numberOfBugs} Little bugs!
    //              Take one down..
    //              Patch it around..
    //              ${randomPage} bugs in the code! <a href="/${nextPage}">Fix more bugs?</a>`)
    } else if (numberOfBugs == 1){

        res.render('template', {title: numberOfBugs + ' Bug!', message: numberOfBugs + ' Little bug in the code!', content: numberOfBugs + ' Little bug..', content1: 'Take one down..', content2: 'Patch it around..', content3: randomPage + ' bugs in the code! ' + `<a href="/${nextRandomPage}">Fix more bugs?</a>`})

        // res.send(`${numberOfBugs} Little bugs in the code! 
        //           ${numberOfBugs} Little bugs!
        //           Take one down..
        //           Patch it around..
        //           ${randomPage} bugs in the code! <a href="/${nextRandomPage}">Fix more bugs?</a>`)
    } else if (numberOfBugs > 0 && numberOfBugs != 1 && numberOfBugs != 99) {
        nextRandomPage = randomPage;
        res.render('template', {title: numberOfBugs + ' Bugs!', message: numberOfBugs + ' Little bugs in the code!', content: numberOfBugs + ' Little bugs..', content1: 'Take one down..', content2: 'Patch it around..', content3: randomPage + ' bugs in the code! ' + `<a href="/${randomPage}">Fix more bugs?</a>`})
    } else if (req.params.numberOfBugs <= 0) {
        res.send(`We need to find more bugs to FIX ASAP!! '<a href="/99">Start Over</a>'`)

    }
   
   });

app.listen(port, () => {
    console.log('Listening to Port ' + port);
});
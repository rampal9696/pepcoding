const express = require("express");
const request = require("request");
const cheerio = require('cheerio');
const app = express()
const port = 3000



app.get('/name', (req, res) => {

const url='https://en.wikipedia.org/wiki/R#Name';
     
  request(url,function(error, response, html) {
    
        if(error){console.error('error:', error); }else{handleHtml(html);}
      });
    function handleHtml(html){

        let $ = cheerio.load(html);
 
 
        let data = $("div#mw-content-text.mw-body-content mw-content-ltr div.mw-parser-output p");
 
        let text = $(data[0]).text();
        let htmlData = $(data[0]).html();
         res.send(htmlData);
     }
})

app.get('/history', (req, res) => {

  const url='https://en.wikipedia.org/wiki/R#History';
     
     
   request(url,function(error, response, html) {
    
    if(error){console.error('error:', error); }else{handleHtml(html);}
  });




function handleHtml(html){

    let $ = cheerio.load(html);


    let data = $("div#mw-content-text.mw-body-content mw-content-ltr div.mw-parser-output p");

    let text = $(data[0]).text();
    let htmlData = $(data[0]).html();
    res.send(htmlData);
 }

})

app.get('/other_systems', (req, res) => {

const url='https://en.wikipedia.org/wiki/R#Other_systems';
     
     
request(url,function(error, response, html) {
    
    if(error){console.error('error:', error); }else{handleHtml(html);}
  });




function handleHtml(html){

    let $ = cheerio.load(html);


    let data = $("div#mw-content-text.mw-body-content mw-content-ltr div.mw-parser-output p");

    let text = $(data[0]).text();
    let htmlData = $(data[0]).html();
    res.send(htmlData);
 }

})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



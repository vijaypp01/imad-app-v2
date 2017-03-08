var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'vijaypp01',
    database:'vijaypp01',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}
var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one': {
        title: 'Vijay|Article one',
        heading: 'Article One',
        date: 'feb 14, 2017'
    },
     'article-two': {
        title: 'Vijay|Article Two',
        heading: 'Article Two',
        date: 'feb 15, 2017'
        
    },
     'article-three' : { 
        title: 'Vijay|Article Three',
        heading: 'Article Three',
        date: 'feb 16, 2017'
    }
};    
var counter = 0;  
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});  

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var htmltemplate = `
        
        <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
          
        </head>
        <body> 
            <div class="container">
                <div>
                     <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3> 
                <div>
                    ${date}
                </div>
                <div>
                    <p>
                        This is my new Webpage and happy to use it
                    </p>
                </div>
            </div>    
        </body>
    </html>
    `;
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
   //make aselect request
   //return a result
   pool.query('SELECT * FROM test', function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result));
       }
   });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function(req,res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article One
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

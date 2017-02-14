var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Vijay|Article one',
    heading: 'Article One',
    date: 'feb 14, 2017'
};

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
                        This is my new Webpage 1 and happy to use it
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function(req,res) {
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

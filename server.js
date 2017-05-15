var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000 //used for heroku

app.use((req,res,next) => {
   if (req.headers['x-forwarded-proto'] === 'https') {
       res.redirect('http://' + req.hostname + req.url);       
   } else {
       next();
   }
});

app.use(express.static('public'));

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.listen(PORT, ()=> { console.log('Express server is up on port', PORT) });
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5555;

let db;
const dbPath = 'mongodb+srv://timo:timo@quotes-cluster-v05ei.azure.mongodb.net/test?retryWrites=true&w=majority';
const mongoClient = require('mongodb').MongoClient;

// CONNECT TO DATABASE
mongoClient.connect(dbPath, (err, client) => {
  if (err) return console.log(chalk.bgRed(' CONNECTION ERROR '), err);
  db = client.db('portfolio');
  app.listen(port, function() {
    console.log(chalk.green('server is running on port ' + port));
  });
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/sections', (req, res) => {
  db.collection('sections').find().toArray((err, result) => {
    res.send({
      sections: result
    })
  })
})

app.post('/sections', (req, res) => {
  db.collection('sections').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save') + err);
    console.log(chalk.green('Section saved'));
    res.redirect('/');
  });
});
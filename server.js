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
  })
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// SECTIONS

app.get('/sections', (req, res) => {
  db.collection('sections').find().toArray((err, result) => {
    res.send({
      sections: result
    })
  })
})

app.post('/sections', (req, res) => {
  db.collection('sections').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save section') + err);
    console.log(chalk.green('Section saved'));
    res.redirect('/');
  })
})

app.delete('/sections', (req, res) => {
  db.collection('sections').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete section') + err);
    console.log(chalk.green('Sections deleted'));
    res.redirect('/');
  })
})


// PROJECTS

app.get('/projects', (req, res) => {
  db.collection('projects').find().toArray((err, result) => {
    res.send({
      projects: result
    })
  })
})

app.post('/projects', (req, res) => {
  db.collection('projects').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save project') + err);
    console.log(chalk.green('Project saved'));
    res.redirect('/');
  })
})

app.delete('/projects', (req, res) => {
  db.collection('projects').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete project') + err);
    console.log(chalk.green('Projects deleted'));
    res.redirect('/');
  })
})


// WORKSECTIONS

app.get('/worksections', (req, res) => {
  db.collection('worksections').find().toArray((err, result) => {
    res.send({
      worksection: result
    })
  })
})

app.post('/worksections', (req, res) => {
  db.collection('worksections').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save worksection') + err);
    console.log(chalk.green('Worksection saved'));
    res.redirect('/');
  })
})

app.delete('/worksections', (req, res) => {
  db.collection('worksections').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete worksection') + err);
    console.log(chalk.green('Worksections deleted'));
    res.redirect('/');
  })
})


// TECHNOLOGIES

app.get('/technologies', (req, res) => {
  db.collection('technologies').find().toArray((err, result) => {
    res.send({
      technologies: result
    })
  })
})

app.post('/technologies', (req, res) => {
  db.collection('technologies').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save technology') + err);
    console.log(chalk.green('Technology saved'));
    res.redirect('/');
  })
})

app.delete('/technologies', (req, res) => {
  db.collection('technologies').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete technologies') + err);
    console.log(chalk.green('Technologies deleted'));
    res.redirect('/');
  })
})


// REFERENCES

app.get('/references', (req, res) => {
  db.collection('references').find().toArray((err, result) => {
    res.send({
      references: result
    })
  })
})

app.post('/references', (req, res) => {
  db.collection('references').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save reference') + err);
    console.log(chalk.green('reference saved'));
    res.redirect('/');
  })
})

app.delete('/references', (req, res) => {
  db.collection('references').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete References') + err);
    console.log(chalk.green('References deleted'));
    res.redirect('/');
  })
})


// QUALIPROJECTS

app.get('/qualiprojects', (req, res) => {
  db.collection('qualiprojects').find().toArray((err, result) => {
    res.send({
      qualiprojects: result
    })
  })
})

app.post('/qualiprojects', (req, res) => {
  db.collection('qualiprojects').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save qualiproject') + err);
    console.log(chalk.green('qualiproject saved'));
    res.redirect('/');
  })
})

app.delete('/qualiprojects', (req, res) => {
  db.collection('qualiprojects').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete qualiprojects') + err);
    console.log(chalk.green('qualiprojects deleted'));
    res.redirect('/');
  })
})


// SKILLS

app.get('/skills', (req, res) => {
  db.collection('skills').find().toArray((err, result) => {
    res.send({
      skills: result
    })
  })
})

app.post('/skills', (req, res) => {
  db.collection('skills').save(req.body, (err,result) => {
    if (err) return console.log(chalk.red('could not save skill') + err);
    console.log(chalk.green('skill saved'));
    res.redirect('/');
  })
})

app.delete('/skills', (req, res) => {
  db.collection('skills').deleteMany({}, (err, result) => {
    if (err) return console.log(chalk.red('could not delete skills') + err);
    console.log(chalk.green('skills deleted'));
    res.redirect('/');
  })
})
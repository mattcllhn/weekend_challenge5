var express= require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var path = require('path');
var addPet = require('../server/model/schema.js');
var mongoURI = 'mongodb://localhost:27017/pets';
mongoose.connect(mongoURI);

var port = process.env.PORT || 3000;

app.use(bodyParser.http());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(port, function(){
  console.log('server up on:', port);
});//app.listen

//loads home page
app.get('/',function(req, res){
  console.log(">>>>base url hit<<<<<<<");
  res.sendFile(path.resolve('public/index.html'));
});//app.get

//adds pet to database
app.post('/addPet', function(req, res){
  console.log('hit addPet post',req.body);
  var pet = req.body;
  var newPet = new addPet({
    name: pet.name,
    animal: pet.animal,
    age: pet.age,
    url: pet.url
  });//newPet object
  newPet.save(function(err){
    if(err){
    console.log('this is the error message _________________>>>>',err);
    res.sendStatus(500);
    }else{
      console.log('successfully created pet');
      res.sendStatus(200);
  }//else block
});//newPet.save
});// app. post

//grabs pets from the db so you can look at 'em, just look at 'em
app.get('/viewPets', function(req,res){
  console.log('viewPets hit');
  addPet.find({}, function(err, results){
    if (err) {
      console.log(err);
    }else{
      res.send(results);
    }//else
  });//addPet.find
});//app.get
app.use( express.static( 'public' ) );

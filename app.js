// jshint esversion:6

const mongoose = require('mongoose');

// Connection URL
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Fruit = new mongoose.model("Fruit", fruitSchema);
const Person = new mongoose.model("Person", personSchema);

const fruit = new Fruit({
  // name: "Apple",
  rating: 10,
  review: "A pretty good fruit!"
});

const mango = new Fruit({
  name: "mango",
  score: 8,
  reveiew: "Decent Fruit"

});


mango.save();

// fruit.save();

// const person = new Person({
//   name: "Amy",
//   age: 15,
//   favouriteFruit: pineapple
// });

Person.updateOne({name: "Joshua"}, {favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successful Updated name");
  }
});
// person.save();

// const banana = new Fruit({
//   name: "Banana",
//   rating: 9,
//   review: "Good fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Sweet fruit!"
// });
//
// const avocado = new Fruit({
//   name: "Avocado",
//   rating: 6,
//   review: "Funny Texture!"
// });
// // Fruit.insertMany([banana, orange, avocado], function(err){
// //   if(err){
// //     console.log(err);
// //   }else{
// //     console.log("Insert Successful");
// //   }
// // });


Fruit.find(function(err, fruits){
  fruits.forEach(function(f){
    if(err){
      console.log(err);
    }else{
      console.log(f.name);
    }
    mongoose.connection.close();
  });
});

// Fruit.updateOne({_id: "5ee324602f958412f47afa98"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successful Update");
//   }
// });

// Fruit.deleteOne({_id: "5ee324602f958412f47afa98"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successful Delete!");
//   }
// });

// Person.deleteMany({name: "Joshua"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Deleted!");
//   }
// });

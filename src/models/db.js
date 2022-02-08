const mongoose = require('mongoose');
const {Schema, model,connect } = mongoose;

connect('mongodb+srv://Joseneho:54321@cluster0.0pivw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('Base de datos conectada'))
.catch(err => console.error(err))


var schema = new Schema({
   
   titulo: String,
   descripcion: String 
  
  });
  
  
  module.exports = model("ARCHIVO", schema);
  
  
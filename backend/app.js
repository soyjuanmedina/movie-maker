const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.vxmkk.mongodb.net/moviemaker?retryWrites=true&w=majority', {
})
.then(() => {
  console.log('Mongo DB conected');
})
.catch((err) => {
  console.log('error: ', err);
})

app.get('/', (req, res) => {
  res.send('Request for de back')
})

app.listen(4200, () =>{
  console.log('Server on port 4200');
})
require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/usuario'));

const connectDB = async() => {
  try{
    await mongoose.connect(process.env.URLDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return 'Conectado a la base datos';
  } catch(e){
    return `${ e }`;
  }  
}

connectDB()
      .then( console.log)
      .catch( console.log )
 
app.listen(process.env.PORT, () => {
    console.log('Esuchando puerto ',process.env.PORT);
});

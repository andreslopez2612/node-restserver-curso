require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/
.static
app.use(bodyParser.json());

//Habilitar la carpeta public

app.use( express.static(path.resolve( __dirname, '../public' )) )


//Configuracion de rutas

app.use( require('./routes/index'));

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

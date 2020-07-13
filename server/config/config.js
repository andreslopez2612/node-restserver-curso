

// ==========   Puerto   ==========


process.env.PORT = process.env.PORT || 3000;


//  Entorno  //

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// Base de datos //

let urlDB;

if( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/curso';
}else{
    urlDB = 'mongodb+srv://AndresLo:fGpfMhHOATJqHEog@proyectos.2liaq.mongodb.net/curso';
}

process.env.URLDB = urlDB;
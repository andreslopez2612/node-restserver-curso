

// ==========   Puerto   ==========


process.env.PORT = process.env.PORT || 3000;


//  Entorno  //

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del Token //

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed de autenticacion //

process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

// Base de datos //

let urlDB;

if( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/curso';
}else{
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

//Google Client

process.env.CLIENT_ID = process.env.CLIENT_ID || '804293398206-e3a2m3hrd6ng6j69ete1uksbn1tasooi.apps.googleusercontent.com';
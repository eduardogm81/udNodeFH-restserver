// =============================
// Puerto
// =============================
process.env.PORT = process.env.PORT || 3000;

// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Vencimiento del Token
// =============================
// 60 segundos * 60 minutos * 24 horas * 30 dias
// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '30 days';

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
// =============================
// Google Client ID
// =============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '233868808613-9i859pfds2c4m179c6d4suj1l9sm3q32.apps.googleusercontent.com';


// =============================
// Base de datos
// =============================
let urlDb;
if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = process.env.MONGO_URI;
}
process.env.URLDB = urlDb;
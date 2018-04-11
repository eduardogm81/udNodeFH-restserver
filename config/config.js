// =============================
// Puerto
// =============================
process.env.PORT = process.env.PORT || 3000;
// =============================
// Entorno
// =============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// =============================
// Base de datos
// =============================
let urlDb;
if (process.env.NODE_ENV === 'dev') {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = `mongodb://cafe-user:123456@ds241489.mlab.com:41489/cafe`;
}
process.env.URLDB = urlDb;
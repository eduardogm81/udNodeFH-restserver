const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un role válido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre : {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email : {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password : {
        type: String,
        required: [true, 'El password es necesario']
    },
    img : {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        dafault: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);
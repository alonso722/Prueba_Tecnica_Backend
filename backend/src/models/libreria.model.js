const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const uri=process.env.mongouri1+process.env.password+process.env.mongouri2+process.env.LIB+process.env.mongouri4
const options ={
    useUnifiedTopology: true,
    useNewUrlParser:true
};
const conexion=mongoose.createConnection(uri,options);
const esquemalibreria = new Schema({
titulo:{type: String ,required:true},
codigolibreria:{type: Number ,required:true},
npaginas:{type: Number ,required:true},
editorial:{type: String ,required:true,default:"Desconocido"},
autores:{type: String ,required:true,default:"Desconocido"},
ispc:{type: Number ,required:true}

});
let modelolibreria=conexion.model("ejemplares",esquemalibreria);
module.exports=modelolibreria;
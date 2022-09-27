const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const uri=process.env.mongouri1+process.env.password+process.env.mongouri2+process.env.LIB+process.env.mongouri3
const options ={
    useUnifiedTopology: true,
    useNewUrlParser:true
};

const conexion=mongoose.createConnection(uri,options);
const esquemaaccidentes = new Schema({
    fecha_evento:{type: Date,default:"2000-01-18T00:00:00"},
    hora:{type: String ,default:"00:00:00"},
    tipo_de_evento:{type: String ,required:true},
    coordenada_x:{type: Number ,required:true},
    coordenada_y:{type: Number ,required:true},
    colonia:{type: String ,required:true},
    alcaldia:{type:String,required:true},
    tipo_de_interseccion:{type:String,default:" "},
    tipo_de_vehiculo_1:{type:String,default:" "},
    tipo_de_vehiculo_2:{type:String,default:" "},
    tipo_de_vehiculo_3:{type:String,default:" "},
    tipo_de_vehiculo_4:{type:String,default:" "},
    marca_de_vehiculo_1:{type:String,default:" "},
    marca_de_vehiculo_2:{type:String,default:" "},
    marca_de_vehiculo_3:{type:String,default:" "},
    marca_de_vehiculo_4:{type:String,default:" "},
    unidad_medica_de_apoyo:{type:String,default:" "},
    prioridad:{type:String,default:" "},
    color_vehiculo_1:{type:String,default:" "},
    color_vehiculo_2:{type:String,default:" "},
    color_vehiculo_3:{type:String,default:" "}
});
let Db_accidentes=conexion.model("DB_accidentes",esquemaaccidentes,"accidentes");
module.exports=Db_accidentes;
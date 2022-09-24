const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");
const esquemaAccidentes =mongoose.Schema;
const Db_accidentes=mongoose.model("DB_accidentes",new Schema({}),"accidentes");
module.exports=Db_accidentes;
const mongoose=require('mongoose');
const uri=process.env.mongouri1+process.env.password+process.env.mongouri2+process.env.mongouri3;

const options ={
    useUnifiedTopology: true,
    useNewUrlParser:true
};

mongoose.connect(uri,options)
    .then(db=>console.log("Conexion de base de datos MongoDB lista")).catch(er=>console.log(er));

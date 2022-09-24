const modeloAirbnb=require('../models/airbnb.model.js');

const Airbnbcontrolador={};
Airbnbcontrolador.hogar=(req,res)=>{
    //res.send('Bienvenido al Inicio');
    res.status(200).json({
        consultaGeneral:"/airbnb/consulta-general",
        consultaNombre:"/airbnb/consulta-nombres"
    });
    }
    Airbnbcontrolador.consultaGeneral=async(req,res)=>{
        try{
            console.log("Ruta /airbnb/consulta-general solicitada");
            const respuesta=await modeloAirbnb.find().limit(5);
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
        }
    }
    Airbnbcontrolador.servicioconsulta_nombre= async (req,res)=>{
        try {
            console.log("Ruta Consulta NOmbre");
            const nombre=req.query.mensaje;
            const respuesta=await modeloAirbnb.findOne({name: nombre});
            res.status(200).json({respuesta})
        } catch (error) {
            res.status(error.status).json({mensajeError: error.mensaje})
        }
    }
module.exports=Airbnbcontrolador;


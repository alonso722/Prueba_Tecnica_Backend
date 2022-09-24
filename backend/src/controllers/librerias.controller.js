
const libreriaModelo=require('../models/libreria.model');
const libreriaController={};
libreriaController.Servicehome=(req,res)=>{
    res.status(200).json({
        crear: "/libreria/crear Solicitar con Post",
        consultaGeneral: "/libreria/consulta-general",
        consultaEsp: "/libreria/consulta-especifica"
    });
};

module.exports=libreriaController;
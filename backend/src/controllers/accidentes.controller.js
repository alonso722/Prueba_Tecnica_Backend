const Db_accidentes=require('../models/accidentes.insertar.model');

const Accidentescontrolador={};
Accidentescontrolador.hogar=(req,res)=>{
    //res.send('Bienvenido al Inicio');
    res.status(200).json({
        consulta_punto11:"/accidentes/parte1/punto1",
        consulta_punto12:"/accidentes/parte1/punto2",
        consulta_punto13:"/accidentes/parte1/punto3",
        consulta_punto14:"/accidentes/parte1/punto4/",
        consulta_punto15:"/accidentes/parte1/punto5/",
        
        consulta_punto21:"/accidentes/parte2/punto1",
        consulta_punto22:"/accidentes/parte2/punto2",
        consulta_punto23:"/accidentes/parte2/punto3",
        consulta_punto24:"/accidentes/parte2/punto4",
        consulta_punto25:"/accidentes/parte2/punto5"  
    });
    }
    Accidentescontrolador.consulta_punto11=async(req,res)=>{
        try{
            //res.send('Entro a cargar los valores');
            //const respuesta=await Db_accidentes.save();
            let r = { texto: req.query.t1, nombre: req.query.t2,
                proyecto:req.query.t3};
                
            //const respuesta='satisfactoria';
            res.status(200).json({r});
        }catch(error){
            console.log(error);
        }


    }
    Accidentescontrolador.consulta_punto12=async(req,res)=>{
        try{
            let r = { texto: req.query.t1, nombre: req.query.t2,
                proyecto:req.query.t3};
            //const respuesta='satisfactoria';
            res.status(200).json({r});
        }catch(error){
            console.log(error);
        }


    }
    Accidentescontrolador.consulta_punto13=async(req,res)=>{
        let id=req.params.id;
        //mostrar todos
        //const respuesta=await Db_accidentes.find().limit(5);
        try{
        const respuesta=await Db_accidentes.findOne({ _id: id });
        
        //console.log({Db_accidentes});
        //632e843b9e1ace3928fea5a3
        res.status(200).json({respuesta});}catch(error){
            console.log(error);
        
        }
    }
    Accidentescontrolador.consulta_punto14=async(req,res)=>{
        //put modificar
        let id=req.params.id;
        
            res.status(200).json({id});
    }
    Accidentescontrolador.consulta_punto15=async(req,res)=>{
        //delete eliminar
        let id=req.params.id;
        res.status(200).json({id});

    }

    Accidentescontrolador.consulta_punto21=async(req,res)=>{

    }
    Accidentescontrolador.consulta_punto22=async(req,res)=>{
    
    }
    Accidentescontrolador.consulta_punto23=async(req,res)=>{
    
    }
    Accidentescontrolador.consulta_punto24=async(req,res)=>{
    
    }



    /*Accidentescontrolador.consultaGeneral=async(req,res)=>{
        try{
            console.log("Ruta /accidentes/consulta1 solicitada");
            const respuesta=await Db_accidentes.find().limit(5);
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
        }
    }
    Accidentescontrolador.servicioconsulta_nombre= async (req,res)=>{
        try {
            console.log("Ruta Consulta NOmbre");
            const nombre=req.query.mensaje;
            const respuesta=await Db_accidentes.findOne({name: nombre});
            res.status(200).json({respuesta})
        } catch (error) {
            res.status(error.status).json({mensajeError: error.mensaje})
        }
    }*/



module.exports=Accidentescontrolador;


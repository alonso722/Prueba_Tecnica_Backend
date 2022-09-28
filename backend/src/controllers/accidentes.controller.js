const Db_accidentes=require('../models/accidentes.insertar.model');

const Accidentescontrolador={};
Accidentescontrolador.hogar=(req,res)=>{
    //res.send('Bienvenido al Inicio');
    res.status(200).json({
// 2.	Crear un endpoint POST que envíe 4 parámetros( de tu elección), inserte un nuevo registro y regrese el nuevo ID en formato JSON.
// 3.	Crear un endpoint GET que envíe el parámetro ID y regrese el registro correspondiente en formato JSON.
// 4.	Crear un endpoint UPDATE que envíe el ID y 4 parámetros( de tu elección), para actualizar el registro correspondiente y regresar la respuesta en formato JSON.
// 5.	Crear un endpoint DELETE que envíe el parámetro ID, borre el registro correspondiente y regresar la respuesta en formato JSON.
//Para comentar es (Ctrl+k) + [(Ctrl+c)(Ctrl+u)]
        // consulta_punto11:"/accidentes/parte1/punto1",//visualizar la mayoria de informacion
        // consulta_punto12:"/accidentes/parte1/punto2",//Enviare 4 datos para insertar un nuevo registro
        // consulta_punto13:"/accidentes/parte1/punto3",
        // consulta_punto14:"/accidentes/parte1/punto4",
        // consulta_punto15:"/accidentes/parte1/punto5",
        consulta_ruta1:"/accidentes/parte1",
        // consulta_punto21:"/accidentes/parte2/punto1",
        // consulta_punto22:"/accidentes/parte2/punto2",
        // consulta_punto23:"/accidentes/parte2/punto3",
        // consulta_punto24:"/accidentes/parte2/punto4",
        consulta_ruta2:"/accidentes/parte2"
    });
}
Accidentescontrolador.consulta_ruta1=(req,res)=>{
    res.status(200).json({
        consulta_punto11:"/accidentes/parte1/punto1",//visualizar la mayoria de informacion
        consulta_punto12:"/accidentes/parte1/punto2",//Enviare 4 datos para insertar un nuevo registro
        consulta_punto13:"/accidentes/parte1/punto3",
        consulta_punto14:"/accidentes/parte1/punto4",
        consulta_punto15:"/accidentes/parte1/punto5"
    });
    };

    Accidentescontrolador.consulta_ruta2=(req,res)=>{
        res.status(200).json({
            consulta_punto21:"/accidentes/parte2/punto1",//visualizar la mayoria de informacion
            consulta_punto22:"/accidentes/parte2/punto2",//Enviare 4 datos para insertar un nuevo registro
            consulta_punto23:"/accidentes/parte2/punto3",
            consulta_punto24:"/accidentes/parte2/punto4",
        });
        };
   
    Accidentescontrolador.consulta_punto11=async(req,res)=>{
        try{
            //res.send('Entro a cargar los valores');
            //const respuesta=await Db_accidentes.save();
            const respuesta=await Db_accidentes.find().limit(50);
            //const respuesta=await Db_accidentes.find();
                
            //const respuesta='satisfactoria';
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
        }


    }
    Accidentescontrolador.consulta_punto12=async(req,res)=>{
        try{
            let r = { tipo_de_evento:req.query.te,
                coordenada_x:req.query.cx,
                coordenada_y:req.query.cy,
                colonia:req.query.col,
                alcaldia:req.query.alc};
                
                
                //const Db_accidentes = mongoose.model('Tank', yourSchema);

            const insertar = new Db_accidentes(r);
            insertar.save(function (err) {
              if (err) return handleError(err);
            });

            // const respuesta=await Db_accidentes.insertOne(r);
            let id=insertar._id;
            //const respuesta='satisfactoria';
            res.status(200).json({mensaje:"El Id de la insercion de datos es",id:id});
        }catch(error){
            console.log(error);
        }


    }
    Accidentescontrolador.consulta_punto13=async(req,res)=>{
       // let id=req.params.id;
        let id=req.query.id;
        //mostrar todos
        //const respuesta=await Db_accidentes.find().limit(5);
        try{
        const respuesta=await Db_accidentes.findOne({ _id: id });
        
        //console.log({Db_accidentes});
        //632e843b9e1ace3928fea5a3
        res.status(200).json({respuesta});}catch(error){
            respuesta='Error';
            console.log(respuesta);
            res.status(400).json({respuesta});
        }
    }
    Accidentescontrolador.consulta_punto14=async(req,res)=>{
        //put modificar
        //let id=req.params.id;
        try{
            const id=req.query.id;
            let r = { 
                tipo_de_evento:req.query.te,
                coordenada_x:req.query.cx,
                coordenada_y:req.query.cy,
                colonia:req.query.col,
                alcaldia:req.query.alc};
            //console.log({Db_accidentes});
            //632e843b9e1ace3928fea5a3
            //realizar un update
            //updateOne({ name: 'Jean-Luc Picard' }, r);
            let respuesta=await Db_accidentes.updateOne({ _id: id }, r);
            res.status(200).json({respuesta});}catch(error){
                
                respuesta='Error';
                console.log(respuesta);
                res.status(400).json({respuesta});
            }
    }
    Accidentescontrolador.consulta_punto15=async(req,res)=>{
        //delete eliminar
        try{
            const id=req.query.id;
            
            let respuesta=await Db_accidentes.deleteOne({ _id: id });
            res.status(200).json({respuesta});}catch(error){
                
                respuesta='Error';
                console.log(respuesta);
                res.status(400).json({respuesta});
            }

    }

    Accidentescontrolador.consulta_punto21=async(req,res)=>{
        //Room.find({}).sort({date: -1}).exec((err, docs) => { });
        try{
            let respuesta=await Db_accidentes.find().sort({fecha_evento: -1}).limit(10);
            // let respuesta=await Db_accidentes.find();
            // let r2=[];
            // respuesta.forEach((p)=>{
            //     r2.push(p.fecha_evento);
            // });
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
        }
        
    }
    Accidentescontrolador.consulta_punto22=async(req,res)=>{
    //Seria solamente por $group ya que match es el filtrado
        try{
            let respuesta=await Db_accidentes.aggregate([{$group:{_id:"$alcaldia",Num_Choques:{$sum:1}}}]).sort({Num_Choques: -1}).limit(10);
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
            res.status(400).json({respuesta:"Error"});
        }
    }
    // db.orders.aggregate( [
    //     // Stage 1: Filter pizza order documents by pizza size
    //     {
    //        $match: { size: "medium" }
    //     },
    //     // Stage 2: Group remaining documents by pizza name and calculate total quantity
    //     {
    //        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    //     }
    //  ] )
    Accidentescontrolador.consulta_punto23=async(req,res)=>{
        try{
            let respuesta=await Db_accidentes.aggregate([{$group:{_id:"$marca_de_vehiculo_1",Num_Choques:{$sum:1}}}]).sort({Num_Choques: -1}).limit(10);
            res.status(200).json({respuesta});
        }catch(error){
            console.log(error);
            res.status(400).json({respuesta:"Error"});
        }
    }
    Accidentescontrolador.consulta_punto24=async(req,res)=>{
        try {

            let respuesta=await Db_accidentes.find().sort({fecha_evento: -1}).limit(10);
            res.status(200).json({respuesta})
        } catch (error) {
            res.status(error.status).json({mensajeError: error.mensaje})
        }
    }



module.exports=Accidentescontrolador;


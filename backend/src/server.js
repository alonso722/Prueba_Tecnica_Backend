const express =require('express');


const app =express();
app.set('port',process.env.PORT || 3000)
app.set(express.json());
app.set(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/index.routes'));
app.use(require('./routes/accidentes.routes'));
//app.use(require('./routes/libreria.routes'));
module.exports=app;

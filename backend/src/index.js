require('dotenv').config();
const app=require('./server');
require('./database');
app.listen(app.get('port'),(req, res)=>{
    console.log("Servidor levantado puerto",app.get('port'));
});
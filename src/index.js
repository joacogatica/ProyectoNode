const express = require("express"); //esto es framework web
const app  = express();


app.use(express.urlencoded({extended : false}));


var puerto = 8080 || process.env.PORT;
app.set("json spaces",2); // espacio mostrar en json
//agregaciones
app.use(express.json());

app.use('/api/jgatica',require('./paths/consolas'));

//paths
app.get('/',(request,response)=>{
let data={
    "codigo":1,
    "mensaje" :"bienvenido" 
}   
    response.json(data);
});

app.listen(puerto,()=>{
    console.log(`bienvenido puerto : ${puerto}`);
});
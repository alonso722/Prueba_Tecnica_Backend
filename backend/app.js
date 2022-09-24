var express = require('express');
var app = express(); //Contenedor de Endpoints o WS Restful

app.get("/", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio','factor':123456};
    res.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta2", async function (req, res) {
    let r = {};
    res.json(r);
});

app.put('/generasiguiente/:number', (req, res) => {
    let r = {'dato': req.params.number};
    res.json(r);
});

app.get("/ruta3", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta4", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta5/subruta/todos", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta6/crear", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta7/echo", async function (req, res) {
    let r = { texto: req.query.texto, nombre: req.query.nombre,
      proyecto:req.query.proyecto};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

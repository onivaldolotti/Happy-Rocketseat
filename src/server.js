const express = require('express');
const path = require('path');
const {index,createOrphanage,orphanage,orphanages,saveOrphanage} = require('./pages.js');

const server = express();

server
    //utilizar body do req
    .use(express.urlencoded(true))
    //utilizando arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //rotas
    .get('/',index)
    .get('/orphanage',orphanage)
    .get('/create-orphanage',createOrphanage)
    .get('/orphanages',orphanages)
    .post('/save-orphanage',saveOrphanage)
    //return response.sendFile(path.join(__dirname,'views','index.hbs'));

//iniciar server
server.listen(5500);
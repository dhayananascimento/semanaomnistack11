const express = require('express');
const OngController = require('./ controllers/OngController');
const IncidentController = require('./ controllers/IncidentController');
const ProfileController = require('./ controllers/ProfileController');
const SessionController = require('./ controllers/SessionController');




const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;


/*
    Rotas / Recurso
*/

/*
    Metodos HTTP:

    GET: buscar/listar informação no back-end
    POST: criar informação no back-end
    PUT: alerar informação no back-end
    DELETE: deletar informação no back-end
*/

/*
    Tipos de Parametros:

    Query params: parametros nomeados enviados na rota apos "?" (filtros, paginação,etc), adicionar utilizar o "&"
    Route params: parametros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    Tipos de bancos:

    SQL: Mysql,SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
 */

 /*
    Banco Relacional:

    Driver: SELECT * FROM users
    Query Builder: table('users'). select.('*').where('')

    knex.js é um query builder
  */

 /*
    Exemplo de uso
    routes.post('/users', (request, response) => {

        const body = request.body; //post
        //const params = request.query; //get
        //const id = request.params; //usa '/users:id' e get

        console.log(body);

        return response.json({
            evento: "Semana Omnistack 11.0",
            aluna: "Dhayana Silva"
        });
    });
*/

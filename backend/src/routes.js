const express = require('express');
const OngController = require('./ controllers/OngController');
const IncidentController = require('./ controllers/IncidentController');
const ProfileController = require('./ controllers/ProfileController');
const SessionController = require('./ controllers/SessionController');
const {celebrate, Segments, Joi} = require('celebrate');



const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(13).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
        
}), OngController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:Joi.number().required()
    })
}),IncidentController.delete);


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

const express = require('express');

const OngController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const route = express.Router();


/**
 * Metodos HTTP: 
 * 
 * GET: Buscar/Listar um informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Altear um informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

/**
 * Tipos de paramentos
 * 
 * Query Params: Parametros nomeados envidados na rota apos "?" (Filtrar, paginacao)
 * Route Params: Paramentros utilizado para identificar recursos
 * Request Body: Corpo da requisicao utilizado para criar ou altera um informacao
 */

route.post('/session', SessionController.create);

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/incidents', IncidentController.index);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);

route.get('/profile', ProfileController.index);


module.exports = route;
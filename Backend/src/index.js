const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * ========Metodos HTPP:==========
  * Get: Buscar informação do Back-end.
  * POST: Criar informação do Back-end.
  * PUT: Alterar uma informação no Back-end.
  * DELETE: Deletar uma informação no Back-end. 
  */

  /**
   * ========Tipos de parâmetros:========
   * Query Params: Paramêtros nomeados enviados na rota após o "?" geralmente eles podem retornar (Filtros, Paginação)
   * Ex: "http://localhost:3030/users?name=Diego"
   * Route Params: Paramêtros utilizados para identificar um único recurso
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * ========Banco de dados=======
    * SQL: MySQL, SqLite, PostgreSQL, Oracle, Microsot SQL Server
    * NoSQL: MongoDB, CouchDB, Etc...
    * 
    * ========Formas de comunicar o Banco de dados com o projeto========
    * Driver: SELECT * FROM users
    * Query Builder: table('Users').select('*').where() 
    */




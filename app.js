'use strict';

const { sequelize, models } = require('./db');

// Pegar referências para nossos modelos. 
const { Person, Movie } = models;

// Defina variáveis para as people e movies.
// NOTA: Usaremos essas variáveis para ajudar na criação
// de nossos dados relacionados depois de definirmos os relacionamentos
// (ou associações) entre nossos modelos.
let bradBird;
let vinDiesel;
let eliMarienthal;
let craigTNelson;
let hollyHunter;
let theIronGiant;
let theIncredibles;

console.log('Testing the connection to the database...');

(async () => {
  try {
    //Teste a conexão com o banco de dados 
    console.log('Connection to the database successful!');

    // Sync dos modelos
    console.log('Synchronizing the models with the database...');

    // Adicionar pessoas ao banco de dados 
    console.log('Adding people to the database...');
  
    // Atualize as variáveis globais para as instâncias people

    // Adicionar filmes ao banco de dados 
    console.log('Adding movies to the database...');

    // Recuperar movies 

    // Recuperar people

    process.exit();
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();
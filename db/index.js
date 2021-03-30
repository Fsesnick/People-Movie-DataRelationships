'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

console.info('Instantiating and configuring the Sequelize object instance...');

const options = {
  dialect: 'sqlite',
  storage: 'movies.db',
  define: {
    // Esta opção remove as colunas `createdAt` e` updatedAt` das tabelas
     // que o Sequelize gera a partir de nossos modelos. Essas colunas são frequentemente úteis
     // com aplicativos de produção, então normalmente os deixamos habilitados, mas para nosso
     // propósitos, vamos manter as coisas o mais simples possível.
    timestamps: false,
  },
};

const sequelize = new Sequelize(options);

const models = {};

// Importe todos os modelos. 
fs
  .readdirSync(path.join(__dirname, 'models'))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    console.info(`Importing database model from file: ${file}`);
    const model = require(path.join(__dirname, 'models', file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  });

// Se disponível, chame o método para criar associações. 
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    console.info(`Configuring the associations for the ${modelName} model...`);
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  Sequelize,
  models,
};

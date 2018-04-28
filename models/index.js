var Sequelize = require("sequelize");

// var sequelize = new Sequelize(
//   process.env.DATABASE_NAME, 
//   process.env.DATABASE_USERNAME, 
//   process.env.DATABASE_PASSWORD, { 
//     dialect: 'postgres',
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     pool:{},
//   }
// );
var sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = {
  User: sequelize.import('./User'),
  Story: sequelize.import('./Story'),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
}); //loops through all the models an runs their associator functions on the other models

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

// psql dbnamehere < node_modules/connect-pg-simple/table.sql  run this to create the table for sessions

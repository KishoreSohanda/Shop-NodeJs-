const Sequelize=require('sequelize');

const dbPass =require('./dbPassword');

const sequelize= new Sequelize('node-complete','root',dbPass,{dialect:'mysql',host:'localhost'});

module.exports=sequelize;
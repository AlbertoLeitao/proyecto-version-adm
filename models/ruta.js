const Sequelize = require('sequelize');
const datab = require('../database/database');
const aereopuerto = require('../models/aereopuerto');

const rutas = datab.define("rutas", {
   
      idruta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      IATA_origen : {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:aereopuerto,
          key:'IATA',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }

      },
      IATA_destino: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:aereopuerto,
          key:'IATA',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
  });

  module.exports = rutas;
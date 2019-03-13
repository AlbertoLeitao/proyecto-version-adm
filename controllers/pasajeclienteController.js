const controller = {};
const cliente = require('../models/cliente')


const compra = require('../models/compra')

const pasaje = require('../models/pasaje')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT compras.idpersona as idc, compras.idpasaje as idp, compras.cantidad_de_equipaje as equi, clientes.nombre as nom, clientes.genero as gen, pasajes.idvuelo as vuel FROM compras INNER JOIN clientes on compras.idpersona=clientes.idpersona INNER JOIN pasajes on compras.idpasaje=pasajes.idpasaje ', (err, pasajecliente) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pasclien', {
                    data: pasajecliente
                });
        });
    });
};

module.exports = controller;
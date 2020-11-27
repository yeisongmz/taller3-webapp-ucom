var express = require('express');
var cors = require('cors');
var router = express.Router();
const axios = require('axios');

var _ = require('lodash');

let baseUrlApi="https://petstore.swagger.io/#/pet"


 //Ejemplo de cómo recibir párametros de tipo GET en la url, en este caso recibimos un parametro de tipo Query Param llamado name
 router.get('/mi_tienda/mascotas',cors(),async(req,res,next)=>{
    console.log("lista de mascotas");
    axios.get(baseUrlApi+'/findByStatus?status='+req.query.name)
    .then(function (response) {
      // handle success
      console.log(response);

      res.send(response.data.data);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      res.send("Error al obtener los datos",error);
    })
    .then(function () {
      // always executed
    });
  

});

router.get('/mi_tienda/pedidos',cors(),async(req,res,next)=>{
  console.log("lista de pedidos")
  axios.get(baseUrlApi+'/order/findByStatus?status='+req.query.name)
  .then(function (response) {
    // handle success
    console.log(response);

    res.send(response.data.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.send("Error al obtener los datos",error);
  })
  .then(function () {
    // always executed
  });


});
const route = require("express").Router();
let stand = require("./stand.js");

route.get("/", (request, response) => {
  const { name, ciudad } = request.query; //Se usan queryselector osea /api?name=ivan o en el if de ciudad /api?ciudad=san juan
  console.log(request.query);
  if (name) {
    let nombre = stand.find(
      (integrante) => integrante.name.toLowerCase() === name.toLowerCase()
    );
    return response.json(nombre);
  }
  if (ciudad) {
    //IMPORTANTE PARA EL CHECK: SABER METODOS DE ARRAYS!!!!!!!!!!!!!!!!!!!
    let filtrados = stand.filter(
      (integrante) => integrante.ciudad.toLowerCase() === ciudad.toLowerCase()
    );
    return response.json(filtrados);
  }

  return response.json(stand);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;

  // IMPORTANTE PARA EL CHECK!!!: SABER QUE TIPO DE DATOS VOY A COMPARAR

  let integranteId = stand.find((int) => int.id.toString() === id);
  return res.json(integranteId);
});

module.exports = route;

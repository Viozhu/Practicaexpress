const express = require("express");
const app = express();

const routeApi = require("./routes/api");
const routeNuevoIntegrante = require("./routes/nuevoIntegrante");
const routeUpdate = require("./routes/update");
const routeDelete = require("./routes/delete");

app.use(express.json());

app.use("/api", routeApi);

app.use("/nuevoIntegrante", routeNuevoIntegrante);

app.use("/update", routeUpdate);

app.use("/delete", routeDelete);

app.get("/", (req, res) => {
  res.send("Routes /api - /nuevoIntegrante - /update - /delete");
});

app.listen(3030, () => {
  console.log("app listen in port 3030");
});

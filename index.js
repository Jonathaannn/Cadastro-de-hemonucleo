const location = require("./model/location.js");
const controllers = require("./controller/controller.js");
const cors = require("cors");

async function sincronizar() {
  await location.sync();
  console.log("Sincronizado");
}
sincronizar();

const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/hemonucleos", controllers.listarHemonucleos);
app.post("/hemonucleos", controllers.criarHemonucleos);

Lista = () => {
  fetch("http://localhost:3000/hemonucleos/")
    .then((res) => res.json())
    .then((pontos) => {
      marker = new google.maps.Marker({
        map: map,
      });

      pontos.forEach((local) => {
        marker.setPosition(
          new google.maps.LatLng(
            local.geometria.coordinates[0],
            local.geometria.coordinates[1]
          )
        );
      });
    });
};

app.listen(process.env.API_PORT, () => {
  console.log(`Example app listening on port ${process.env.API_PORT}`);
});

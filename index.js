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
const port = 3000;

app.get("/hemonucleos", controllers.listarHemonucleos);
app.post("/hemonucleos", controllers.criarHemonucleos);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

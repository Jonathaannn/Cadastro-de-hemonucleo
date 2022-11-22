const Location = require("../model/location.js");

const listarHemonucleos = async (req, res) => {
  const hemonucleos = await Location.findAll();
  res.status(200).send(hemonucleos);
};

const criarHemonucleos = async (req, res) => {
  const nome = req.body.nome;
  const geometria = {
    type: "Point",
    coordinates: [req.body.lat, req.body.lng],
  };
  const location = Location.build({ nome, geometria });
  location
    .save()
    .then(() => {
      res.status(201).send("Local marcado com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Falha ao salvar o local");
    });
};

module.exports = { listarHemonucleos, criarHemonucleos };

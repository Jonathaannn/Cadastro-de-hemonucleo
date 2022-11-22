const location = require("../model/location.js");

const listarHemonucleos = async (req, res) => {
  const hemonucleos = await location.findAll();
  res.status(200).send(hemonucleos);
};

const criarHemonucleos = async (req, res) => {
  try {
    await location.create(req.body);
    res.status(201).send("Criado com sucesso");
  } catch (erro) {
    console.log(erro);
    res.status(400).send("houve erro");
  }
};

module.exports = { listarHemonucleos, criarHemonucleos };

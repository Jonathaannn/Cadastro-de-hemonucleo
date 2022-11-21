const Sequelize = require("sequelize");
const database = require("../database/database.js");

const location = database.define(
	"location",
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			primaryKey: true,
		},
		nome: {
			type: Sequelize.STRING,
		},
		geometria: {
			type: Sequelize.GEOMETRY,
		},
	},
	{ timestamps: false, createdAt: false, updatedAt: false }
);

module.exports = location;

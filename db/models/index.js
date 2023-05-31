const defineEvent = require("./events.model");

function defineModels( sequelize ){
    defineEvent(sequelize)
}

module.exports = defineModels
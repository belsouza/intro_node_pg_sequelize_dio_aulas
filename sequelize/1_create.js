const models = require('./models')

async function create(){
  await models.sequelize.sync({force: true}) //Nunca se usa force em ambiente de produção
  await models.sequelize.close()

  console.log("Banco sincronizado");
}
create()

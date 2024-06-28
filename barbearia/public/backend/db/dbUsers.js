require('dotenv').config()
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/"
const databaseName = 'dadosClientes'
const collectionDb = 'cadastroCliente'
const client = new MongoClient(url)

const newConnectDataBase = async() => {
    const dataBaseConnect = await client.connect()
    const databaseDb = await dataBaseConnect.db(databaseName)
    const collection = await databaseDb.collection(collectionDb)
    return collection
}

const registerPedidosUsers = async (Pedido, Pagamento, Dia) => {
  try {
    const dataBase = await newConnectDataBase();
    await dataBase.insertOne({Pedido: Pedido, Pagament: Pagamento, dia: Dia})
  } catch (error) {
    console.error("nao foi possivel add os dados.");
  }
};


const dbLoginUser = async(emai, pass) => {
  try {
    const database = await newConnectDataBase()
    const searchLoginDb = await database.find().toArray()
    searchLoginDb.forEach(data => {
    const {senha, email} = data
    if (!email == emai && !pass == senha) {
      console.log("dados incorretos");
    }

    })
  } catch (error) {
    console.error("error inesperado.")
  }
}



module.exports = registerPedidosUsers
module.exports = dbLoginUser
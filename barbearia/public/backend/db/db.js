require('dotenv').config()
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/"
const databaseName = 'dadosClientes'
const collectionDb = 'dadosClientes'
const client = new MongoClient(url)

const newConnectDataBase = async() => {
    const dataBaseConnect = await client.connect()
    return dataBaseConnect
}


const newDadosDataBase = async (Pedido, Pagamento, Dia) => {
  try {
    const dataBase = await newConnectDataBase();
    const databaseDb = await dataBase.db(databaseName);
    const databaseCollection = databaseDb.collection(collectionDb);
    // await databaseCollection.insertMany({})
  } catch (error) {

  }
};

  module.exports = newDadosDataBase
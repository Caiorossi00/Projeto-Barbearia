require('dotenv').config()
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/"
const databaseName = 'dadosClientes'
const collectionDb = 'cadastroCliente'
const client = new MongoClient(url)

const newConnectDataBase = async() => {
    const dataBaseConnect = await client.connect()
    return dataBaseConnect
}

const newDadosDataBase = async (Name, Email, Idade, Senha) => {
  try {
    const dataBase = await newConnectDataBase();
    const databaseDb = await dataBase.db(databaseName);
    const databaseCollection = databaseDb.collection(collectionDb);
    await databaseCollection.insertOne({nome: Name, email: Email, idade: Idade, senha: Senha})
    console.log('user cadastro com sucesso.');
  } catch (error) {
    console.error("nao foi possivel add os dados.");
  }
};




module.exports = newDadosDataBase
const databaseRegisterUsers = require("../db/dbCadastroProdutos");
const jwt = require("jsonwebtoken")
const crypetor = require("crypto")
const randomPassWorldKey = crypetor.randomBytes(32).toString("hex")
const SECRET_KEY = randomPassWorldKey

module.exports = (api) => {
  const bodyMiddle = require("body-parser");
  api.use(bodyMiddle.json());
  api.post("/registro", async (res, data) => {
    try {
      const { nome, email, idade, senha } = res.body;
      validarEmail(email, data);
      validarSenha(senha, data);
      await validarCamposObrigarios(nome, email, idade, senha, data);
    } catch (error) {
      data.send({ message: "servidor nao encontrou ou deu um erro, tente novamente mais tarde.", status: 404, }).status(404);
    }
  });
}

const validarEmail = (email, data) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    data.send({ message: "Digite um email valido, obrigado.", status: 400 }).status(400);
    return;
  }
}

const validarSenha = (senha, data) => {
  if (senha.length < 8) {
    data.send({ message: "Sua senha deve ter mais de oito caracteres", status: 400 }).status(400);
    return;
  }
}

const validarCamposObrigarios = async(nome, email, idade, senha, data) => {
  if (!nome && !email && !idade & !senha) {
    data.send({ message: "Os campo é obrigatório e não pode ficar vazio.", status: 400, }).status(400);
  } else {
    await databaseRegisterUsers(nome, email, idade, senha);
    const token = jwt.sign({ nome, email, idade, senha }, SECRET_KEY, { expiresIn: "1h" });
    data.send({ message: "Dados recebidos", tk: token, status: 200, registro: true, }).status(200);
  }
}
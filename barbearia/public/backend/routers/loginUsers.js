const dbLoginUser = require("../db/dbUsers");

module.exports = (api) => {
  api.post("/login", async(res, data) => {
    try {
      const { email, senha } = res.body;
      if (!email && !senha) {
        data.send({message: "Os campo é obrigatório e não pode ficar vazio.", status: 400, }).status(400);
        return; 
      }

       
      data.send({message: "a", status: 200, })
    } catch (error) {
      data.send({message: "ocorreu um erro inesperado, tente novamente mais tarde.", status: 404}).status(404)
      console.log("erro inesperado.");
    }
  });
};

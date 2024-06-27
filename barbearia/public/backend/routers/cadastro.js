//nome
//email
//idade 
module.exports = (api) => {
    const bodyMiddle = require("body-parser");
    api.use(bodyMiddle.json());
    api.post("/registro", async (res, data) => {
      try {
        const { pedido, pagamento, dia } = res.body;
        console.log(res.body);
        if (!pedido && !pagamento && !dia) {
         data.send({message: "Os campo é obrigatório e não pode ficar vazio.", status: 400,  }).status(400); }
        await newDadosDataBase(pedido, pagamento, dia);
        data.send({  message: "Os dados foram recebidos com sucesso.",  status: 200, }) .status(200);
      } catch (error) {
        data.send({message:"servidor nao encontrou ou deu um erro, tente novamente mais tarde.",status: 404, }).status(404);
      }
    });
}
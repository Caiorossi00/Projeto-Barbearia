async function a() {
  try {
    const daya = await fetch("http://localhost:8080/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: "silva", email: "ggyvfv@gmail.com", idade: 1448, senha: "147444444444" }),
    });
    const testes = await daya.json();
    console.log(testes);
  } catch (error) {
    console.log(error);
  }
}


a();

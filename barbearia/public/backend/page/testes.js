async function a() {
  try {
    const daya = await fetch("http://localhost:8080/ficha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pedido: "carlos", pagamento: "pix", dia: 33 }),
    });
    const testes = await daya.json();
    console.log(testes);
  } catch (error) {
    console.log(error);
  }
}

a();

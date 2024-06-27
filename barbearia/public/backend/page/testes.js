async function a() {
  try {
    const daya = await fetch("http://localhost:8080/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: "carlos", email: "carlos@gmail.com",idade : 43 }),
    });
    const testes = await daya.json();
    console.log(testes);
  } catch (error) {
    console.log(error);
  }
}

a();

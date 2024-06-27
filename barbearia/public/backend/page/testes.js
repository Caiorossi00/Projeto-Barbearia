async function a() {
  try {
    const daya = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "carlos@gmail.com", senha: 333 }),
    });
    const testes = await daya.json();
    console.log(testes);
  } catch (error) {
    console.log(error);
  }
}


a();

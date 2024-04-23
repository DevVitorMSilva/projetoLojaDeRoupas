function enviarFormulario () {
    event.preventDefault();
    const nomeInput = document.getElementById('nome')
    const emailInput = document.getElementById('email')
    const telefoneInput = document.getElementById('telefone')

    const formData = {
        nome: nomeInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value
    }

    fetch("https://apigenerator.dronahq.com/api/U-XQ4jtV/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(Response => {
        if (!Response.ok) {
            throw new Error("Erro ao enviar os dados para a API");
        }
        return Response.json();
    })
    .then(data => {
        console.log("Dados enviados com sucesso", data);
    })
    .catch(error => {
        console.error("Erro ao enviar os dados", error);
    })
}
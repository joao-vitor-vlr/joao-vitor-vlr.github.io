function cadastrar() {
    aguardarCad();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html';
        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            finalizar_aguardarCad();
        }
    });

    return false;
}
function aguardarCad() {
    btn_cadastro.disabled = true;
    img_aguarde.style.display='block';
    // div_erro.style.display='none';
}

function finalizar_aguardarCad() {
    btn_cadastro.disabled = false;
    img_aguarde.style.display='none';
    // div_erro.style.display='block';
}

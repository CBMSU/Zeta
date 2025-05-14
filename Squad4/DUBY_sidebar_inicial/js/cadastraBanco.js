
// Cadastra banco
$("#cadastraBanco").click(() => {
    limpaErrosFormBanco();

    var formInvalido = false;

    const nomeBanco = document.getElementById('nome-banco').value;
    const cnpjBanco = document.getElementById('cnpj-banco').value;

    const nomeRepresentante = document.getElementById('nome-representante-loja').value;
    const sobrenomeRepresentante = document.getElementById('sobrenome-representante-loja').value;
    const emailRepresentante = document.getElementById('email-representante-loja').value;
    const celularRepresentante = document.getElementById('celular-representante-loja').value;

    // Verifica se infos são nulos
    if(nomeBanco == "" || nomeBanco == null){
        $("#nomeBancoNulo").show();
        formInvalido = true;
    }

    if(cnpjBanco == "" || cnpjBanco == null){
        $("#cnpjBancoNulo").show();
        formInvalido = true;
    }

    if(nomeRepresentante == "" || nomeRepresentante == null){
        $("#nomeRepresentanteNulo").show();
        formInvalido = true;
    }

    if(sobrenomeRepresentante == "" || sobrenomeRepresentante == null){
        $("#sobrenomeRepresentanteNulo").show();
        formInvalido = true;
    }

    if(emailRepresentante == "" || emailRepresentante == null){
        $("#emailRepresentanteNulo").show();
        formInvalido = true;
    }

    if(celularRepresentante == "" || celularRepresentante == null){
        $("#celularRepresentanteNulo").show();
        formInvalido = true;
    }

    // Caso algum campo obrigatório seja nulo, cancela o envio do form
    if(formInvalido)
        return false;

    showSuccess(nomeBanco)
    limpaFormBanco()
})

function limpaErrosFormBanco(){
    $("#nomeBancoNulo").hide();
    $("#cnpjBancoNulo").hide();
    $("#nomeRepresentanteNulo").hide();
    $("#sobrenomeRepresentanteNulo").hide();
    $("#emailRepresentanteNulo").hide();
    $("#celularRepresentanteNulo").hide();
}

function limpaFormBanco(){
    $("#nome-banco").val("");
    $("#cnpj-banco").val("");
    $("#telefone-banco").val("");
    $("#agencia-banco").val("");
    $("#id-banco").val("");

    $("#nome-representante-loja").val("");
    $("#sobrenome-representante-loja").val("");
    $("#email-representante-loja").val("");
    $("#celular-representante-loja").val("");
    $("#cpf-representante-loja").val("");
    $("#rg-representante-loja").val("");
}

function showSuccess(nomeBanco){
    Swal.fire({
        title: "<strong>Banco cadastrado!</strong>",
        icon: "success",
        html: `
            Sucesso ao adicionar <b>${nomeBanco}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}
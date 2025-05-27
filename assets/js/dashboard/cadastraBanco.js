$(document).ready(function() {
    $('#cnpj-banco').mask('00.000.000/0000-00', {reverse: true});
    $('#telefone-banco').mask('(00) 00000-0000');

    $('#celular-representante-banco').mask('(00) 00000-0000');
    $('#cpf-representante-banco').mask('000.000.000-00', {reverse: true});
    
    // Apenas numeros
    $('#rg-representante-banco').mask('0#');
});

// Cadastra banco
$("#cadastraBanco").click(() => {
    limpaErrosFormBanco();

    var formInvalido = false;

    const nomeBanco = document.getElementById('nome-banco').value;
    const cnpjBanco = document.getElementById('cnpj-banco').value;

    const nomeRepresentante = document.getElementById('nome-representante-banco').value;
    const sobrenomeRepresentante = document.getElementById('sobrenome-representante-banco').value;
    const emailRepresentante = document.getElementById('email-representante-banco').value;
    const celularRepresentante = document.getElementById('celular-representante-banco').value;

    // Verifica se infos são nulos
    if(nomeBanco == "" || nomeBanco == null){
        $("#nomeBancoNulo").show();
        formInvalido = true;
    }

    if(cnpjBanco == "" || cnpjBanco == null){
        $("#cnpjBancoNulo").show();
        formInvalido = true;
    }

    if(!validaCNPJ(cnpjBanco)){
        $("#cnpjBancoInvalido").show();
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

    if(!validaEmail(emailRepresentante)){
        $("#emailRepresentanteInvalido").show();
        formInvalido = true;
    }

    if(celularRepresentante == "" || celularRepresentante == null){
        $("#celularRepresentanteNulo").show();
        formInvalido = true;
    }

    if(!validaCelular(celularRepresentante)){
        $("#celularRepresentanteInvalido").show();
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

    $("#emailRepresentanteInvalido").hide();
    $("#celularRepresentanteInvalido").hide();
    $("#cnpjBancoInvalido").hide();
}

function limpaFormBanco(){
    $("#nome-banco").val("");
    $("#cnpj-banco").val("");
    $("#telefone-banco").val("");
    $("#agencia-banco").val("");
    $("#id-banco").val("");

    $("#nome-representante-banco").val("");
    $("#sobrenome-representante-banco").val("");
    $("#email-representante-banco").val("");
    $("#celular-representante-banco").val("");
    $("#cpf-representante-banco").val("");
    $("#rg-representante-banco").val("");
}

// FUNÇÕES DE VALIDAÇÃO
function validaEmail(email){
    if(email.length == 0){
        return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        return true; // Email válido
    }
    return false;
}

function validaCelular(celular){
    if(celular.length == 0){
        return true;
    }

    var valido = celular.length != 15 ?  false : true;
    return valido;
}

function validaCNPJ(cnpj){
    if(cnpj.length == 0){
        return true;
    }

    var valido = cnpj.length != 18 ?  false : true;
    return valido;
}

// MOSTRA MENSAGEM DE SUCESSO AO CADASTRAR
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
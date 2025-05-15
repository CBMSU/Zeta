$(document).ready(function(){	

    $('#cnpj-loja').mask('00.000.000/0000-00', {reverse: true});
    $('#telefone-loja').mask('(00) 00000-0000');
    
    $('#cep-loja').mask('00000-000');

    $('#celular-representante-loja').mask('(00) 00000-0000');
    $('#cpf-representante-loja').mask('000.000.000-00', {reverse: true});
    
    // Apenas numeros
    $('#rg-representante-loja').mask('0#');
});

// Edita perfil
$("#btnEditaPerfil").click(() => {
    limpaErrosFormLoja();

    var formInvalido = false;

    const nomeLoja = document.getElementById('nome-loja').value;
    const cnpjLoja = document.getElementById('cnpj-loja').value;

    const nomeRepresentante = document.getElementById('nome-representante-loja').value;
    const sobrenomeRepresentante = document.getElementById('sobrenome-representante-loja').value;
    const emailRepresentante = document.getElementById('email-representante-loja').value;
    const celularRepresentante = document.getElementById('celular-representante-loja').value;

    // Verifica se infos são nulos
    if(nomeLoja == "" || nomeLoja == null){
        $("#nomeLojaNulo").show();
        formInvalido = true;
    }

    if(cnpjLoja == "" || cnpjLoja == null){
        $("#cnpjLojaNulo").show();
        formInvalido = true;
    }

    if(!validaCNPJ(cnpjLoja)){
        $("#cnpjLojaInvalido").show();
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

    showSuccess(nomeLoja)
    limpaFormLoja()
})

function limpaErrosFormLoja(){
    $("#nomeLojaNulo").hide();
    $("#cnpjLojaNulo").hide();
    $("#nomeRepresentanteNulo").hide();
    $("#sobrenomeRepresentanteNulo").hide();
    $("#emailRepresentanteNulo").hide();
    $("#celularRepresentanteNulo").hide();

    $("#emailRepresentanteInvalido").hide();
    $("#celularRepresentanteInvalido").hide();
    $("#cnpjLojaInvalido").hide();
}

function limpaFormLoja(){
    $("#nome-loja").val("");
    $("#cnpj-loja").val("");
    $("#telefone-loja").val("");
    
    $("#cep-loja").val("");
    $("#estado-loja").val("0");
    $("#cidade-loja").val("0");
    $("#bairro-loja").val("");
    $("#logradouro-loja").val("");
    $("#numero-loja").val("");
    $("#complemento-loja").val("");

    $("#nome-representante-loja").val("");
    $("#sobrenome-representante-loja").val("");
    $("#email-representante-loja").val("");
    $("#celular-representante-loja").val("");
    $("#cpf-representante-loja").val("");
    $("#rg-representante-loja").val("");
}

function showSuccess(){
    Swal.fire({
        title: "<strong>Perfil atualizado!</strong>",
        icon: "success",
        html: `
            Informações atualizadas com sucesso!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}

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

function validaCNPJ(cnpj){
    if(cnpj.length == 0){
        return true;
    }

    var valido = cnpj.length != 18 ?  false : true;
    return valido;
}

function validaCelular(celular){
    console.log(celular.length)
    if(celular.length == 0){
        return true;
    }

    var valido = celular.length != 15 ?  false : true;
    return valido;
}
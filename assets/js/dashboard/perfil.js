var dados_usuario = new Object();
dados_usuario.id = Math.random().toString(16).slice(2);
dados_usuario.nome_loja = "Borracharia Três Irmãos";
dados_usuario.cnpj_loja = "14.350.750/0001-72";
dados_usuario.telefone_loja = "(79) 99122-4897";
dados_usuario.cep_loja = "49000-470";
dados_usuario.estado_loja = "25";
dados_usuario.cidade_loja = "1";
dados_usuario.bairro_loja = "Aruana";
dados_usuario.logradouro_loja = "Rua Marechal Deodoro";
dados_usuario.complemento_loja = "Próximo à Pinguim";
dados_usuario.numero_loja = "12";
dados_usuario.nome_representante = "João";
dados_usuario.sobrenome_representante = "Silva Brino";
dados_usuario.email_representante = "joao_brino@tresirmaos.com";
dados_usuario.celular_representante = "(79) 98925-2426";
dados_usuario.cpf_representante = "056.605.545-72";
dados_usuario.rg_representante = "7519682";

$(document).ready(function(){	

    $('#cnpj-loja').mask('00.000.000/0000-00', {reverse: true});
    $('#telefone-loja').mask('(00) 00000-0000');
    
    $('#cep-loja').mask('00000-000');

    $('#celular-representante-loja').mask('(00) 00000-0000');
    $('#cpf-representante-loja').mask('000.000.000-00', {reverse: true});
    
    // Apenas numeros
    $('#rg-representante-loja').mask('0#');

    document.getElementById("nome-loja").value = dados_usuario.nome_loja
    document.getElementById("cnpj-loja").value = dados_usuario.cnpj_loja
    document.getElementById("telefone-loja").value = dados_usuario.telefone_loja
    document.getElementById("cep-loja").value = dados_usuario.cep_loja
    document.getElementById("estado-loja").value = dados_usuario.estado_loja
    document.getElementById("cidade-loja").value = dados_usuario.cidade_loja
    document.getElementById("bairro-loja").value = dados_usuario.bairro_loja
    document.getElementById("logradouro-loja").value = dados_usuario.logradouro_loja
    document.getElementById("numero-loja").value = dados_usuario.numero_loja
    document.getElementById("complemento-loja").value = dados_usuario.complemento_loja
    document.getElementById("nome-representante-loja").value = dados_usuario.nome_representante
    document.getElementById("sobrenome-representante-loja").value = dados_usuario.sobrenome_representante
    document.getElementById("email-representante-loja").value = dados_usuario.email_representante
    document.getElementById("celular-representante-loja").value = dados_usuario.celular_representante
    document.getElementById("cpf-representante-loja").value = dados_usuario.cpf_representante
    document.getElementById("rg-representante-loja").value = dados_usuario.rg_representante    
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
    // limpaFormLoja()
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
    if(celular.length == 0){
        return true;
    }

    var valido = celular.length != 15 ?  false : true;
    return valido;
}
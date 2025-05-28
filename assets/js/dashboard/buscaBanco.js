// Inicio - Banco de dados FAKE
var listaBancos = [];
var listaBusca = [];
var idBanco = null;

var banco1 = new Object();
banco1.nome_banco = "Banco Horizonte Financeiro";
banco1.cnpj_banco = "12.345.678/0001-01";
banco1.telefone_banco = "(79) 99854-2536";
banco1.agencia_banco = "1234-5";
banco1.id_banco = "123";
banco1.nome_representante_banco = "João";
banco1.sobrenome_representante_banco = "Silva Oliveira";
banco1.email_representante_banco = "joao.silva@bancohorizonte.com.br";
banco1.celular_representante_banco = "(79) 99624-8549";
banco1.cpf_representante_banco = "123.456.789-01";
banco1.rg_representante_banco = "123456789";
listaBancos.push(banco1)

var banco2 = new Object();
banco2.nome_banco = "Banco Capital Seguro";
banco2.cnpj_banco = "98.765.432/0001-02";
banco2.telefone_banco = "(79) 99158-7520";
banco2.agencia_banco = "5678-9";
banco2.id_banco = "456";
banco2.nome_representante_banco = "Maria";
banco2.sobrenome_representante_banco = "Santos Costa";
banco2.email_representante_banco = "maria.costa@bancocapital.com.br";
banco2.celular_representante_banco = "(79) 99875-2426";
banco2.cpf_representante_banco = "987.654.321-02";
banco2.rg_representante_banco = "98.765.432-1";
listaBancos.push(banco2)

var banco3 = new Object();
banco3.nome_banco = "Banco Nacional CrediPlus"
banco3.cnpj_banco = "45.678.912/0001-03"
banco3.telefone_banco = "(79) 99635-2015"
banco3.agencia_banco = "9012-3"
banco3.id_banco = "789"
banco3.nome_representante_banco = "Carlos"
banco3.sobrenome_representante_banco = "Almeida Rocha"
banco3.email_representante_banco = "carlos.rocha@bancocredplus.com.br"
banco3.celular_representante_banco = "(79) 99285-2535"
banco3.cpf_representante_banco = "456.789.123-03"
banco3.rg_representante_banco = "45.678.912-3"
listaBancos.push(banco3)

var banco4 = new Object();
banco4.nome_banco = "Banco Sul Americana"
banco4.cnpj_banco = "23.456.789/0001-04"
banco4.telefone_banco = "(79) 98765-5555"
banco4.agencia_banco = "3456-7"
banco4.id_banco = "321"
banco4.nome_representante_banco = "Ana"
banco4.sobrenome_representante_banco = "Pereira Lima" 
banco4.email_representante_banco = "ana.lima@bancosulamericana.com.br"
banco4.celular_representante_banco = "(79) 99111-2222"
banco4.cpf_representante_banco = "234.567.890-04"
banco4.rg_representante_banco = "23.456.789-0"
listaBancos.push(banco4)

var banco5 = new Object();
banco5.nome_banco = "Banco Oeste Cred"
banco5.cnpj_banco = "67.890.123/0001-05"
banco5.telefone_banco = "(51) 98765-7890"
banco5.agencia_banco = "7890-1"
banco5.id_banco = "654"
banco5.nome_representante_banco = "Pedro"
banco5.sobrenome_representante_banco = "Fernandes Souza"
banco5.email_representante_banco = "pedro.souza@bancooeste.com.br"
banco5.celular_representante_banco = "(51) 99234-5678"
banco5.cpf_representante_banco = "567.890.123-05"
banco5.rg_representante_banco = "67.890.123-4"
listaBancos.push(banco5)
// Fim - Banco de dados FAKE

// Inicio - Cria tabela de resultado de busca
function criaLinhaTabelaBanco(dados){

    var html = dados.map(item => `
    <div class="row justify-content-md-center align-items-center mt-2 mb-2">
        <div class="col-8 col-lg-3 mt-0">
            ${item.nome_banco}
        </div>

        <div class="col-5 col-lg-3 mt-0 d-none d-lg-block">
            ${item.cnpj_banco}
        </div>

        <div class="col-5 col-lg-3 mt-0 d-none d-lg-block">
            ${item.nome_representante_banco}
        </div>

        <div class="col-4 col-lg-2 mt-0 text-center">
            <i class="fas fa-edit cor-secundaria-duby btnActions mr-1 edita-banco" data-toggle="modal" data-target="#editaBancoModal" name="${item.id_banco}"></i>
            <i class="fas fa-trash-alt text-danger btnActions deleta-banco" data-toggle="modal" data-target="#deletaBancoModal" name="${item.id_banco}"></i>
        </div>

    </div>
    <div class="row justify-content-md-center mt-3 mb-3">
        <div class="col-12 col-lg-11 my-0">
            <hr class="my-0"/>
        </div>
    </div>
    `).join(''); 

    if(dados.length == 0){
        html = `
        <div class="row justify-content-md-center mt-3 mb-3">
            <div class="col-12 col-lg-11 my-0 text-center font-weight-bold text-dark bg-gray py-3">
                Nenhum banco encontrado.
            </div>
        </div>
        `
    }

    document.getElementById('conteudoTabela').innerHTML = html;

    $(".edita-banco").click((e)=>{
        // console.log(e)
        var id = e.target.getAttribute('name');
        var bancoSelecionado = listaBancos.find(x => x.id_banco === id);
        idBanco = id;

        montaTelaEdicao(bancoSelecionado);
    })

    $(".deleta-banco").click((e)=>{
        var id = e.target.getAttribute('name');
        var bancoSelecionado = listaBancos.find(x => x.id_banco === id);
        
        document.getElementById("spanNomeBanco").innerHTML = bancoSelecionado.nome_banco
        $('#deletaBancoModal').modal('show');
        
        idBanco = id;
    })

}
// Fim - Cria tabela de resultado de busca


// Chama função de deleção ao clidar no botão de delete
$("#btnDeletaBanco").click(() => {
    deletaBanco();
})

// Deleta banco
function deletaBanco(){
    var bancoSelecionado = listaBancos.find(x => x.id_banco === idBanco);
    listaBancos = listaBancos.filter(item => item !== bancoSelecionado)

    buscaBancos();

    $('#deletaBancoModal').modal('hide');
}

// Inicio - Monta modal de edição
function montaTelaEdicao(banco){
    document.getElementById("nome-banco").value = banco.nome_banco;
    document.getElementById("cnpj-banco").value = banco.cnpj_banco;
    document.getElementById("telefone-banco").value = banco.telefone_banco;
    document.getElementById("agencia-banco").value = banco.agencia_banco
    document.getElementById("id-banco").value = banco.id_banco;
    document.getElementById("nome-representante-banco").value = banco.nome_representante_banco; 
    document.getElementById("sobrenome-representante-banco").value = banco.sobrenome_representante_banco;
    document.getElementById("email-representante-banco").value = banco.email_representante_banco;
    document.getElementById("celular-representante-banco").value = banco.celular_representante_banco;
    document.getElementById("cpf-representante-banco").value = banco.cpf_representante_banco;
    document.getElementById("rg-representante-banco").value = banco.rg_representante_banco;
}
// Fim - Monta modal de edição

$("#editaBanco").click(() => {
    salvaEdicaoBanco();
})

function salvaEdicaoBanco(){
    limpaErrosFormBanco()
    var banco = new Object();
    var formInvalido = false;

    banco.nome_banco = document.getElementById("nome-banco").value;
    banco.cnpj_banco = document.getElementById("cnpj-banco").value;
    banco.telefone_banco = document.getElementById("telefone-banco").value;
    banco.agencia_banco = document.getElementById("agencia-banco").value;
    banco.id_banco = document.getElementById("id-banco").value;
    banco.nome_representante_banco = document.getElementById("nome-representante-banco").value;
    banco.sobrenome_representante_banco = document.getElementById("sobrenome-representante-banco").value;
    banco.email_representante_banco = document.getElementById("email-representante-banco").value;
    banco.celular_representante_banco = document.getElementById("celular-representante-banco").value;
    banco.cpf_representante_banco = document.getElementById("cpf-representante-banco").value;
    banco.rg_representante_banco = document.getElementById("rg-representante-banco").value;

    // Verifica se infos são nulos
    if(banco.nome_banco == "" || banco.nome_banco == null){
        $("#nomeBancoNulo").show();
        formInvalido = true;
    }

    if(banco.cnpj_banco == "" || banco.cnpj_banco == null){
        $("#cnpjBancoNulo").show();
        formInvalido = true;
    }

    if(!validaCNPJ(banco.cnpj_banco)){
        $("#cnpjBancoInvalido").show();
        formInvalido = true;
    }

    if(banco.nome_representante_banco == "" || banco.nome_representante_banco == null){
        $("#nomeRepresentanteNulo").show();
        formInvalido = true;
    }

    if(banco.sobrenome_representante_banco == "" || banco.sobrenome_representante_banco == null){
        $("#sobrenomeRepresentanteNulo").show();
        formInvalido = true;
    }

    if(banco.email_representante_banco == "" || banco.email_representante_banco == null){
        $("#emailRepresentanteNulo").show();
        formInvalido = true;
    }

    if(!validaEmail(banco.email_representante_banco)){
        $("#emailRepresentanteInvalido").show();
        formInvalido = true;
    }

    if(banco.celular_representante_banco == "" || banco.celular_representante_banco == null){
        $("#celularRepresentanteNulo").show();
        formInvalido = true;
    }

    if(!validaCelular(banco.celular_representante_banco)){
        $("#celularRepresentanteInvalido").show();
        formInvalido = true;
    }

    if(formInvalido){
        return false;
    }

    listaBancos = listaBancos.map(item => {
        if (item.id_banco == banco.id_banco) {
            return banco;
        }
        return item;
    });

    // Fecha o modal
    $('#editaBancoModal').modal('hide');

    showSuccess(banco.nome_banco)
    buscaBancos()
}

$(document).ready(function () {    
    listaBancos.sort((a,b) => (a.nome_banco.toUpperCase() > b.nome_banco.toUpperCase()) ? 1 : ((b.nome_banco.toUpperCase() > a.nome_banco.toUpperCase()) ? -1 : 0))
    listaBusca = listaBancos;
    criaLinhaTabelaBanco(listaBancos)
})

$(document).ready(function() {
    $('#cnpj-banco').mask('00.000.000/0000-00', {reverse: true});
    $('#telefone-banco').mask('(00) 00000-0000');

    $('#celular-representante-banco').mask('(00) 00000-0000');
    $('#cpf-representante-banco').mask('000.000.000-00', {reverse: true});
    
    // Apenas numeros
    $('#rg-representante-banco').mask('0#');
});

// Inicio - Função de ordenação
$(".spanOrderBy").click((e) => {
    var el = !e.target.firstChild ? e.target : e.target.firstChild;

    el.classList.contains("fa-sort-down")

    var orderUp = false;
    var newOrder = true;
    if (el.classList.contains("fa-sort-down")){
        newOrder = false;
        $(el).removeClass("fa-sort-down");
        $(el).addClass("fa-sort-up");
    }else if (el.classList.contains("fa-sort-up")){
        newOrder = false;
        orderUp = true;
        $(el).removeClass("fa-sort-up");
        $(el).addClass("fa-sort-down");
    }

    if(newOrder){
        orderUp = true;
        
        $(".spanOrderBy i").removeClass("fa-sort-down");
        $(".spanOrderBy i").removeClass("fa-sort-up");
        $(".spanOrderBy i").addClass("fa-sort");

        $(el).removeClass("fa-sort");
        $(el).addClass("fa-sort-down");
    }

    var tipoOrder = el.getAttribute('name')

    if(orderUp){
        switch (tipoOrder){
            case "cnpj":
                listaBusca.sort((a,b) => (Number(a.cnpj_banco.replace(/[^\d]/g, "")) > Number(b.cnpj_banco.replace(/[^\d]/g, ""))) ? 1 : ((Number(b.cnpj_banco.replace(/[^\d]/g, "")) > Number(a.cnpj_banco.replace(/[^\d]/g, ""))) ? -1 : 0))
                break;
            case "representante":
                listaBusca.sort((a,b) => (a.nome_representante_banco.toUpperCase() > b.nome_representante_banco.toUpperCase()) ? 1 : ((b.nome_representante_banco.toUpperCase() > a.nome_representante_banco.toUpperCase()) ? -1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.nome_banco.toUpperCase() > b.nome_banco.toUpperCase()) ? 1 : ((b.nome_banco.toUpperCase() > a.nome_banco.toUpperCase()) ? -1 : 0))
                break
        }
    } else {
        switch (tipoOrder){
            case "cnpj":
                listaBusca.sort((a,b) => (Number(a.cnpj_banco.replace(/[^\d]/g, "")) > Number(b.cnpj_banco.replace(/[^\d]/g, ""))) ? -1 : ((Number(b.cnpj_banco.replace(/[^\d]/g, "")) > Number(a.cnpj_banco.replace(/[^\d]/g, ""))) ? 1 : 0))
                break;
            case "representante":
                listaBusca.sort((a,b) => (a.nome_representante_banco.toUpperCase() > b.nome_representante_banco.toUpperCase()) ? -1 : ((b.nome_representante_banco.toUpperCase() > a.nome_representante_banco.toUpperCase()) ? 1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.nome_banco.toUpperCase() > b.nome_banco.toUpperCase()) ? -1 : ((b.nome_banco.toUpperCase() > a.nome_banco.toUpperCase()) ? 1 : 0))
                break
        }
    }

    criaLinhaTabelaBanco(listaBusca);
})
// Fim - Função de ordenação

$("#formBuscaBancos").on("submit", () => {
    buscaBancos();
})

// Faz busca com filtro
function buscaBancos(){
    listaBusca = [];
    
    var val = document.getElementById("nomeBancoBusca").value;
    listaBancos.map(item => {
        if(item.nome_banco.toUpperCase().includes(val.toUpperCase())){
            listaBusca.push(item)
        }
    })

    listaBusca.sort((a,b) => (a.nome_banco.toUpperCase() > b.nome_banco.toUpperCase()) ? 1 : ((b.nome_banco.toUpperCase() > a.nome_banco.toUpperCase()) ? -1 : 0))
    
    $(".spanOrderBy i").removeClass("fa-sort-down");
    $(".spanOrderBy i").removeClass("fa-sort-up");
    $(".spanOrderBy i").addClass("fa-sort");
    
    $("#defaultOrderBy").removeClass("fa-sort");
    $("#defaultOrderBy").addClass("fa-sort-down");

    criaLinhaTabelaBanco(listaBusca)
}

// Limpa modal
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
        title: "<strong>Banco editado!</strong>",
        icon: "success",
        html: `
            Sucesso ao editar <b>${nomeBanco}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}
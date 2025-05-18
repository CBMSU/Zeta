$(document).ready(function () {    
    listaAdquirentes.sort((a,b) => (a.nome_adquirente.toUpperCase() > b.nome_adquirente.toUpperCase()) ? 1 : ((b.nome_adquirente.toUpperCase() > a.nome_adquirente.toUpperCase()) ? -1 : 0))
    listaBusca = listaAdquirentes;
    criaLinhaTabelaAdquirente(listaAdquirentes)
    parametrosData();
})

var listaAdquirentes = [];
var listaBusca = [];
var idAdquirente = null;
var idFormaPagamento = null;

// Inicio - Criação adquirentes FAKE
var adquirente1 = new Object();
adquirente1.id = Math.random().toString(16).slice(2);
adquirente1.nome_adquirente = "Cielo";
adquirente1.descricao_adquirente = "Maior adquirente do Brasil";
adquirente1.api_adquirente = "cielo_api_key_7s3a9b2m4n5p8x6";
adquirente1.identidade_adquirente = "345678901";
adquirente1.nome_representante_adquirente = "Ana";
adquirente1.sobrenome_representante_adquirente = "Santos";
adquirente1.email_representante_adquirente = "ana.santos@cielo.com.br";
adquirente1.celular_representante_adquirente = "(11) 98765-4321";
adquirente1.cpf_representante_adquirente = "123.456.789-01";
adquirente1.rg_representante_adquirente = "12345678";
adquirente1.formas_de_pagamento = [
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 0, 1),
        fim_vigencia: new Date(2024, 11, 31),
        tipo: 3,
        tipoTexto: "Crédito",
        bandeira: 1,
        bandeiraTexto: "Visa",
        taxas: [
            { parcela: "1", taxa: "2.5" },
            { parcela: "2", taxa: "3.0" },
            { parcela: "3", taxa: "3.5" },
            { parcela: "4", taxa: "4.0" },
            { parcela: "5", taxa: "4.5" },
            { parcela: "6", taxa: "5.0" },
            { parcela: "7", taxa: "5.5" },
            { parcela: "8", taxa: "6.0" },
            { parcela: "9", taxa: "6.5" },
            { parcela: "10", taxa: "7.0" },
            { parcela: "11", taxa: "7.5" },
            { parcela: "12", taxa: "8.0" }
        ],
        observacao: "Taxas especiais para Visa"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 0, 1),
        fim_vigencia: new Date(2024, 11, 31),
        tipo: 2,
        tipoTexto: "Pix",
        taxas: [{ taxa: "1.0" }],
        observacao: ""
    }
];
listaAdquirentes.push(adquirente1);

var adquirente2 = new Object();
adquirente2.id = Math.random().toString(16).slice(2);
adquirente2.nome_adquirente = "Stone";
adquirente2.descricao_adquirente = "Tecnologia em meios de pagamento";
adquirente2.api_adquirente = "stone_api_key_9x8y7z6w5";
adquirente2.identidade_adquirente = "987654321";
adquirente2.nome_representante_adquirente = "Carlos";
adquirente2.sobrenome_representante_adquirente = "Oliveira";
adquirente2.email_representante_adquirente = "carlos.oliveira@stone.com.br";
adquirente2.celular_representante_adquirente = "(21) 99876-5432";
adquirente2.cpf_representante_adquirente = "987.654.321-09";
adquirente2.rg_representante_adquirente = "98765432";
adquirente2.formas_de_pagamento = [
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 3, 15),
        fim_vigencia: new Date(2024, 3, 14),
        tipo: 4,
        tipoTexto: "Débito",
        taxas: [{ taxa: "1.5" }],
        observacao: "Taxa promocional"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 3, 15),
        fim_vigencia: new Date(2024, 3, 14),
        tipo: 3,
        tipoTexto: "Crédito",
        bandeira: 2,
        bandeiraTexto: "Mastercard",
        taxas: [
            { parcela: "1", taxa: "2.0" },
            { parcela: "2", taxa: "2.5" },
            { parcela: "3", taxa: "3.0" },
            { parcela: "4", taxa: "3.5" },
            { parcela: "5", taxa: "4.0" },
            { parcela: "6", taxa: "4.5" },
            { parcela: "7", taxa: "5.0" },
            { parcela: "8", taxa: "5.5" },
            { parcela: "9", taxa: "6.0" },
            { parcela: "10", taxa: "6.5" },
            { parcela: "11", taxa: "7.0" },
            { parcela: "12", taxa: "7.5" }
        ],
        observacao: "Mastercard com taxas diferenciadas"
    }
];
listaAdquirentes.push(adquirente2);

var adquirente3 = new Object();
adquirente3.id = Math.random().toString(16).slice(2);
adquirente3.nome_adquirente = "PagSeguro";
adquirente3.descricao_adquirente = "Solução de pagamentos online";
adquirente3.api_adquirente = "pagseguro_api_key_a1b2c3d4e5";
adquirente3.identidade_adquirente = "567890123";
adquirente3.nome_representante_adquirente = "Mariana";
adquirente3.sobrenome_representante_adquirente = "Silva";
adquirente3.email_representante_adquirente = "mariana.silva@pagseguro.com.br";
adquirente3.celular_representante_adquirente = "(31) 98543-2109";
adquirente3.cpf_representante_adquirente = "456.789.012-34";
adquirente3.rg_representante_adquirente = "45678901";
adquirente3.formas_de_pagamento = [
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 6, 1),
        fim_vigencia: new Date(2025, 5, 30),
        tipo: 1,
        tipoTexto: "Boleto",
        taxas: [{ taxa: "1.99" }],
        observacao: "Boleto com desconto"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 6, 1),
        fim_vigencia: new Date(2025, 5, 30),
        tipo: 2,
        tipoTexto: "Pix",
        taxas: [{ taxa: "0.99" }],
        observacao: "Melhor taxa de PIX do mercado"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 6, 1),
        fim_vigencia: new Date(2025, 5, 30),
        tipo: 3,
        tipoTexto: "Crédito",
        bandeira: 3,
        bandeiraTexto: "Elo",
        taxas: [
            { parcela: "1", taxa: "3.0" },
            { parcela: "2", taxa: "3.5" },
            { parcela: "3", taxa: "4.0" },
            { parcela: "4", taxa: "4.5" },
            { parcela: "5", taxa: "5.0" },
            { parcela: "6", taxa: "5.5" },
            { parcela: "7", taxa: "6.0" },
            { parcela: "8", taxa: "6.5" },
            { parcela: "9", taxa: "7.0" },
            { parcela: "10", taxa: "7.5" },
            { parcela: "11", taxa: "8.0" },
            { parcela: "12", taxa: "8.5" }
        ],
        observacao: "Elo com taxas competitivas"
    }
];
listaAdquirentes.push(adquirente3);

var adquirente4 = new Object();
adquirente4.id = Math.random().toString(16).slice(2);
adquirente4.nome_adquirente = "Getnet";
adquirente4.descricao_adquirente = "Adquirente internacional com soluções locais";
adquirente4.api_adquirente = "getnet_api_key_z9y8x7w6v5";
adquirente4.identidade_adquirente = "234567890";
adquirente4.nome_representante_adquirente = "Pedro";
adquirente4.sobrenome_representante_adquirente = "Pereira";
adquirente4.email_representante_adquirente = "pedro.pereira@getnet.com.br";
adquirente4.celular_representante_adquirente = "(51) 98765-1234";
adquirente4.cpf_representante_adquirente = "345.678.901-23";
adquirente4.rg_representante_adquirente = "34567890";
adquirente4.formas_de_pagamento = [
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 2, 10),
        fim_vigencia: new Date(2024, 2, 9),
        tipo: 3,
        tipoTexto: "Crédito",
        bandeira: 4,
        bandeiraTexto: "AmericanExpress",
        taxas: [
            { parcela: "1", taxa: "4.0" },
            { parcela: "2", taxa: "4.5" },
            { parcela: "3", taxa: "5.0" },
            { parcela: "4", taxa: "5.5" },
            { parcela: "5", taxa: "6.0" },
            { parcela: "6", taxa: "6.5" },
            { parcela: "7", taxa: "7.0" },
            { parcela: "8", taxa: "7.5" },
            { parcela: "9", taxa: "8.0" },
            { parcela: "10", taxa: "8.5" },
            { parcela: "11", taxa: "9.0" },
            { parcela: "12", taxa: "9.5" }
        ],
        observacao: "AMEX com taxas premium"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 2, 10),
        fim_vigencia: new Date(2024, 2, 9),
        tipo: 4,
        tipoTexto: "Débito",
        taxas: [{ taxa: "1.2" }],
        observacao: ""
    }
];
listaAdquirentes.push(adquirente4);

var adquirente5 = new Object();
adquirente5.id = Math.random().toString(16).slice(2);
adquirente5.nome_adquirente = "Rede";
adquirente5.descricao_adquirente = "Soluções de pagamento";
adquirente5.api_adquirente = "rede_api_key_q1w2e3r4t5";
adquirente5.identidade_adquirente = "678901234";
adquirente5.nome_representante_adquirente = "Luiza";
adquirente5.sobrenome_representante_adquirente = "Costa";
adquirente5.email_representante_adquirente = "luiza.costa@rede.com.br";
adquirente5.celular_representante_adquirente = "(19) 99876-5432";
adquirente5.cpf_representante_adquirente = "567.890.123-45";
adquirente5.rg_representante_adquirente = "56789012";
adquirente5.formas_de_pagamento = [
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 5, 20),
        fim_vigencia: new Date(2024, 5, 19),
        tipo: 3,
        tipoTexto : "Crédito",
        bandeira: 5,
        bandeiraTexto: "Hipercard",
        taxas: [
            { parcela: "1", taxa: "2.8" },
            { parcela: "2", taxa: "3.3" },
            { parcela: "3", taxa: "3.8" },
            { parcela: "4", taxa: "4.3" },
            { parcela: "5", taxa: "4.8" },
            { parcela: "6", taxa: "5.3" },
            { parcela: "7", taxa: "5.8" },
            { parcela: "8", taxa: "6.3" },
            { parcela: "9", taxa: "6.8" },
            { parcela: "10", taxa: "7.3" },
            { parcela: "11", taxa: "7.8" },
            { parcela: "12", taxa: "8.3" }
        ],
        observacao: "Hipercard com taxas regionais"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 5, 20),
        fim_vigencia: new Date(2024, 5, 19),
        tipo: 2,
        tipoTexto: "Pix",
        taxas: [{ taxa: "0.8" }],
        observacao: "Melhor taxa de PIX da região"
    },
    {
        id: Math.random().toString(16).slice(2),
        inicio_vigencia: new Date(2023, 5, 20),
        fim_vigencia: new Date(2024, 5, 19),
        tipo: 1,
        tipoTexto: "Boleto",
        taxas: [{ taxa: "1.5" }],
        observacao: "Boleto com compensação em 1 dia útil"
    }
];
listaAdquirentes.push(adquirente5);
// Fim - Criação adquirentes FAKE
// Inicio - Cria datepicker
function parametrosData(dataInicio, dataFim) {

    if(dataFim){
        $('input[name="dataInicio"]').datepicker('remove');

        $('input[name="dataInicio"]').datepicker({
            format: 'dd/mm/yyyy',                
            language: 'pt-BR',
            todayHighlight: true,
            autoclose: true,
            datesDisabled: false,
            endDate: dataFim,
            startDate: '01/01/2015',
            orientation: "top"
        }).on('hide', function(e) {
            e.target.blur()
        });
    }

    if(dataInicio){
        $('input[name="dataFim"]').datepicker('remove');

        $('input[name="dataFim"]').datepicker({
            format: 'dd/mm/yyyy',                
            language: 'pt-BR',
            todayHighlight: true,
            autoclose: true,
            datesDisabled: false,
            endDate: '+10y',
            startDate: dataInicio,
            orientation: "top"
        }).on('hide', function(e) {
            e.target.blur()
        });
    }

    // Cria datepicker no DATA INICIO ao carregar documento documento
    $('input[name="dataInicio"]').datepicker({
        format: 'dd/mm/yyyy',                
        language: 'pt-BR',
        todayHighlight: true,
        autoclose: true,
        startDate: '01/01/2015',
        datesDisabled: '+1d',
        endDate: '+1d',
        orientation: "top"
    }).on('hide', function(e) {
        e.target.blur()
    });

    // Remove datepicker criado no DATA FIM e o recria com novas regras ao alterar DATA INICIO
    $('#dataInicioTaxa').change((e) => {
        $('input[name="dataFim"]').datepicker('remove');

        $('input[name="dataFim"]').datepicker({
            format: 'dd/mm/yyyy',                
            language: 'pt-BR',
            todayHighlight: true,
            autoclose: true,
            datesDisabled: false,
            endDate: '+10y',
            startDate: e.target.value,
            orientation: "top"
        }).on('hide', function(e) {
            e.target.blur()
        });
    })

    // Cria datepicker no DATA FIM ao carregar documento documento
    $('input[name="dataFim"]').datepicker({
        format: 'dd/mm/yyyy',                
        language: 'pt-BR',
        todayHighlight: true,
        autoclose: true,
        datesDisabled: '+0d',
        endDate: '+0d',
        startDate: '-0d',
        orientation: "top"
    }).on('hide', function(e) {
        e.target.blur()
    });

    // Remove datepicker criado no DATA INICIO e o recria com novas regras ao alterar DATA FIM
    $('#dataFimTaxa').change((e) => {
        $('input[name="dataInicio"]').datepicker('remove');

        $('input[name="dataInicio"]').datepicker({
            format: 'dd/mm/yyyy',                
            language: 'pt-BR',
            todayHighlight: true,
            autoclose: true,
            datesDisabled: false,
            endDate: e.target.value,
            startDate: '01/01/2015',
            orientation: "top"
        }).on('hide', function(e) {
            e.target.blur()
        });
    })
    
};
// Fim - Cria datepicker

// Inicio - Cria tabela de resultado de busca
function criaLinhaTabelaAdquirente(dados){

    var html = dados.map(item => `
    <div class="row justify-content-md-center align-items-center mt-2 mb-2">
        <div class="col-8 col-lg-3 mt-0">
            ${item.nome_adquirente}
        </div>

        <div class="col-5 col-lg-3 mt-0 d-none d-lg-block">
            ${item.identidade_adquirente}
        </div>

        <div class="col-5 col-lg-3 mt-0 d-none d-lg-block">
            ${item.nome_representante_adquirente}
        </div>

        <div class="col-4 col-lg-2 mt-0 text-center">
            <i class="fas fa-edit cor-secundaria-duby btnActions mr-1 edita-adquirente" data-toggle="modal" data-target="#editaAdquirenteModal" name="${item.id}"></i>
            <i class="fas fa-trash-alt text-danger btnActions deleta-adquirente" data-toggle="modal" data-target="#deletaAdquirenteModal" name="${item.id}"></i>
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
                Nenhum adquirente encontrado.
            </div>
        </div>
        `
    }

    document.getElementById('conteudoTabela').innerHTML = html;

    $(".edita-adquirente").click((e)=>{
        var id = e.target.getAttribute('name');
        var adquirenteSelecionado = listaAdquirentes.find(x => x.id === id);
        idAdquirente = id;

        criaTagFormaPagamento(adquirenteSelecionado)
        montaTelaEdicao(adquirenteSelecionado);
    })

    $(".deleta-adquirente").click((e)=>{
        var id = e.target.getAttribute('name');
        var adquirenteSelecionado = listaAdquirentes.find(x => x.id === id);

        console.log(adquirenteSelecionado)
        
        document.getElementById("spanNomeAdquirente").innerHTML = adquirenteSelecionado.nome_adquirente
        $('#deletaAdquirenteModal').modal('show');
        
        idAdquirente = id;
    })

}
// Fim - Cria tabela de resultado de busca

// Chama função de deleção ao clidar no botão de delete
$("#btnDeletaAdquirente").click(() => {
    deletaAdquirente();
})

// Deleta adquirente
function deletaAdquirente(){
    var adquirenteSelecionado = listaAdquirentes.find(x => x.id === idAdquirente);
    listaAdquirentes = listaAdquirentes.filter(item => item !== adquirenteSelecionado)

    buscaAdquirentes();

    $('#deletaAdquirenteModal').modal('hide');
}

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
            case "identidade":
                listaBusca.sort((a,b) => (Number(a.identidade_adquirente) > Number(b.identidade_adquirente)) ? 1 : ((Number(b.identidade_adquirente) > Number(a.identidade_adquirente)) ? -1 : 0))
                break;
            case "representante":
                listaBusca.sort((a,b) => (a.nome_representante_adquirente.toUpperCase() > b.nome_representante_adquirente.toUpperCase()) ? 1 : ((b.nome_representante_adquirente.toUpperCase() > a.nome_representante_adquirente.toUpperCase()) ? -1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.nome_adquirente.toUpperCase() > b.nome_adquirente.toUpperCase()) ? 1 : ((b.nome_adquirente.toUpperCase() > a.nome_adquirente.toUpperCase()) ? -1 : 0))
                break
        }
    } else {
        switch (tipoOrder){
            case "identidade":
                listaBusca.sort((a,b) => (Number(a.identidade_adquirente) > Number(b.identidade_adquirente)) ? -1 : ((Number(b.identidade_adquirente) > Number(a.identidade_adquirente)) ? 1 : 0))
                break;
            case "representante":
                listaBusca.sort((a,b) => (a.nome_representante_adquirente.toUpperCase() > b.nome_representante_adquirente.toUpperCase()) ? -1 : ((b.nome_representante_adquirente.toUpperCase() > a.nome_representante_adquirente.toUpperCase()) ? 1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.nome_adquirente.toUpperCase() > b.nome_adquirente.toUpperCase()) ? -1 : ((b.nome_adquirente.toUpperCase() > a.nome_adquirente.toUpperCase()) ? 1 : 0))
                break
        }
    }

    criaLinhaTabelaAdquirente(listaBusca);
})
// Fim - Função de ordenação

// Cria tags de forma de pagamento
function criaTagFormaPagamento(adquirenteSelecionado){

    const html = adquirenteSelecionado.formas_de_pagamento.map(item => `
    <div class="btn-group mt-1">
        <button type="button" class="btn btn-sm btn-dropdown-duby">${item.tipo != 3 ? item.tipoTexto : item.tipoTexto + ' - '+ item.bandeiraTexto}</button>
        <button type="button" class="btn btn-sm btn-outline-duby dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
            <button class="dropdown-item text-dark editaFormaPagamento" name="${item.id}" href="javascript:void(0)"><i class="far fa-edit mr-2"></i> Editar</button>
            <a class="dropdown-item text-danger deletaFormaPagamento" href="javascript:void(0)" name="${item.id}"><i class="fas fa-trash-alt mr-3"></i>Deletar</a>
        </div>
    </div>
    `).join(''); // Junta o array de strings para criar uma string única

    document.getElementById('div-formas-pagamento').innerHTML = html;

    // Seleciona a forma de pagamento e abre form de edição ao clicar no botão de tag
    $(".editaFormaPagamento").click((e)=>{
        var id;
        
        if(!e.target.name || e.target.name==undefined){
            id = e.target.parentNode.name;
        }
        else{
            id = e.target.name;
        }

        var formaPagamento = listaAdquirentes.find(x => x.id == idAdquirente).formas_de_pagamento.find(x => x.id == id)

        idFormaPagamento = id;

        // chama form de edição
        editaFormaPagamento(formaPagamento)
    })

    // Seleciona a forma de pagamento e abre modal de deleção ao clicar no botão de tag
    $(".deletaFormaPagamento").click((e)=>{
        var id;
        
        if(!e.target.name || e.target.name==undefined){
            id = e.target.parentNode.name;
        }
        else{
            id = e.target.name;
        }
        var formaPagamento = listaAdquirentes.find(x => x.id == idAdquirente).formas_de_pagamento.find(x => x.id == id)
        
        if(formaPagamento.tipo == 3){
            document.getElementById("spanNomeFormaPagamento").innerHTML = formaPagamento.tipoTexto + " - " + formaPagamento.bandeiraTexto
        }else{
            document.getElementById("spanNomeFormaPagamento").innerHTML = formaPagamento.tipoTexto
        }
        
        $('#deletarFormaPagamentoModal').modal('show');
        
        idFormaPagamento = id;
    })
}

// Chama função de deleção ao clidar no botão de delete
$("#btnDeletarFormaPagamento").click(() => {
    deletaFormaPagamento()
})

// Deleta forma de pagamento
function deletaFormaPagamento(){
    var formaSelecionada = listaAdquirentes.find(x => x.id == idAdquirente).formas_de_pagamento.find(x => x.id == idFormaPagamento);
    var adquirenteSelecionado = listaAdquirentes.find(x => x.id == idAdquirente);
    adquirenteSelecionado.formas_de_pagamento = adquirenteSelecionado.formas_de_pagamento.filter(forma => forma !== formaSelecionada)
    var msgSucesso;

    criaTagFormaPagamento(adquirenteSelecionado);

    $('#deletarFormaPagamentoModal').modal('hide');

    // Options retornam para a lista
    if(formaSelecionada.tipo != 3){
        $('#tipo-pagamento option[value="'+ formaSelecionada.tipo +'"]').css("display", "block");
        msgSucesso = formaSelecionada.tipoTexto;
    } else {
        $("#bandeira-pagamento option[value='"+ formaSelecionada.bandeira +"']").css("display", "block");
        msgSucesso = formaSelecionada.tipoTexto + " - " + formaSelecionada.bandeiraTexto;
    }

    showSuccessDeletaTaxa(msgSucesso);
    idFormaPagamento = null;
}

// Inicio - Botão de nova forma de pagamento
$("#adicionaFormaPagamento").click(() => {
    var adquirenteSelecionado = listaAdquirentes.find(item => item.id == idAdquirente)
    
    adquirenteSelecionado.formas_de_pagamento.map(item => {
        if(item.tipo != 3){
            $('#tipo-pagamento option[value="'+ item.tipo +'"]').css("display", "none");
        } else {
            $("#bandeira-pagamento option[value='"+ item.bandeira +"']").css("display", "none");
        }
    })
})
// Fim - Botão de nova forma de pagamento

// Inicio - Monta modal de edição
function montaTelaEdicao(adquirente){
    document.getElementById("nome-adquirente").value = adquirente.nome_adquirente;
    document.getElementById("descricao-adquirente").value = adquirente.descricao_adquirente;
    document.getElementById("chave-api-adquirente").value = adquirente.api_adquirente;
    document.getElementById("identidade-adquirente").value = adquirente.identidade_adquirente;
    document.getElementById("nome-representante-adquirente").value = adquirente.nome_representante_adquirente; 
    document.getElementById("sobrenome-representante-adquirente").value = adquirente.sobrenome_representante_adquirente;
    document.getElementById("email-representante-adquirente").value = adquirente.email_representante_adquirente;
    document.getElementById("celular-representante-adquirente").value = adquirente.celular_representante_adquirente;
    document.getElementById("cpf-representante-adquirente").value = adquirente.cpf_representante_adquirente;
    document.getElementById("rg-representante-adquirente").value = adquirente.rg_representante_adquirente;
}
// Fim - Monta modal de edição

// Edita forma de pagamento
function editaFormaPagamento(forma){
    console.log(forma)
    document.getElementById('dataInicioTaxa').value = forma.inicio_vigencia.toLocaleDateString()
    document.getElementById('dataFimTaxa').value = forma.fim_vigencia.toLocaleDateString()
    document.getElementById('observacaoTaxa').value = forma.observacao
    document.getElementById('tipo-pagamento').value = forma.tipo
    $('#tipo-pagamento').prop('disabled', true);
    
    tipoLayout(forma.tipo);

    if(forma.tipo == 3){
        document.getElementById('bandeira-pagamento').value = forma.bandeira
        $('#bandeira-pagamento').prop('disabled', true)

        forma.taxas.forEach(credito => {
            document.getElementById('taxa-' + credito.parcela + 'x').value = credito.taxa
        });

    }else{
        document.getElementById('taxa-forma-pagamento').value = forma.taxas[0].taxa
    }
    
    parametrosData(forma.inicio_vigencia, forma.fim_vigencia);
    $('#formaPagamentoModal').modal('show');
}


$("#salvarFormaDePagamento").click(() => {
    limpaErrosModalTaxa();
    var adquirenteCadastrado = listaAdquirentes.find(item => item.id == idAdquirente);
    
    var adquirenteSelecionado = new Object();
    adquirenteSelecionado = adquirenteCadastrado;

    var edicao = idFormaPagamento == null || !idFormaPagamento ? false : true;

    var formInvalido = false;
    
    // Pega infos do HTML
    const tipo = document.getElementById('tipo-pagamento')
    const tipoTexto = $("#tipo-pagamento").find(":selected").text()
    const taxa = document.getElementById('taxa-forma-pagamento')

    const dataInicio = document.getElementById('dataInicioTaxa')
    const dataFim = document.getElementById('dataFimTaxa')

    const bandeira = document.getElementById('bandeira-pagamento')
    const bandeiraTexto = $("#bandeira-pagamento").find(":selected").text()
    var taxaCredito;
    const observacao = document.getElementById('observacaoTaxa')

    // Verifica se infos são nulos
    if(tipo.value == 0 || tipo.value == null){
        $("#tipoNulo").show();
        formInvalido = true;
    }

    if((taxa.value == "" || taxa.value == null) && tipo.value != 3){
        $("#taxaNulo").show();
        formInvalido = true;
    }

    if(tipo.value == 3){
        for(var i = 1; i <= 12; i++){
            taxaCredito = document.getElementById('taxa-' + i + 'x')

            if(taxaCredito.value == "" || taxaCredito.value == null){
                $("#taxa-" + i + "x-nulo").show();
                formInvalido = true;
            }
        }
    }

    if(tipo.value == 3 && bandeira.value == 0){
        $("#bandeiraNulo").show();
        formInvalido = true;
    }

    if(dataInicio.value == "" || dataInicio.value == null){
        $("#dataInicioNulo").show();
        formInvalido = true;
    }

    if(dataFim.value == "" || dataFim.value == null){
        $("#dataFimNulo").show();
        formInvalido = true;
    }

    // Caso algum campo obrigatório seja nulo, cancela o envio do form
    if(formInvalido)
        return false;

    var formaPagamento = new Object();

    formaPagamento.id = idFormaPagamento == null || !idFormaPagamento ? Math.random().toString(16).slice(2) : idFormaPagamento;
    formaPagamento.inicio_vigencia = formataData(dataInicio.value);
    formaPagamento.fim_vigencia = formataData(dataFim.value);
    formaPagamento.tipo = tipo.value;
    formaPagamento.tipoTexto = tipoTexto;
    formaPagamento.observacao = observacao.value;
    formaPagamento.taxas = []

    var msgSucesso;

    if(formaPagamento.tipo != 3){
        formaPagamento.taxas.push({taxa: taxa.value})
        msgSucesso = formaPagamento.tipoTexto;
    }else{
        formaPagamento.bandeira = bandeira.value;
        formaPagamento.bandeiraTexto = bandeiraTexto;
        for(var i = 1; i <= 12; i++){
            var objetoTaxa = new Object();
            objetoTaxa.taxa = document.getElementById('taxa-' + i + 'x').value;
            objetoTaxa.parcela = i;

            formaPagamento.taxas.push(objetoTaxa)
            
        }
        formaPagamento.taxaCredito = taxaCredito.value;
        msgSucesso = formaPagamento.tipoTexto + " - " + formaPagamento.bandeiraTexto;
    }

    if(!edicao){
        adquirenteSelecionado.formas_de_pagamento.push(formaPagamento)
        showSuccessNovaTaxa(msgSucesso)
    }else{
        adquirenteSelecionado.formas_de_pagamento = adquirenteSelecionado.formas_de_pagamento.map(formaCadastrada => {
            if (formaCadastrada.id == formaPagamento.id) {
                return formaPagamento;
            }
            return formaCadastrada;
        });
        idFormaPagamento = null;
        showSuccessEditaTaxa(msgSucesso)
    }

    criaTagFormaPagamento(adquirenteSelecionado)
    limpaFormModalTaxa();

    // Fecha o modal
    $('#formaPagamentoModal').modal('hide');
})

// Fecha modal forma de pagamento
$(".closeModalTipoPagamento").click(() => {
    limpaErrosModalTaxa();
    limpaFormModalTaxa();
})

function limpaErrosModalTaxa(){
    $("#tipoNulo").hide();
    $("#taxaNulo").hide();
    $("#bandeiraNulo").hide();
    $("#dataInicioNulo").hide();
    $("#dataFimNulo").hide();
    for(var i = 1; i <= 12; i++){
        $("#taxa-" + i + "x-nulo").hide();
    }
}

function limpaFormModalTaxa(){
    // APAGA INFOS
    $("#tipo-pagamento").val("0");
    $('#tipo-pagamento').prop('disabled', false);
    $("#bandeira-pagamento").val("0");
    $('#bandeira-pagamento').prop('disabled', false)
    $("#taxa-forma-pagamento").val("");
    $("#dataInicioTaxa").val("");
    $("#dataFimTaxa").val("");
    for(var i = 1; i <= 12; i++){
        $("#taxa-" + i + "x").val("");
    }
    $("#observacaoTaxa").val("");

    // RESETA DATEPICKER
    $('input[name="dataInicio"]').datepicker('remove');
    $('input[name="dataFim"]').datepicker('remove');
    parametrosData()

    // ARRUMA MODAL PARA PADRAO
    $("#div-taxa-unica").removeClass("d-none");
    $("#div-bandeira").addClass("d-none");
    $("#div-taxa-prestacao").addClass("d-none"); 

}

// ALTERA LAYOUT DO MODAL DE FORMA DE CADASTRO PARA CRÉDITO OU RESETA PARA LAYOUT PADRÃO
function tipoLayout(tipo){
    if(tipo == 3){
        $("#div-taxa-unica").addClass("d-none");

        $("#div-bandeira").removeClass("d-none"); 
        $("#div-taxa-prestacao").removeClass("d-none"); 
    }else{
        $("#div-taxa-unica").removeClass("d-none");

        $("#div-bandeira").addClass("d-none");
        $("#div-taxa-prestacao").addClass("d-none"); 
    }
}

$("#tipo-pagamento").on("change", (e) => {
    tipoLayout(e.target.value);

    verificaScroll()
})

$('#formaPagamentoModal').on('hidden.bs.modal', function () {
    $('body').addClass('modal-open');
    idFormaPagamento = null;

    // Coloca os tipos e bandeiras no select novamente
    $("#tipo-pagamento option").removeAttr("style")
    $("#bandeira-pagamento option").removeAttr("style")
});

$('#deletarFormaPagamentoModal').on('hidden.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#editaAdquirenteModal').on('hidden.bs.modal', function () {
    idAdquirente = null;
});

$('#formaPagamentoModal').on('show.bs.modal', function () {
    (function($) {
        $.fn.hasScrollBar = function() {
            return this.get(0).scrollHeight > this.height();
        }
    })($);

    //timeOut pra dar tempo do modal e scroll aparecer, caso existente
    setTimeout(verificaScroll, 180)
});

function verificaScroll(){
    var scrollExistente = $("#formaPagamentoModal").hasScrollBar();

    if(scrollExistente){
        $("#formaPagamentoModal").removeClass("formaComScroll")
        $("#formaPagamentoModal").addClass("formaSemScroll")
    } else {
        $("#formaPagamentoModal").removeClass("formaSemScroll")
        $("#formaPagamentoModal").addClass("formaComScroll")
    }
}

function formataData (data){    
    var splitData = data.split("/");
    var novaData = new Date(Number(splitData[2]), Number(splitData[1]) - 1, Number(splitData[0]));
    
    return novaData;
}


// MOSTRA MENSAGEM DE SUCESSO AO EDITAR TAXA
function showSuccessEditaTaxa(msgSucesso){
    Swal.fire({
        title: "<strong>Taxa editada!</strong>",
        icon: "success",
        html: `
            Sucesso ao editar <b>${msgSucesso}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}

// MOSTRA MENSAGEM DE SUCESSO AO CADASTRAR TAXA
function showSuccessNovaTaxa(msgSucesso){
    Swal.fire({
        title: "<strong>Taxa cadastrada!</strong>",
        icon: "success",
        html: `
            Sucesso ao adicionar <b>${msgSucesso}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}

// MOSTRA MENSAGEM DE SUCESSO AO DELETAR TAXA
function showSuccessDeletaTaxa(msgSucesso){
    Swal.fire({
        title: "<strong>Taxa deletada!</strong>",
        icon: "success",
        html: `
            Sucesso ao deletar <b>${msgSucesso}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}

$("#formBuscaAdquirentes").on("submit", () => {
    buscaAdquirentes();
})

// Faz busca com filtro
function buscaAdquirentes(){
    listaBusca = [];
    
    var val = document.getElementById("nomeAdquirenteBusca").value;
    listaAdquirentes.map(item => {
        if(item.nome_adquirente.toUpperCase().includes(val.toUpperCase())){
            listaBusca.push(item)
        }
    })

    listaBusca.sort((a,b) => (a.nome_adquirente.toUpperCase() > b.nome_adquirente.toUpperCase()) ? 1 : ((b.nome_adquirente.toUpperCase() > a.nome_adquirente.toUpperCase()) ? -1 : 0))
    
    $(".spanOrderBy i").removeClass("fa-sort-down");
    $(".spanOrderBy i").removeClass("fa-sort-up");
    $(".spanOrderBy i").addClass("fa-sort");
    
    $("#defaultOrderBy").removeClass("fa-sort");
    $("#defaultOrderBy").addClass("fa-sort-down");

    criaLinhaTabelaAdquirente(listaBusca)
}
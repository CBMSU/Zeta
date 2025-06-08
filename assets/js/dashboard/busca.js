var idConciliacao = null;

$(document).ready(function () {
    $('#valor-recebido-conciliacao').mask("#.##0,00", {reverse: true});

    $('#valorInicial').mask("#.##0,00", {reverse: true});
    $('#valorFinal').mask("#.##0,00", {reverse: true});
    parametrosData()
})

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
    $('#dataInicio').change((e) => {
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
    $('#dataFim').change((e) => {
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

// INICIO CRIAÇÃO TABELA RESULTADO
var listaConciliacoes = [];

var conciliacao1 = new Object();
conciliacao1.id = Math.random().toString(16).slice(2);
conciliacao1.data = new Date(2025, 2, 5);
conciliacao1.status = 3;
conciliacao1.adquirente = "Cielo";
conciliacao1.banco = "Banco do Brasil";
conciliacao1.valorEsperado = "R$ 1.200,00";
conciliacao1.valorRecebido = "R$ 1.200,00";
conciliacao1.diferenca = "";
conciliacao1.bandeira = "Visa";
conciliacao1.parcelaNum = 1;
conciliacao1.parcelaTotal = 2;
conciliacao1.tipo = "Crédito";
conciliacao1.taxa = "4%";
conciliacao1.observacoes = [];
listaConciliacoes.push(conciliacao1);

var conciliacao2 = new Object();
conciliacao2.id = Math.random().toString(16).slice(2);
conciliacao2.data = new Date(2025, 2, 10);
conciliacao2.status = 3;
conciliacao2.adquirente = "Getnet";
conciliacao2.banco = "Caixa";
conciliacao2.valorEsperado = "R$ 2.500,00";
conciliacao2.valorRecebido = "R$ 2.500,00";
conciliacao2.diferenca = "";
conciliacao2.tipo = "Pix";
conciliacao2.taxa = "1.5%";
conciliacao2.observacoes = [];
listaConciliacoes.push(conciliacao2);

var conciliacao3 = new Object();
conciliacao3.id = Math.random().toString(16).slice(2);
conciliacao3.data = new Date(2025, 2, 15);
conciliacao3.status = 2;
conciliacao3.adquirente = "Pagseguro";
conciliacao3.banco = "Nubank";
conciliacao3.valorEsperado = "R$ 800,00";
conciliacao3.valorRecebido = "R$ 700,00";
conciliacao3.diferenca = "- R$ 100,00";
conciliacao3.tipo = "Boleto";
conciliacao3.taxa = "2%";
conciliacao3.observacoes = [
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 11, 11, 10, 38), observacao: "Gabriel, colaborador do Pagseguro, pediu 3 dias úteis para revisão do caso."}, 
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 12, 17, 39, 55), observacao: "Gabriel pediu comprovantes de pagamento para verificar conflito."}, 
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 15, 15, 25, 8), observacao: "Andressa, gerente do Pagseguro, informa que ocorreu um equívoco e fará estorno do valor até dia 20/04."}
];
listaConciliacoes.push(conciliacao3);

var conciliacao4 = new Object();
conciliacao4.id = Math.random().toString(16).slice(2);
conciliacao4.data = new Date(2025, 2, 20);
conciliacao4.status = 1;
conciliacao4.adquirente = "Rede";
conciliacao4.banco = "Viacredi";
conciliacao4.valorEsperado = "R$ 3.000,00";
conciliacao4.valorRecebido = "R$ 2.700,00";
conciliacao4.diferenca = "- R$ 300,00";
conciliacao4.tipo = "Débito";
conciliacao4.taxa = "1%";
conciliacao4.observacoes = [];
listaConciliacoes.push(conciliacao4);

var conciliacao5 = new Object();
conciliacao5.id = Math.random().toString(16).slice(2);
conciliacao5.data = new Date(2025, 2, 25);
conciliacao5.status = 3;
conciliacao5.adquirente = "Stone";
conciliacao5.banco = "Itaú";
conciliacao5.valorEsperado = "R$ 5.000,00";
conciliacao5.valorRecebido = "R$ 4.750,00";
conciliacao5.diferenca = "- R$ 50,00";
conciliacao5.bandeira = "Mastercard";
conciliacao5.parcelaNum = 2;
conciliacao5.parcelaTotal = 6;
conciliacao5.tipo = "Crédito";
conciliacao5.taxa = "3.5%";
conciliacao5.observacoes = [
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 1, 10, 30, 0), observacao: "Cliente solicitou revisão da taxa aplicada."},
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 2, 14, 15, 0), observacao: "Stone confirmou ajuste e reembolso parcial."}
];
conciliacao5.valorRecebidoSolucionado = "50,00";
listaConciliacoes.push(conciliacao5);

var conciliacao6 = new Object();
conciliacao6.id = Math.random().toString(16).slice(2);
conciliacao6.data = new Date(2025, 2, 28);
conciliacao6.status = 3;
conciliacao6.adquirente = "Cielo";
conciliacao6.banco = "Nubank";
conciliacao6.valorEsperado = "R$ 900,00";
conciliacao6.valorRecebido = "R$ 900,00";
conciliacao6.diferenca = "";
conciliacao6.bandeira = "AmericanExpress";
conciliacao6.parcelaNum = 1;
conciliacao6.parcelaTotal = 3;
conciliacao6.tipo = "Crédito";
conciliacao6.taxa = "5%";
conciliacao6.observacoes = [];
listaConciliacoes.push(conciliacao6);

var conciliacao7 = new Object();
conciliacao7.id = Math.random().toString(16).slice(2);
conciliacao7.data = new Date(2025, 2, 30);
conciliacao7.status = 1;
conciliacao7.adquirente = "Getnet";
conciliacao7.banco = "Caixa";
conciliacao7.valorEsperado = "R$ 1.500,00";
conciliacao7.valorRecebido = "R$ 1.200,00";
conciliacao7.diferenca = "- R$ 300,00";
conciliacao7.bandeira = "Elo";
conciliacao7.parcelaNum = 5;
conciliacao7.parcelaTotal = 10;
conciliacao7.tipo = "Crédito";
conciliacao7.taxa = "6%";
conciliacao7.observacoes = [
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 5, 9, 45, 0), observacao: "Getnet pediu documentos adicionais para análise."}
];
listaConciliacoes.push(conciliacao7);

var conciliacao8 = new Object();
conciliacao8.id = Math.random().toString(16).slice(2);
conciliacao8.data = new Date(2025, 3, 2);
conciliacao8.status = 3;
conciliacao8.adquirente = "Pagseguro";
conciliacao8.banco = "Banco do Brasil";
conciliacao8.valorEsperado = "R$ 2.000,00";
conciliacao8.valorRecebido = "R$ 2.000,00";
conciliacao8.diferenca = "";
conciliacao8.bandeira = "Hipercard";
conciliacao8.parcelaNum = 3;
conciliacao8.parcelaTotal = 6;
conciliacao8.tipo = "Crédito";
conciliacao8.taxa = "4.5%";
conciliacao8.observacoes = [];
listaConciliacoes.push(conciliacao8);
var listaBusca = listaConciliacoes;

// Inicio - Mostra infos tabela

$(document).ready(function () {    
    listaConciliacoes.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0))
    criaLinhaTabelaConciliacao(listaConciliacoes)
})

function criaLinhaTabelaConciliacao(lista){

    var html = lista.map(item => `
    <div class="row justify-content-md-center align-items-center mt-2 mb-2">
        <div class="col-6 col-lg-2 mt-0">
            ${item.data.toLocaleDateString()}
        </div>

        <div class="col-5 col-lg-2 mt-0 d-none d-lg-block">
            ${item.adquirente}
        </div>

        <div class="col-12 col-lg-2 mt-0 d-none d-lg-block text-center">
            ${item.valorEsperado}
        </div>

        <div class="col-4 col-lg-2 mt-0 d-none d-lg-block text-center">
            ${item.diferenca}
        </div>

        <div class="col-4 col-lg-2 mt-0 text-center">
            <span class="badge badge-${item.status == 3 ? "success" : "danger"} p-2" name="span${item.id}">${item.status == 3 ? "Conciliado" : "Divergente"}</span>
        </div>

        <div class="col-2 col-lg-1 mt-0 text-center">
            <i class="fas fa-eye cor-secundaria-duby plus-info-conciliacao" data-toggle="modal" data-target="#infoDivergenteModal" name="${item.id}"></i>
        </div>

        <!-- DIVIDER  -->
        <div class="col-12 col-lg-12 mt-0">
            <hr class="mt-2 mb-0"/>
        </div>
    </div>
    `).join(''); 

    if(lista.length == 0){
        html = `
        <div class="row justify-content-md-center mt-3 mb-3">
            <div class="col-12 col-lg-11 my-0 text-center font-weight-bold text-dark bg-gray py-3">
                Nenhum dado encontrado.
            </div>
        </div>
        `
    }

    document.getElementById('conteudoTabela').innerHTML = html;

    $(".plus-info-conciliacao").click((e)=>{
        var id = e.target.getAttribute('name');
        var conciliacaoSelecionada = listaConciliacoes.find(x => x.id === id);
        idConciliacao = id;

        mostraInfoConciliacao(conciliacaoSelecionada)
    })

}

// Fim - Mostra infos tabela
// INÍCIO - TROCA STATUS DE CONCILIAÇÃO

$('.spanstatus').click((e) => {
    var tipoStatus = e.target.attributes.name.value;
    alteraStatus(tipoStatus);
})

function alteraStatus(tipoStatus){
    tipoStatus = parseInt(tipoStatus);
    var textoDrop = tipoStatus == 2 ? "Em análise" : tipoStatus == 3 ? "Solucionado" : "Pendente";

    tipoStatus == 3 ? $("#valorRecebidoStatus").removeClass("d-none") : $("#valorRecebidoStatus").addClass("d-none");

    document.getElementById("htmlBtnDropdown").setAttribute('name', tipoStatus);

    document.querySelector("#htmlBtnDropdown").innerHTML = textoDrop;
    var corStatus;

    switch(tipoStatus){
        case 1:
            corStatus = "#FF5052";
            break;
        case 2:
            corStatus = "#2C85DE";
            break;
        case 3:
            corStatus = "#00C72C";
            break;
        default:
            corStatus = "#000";
    }

    $("#dropdown").css({"background-color": corStatus});

}


// FIM - TROCA STATUS DE CONCILIAÇÃO
// INÍCIO - Criação de infos modal

function mostraInfoConciliacao(concilicaocaSelecionada){
    document.getElementById('div-data-conciliacao').innerHTML = concilicaocaSelecionada.data.toLocaleDateString();

    alteraStatus(concilicaocaSelecionada.status);
    if (concilicaocaSelecionada.status == 3){
        $("#dropdown").removeClass("dropdown-toggle").prop("disabled", true);
        $("#btnSalvarStatusConcilicao").addClass("d-none");
        $("#rowObservacaoStatus").addClass("d-none");
        concilicaocaSelecionada.valorRecebidoSolucionado ? 
            document.getElementById('span-valor-recebido-solucionado').innerHTML = "R$ " + concilicaocaSelecionada.valorRecebidoSolucionado :
            document.getElementById('span-valor-recebido-solucionado').innerHTML = "-"
        $("#valor-recebido-solucionado").removeClass("d-none");
        $("#valorRecebidoStatus").addClass("d-none")
    } else {
        $("#btnSalvarStatusConcilicao").removeClass("d-none");
        $("#dropdown").addClass("dropdown-toggle").prop("disabled", false);
        $("#rowObservacaoStatus").removeClass("d-none");
        $("#valor-recebido-solucionado").addClass("d-none");
    }

    document.getElementById('div-adquirente-conciliacao').innerHTML = concilicaocaSelecionada.adquirente;
    document.getElementById('div-banco-conciliacao').innerHTML = concilicaocaSelecionada.banco;
    document.getElementById('div-valorEsperado-conciliacao').innerHTML = concilicaocaSelecionada.valorEsperado;
    document.getElementById('div-valorRecebido-conciliacao').innerHTML = concilicaocaSelecionada.valorRecebido;
    document.getElementById('div-diferenca-conciliacao').innerHTML = concilicaocaSelecionada.diferenca == "" ? "-" : concilicaocaSelecionada.diferenca;
    document.getElementById('div-bandeira-conciliacao').innerHTML = concilicaocaSelecionada.bandeira ? concilicaocaSelecionada.bandeira : "-";
    document.getElementById('div-parcelaNum-conciliacao').innerHTML = concilicaocaSelecionada.parcelaNum ? concilicaocaSelecionada.parcelaNum : "-";
    document.getElementById('div-parcelaTotal-conciliacao').innerHTML = concilicaocaSelecionada.parcelaTotal ? concilicaocaSelecionada.parcelaTotal : "-";
    document.getElementById('div-tipo-conciliacao').innerHTML = concilicaocaSelecionada.tipo;
    document.getElementById('div-taxa-conciliacao').innerHTML = concilicaocaSelecionada.taxa;

    if(concilicaocaSelecionada.diferenca == ""){
        $("#div-diferenca-conciliacao").removeClass("text-danger");
    }else{
        $("#div-diferenca-conciliacao").addClass("text-danger");
    }

    concilicaocaSelecionada.observacoes.sort((a,b) => (a.data > b.data) ? -1 : ((b.data > a.data) ? 1 : 0))

    const html = concilicaocaSelecionada.observacoes.map(item => `
        <hr class="my-0 border-gray"/>
        <div class="my-3">
            <p class="my-0 text-dark">${item.observacao}</p>
            <p class="my-0 mt-1 small"><span class="text-dark font-weight-bold">${item.usuario}</span> - ${item.data.toLocaleString()}</p>
        </div>
    `).join(''); 

    document.getElementById('observacoes-cadastradas').innerHTML = html;

}

$('#infoDivergenteModal').on('hide.bs.modal', function () {
    idConciliacao = null;
    document.getElementById("observacao-conciliacao").value = "";
    document.getElementById("valor-recebido-conciliacao").value = "";
    $("#btnSalvarStatusConcilicao").removeClass("d-none");
});

// FIM - Criação de infos modal
// Inicio - salvar status conciliacao

$("#btnSalvarStatusConcilicao").click(() => {
    $("#valorRecebidoConciliacaoNulo").hide();
    var conciliacao = listaConciliacoes.find(x => x.id === idConciliacao);

    conciliacao.status = parseInt(document.getElementById("htmlBtnDropdown").getAttribute('name'));

    if(conciliacao.status == 3){
        var valorRecebidoSolucionado = document.getElementById("valor-recebido-conciliacao").value;
        if(valorRecebidoSolucionado == 0 || valorRecebidoSolucionado == null){
            $("#valorRecebidoConciliacaoNulo").show();
            return false;
        }
        conciliacao.valorRecebidoSolucionado = valorRecebidoSolucionado;
    }

    var textoObservacao = document.getElementById("observacao-conciliacao").value;

    if(textoObservacao && textoObservacao != "" && textoObservacao != null && textoObservacao != undefined){
        var observacao = new Object();
        observacao.usuario = "Pedro Cardozo";
        observacao.data = new Date();
        observacao.observacao = textoObservacao;

        conciliacao.observacoes.push(observacao)
    }

    listaConciliacoes = listaConciliacoes.map(concilicacaoCadastrado => {
        if (concilicacaoCadastrado.id == conciliacao.id) {
            return conciliacao;
        }
        return concilicacaoCadastrado;
    });

    document.getElementById("observacao-conciliacao").value = "";
    mostraInfoConciliacao(conciliacao)
    
    showSuccess(conciliacao.adquirente)

    if(conciliacao.status == 3){
        $('span[name="span' + conciliacao.id + '"]').removeClass("badge-danger")
        $('span[name="span' + conciliacao.id + '"]').addClass("badge-success")
        $('span[name="span' + conciliacao.id + '"]').html("Conciliado")
    }

})
// Fim - salvar status conciliacao
// INÍCIO - ORDER BY TABELA CONCILIACAO

$(".spanOrderBy").click((e) => {
    var el = !e.target.firstChild ? e.target : e.target.firstChild;

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
            case "adquirente":
                listaBusca.sort((a,b) => (a.adquirente.toUpperCase() > b.adquirente.toUpperCase()) ? 1 : ((b.adquirente.toUpperCase() > a.adquirente.toUpperCase()) ? -1 : 0))
                break;
            case "valorEsperado":
                listaBusca.sort((a,b) => (Number(a.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(b.valorEsperado.replace(/[^0-9-]+/g,""))) ? 1 : ((Number(b.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(a.valorEsperado.replace(/[^0-9-]+/g,""))) ? -1 : 0))
                break;
            case "diferenca":
                listaBusca.sort((a,b) => (Number(a.diferenca.replace(/[^0-9-]+/g,"")) > Number(b.diferenca.replace(/[^0-9-]+/g,""))) ? -1 : ((Number(b.diferenca.replace(/[^0-9-]+/g,"")) > Number(a.diferenca.replace(/[^0-9-]+/g,""))) ? 1 : 0))
                break;
            case "status":
                listaBusca.sort((a,b) => (a.status > b.status) ? -1 : (b.status > a.status ? 1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0))
                break
        }
    } else {
        switch (tipoOrder){
            case "adquirente":
                listaBusca.sort((a,b) => (a.adquirente.toUpperCase() > b.adquirente.toUpperCase()) ? -1 : ((b.adquirente.toUpperCase() > a.adquirente.toUpperCase()) ? 1 : 0))
                break;
            case "valorEsperado":
                listaBusca.sort((a,b) => (Number(a.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(b.valorEsperado.replace(/[^0-9-]+/g,""))) ? -1 : ((Number(b.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(a.valorEsperado.replace(/[^0-9-]+/g,""))) ? 1 : 0))
                break;
            case "diferenca":
                listaBusca.sort((a,b) => (Number(a.diferenca.replace(/[^0-9-]+/g,"")) > Number(b.diferenca.replace(/[^0-9-]+/g,""))) ? 1 : ((Number(b.diferenca.replace(/[^0-9-]+/g,"")) > Number(a.diferenca.replace(/[^0-9-]+/g,""))) ? -1 : 0))
                break;
            case "status":
                listaBusca.sort((a,b) => (a.status > b.status) ? 1 : (b.status > a.status ? -1 : 0))
                break;
            default:
                listaBusca.sort((a,b) => (a.data > b.data) ? -1 : ((b.data > a.data) ? 1 : 0))
                break
        }
    }

    criaLinhaTabelaConciliacao(listaBusca);
    
})

// FIM - ORDER BY TABELA CONCILIACAO

// MOSTRA MENSAGEM DE SUCESSO AO ALTERAR STATUS / CADASTRAR OBSERVAÇÃO
function showSuccess(nomeAdquirente){
    Swal.fire({
        title: "<strong>Status atualizado!</strong>",
        icon: "success",
        html: `
            Sucesso ao atualizar o status da conciliação do adquirente <b>${nomeAdquirente}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}
// FIM CRIAÇÃO TABELA RESULTADO

// Inicio - Função de busca

$('#formBusca').on('submit', function(e) {
    e.preventDefault();

    const dataInicio = $('#dataInicio').val();
    const dataFim = $('#dataFim').val();
    const valorInicial = $('#valorInicial').val();
    const valorFinal = $('#valorFinal').val();

    const adquirentes = Array.from(document.querySelectorAll('#inputAdquirentes input[type="hidden"]')).map(opt => opt.value.toUpperCase());
    const bancos = Array.from(document.querySelectorAll('#inputBanco input[type="hidden"]')).map(opt => opt.value.toUpperCase());
    const tipos = Array.from(document.querySelectorAll('#inputTipo input[type="hidden"]')).map(opt => opt.value.toUpperCase());
    const bandeiras = Array.from(document.querySelectorAll('#inputBandeira input[type="hidden"]')).map(opt => opt.value.toUpperCase());

    const dados = {
        dataInicio,
        dataFim,
        valorInicial,
        valorFinal,
        adquirentes,
        bancos,
        tipos,
        bandeiras
    };

    listaBusca = []

    listaBusca = listaConciliacoes.filter(item => {
        // Verifica dataInicio
        if (dados.dataInicio && dados.dataInicio != "" && new Date(item.data) < converteData(dados.dataInicio)) {
            return false;
        }
        
        // Verifica dataFim
        if (dados.dataFim && dados.dataFim != "" && new Date(item.data) > converteData(dados.dataFim)) {
            return false;
        }

        // Verifica valor difereça minima
        if (dados.valorInicial && dados.valorInicial != "" && converteNumero(item.diferenca) < converteNumero(dados.valorInicial)) {
            return false;
        }

        // Verifica valor difereça maxima
        if (dados.valorFinal && dados.valorFinal != "" && converteNumero(item.diferenca) > converteNumero(dados.valorFinal)) {
            return false;
        }

        // Verifica valor diferença nula
        if(dados.valorFinal != "" && converteNumero(item.diferenca) == 0){
            return false;
        }

        // Verifica adquirentes
        if (!dados.adquirentes.includes(item.adquirente.toUpperCase())) {
            return false;
        } 

        // Verifica bancos
        if (!dados.bancos.includes(item.banco.toUpperCase())) {
            console.log(item.banco)
            return false;
        } 

        // Verifica tipo
        if (!dados.tipos.includes(item.tipo.toUpperCase())) {
            return false;
        } 

        // Verifica bandeira
        if (item.bandeira && !dados.bandeiras.includes(item.bandeira.toUpperCase())) {
            return false;
        } 

        return true;
    })

    console.log(listaBusca)
    criaLinhaTabelaConciliacao(listaBusca)
});

// Fim - Função de busca
// Inicio - Funções conversão

function converteData(dataString) {
    if (!dataString) return null; // Retorna null se a string estiver vazia
    
    const partes = dataString.split('/');
    if (partes.length !== 3) return null; // Verifica se está no formato dd/mm/yyyy
    
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // JavaScript usa meses de 0 a 11
    const ano = parseInt(partes[2], 10);
    
    // Validação básica para garantir que é uma data válida
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return null;
    
    return new Date(ano, mes, dia);
}

function converteNumero(num){
    num = num.replaceAll(".", "")
    num = num.replace(",", ".");
    num = num.replace("R$", "")
    num = num.replace("-", "")
    num = num.trim()

    // console.log(num)
    return Number(num)
}
// Fim - Funções conversão

// Inicio - Funções Exportação
$("#btnExportar").click(() => {
    (async() => {
        var tipoDados = $("#dadosExportacao").val();
        var listaExportacao = [];

        if (tipoDados == "0"){
            listaConciliacoes.map(item => {
                var conciliacao = new Object();
                conciliacao.data = item.data;
                conciliacao.adquirente = item.adquirente;
                conciliacao.banco = item.banco;
                conciliacao.valorEsperado = item.valorEsperado;
                conciliacao.valorRecebido = item.valorRecebido;
                conciliacao.diferenca = item.diferenca;
                conciliacao.tipo = item.tipo;
                conciliacao.taxa = item.taxa;
                conciliacao.bandeira = item.bandeira;
                conciliacao.parcelaNum = item.parcelaNum;
                conciliacao.parcelaTotal = item.parcelaTotal;
                conciliacao.valorRecebidoSolucionado = item.valorRecebidoSolucionado;
                conciliacao.status = item.status;

                listaExportacao.push(conciliacao)
            })
        } else {
            listaBusca.map(item => {
                var conciliacao = new Object();
                conciliacao.data = item.data;
                conciliacao.adquirente = item.adquirente;
                conciliacao.banco = item.banco;
                conciliacao.valorEsperado = item.valorEsperado;
                conciliacao.valorRecebido = item.valorRecebido;
                conciliacao.diferenca = item.diferenca;
                conciliacao.tipo = item.tipo;
                conciliacao.taxa = item.taxa;
                conciliacao.bandeira = item.bandeira;
                conciliacao.parcelaNum = item.parcelaNum;
                conciliacao.parcelaTotal = item.parcelaTotal;
                conciliacao.valorRecebidoSolucionado = item.valorRecebidoSolucionado;
                conciliacao.status = item.status;

                listaExportacao.push(conciliacao)
            })
        }

        exportToXLS(listaExportacao)
    })();
})

function exportToXLS(data) {
    const headers = [
        "Data",
        "Adquirente",
        "Banco",
        "Valor Esperado",
        "Valor Recebido",
        "Diferença",
        "Tipo",
        "Taxa",
        "Bandeira",
        "Parcela Atual",
        "Parcela Total",
        "Valor Recebido ao Solucionar",
        "Status"
    ];

    let html = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office"
              xmlns:x="urn:schemas-microsoft-com:office:excel">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <table border="1">
                <thead><tr>`;

    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });

    html += `</tr></thead><tbody>`;

    data.forEach(item => {
        let statusText = '';
        let bgColor = '';

        switch (item.status) {
            case 1:
                statusText = 'Pendente';
                bgColor = '#ffcccc';
                break;
            case 2:
                statusText = 'Em andamento';
                bgColor = '#ccccff';
                break;
            case 3:
                statusText = 'Conciliado';
                bgColor = '#ccffcc';
                break;
            default:
                statusText = 'Desconhecido';
                bgColor = '#ffffff';
        }

        html += `<tr>
            <td>${escapeHtml(formataDataDDMMYYYY(item.data))}</td>
            <td>${escapeHtml(item.adquirente)}</td>
            <td>${escapeHtml(item.banco)}</td>
            <td>${escapeHtml(formataCamposMoeda(item.valorEsperado))}</td>
            <td>${escapeHtml(formataCamposMoeda(item.valorRecebido))}</td>
            <td>${escapeHtml(formataCamposMoeda(item.diferenca))}</td>
            <td>${escapeHtml(item.tipo)}</td>
            <td>${escapeHtml(item.taxa)}</td>
            <td>${escapeHtml(item.bandeira)}</td>
            <td>${escapeHtml(item.parcelaNum)}</td>
            <td>${escapeHtml(item.parcelaTotal)}</td>
            <td>${escapeHtml(formataCamposMoeda(item.valorRecebidoSolucionado))}</td>
            <td style="background-color:${bgColor};">${escapeHtml(statusText)}</td>
        </tr>`;
    });

    html += `</tbody></table></body></html>`;

    const blob = new Blob([html], {
        type: 'application/vnd.ms-excel;charset=utf-8;'
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'conciliacoes.xls';
    link.click();
}

function escapeHtml(str) {
    if (str === null || str === undefined || str === '') return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function formataDataDDMMYYYY(date) {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d)) return date; // se não for uma data válida, mantém original
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

function formataCamposMoeda(value) {
    if (value === null || value === undefined || value === '') return '';
    const number = parseFloat(value);
    if (isNaN(number)) return value; // Se não for número, mantém o valor original
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}

// Fim - Funções Exportação
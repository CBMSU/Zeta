var idDivergencia = null;

$(document).ready(function () {
    $('#valor-recebido-conciliacao').mask("#.##0,00", {reverse: true});

    // CRIAÇÃO DO GRÁFICO
    const ctx = document.getElementById('graficoRepassesPeriodo').getContext('2d');

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
            label: 'Repasse',
            data: [1000, 2000, 1500, 2500, 1300, 500, 1400, 2200, 2500, 1000, 1500, 2000],
            borderColor: '#412884',
            fill: 
            {
                target: 'origin',
                above: 'rgba(65, 40, 132, 0.4)',   // Cor da area acima da origem
            },
            stepped: "middle",
            }
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        maintainAspectRatio: false,
        options: {
            responsive: true,
            interaction: {
                intersect: false,
                axis: 'x'
            },
            
        plugins: {
            title: {
                display: true,
                text: 'Repasses por Período',
                color: "#412884",
                align: "start",
                font: {size : 20},
                padding: {bottom: 23}
            },
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
                displayColors: false   // remove quadrado ao lado do tooltip
            }
        },
        scales: {
        y: {
            beginAtZero: true
        }, 
        }}
    });

    // FIM CRIAÇÃO DO GRÁFICO

});

var listaDivergentes = [];

var divergencia1 = new Object();
divergencia1.id = Math.random().toString(16).slice(2);
divergencia1.data = new Date(2025, 2, 5);
divergencia1.status = 1;
divergencia1.adquirente = "TecnoPayments";
divergencia1.banco = "PokemonBank";
divergencia1.valorEsperado = "R$ 300.000,00";
divergencia1.valorRecebido = "R$ 285.000,00";
divergencia1.diferenca = "- R$ 15.000,00";
divergencia1.bandeira = "Visa";
divergencia1.parcelaNum = 1;
divergencia1.parcelaTotal = 4;
divergencia1.tipo = "Crédito";
divergencia1.taxa = "5%";
divergencia1.observacoes = [];

listaDivergentes.push(divergencia1)

var divergencia2 = new Object();
divergencia2.id = Math.random().toString(16).slice(2);
divergencia2.data = new Date(2025, 2, 1);
divergencia2.status = 2;
divergencia2.adquirente = "AdiqCard Solutions";
divergencia2.banco = "DigimonBank";
divergencia2.valorEsperado = "R$ 250.000,00";
divergencia2.valorRecebido = "R$ 246.000,00";
divergencia2.diferenca = "- R$ 4.000,00";
divergencia2.tipo = "Pix";
divergencia2.taxa = "2%";
divergencia2.observacoes = [];

listaDivergentes.push(divergencia2)

var divergencia3 = new Object();
divergencia3.id = Math.random().toString(16).slice(2);
divergencia3.data = new Date(2025, 2, 12);
divergencia3.status = 1;
divergencia3.adquirente = "PayMax Digital";
divergencia3.banco = "CinderelaBank";
divergencia3.valorEsperado = "R$ 180.000,00";
divergencia3.valorRecebido = "R$ 140.000,00";
divergencia3.diferenca = "- R$ 40.000,00";
divergencia3.tipo = "Boleto";
divergencia3.taxa = "3%";
divergencia3.observacoes = [];

listaDivergentes.push(divergencia3)

var divergencia4 = new Object();
divergencia4.id = Math.random().toString(16).slice(2);
divergencia4.data = new Date(2025, 2, 25);
divergencia4.status = 2;
divergencia4.adquirente = "MoneyAdiq";
divergencia4.banco = "ExampleBank";
divergencia4.valorEsperado = "R$ 500,00";
divergencia4.valorRecebido = "R$ 200,00";
divergencia4.diferenca = "- R$ 300,00";
divergencia4.bandeira = "Mastercard";
divergencia4.parcelaNum = 8;
divergencia4.parcelaTotal = 12;
divergencia4.tipo = "Crédito";
divergencia4.taxa = "15%";
divergencia4.observacoes = [
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 11, 11, 10, 38), observacao: "Gabriel, colaborador da MoneyAdiq, pediu 3 dias úteis para revisão do caso."}, 
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 12, 17, 39, 55), observacao: "Gabriel pediu comprovantes de pagamento para verificar conflito."}, 
    {usuario: "Pedro Cardozo", data: new Date(2025, 4, 15, 15, 25, 8), observacao: "Andressa, gerente da MoneyAdiq, informa que ocorreu um equívoco e fará estorno do valor até dia 20/04."}
];

listaDivergentes.push(divergencia4)

// Inicio - Mostra infos tabela

$(document).ready(function () {    
    listaDivergentes.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0))
    criaLinhaTabelaDivergentes()
})

function criaLinhaTabelaDivergentes(){

    const html = listaDivergentes.map(item => `
    <div class="row justify-content-md-center align-items-center mt-2 mb-2">
        <div class="col-6 col-lg-2 mt-0">
            ${item.data.toLocaleDateString()}
        </div>

        <div class="col-5 col-lg-3 mt-0 d-none d-lg-block">
            ${item.adquirente}
        </div>

        <div class="col-12 col-lg-2 mt-0 d-none d-lg-block">
            ${item.valorEsperado}
        </div>

        <div class="col-4 col-lg-2 mt-0 d-none d-lg-block">
            ${item.diferenca}
        </div>

        <div class="col-4 col-lg-1 mt-0">
            <span class="badge badge-danger p-2">Divergente</span>
        </div>

        <div class="col-2 col-lg-1 mt-0 text-center">
            <i class="fas fa-eye cor-secundaria-duby plus-info-conciliacao" data-toggle="modal" data-target="#infoDivergenteModal" name="${item.id}"></i>
        </div>

        <!-- DIVIDER  -->
        <div class="col-12 col-lg-11 mt-0">
            <hr class="mt-2 mb-0"/>
        </div>
    </div>
    `).join(''); 

    document.getElementById('conteudoTabela').innerHTML = html;

    $(".plus-info-conciliacao").click((e)=>{
        var id = e.target.getAttribute('name');
        var divergenciaSelecionada = listaDivergentes.find(x => x.id === id);
        idDivergencia = id;

        mostraInfoConciliacao(divergenciaSelecionada)
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

function mostraInfoConciliacao(divergenciaSelecionada){
    document.getElementById('div-data-conciliacao').innerHTML = divergenciaSelecionada.data.toLocaleDateString();

    alteraStatus(divergenciaSelecionada.status);

    if (divergenciaSelecionada.status == 3){
        $("#dropdown").removeClass("dropdown-toggle").prop("disabled", true);
        $("#rowObservacaoStatus").addClass("d-none");
        divergenciaSelecionada.valorRecebidoSolucionado ? 
            document.getElementById('span-valor-recebido-solucionado').innerHTML = "R$ " + divergenciaSelecionada.valorRecebidoSolucionado :
            document.getElementById('span-valor-recebido-solucionado').innerHTML = "-"
        $("#valor-recebido-solucionado").removeClass("d-none");
        $("#valorRecebidoStatus").addClass("d-none")
    } else {
        $("#dropdown").addClass("dropdown-toggle").prop("disabled", false);
        $("#rowObservacaoStatus").removeClass("d-none");
        $("#valor-recebido-solucionado").addClass("d-none");
    }

    document.getElementById('div-adquirente-conciliacao').innerHTML = divergenciaSelecionada.adquirente;
    document.getElementById('div-banco-conciliacao').innerHTML = divergenciaSelecionada.banco;
    document.getElementById('div-valorEsperado-conciliacao').innerHTML = divergenciaSelecionada.valorEsperado;
    document.getElementById('div-valorRecebido-conciliacao').innerHTML = divergenciaSelecionada.valorRecebido;
    document.getElementById('div-diferenca-conciliacao').innerHTML = divergenciaSelecionada.diferenca;
    document.getElementById('div-bandeira-conciliacao').innerHTML = divergenciaSelecionada.bandeira ? divergenciaSelecionada.bandeira : "-";
    document.getElementById('div-parcelaNum-conciliacao').innerHTML = divergenciaSelecionada.parcelaNum ? divergenciaSelecionada.parcelaNum : "-";
    document.getElementById('div-parcelaTotal-conciliacao').innerHTML = divergenciaSelecionada.parcelaTotal ? divergenciaSelecionada.parcelaTotal : "-";
    document.getElementById('div-tipo-conciliacao').innerHTML = divergenciaSelecionada.tipo;
    document.getElementById('div-taxa-conciliacao').innerHTML = divergenciaSelecionada.taxa;

    divergenciaSelecionada.observacoes.sort((a,b) => (a.data > b.data) ? -1 : ((b.data > a.data) ? 1 : 0))

    const html = divergenciaSelecionada.observacoes.map(item => `
        <hr class="my-0 border-gray"/>
        <div class="my-3">
            <p class="my-0 text-dark">${item.observacao}</p>
            <p class="my-0 mt-1 small"><span class="text-dark font-weight-bold">${item.usuario}</span> - ${item.data.toLocaleString()}</p>
        </div>
    `).join(''); 

    document.getElementById('observacoes-cadastradas').innerHTML = html;

}

$('#infoDivergenteModal').on('hide.bs.modal', function () {
    idDivergencia = null;
    document.getElementById("observacao-conciliacao").value = "";
    document.getElementById("valor-recebido-conciliacao").value = "";
    $("#btnSalvarStatusConcilicao").removeClass("d-none");
});

// FIM - Criação de infos modal
// Inicio - salvar status conciliacao

$("#btnSalvarStatusConcilicao").click(() => {
    $("#valorRecebidoConciliacaoNulo").hide();
    var divergencia = listaDivergentes.find(x => x.id === idDivergencia);

    divergencia.status = parseInt(document.getElementById("htmlBtnDropdown").getAttribute('name'));

    if(divergencia.status == 3){
        var valorRecebidoSolucionado = document.getElementById("valor-recebido-conciliacao").value;
        if(valorRecebidoSolucionado == 0 || valorRecebidoSolucionado == null){
            $("#valorRecebidoConciliacaoNulo").show();
            return false;
        }
        divergencia.valorRecebidoSolucionado = valorRecebidoSolucionado;
    }

    var textoObservacao = document.getElementById("observacao-conciliacao").value;

    if(textoObservacao && textoObservacao != "" && textoObservacao != null && textoObservacao != undefined){
        var observacao = new Object();
        observacao.usuario = "Pedro Cardozo";
        observacao.data = new Date();
        observacao.observacao = textoObservacao;

        divergencia.observacoes.push(observacao)
    }

    listaDivergentes = listaDivergentes.map(divergenteCadastrado => {
        if (divergenteCadastrado.id == divergencia.id) {
            return divergencia;
        }
        return divergenteCadastrado;
    });

    document.getElementById("observacao-conciliacao").value = "";
    mostraInfoConciliacao(divergencia)
    
    showSuccess(divergencia.adquirente)
    
    if(divergencia.status == 3){
        listaDivergentes = listaDivergentes.filter(item => item !== divergencia);
        criaLinhaTabelaDivergentes();
        $("#btnSalvarStatusConcilicao").addClass("d-none");
    }

})
// Fim - salvar status conciliacao
// INÍCIO - ORDER BY TABELA DIVERGENTES

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
            case "adquirente":
                listaDivergentes.sort((a,b) => (a.adquirente.toUpperCase() > b.adquirente.toUpperCase()) ? 1 : ((b.adquirente.toUpperCase() > a.adquirente.toUpperCase()) ? -1 : 0))
                break;
            case "valorEsperado":
                listaDivergentes.sort((a,b) => (Number(a.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(b.valorEsperado.replace(/[^0-9-]+/g,""))) ? 1 : ((Number(b.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(a.valorEsperado.replace(/[^0-9-]+/g,""))) ? -1 : 0))
                break;
            case "diferenca":
                listaDivergentes.sort((a,b) => (Number(a.diferenca.replace(/[^0-9-]+/g,"")) > Number(b.diferenca.replace(/[^0-9-]+/g,""))) ? -1 : ((Number(b.diferenca.replace(/[^0-9-]+/g,"")) > Number(a.diferenca.replace(/[^0-9-]+/g,""))) ? 1 : 0))
                break;
            default:
                listaDivergentes.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0))
                break
        }
    } else {
        switch (tipoOrder){
            case "adquirente":
                listaDivergentes.sort((a,b) => (a.adquirente.toUpperCase() > b.adquirente.toUpperCase()) ? -1 : ((b.adquirente.toUpperCase() > a.adquirente.toUpperCase()) ? 1 : 0))
                break;
            case "valorEsperado":
                listaDivergentes.sort((a,b) => (Number(a.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(b.valorEsperado.replace(/[^0-9-]+/g,""))) ? -1 : ((Number(b.valorEsperado.replace(/[^0-9-]+/g,"")) > Number(a.valorEsperado.replace(/[^0-9-]+/g,""))) ? 1 : 0))
                break;
            case "diferenca":
                listaDivergentes.sort((a,b) => (Number(a.diferenca.replace(/[^0-9-]+/g,"")) > Number(b.diferenca.replace(/[^0-9-]+/g,""))) ? 1 : ((Number(b.diferenca.replace(/[^0-9-]+/g,"")) > Number(a.diferenca.replace(/[^0-9-]+/g,""))) ? -1 : 0))
                break;
            default:
                listaDivergentes.sort((a,b) => (a.data > b.data) ? -1 : ((b.data > a.data) ? 1 : 0))
                break
        }
    }

    criaLinhaTabelaDivergentes();
    
})

// FIM - ORDER BY TABELA DIVERGENTES
function converteData(data){
    const partes = data.split("/");
    const novaData = new Date(partes[2], partes[1] - 1, partes[0]);
    return novaData;
}


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
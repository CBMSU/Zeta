$(document).ready(function () {

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


// INÍCIO - TROCA STATUS DE CONCILIAÇÃO

$('.spanstatus').click((e) => {
    var statusSelecionado = e.target.innerHTML;

    document.querySelector("#htmlBtnDropdown").innerHTML = statusSelecionado

    var tipoStatus = e.target.attributes.name.value;
    console.log(tipoStatus)
    var corStatus;

    switch(tipoStatus){
        case "status1":
            corStatus = "#FF5052";
            break;
        case "status2":
            corStatus = "#2C85DE";
            break;
        case "status3":
            corStatus = "#00C72C";
            break;
        default:
            corStatus = "#000";
    }

    $("#dropdown").css({"background-color": corStatus});

    $("#btnSalvarStatusConcilicao").removeClass("d-none");
    $("#rowObservacaoStatus").removeClass("d-none"); 

})


// FIM - TROCA STATUS DE CONCILIAÇÃO
// INÍCIO - Criação de infos tabela divergentes

var listaDivergentes = [];

var divergencia1 = new Object();
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
divergencia1.tipoOperacao = "Crédito";
divergencia1.jurosVigente = "5%";
divergencia1.observacoes = [];

listaDivergentes.push(divergencia1)

var divergencia2 = new Object();
divergencia2.data = new Date(2025, 2, 1);
divergencia2.status = 1;
divergencia2.adquirente = "AdiqCard Solutions";
divergencia2.banco = "DigimonBank";
divergencia2.valorEsperado = "R$ 250.000,00";
divergencia2.valorRecebido = "R$ 246.000,00";
divergencia2.diferenca = "- R$ 4.000,00";
divergencia2.tipoOperacao = "Pix";
divergencia2.jurosVigente = "2%";
divergencia2.observacoes = [];

listaDivergentes.push(divergencia2)

var divergencia3 = new Object();
divergencia3.data = new Date(2025, 2, 12);
divergencia3.status = 1;
divergencia3.adquirente = "PayMax Digital";
divergencia3.banco = "CinderelaBank";
divergencia3.valorEsperado = "R$ 180.000,00";
divergencia3.valorRecebido = "R$ 140.000,00";
divergencia3.diferenca = "- R$ 40.000,00";
divergencia3.tipoOperacao = "Débito";
divergencia3.jurosVigente = "3%";
divergencia3.observacoes = [];

listaDivergentes.push(divergencia3)

var divergencia4 = new Object();
divergencia4.data = new Date(2025, 2, 25);
divergencia4.status = 1;
divergencia4.adquirente = "MoneyAdiq";
divergencia4.banco = "ExampleBank";
divergencia4.valorEsperado = "R$ 500,00";
divergencia4.valorRecebido = "R$ 200,00";
divergencia4.diferenca = "- R$ 300,00";
divergencia4.bandeira = "Mastercard";
divergencia4.parcelaNum = 8;
divergencia4.parcelaTotal = 12;
divergencia4.tipoOperacao = "Crédito";
divergencia4.jurosVigente = "15%";
divergencia4.observacoes = [];

listaDivergentes.push(divergencia4)

$(document).ready(function () {    
    listaDivergentes.sort((a,b) => (Date.parse(a.data) > Date.parse(b.data)) ? 1 : ((Date.parse(b.data) > Date.parse(a.data)) ? -1 : 0))
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
            <i class="fas fa-plus-circle text-info plus-info-conciliacao" data-toggle="modal" data-target="#infoDivergenteModal"></i>
        </div>

        <!-- DIVIDER  -->
        <div class="col-12 col-lg-11 mt-0">
            <hr class="mt-2 mb-0"/>
        </div>
    </div>
    `).join(''); 

    document.getElementById('conteudoTabela').innerHTML = html;

}

// FIM - Criação de infos tabela divergentes
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
                listaDivergentes.sort((a,b) => (a.adquirente > b.adquirente) ? 1 : ((b.adquirente > a.adquirente) ? -1 : 0))
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
                listaDivergentes.sort((a,b) => (a.adquirente > b.adquirente) ? -1 : ((b.adquirente > a.adquirente) ? 1 : 0))
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
    
    // $(el).removeClass("fa-sort");
    // $(el).addClass("fa-sort-down");

})

// FIM - ORDER BY TABELA DIVERGENTES


function converteData(data){
    const partes = data.split("/");
    const novaData = new Date(partes[2], partes[1] - 1, partes[0]);
    return novaData;
}
$(document).ready(function () {
       
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

});


// INÍCIO - SCRIPT BOTÃO DE FILTRO

$("#filter_btn").click(() => {
    $("#filter_table").toggle() // abre/fecha filtros ao clicar no botao
})

$("#filter_btn").on("blur", () => {
    $("#filter_table").hide() // fecha filtro ao tirar o foco do botao
})

// FIM - SCRIPT BOTÃO DE FILTRO


// INÍCIO - TROCA STATUS DE CONCILIAÇÃO

// function trocaStatus(){
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
// }

// FIM - TROCA STATUS DE CONCILIAÇÃO
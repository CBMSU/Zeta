$(document).ready(function() {
    parametrosData();
});

function parametrosData() {

    // Cria datepicker no DATA INICIO ao carregar documento documento
    $('input[name="dataInicio"]').datepicker({
        format: 'dd/mm/yyyy',                
        language: 'pt-BR',
        todayHighlight: true,
        autoclose: true,
        startDate: '01/01/2015',
        datesDisabled: '+1d',
        endDate: '+1d',
        orientation: "auto"
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
            orientation: "auto"
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
        orientation: "auto"
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

// EVENTOS AO SALVAR MODAL DE TIPO PAGAMENTO
$("#adicionarFormaDePagamento").click(() => {
    limpaErrosModalTaxa();
    var formInvalido = false;
    
    // Pega infos do HTML
    const tipo = document.getElementById('tipo-pagamento')
    const taxa = document.getElementById('taxa-forma-pagamento')
    var taxaCredito;
    const dataInicio = document.getElementById('dataInicioTaxa')
    const dataFim = document.getElementById('dataFimTaxa')
    const observacao = document.getElementById('observacaoTaxa')

    // Verifica se infos são nulas
    if(tipo.value == "" || tipo.value == null){
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

    console.log("Acrescenta forma de pagamento.")
    
    
})

function limpaErrosModalTaxa(){
    $("#tipoNulo").hide();
    $("#taxaNulo").hide();
    $("#dataInicioNulo").hide();
    $("#dataFimNulo").hide();
    for(var i = 1; i <= 12; i++){
        $("#taxa-" + i + "x-nulo").hide();
    }
}

// EVENTO AO ALTERAR TIPO PAGAMENTO
$("#tipo-pagamento").on("change", (e) => {
    if(e.target.value == 3){
        $("#div-taxa-unica").addClass("d-none");
        $("#div-taxa-prestacao").removeClass("d-none"); 
    }else{
        $("#div-taxa-unica").removeClass("d-none");
        $("#div-taxa-prestacao").addClass("d-none"); 
    }
})
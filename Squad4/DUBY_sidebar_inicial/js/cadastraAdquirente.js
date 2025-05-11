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
            datesDisabled: '+1d',
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
            datesDisabled: '+1d',
            endDate: e.target.value,
            startDate: '01/01/2015',
            orientation: "top"
        }).on('hide', function(e) {
            e.target.blur()
        });
    })

    
};


$("#adicionarFormaDePagamento").click(() => {
    limpaModalTaxa();
    var formInvalido = false;
    
    // Pega infos do HTML
    const tipo = document.getElementById('tipo-pagamento')
    const taxa = document.getElementById('taxa-forma-pagamento')
    const dataInicio = document.getElementById('dataInicioTaxa')
    const dataFim = document.getElementById('dataFimTaxa')
    const observacao = document.getElementById('observacaoTaxa')

    // Verifica se infos são nulas
    if(tipo.value == "" || tipo.value == null){
        $("#tipoNulo").show();
        formInvalido = true;
    }

    if(taxa.value == "" || taxa.value == null){
        $("#taxaNulo").show();
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
    
    
})

function limpaModalTaxa(){
    $("#tipoNulo").hide();
    $("#taxaNulo").hide();
    $("#dataInicioNulo").hide();
    $("#dataFimNulo").hide();
}
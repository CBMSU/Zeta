$(document).ready(function() {
    parametrosData();
});

var formasPagamento = [];

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

// EVENTOS AO SALVAR MODAL DE TIPO PAGAMENTO
$("#adicionarFormaDePagamento").click(() => {
    limpaErrosModalTaxa();
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

    // Verifica se infos são nulas
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

    console.log("Acrescenta forma de pagamento.")

    var formaPagamento = new Object();

    formaPagamento.id = Math.random().toString(16).slice(2);
    formaPagamento.dataInicio = dataInicio.value;
    formaPagamento.dataFim = dataFim.value;
    formaPagamento.tipo = tipo.value;
    formaPagamento.tipoTexto = tipoTexto;
    formaPagamento.observacao = observacao;

    if(formaPagamento.tipo != 3){
        formaPagamento.taxa = taxa.value;
    }else{
        formaPagamento.bandeira = bandeira.value;
        formaPagamento.bandeiraTexto = bandeiraTexto;
        formaPagamento.taxas = [];
        for(var i = 1; i <= 12; i++){
            var objetoTaxa = new Object();
            objetoTaxa.taxa = document.getElementById('taxa-' + i + 'x').value;
            objetoTaxa.parcela = i;

            formaPagamento.taxas.push(objetoTaxa)
            
        }
        formaPagamento.taxaCredito = taxaCredito.value;
    }
    formasPagamento.push(formaPagamento)


    const html = formasPagamento.map(item => `
    <div class="btn-group mt-1">
        <button type="button" class="btn btn-sm btn-dropdown-duby">${item.tipo != 3 ? item.tipoTexto : item.tipoTexto + ' - '+ item.bandeiraTexto}</button>
        <button type="button" class="btn btn-sm btn-outline-duby dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item text-dark" href="#"><i class="far fa-edit mr-2"></i> Editar</a>
            <a class="dropdown-item text-danger" href="#"><i class="fas fa-trash-alt mr-3"></i>Deletar</a>
        </div>
    </div>
    `).join(''); // Join o array de strings para criar uma string única

    document.getElementById('div-formas-pagamento').innerHTML = html;

    limpaFormModalTaxa();
    $('#formaPagamentoModal').modal('hide');

    if(formaPagamento.tipo != 3){
        $('#tipo-pagamento option[value="'+ formaPagamento.tipo +'"]').remove();
    } else {
        $("#bandeira-pagamento option[value='"+ formaPagamento.bandeira +"']").remove();
    }

    
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
    $("#bandeira-pagamento").val("0");
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

// EVENTO AO ALTERAR TIPO PAGAMENTO
$("#tipo-pagamento").on("change", (e) => {
    if(e.target.value == 3){
        $("#div-taxa-unica").addClass("d-none");

        $("#div-bandeira").removeClass("d-none"); 
        $("#div-taxa-prestacao").removeClass("d-none"); 


        // $("#div-tipo").removeClass("col-lg-5")
        // $("#div-tipo").addClass("col-lg-10")
    }else{
        $("#div-taxa-unica").removeClass("d-none");

        $("#div-bandeira").addClass("d-none");
        $("#div-taxa-prestacao").addClass("d-none"); 
        
        // $("#div-tipo").removeClass("col-lg-10")
        // $("#div-tipo").addClass("col-lg-5")
    }
})
$(document).ready(function() {
    parametrosData();

    $('#celular-representante-adquirente').mask('(00) 00000-0000');
    $('#cpf-representante-adquirente').mask('000.000.000-00', {reverse: true});
    
    // Apenas numeros
    $('#rg-representante-adquirente').mask('0#');
});

var formasPagamento = [];
var idFormaPagamento = null;

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

// EVENTOS AO SALVAR MODAL DE TIPO PAGAMENTO
$("#salvarFormaDePagamento").click(() => {
    limpaErrosModalTaxa();

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


    // Passou pelas restrições, segue para cadastro
    var formaPagamento = new Object();

    formaPagamento.id = idFormaPagamento == null || !idFormaPagamento ? Math.random().toString(16).slice(2) : idFormaPagamento;
    formaPagamento.dataInicio = dataInicio.value;
    formaPagamento.dataFim = dataFim.value;
    formaPagamento.tipo = tipo.value;
    formaPagamento.tipoTexto = tipoTexto;
    formaPagamento.observacao = observacao.value;

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

    if(!edicao){
        formasPagamento.push(formaPagamento)
    }else{
        formasPagamento = formasPagamento.map(formaCadastrada => {
            if (formaCadastrada.id == formaPagamento.id) {
                return formaPagamento;
            }
            return formaCadastrada;
        });
        idFormaPagamento = null;
    }

    criaTagFormaPagamento()
    limpaFormModalTaxa();

    // Fecha o modal
    $('#formaPagamentoModal').modal('hide');

    // Remove tipo de pagamento cadastrado ou bandeira
    if(formaPagamento.tipo != 3){
        $('#tipo-pagamento option[value="'+ formaPagamento.tipo +'"]').css("display", "none");
    } else {
        $("#bandeira-pagamento option[value='"+ formaPagamento.bandeira +"']").css("display", "none");
    }

})

// Cria tags de forma de pagamento
function criaTagFormaPagamento(){

    const html = formasPagamento.map(item => `
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
        var formaPagamento = formasPagamento.find(x => x.id === id);
        
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
        var formaPagamento = formasPagamento.find(x => x.id === id);
        
        if(formaPagamento.tipo == 3){
            document.getElementById("spanNomeFormaPagamento").innerHTML = formaPagamento.tipoTexto + " - " + formaPagamento.bandeiraTexto
        }else{
            document.getElementById("spanNomeFormaPagamento").innerHTML = formaPagamento.tipoTexto
        }
        
        $('#deletarFormaPagamentoModal').modal('show');
        
        idFormaPagamento = formaPagamento.id;
    })
}

// Chama função de deleção ao clidar no botão de delete
$("#btnDeletarFormaPagamento").click(() => {
    deletaFormaPagamento()
})

// Deleta forma de pagamento
function deletaFormaPagamento(){
    var formaSelecionada = formasPagamento.find(x => x.id === idFormaPagamento);
    formasPagamento = formasPagamento.filter(forma => forma !== formaSelecionada)

    criaTagFormaPagamento();

    $('#deletarFormaPagamentoModal').modal('hide');

    // Options retornam para a lista
    if(formaSelecionada.tipo != 3){
        $('#tipo-pagamento option[value="'+ formaSelecionada.tipo +'"]').css("display", "block");
    } else {
        $("#bandeira-pagamento option[value='"+ formaSelecionada.bandeira +"']").css("display", "block");
    }
}

// Apaga global idFormaPagamento quando modal de deleção fechar
$('#deletarFormaPagamentoModal').on('hidden.bs.modal', function () {
    idFormaPagamento = null;
});

// Edita forma de pagamento
function editaFormaPagamento(forma){
    idFormaPagamento = forma.id;

    $('#formaPagamentoModal').modal('show');

    document.getElementById('dataInicioTaxa').value = forma.dataInicio
    document.getElementById('dataFimTaxa').value = forma.dataFim
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
        document.getElementById('taxa-forma-pagamento').value = forma.taxa
    }
    
    parametrosData(forma.dataInicio, forma.dataFim);
}

$(".closeModalTipoPagamento").click(() => {
    limpaErrosModalTaxa();
    limpaFormModalTaxa();
    idFormaPagamento = null;
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

// EVENTO AO ALTERAR TIPO PAGAMENTO
$("#tipo-pagamento").on("change", (e) => {
    tipoLayout(e.target.value);
})

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


// Cadastra adquirente
$("#cadastraAdquirente").click(() => {
    limpaErrosFormAdquirente();

    var formInvalido = false;

    const nomeAdquirente = document.getElementById('nome-adquirente').value;
    const nomeRepresentante = document.getElementById('nome-representante-adquirente').value;
    const sobrenomeRepresentante = document.getElementById('sobrenome-representante-adquirente').value;
    const emailRepresentante = document.getElementById('email-representante-adquirente').value;
    const celularRepresentante = document.getElementById('celular-representante-adquirente').value;

    // Verifica se infos são nulos
    if(nomeAdquirente == "" || nomeAdquirente == null){
        $("#nomeAdquirenteNulo").show();
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

    showSuccess(nomeAdquirente)
    limpaFormAdquirente()
})

function limpaErrosFormAdquirente(){
    $("#nomeAdquirenteNulo").hide();
    $("#nomeRepresentanteNulo").hide();
    $("#sobrenomeRepresentanteNulo").hide();
    $("#emailRepresentanteNulo").hide();
    $("#celularRepresentanteNulo").hide();

    $("#emailRepresentanteInvalido").hide();
    $("#celularRepresentanteInvalido").hide();
}

function limpaFormAdquirente(){
    $("#nome-adquirente").val("");
    $("#descricao-adquirente").val("");
    $("#chave-api-adquirente").val("");
    $("#identidade-adquirente").val("");

    $("#nome-representante-adquirente").val("");
    $("#sobrenome-representante-adquirente").val("");
    $("#email-representante-adquirente").val("");
    $("#celular-representante-adquirente").val("");
    $("#cpf-representante-adquirente").val("");
    $("#rg-representante-adquirente").val("");

    formasPagamento.forEach(forma => {
        if(forma.tipo != 3){
        $('#tipo-pagamento option[value="'+ forma.tipo +'"]').css("display", "block");
    } else {
        $("#bandeira-pagamento option[value='"+ forma.bandeira +"']").css("display", "block");
    }
    });

    formasPagamento = [];
    criaTagFormaPagamento();
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

// MOSTRA MENSAGEM DE SUCESSO AO CADASTRAR
function showSuccess(nomeAdquirente){
    Swal.fire({
        title: "<strong>Adquirente cadastrado!</strong>",
        icon: "success",
        html: `
            Sucesso ao adicionar <b>${nomeAdquirente}</b>!
        `,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        backdrop: "rgba(255, 255, 255, 0.5)"
    });
}
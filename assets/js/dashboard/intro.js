document.addEventListener("DOMContentLoaded", function () {
  introJs().setOptions({
    steps: [
      {
        title: 'Instruções de Uso',
        intro: 'Este é um passo a passo para ajudar você a entender como utilizar o sistema.'
      },
      {
        element: document.querySelector('.first'),
        title: 'Total Mensal de Repasse',
        intro: 'Aqui é possível visualizar o total de repasses mensais, bem como as comparações entre os meses do ano.'
      },
      {
        element: document.querySelector('.second'),
        title: 'Percentual de Divergências',
        intro: 'Aqui são apresentados o percentual de divergências e as comparações entre os repasses ao longo dos meses do ano.'
      },
      {
        element: document.querySelector('.third'),
        title: 'Repasses Divergentes',
        intro: 'Aqui são exibidas informações detalhadas sobre repasses divergentes, bem como comparações entre os meses do ano.'
      },
      {
       element: document.getElementById('conteudoTabela'),
       title: 'Histórico de Divergências',
       intro: 'Neste painel, são exibidas informações detalhadas, como a data da transação, o nome do adquirente, o valor esperado, a diferença registrada e o status de cada repasse divergente.'
      },
      {
       element: document.querySelector('.importar'),
       title: 'Importar dados',
       intro: 'Neste bloco, é possível importar o arquivo do extrato bancário e do relatório.'
      },
    ],
    showStepNumbers: true,
    dontShowAgain: false,
  }).start();
});
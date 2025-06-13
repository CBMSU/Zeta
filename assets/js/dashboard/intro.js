document.addEventListener("DOMContentLoaded", function () {
  const adquirentesToggle = document.querySelector('[data-target="#collapseAdquirentes"]');
  const collapseAdquirentes = document.getElementById("collapseAdquirentes");
  const bancosToggle = document.querySelector('[data-target="#collapseBancos"]'); 
  const collapseBancos = document.getElementById("collapseBancos");
  const glossarioLink = document.querySelector('.Glossario');

  const intro = introJs();

  intro.setOptions({
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
        title: 'Importar Dados',
        intro: 'Neste bloco, é possível importar o arquivo do extrato bancário e do relatório.'
      },
      {
        element: document.querySelector('.busca'),
        title: 'Busca',
        intro: 'Nesta seção, é possível filtrar os repasses por data inicial, data final, diferenças de valor, adquirentes, bancos, bandeira e tipo de pagamento realizado.'
      },
      {
        element: document.querySelector('.cadastroadq'),
        title: 'Cadastro de Adquirentes',
        intro: 'Clique aqui para cadastrar um novo adquirente no sistema.'
      },
      {
        element: document.querySelector('.consultaadq'),
        title: 'Consulta de Adquirentes',
        intro: 'Clique aqui para consultar os adquirentes já cadastrados no sistema.'
      },
      {
        element: document.querySelector('.cadastrobanco'),
        title: 'Cadastro de Bancos',
        intro: 'Clique aqui para cadastrar um novo banco no sistema.'
      },
      {
        element: document.querySelector('.consultabanco'),
        title: 'Consulta de Bancos',
        intro: 'Clique aqui para consultar os bancos já cadastrados no sistema.'
      },
    ],
    showStepNumbers: true,
  });

//   intro.onbeforechange(function (targetElement) {
//     if (
//       targetElement.classList.contains("cadastroadq") ||
//       targetElement.classList.contains("consultaadq")
//     ) {
//       if (!collapseAdquirentes.classList.contains("show")) {
//         adquirentesToggle.click();
//       }
//     }

//     if (
//       targetElement.classList.contains("cadastrobanco") ||
//       targetElement.classList.contains("consultabanco")
//     ) {
//       if (!collapseBancos.classList.contains("show")) {
//         bancosToggle.click();
//       }
//     }
//   });
// intro.onbeforechange(function (targetElement) {

//   if (
//     targetElement.classList.contains("cadastroadq") ||
//     targetElement.classList.contains("consultaadq")
//   ) {
//     if (!collapseAdquirentes.classList.contains("show")) {
//       adquirentesToggle.click();
//     }

//     setTimeout(() => {
//       targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 400);
//   }

//   if (
//     targetElement.classList.contains("cadastrobanco") ||
//     targetElement.classList.contains("consultabanco")
//   ) {
//     if (!collapseBancos.classList.contains("show")) {
//       bancosToggle.click();
//     }

//     setTimeout(() => {
//       targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 400);
//   }
// });


intro.onbeforechange(async function (targetElement) {

  return new Promise((resolve) => {
    if (
    targetElement.classList.contains("cadastroadq") ||
    targetElement.classList.contains("consultaadq")
  ) {
    if (!collapseAdquirentes.classList.contains("show")) {
      adquirentesToggle.click();
    }
  }

  if (
    targetElement.classList.contains("cadastrobanco") ||
    targetElement.classList.contains("consultabanco")
  ) {
    if (!collapseBancos.classList.contains("show")) {
      bancosToggle.click();
    }
  }
    setInterval(resolve, 130);
  });
  
});

  function fecharMenus() {
    if (collapseAdquirentes.classList.contains("show")) {
      adquirentesToggle.click();
    }
    if (collapseBancos.classList.contains("show")) {
      bancosToggle.click();
    }
  }

  intro.oncomplete(fecharMenus);
  intro.onexit(fecharMenus);

  glossarioLink.addEventListener("click", function (e) {
    e.preventDefault();
    intro.start();
  });
});
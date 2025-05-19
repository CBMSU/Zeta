// funcao de exclusao de uma conciliacao da tabela
document.addEventListener("DOMContentLoaded", () => {
  const botoesExcluir = document.querySelectorAll(".excluir");

  botoesExcluir.forEach(botao => {
    botao.addEventListener("click", function () {
      const linha = this.closest("tr");
      linha.remove();
    });
  });
});

// filtrar na tabela

function filtrarTabela() {
  const nomeFiltro = document.getElementById("filtroNome").value.toLowerCase();
  const emailFiltro = document.getElementById("filtroEmail").value.toLowerCase();
  const statusFiltro = document.getElementById("filtroStatus").value.toLowerCase();

  const linhas = document.querySelectorAll("table tbody tr");

  linhas.forEach(linha => {
    const nome = linha.children[0].textContent.toLowerCase();
    const email = linha.children[1].textContent.toLowerCase();
    const statusEl = linha.children[4].querySelector('.status');
    const status = statusEl ? statusEl.textContent.toLowerCase() : "";

    const nomeOk = nome.includes(nomeFiltro);
    const emailOk = email.includes(emailFiltro);
    const statusOk = !statusFiltro || status === statusFiltro;

    linha.style.display = (nomeOk && emailOk && statusOk) ? "" : "none";
  });
}

document.getElementById("filtroNome").addEventListener("input", filtrarTabela);
document.getElementById("filtroEmail").addEventListener("input", filtrarTabela);
document.getElementById("filtroStatus").addEventListener("change", filtrarTabela);

function resetarFiltros() {
  document.getElementById("filtroNome").value = "";
  document.getElementById("filtroEmail").value = "";
  document.getElementById("filtroStatus").value = "";
  filtrarTabela();
}
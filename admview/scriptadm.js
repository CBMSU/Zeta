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

const filtronome = document.getElementById("filtroNome")
const filtroemail = document.getElementById("filtroEmail")
const filtrostatus = document.getElementById("filtroStatus")

function filtrarTabela() {
  const nomeFiltro = filtronome.value.toLowerCase();
  const emailFiltro = filtroemail.value.toLowerCase();
  const statusFiltro = filtrostatus.value.toLowerCase();

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

filtronome.addEventListener("input", filtrarTabela);
filtroemail.addEventListener("input", filtrarTabela);
filtrostatus.addEventListener("change", filtrarTabela);

function resetarFiltros() {
  filtronome.value = "";
  filtroemail.value = "";
  filtrostatus.value = "";
  filtrarTabela();
}

function logout() {
    const confirmLogout = confirm("Tem certeza que deseja sair?");
    if (confirmLogout) {
        window.location.href = "Squad4/Tela de Login/index.html"; 
    }
}



// modal de aceitar e recusar login


document.addEventListener('DOMContentLoaded', () => {
  const modalNome = document.getElementById('modalNome');
  const modalEmail = document.getElementById('modalEmail');
  const modalCNPJ = document.getElementById('modalCNPJ');
  const modalCelular = document.getElementById('modalCelular');
  const modalStatusText = document.getElementById('modalStatusText');

  const btnRevogar = document.getElementById('btnRevogar');
  const btnAceitar = document.getElementById('btnAceitar');
  const btnRecusar = document.getElementById('btnRecusar');

  let currentRow = null;

  document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      currentRow = tr; 
      const nome = tr.cells[0].innerText;
      const email = tr.cells[1].innerText;
      const cnpj = tr.cells[2].innerText;
      const celular = tr.cells[3].innerText;
      const status = e.target.innerText.trim().toUpperCase();

      modalNome.innerText = nome;
      modalEmail.innerText = email;
      modalCNPJ.innerText = cnpj;
      modalCelular.innerText = celular;
      modalStatusText.innerText = status;

      btnRevogar.classList.add('d-none');
      btnAceitar.classList.add('d-none');
      btnRecusar.classList.add('d-none');

      if(status === 'ATIVO'){
        btnRevogar.classList.remove('d-none');
      } else if(status === 'PENDENTE'){
        btnAceitar.classList.remove('d-none');
        btnRecusar.classList.remove('d-none');
      }
    });
  });


  function fecharModal() {
    const modalEl = document.getElementById('modalStatus');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  // atualizar status
  function atualizarStatus(statusNovo) {
  if(!currentRow) return;

  const statusCell = currentRow.cells[4];
  statusCell.innerHTML = '';

  if(statusNovo === 'ATIVO'){
    const btn = document.createElement('button');
    btn.className = 'status-btn btn btn-success';
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#modalStatus');
    btn.innerText = 'ATIVO';
    statusCell.appendChild(btn);

    btn.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      currentRow = tr;

      const nome = tr.cells[0].innerText;
      const email = tr.cells[1].innerText;
      const cnpj = tr.cells[2].innerText;
      const celular = tr.cells[3].innerText;
      const status = e.target.innerText.trim().toUpperCase();

      modalNome.innerText = nome;
      modalEmail.innerText = email;
      modalCNPJ.innerText = cnpj;
      modalCelular.innerText = celular;
      modalStatusText.innerText = status;

      btnRevogar.classList.remove('d-none');
      btnAceitar.classList.add('d-none');
      btnRecusar.classList.add('d-none');
    });

  } else if(statusNovo === 'INATIVO'){
    const span = document.createElement('span');
    span.className = 'status inativo';
    span.innerText = 'INATIVO';
    statusCell.appendChild(span);
  }

  modalStatusText.innerText = statusNovo;
}

  btnRevogar.addEventListener('click', () => {
    if(!currentRow) return;
    atualizarStatus('INATIVO');
    fecharModal();
    alert(`Acesso revogado para: ${modalNome.innerText}`);
  });

  btnAceitar.addEventListener('click', () => {
    if(!currentRow) return;
    atualizarStatus('ATIVO');
    fecharModal();
    alert(`Acesso aceito para: ${modalNome.innerText}`);
  });

  btnRecusar.addEventListener('click', () => {
    if(!currentRow) return;
    atualizarStatus('INATIVO');
    fecharModal();
    alert(`Acesso recusado para: ${modalNome.innerText}`);
  });

});
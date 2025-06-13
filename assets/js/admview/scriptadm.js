document.addEventListener("DOMContentLoaded", () => {
  const modalNome = document.getElementById('modalNome');
  const modalEmail = document.getElementById('modalEmail');
  const modalCNPJ = document.getElementById('modalCNPJ');
  const modalCelular = document.getElementById('modalCelular');
  const modalStatusText = document.getElementById('modalStatusText');

  const btnRevogar = document.getElementById('btnRevogar');
  const btnAceitar = document.getElementById('btnAceitar');
  const btnRecusar = document.getElementById('btnRecusar');

  const logoutIcon = document.getElementById('logoutIcon');
  const logoutMenu = document.getElementById('logoutMenu');

  const filtronome = document.getElementById("filtroNome");
  const filtroemail = document.getElementById("filtroEmail");
  const filtrostatus = document.getElementById("filtroStatus");

  let currentRow = null;

  // preencher modal
  function preencherModal(tr) {
    currentRow = tr;
    modalNome.innerText = tr.cells[0].innerText;
    modalEmail.innerText = tr.cells[1].innerText;
    modalCNPJ.innerText = tr.cells[2].innerText;
    modalCelular.innerText = tr.cells[3].innerText;
  }

  function fecharModal() {
    const modalEl = document.getElementById('modalStatus');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  function atualizarStatus(statusNovo) {
  if (!currentRow) return;

  const statusCell = currentRow.cells[4];
  statusCell.innerHTML = '';

  if (statusNovo === 'ATIVO') {
    const btn = document.createElement('button');
    btn.className = 'status-btn ativo';
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#modalStatus');
    btn.setAttribute('type', 'button'); 
    btn.innerText = 'ATIVO';
    statusCell.appendChild(btn);

    btn.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      preencherModal(tr);
      modalStatusText.innerText = 'ATIVO';
      btnRevogar.classList.remove('d-none');
      btnAceitar.classList.add('d-none');
      btnRecusar.classList.add('d-none');
    });

  } else {
    const span = document.createElement('span');
    span.className = 'status-btn inativo';
    span.innerText = 'INATIVO';
    statusCell.appendChild(span);
  }

  modalStatusText.innerText = statusNovo;
}

  function filtrarTabela() {
  const nomeFiltro = filtronome.value.toLowerCase();
  const emailFiltro = filtroemail.value.toLowerCase();
  const statusFiltro = filtrostatus.value.toLowerCase();

  document.querySelectorAll("table tbody tr").forEach(linha => {
    const nome = linha.children[0].textContent.toLowerCase();
    const email = linha.children[1].textContent.toLowerCase();

    const statusCell = linha.children[4];
    let status = "";

    if (statusCell.querySelector('.status')) {
      status = statusCell.querySelector('.status').textContent.toLowerCase();
    } else if (statusCell.querySelector('.status-btn')) {
      status = statusCell.querySelector('.status-btn').textContent.toLowerCase();
    }

    const nomeOk = nome.includes(nomeFiltro);
    const emailOk = email.includes(emailFiltro);
    const statusOk = !statusFiltro || status === statusFiltro;

    linha.style.display = (nomeOk && emailOk && statusOk) ? "" : "none";
  });
  }

  // funcoes da tabela
  document.querySelectorAll(".excluir").forEach(botao => {
    botao.addEventListener("click", function () {
      const linha = this.closest("tr");
      linha.remove();
    });
  });

  document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const tr = e.target.closest('tr');
      preencherModal(tr);

      const status = e.target.innerText.trim().toUpperCase();
      modalStatusText.innerText = status;

      btnRevogar.classList.add('d-none');
      btnAceitar.classList.add('d-none');
      btnRecusar.classList.add('d-none');

      if (status === 'ATIVO') {
        btnRevogar.classList.remove('d-none');
      } else if (status === 'PENDENTE') {
        btnAceitar.classList.remove('d-none');
        btnRecusar.classList.remove('d-none');
      }
    });
  });

  document.querySelectorAll('.gerar-boleto').forEach(botao => {
  botao.addEventListener('click', (e) => {
    const tr = e.target.closest('tr');
    preencherModal(tr);

    
    document.getElementById('inputNomeBoleto').value = tr.cells[0].innerText;
    document.getElementById('inputCNPJBoleto').value = tr.cells[2].innerText;

    
    const modal = new bootstrap.Modal(document.getElementById('modalBoleto'));
    modal.show();
  });
});


document.getElementById('btnGerarBoleto').addEventListener('click', () => {
  const nome = document.getElementById('inputNomeBoleto').value;
  alert(`Boleto gerado para: ${nome}`);
});

  // modal 
  btnRevogar.addEventListener('click', () => {
    if (!currentRow) return;
    atualizarStatus('INATIVO');
    fecharModal();
    alert(`Acesso revogado para: ${modalNome.innerText}`);
  });

  btnAceitar.addEventListener('click', () => {
    if (!currentRow) return;
    atualizarStatus('ATIVO');
    fecharModal();
    alert(`Acesso aceito para: ${modalNome.innerText}`);
  });

  btnRecusar.addEventListener('click', () => {
    if (!currentRow) return;
    atualizarStatus('INATIVO');
    fecharModal();
    alert(`Acesso recusado para: ${modalNome.innerText}`);
  });

  // filtro
  filtronome.addEventListener("input", filtrarTabela);
  filtroemail.addEventListener("input", filtrarTabela);
  filtrostatus.addEventListener("change", filtrarTabela);

  window.resetarFiltros = () => {
    filtronome.value = "";
    filtroemail.value = "";
    filtrostatus.value = "";
    filtrarTabela();
  };

  // Logout
  logoutIcon.addEventListener('click', () => {
    logoutMenu.classList.toggle('hide');
  });

  document.addEventListener('click', (e) => {
    if (!logoutIcon.contains(e.target) && !logoutMenu.contains(e.target)) {
      logoutMenu.classList.add('hide');
    }
  });

  window.logout = () => {
    if (confirm("Tem certeza que deseja sair?")) {
      window.location.href = "../../../../Zeta/cadastro/index.html";
    }
  };
});

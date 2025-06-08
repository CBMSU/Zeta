const buttonLogin = document.getElementById("botão_de_login");
const buttonCadastro = document.getElementById("botão_de_confirmação");
const emailInput = document.querySelector('#email');
const celularInput = document.getElementById("celular");
const nomeInput = document.getElementById('primeiro_nome');
const sobrenomeInput = document.getElementById('sobrenome');

validarNomeCompleto(nomeInput);
validarNomeCompleto(sobrenomeInput);

function validateAdmin(email) {
  const emailAdmin = /^[a-zA-Z0-9._-]+@admin\.com$/;
  return emailAdmin.test(email.value.trim());
}

function validateEmail(emailInput) {
  const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  return emailRegex.test(emailInput.value.trim());
}

buttonLogin.addEventListener("click", function() {
    window.open("../../../Zeta/login/index.html", "_self");
    }
);

buttonCadastro.addEventListener("click", function(event) {
  event.preventDefault(); 

  if (validateAdmin(emailInput)) {
    window.open("../../../Zeta/admview/adm.html", "_self");
  } else if (validateEmail(emailInput)) {
    window.open("../../../Zeta/dashboard/index.html", "_self");
  } else {
    alert("Email inválido.");
  }
});

celularInput.addEventListener("input", function (e) {
    let value = e.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    }
    if (value.length > 9) {
        value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    }

    e.target.value = value;
});

function validarNomeCompleto(inputElement) {
  let alertado = false;

  inputElement.addEventListener('input', function () {
    const valorOriginal = this.value;
    
    const valorValido = valorOriginal.replace(/[^A-Za-zÀ-ÿ\s]/g, '');

    if (valorValido !== valorOriginal && !alertado) {
      alert('Digite apenas letras e espaços. Números e símbolos não são permitidos.');
      alertado = true;

      setTimeout(() => {
        alertado = false;
      }, 2000);
    }

    this.value = valorValido;
  });
}

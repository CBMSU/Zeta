const buttonLogin = document.getElementById("botão_de_login");
const buttonCadastro = document.getElementById("botão_de_confirmação");
const emailInput = document.querySelector('#email');

function validateAdmin(email) {
  const emailAdmin = /^[a-zA-Z0-9._-]+@admin\.com$/;
  return emailAdmin.test(email.value.trim());
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

buttonLogin.addEventListener("click", function() {
    window.open("../../login/index.html", "_self");
    }
);
buttonCadastro.addEventListener("click", function() {
    if (validateAdmin(email)) {
      window.open("../../admview/adm.html", "_self");
    } 
    else if (validateEmail(email)) {
      window.open("../../dashboard/index.html", "_self");
    }
  }
);

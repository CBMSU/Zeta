const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('.login');
const forgotButton = document.querySelector('.forgot');
const emailError = document.createElement('div');
const passwordError = document.createElement('div');

const showPasswordButton = document.createElement('button');
showPasswordButton.type = 'button';


function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validateAdmin(email) {
  const emailAdmin = /^[a-zA-Z0-9._-]+@admin\.com$/;
  return emailAdmin.test(email.value.trim());
}

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  if (emailError.parentNode) {
    emailError.parentNode.removeChild(emailError);
  }
  if (passwordError.parentNode) {
    passwordError.parentNode.removeChild(passwordError);
  }

  if (!validateEmail(emailInput.value)) {
    isValid = false;
    emailError.textContent = 'Por favor, insira um e-mail válido.';
    emailError.style.color = 'red';
    emailInput.after(emailError);
  }
  
  if (passwordInput.value === '') {
    isValid = false;
    passwordError.textContent = 'A senha é obrigatória.';
    passwordError.style.color = 'red';
    passwordInput.after(passwordError);
  }

  if (isValid) {
    console.log(validateAdmin(email))
    if(validateAdmin(email)) {
      window.open("../../../Zeta/admview/adm.html", "_self");
    }
    else {
      window.open("../../../dashboard/index.html", "_self");
    }
  }
}

function toggleSubmitButton() {
  if (emailInput.value !== '' && passwordInput.value !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function togglePasswordVisibility() {
  const passwordType = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = passwordType;
}

form.addEventListener('submit', validateForm);
emailInput.addEventListener('input', toggleSubmitButton);
passwordInput.addEventListener('input', toggleSubmitButton);
showPasswordButton.addEventListener('click', togglePasswordVisibility);

forgotButton.addEventListener('click', function() {
  alert('Instruções para recuperar a senha foram enviadas para seu e-mail!');
});

toggleSubmitButton();

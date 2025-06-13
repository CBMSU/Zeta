# Zeta

Painel administrativo e do usuário com login, validações, máscaras de input e tour interativo usando Intro.js.

---

# Demonstração

Se estiver hospedado no GitHub Pages ou outro servidor, insira o link abaixo:
- 🔗 Demo online: https://cbmsu.github.io/Zeta/cadastro/index.html 

---

# Funcionalidades

- Login com validação de e-mail
- Máscara automática para número de celular
- Verificação de e-mails contendo “@admin.com” para acesso ao painel de administrador
- Tour interativo pela interface com Intro.js
- Redirecionamento para página de dashboard ou admin após login
- Reset e componentes visuais para feedback ao usuário

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Bootstrap](https://getbootstrap.com/) - framework CSS 
- [Intro.js](https://introjs.com/) — biblioteca para Tour Interativo
- [Chart.js](https://www.chartjs.org/) — biblioteca para Criação de Gráficos

---

Zeta/<br/>
┣ .vscode/ <br/>
┃ ┗ settings.json <br/>
┣ admview/ <br/>
┃ ┗ adm.html <br/>
┣ assets/ <br/>
┃ ┣ css/ <br/>
┃ ┃ ┣ admview/ <br/>
┃ ┃ ┃ ┗ cssadm.css <br/>
┃ ┃ ┣ cadastro/ <br/>
┃ ┃ ┃ ┗ style.css <br/>
┃ ┃ ┣ dashboard/ <br/>
┃ ┃ ┃ ┣ webfonts/ <br/>
┃ ┃ ┃ ┃ ┣ fa-brands-400.eot <br/>
┃ ┃ ┃ ┃ ┣ fa-brands-400.svg <br/>
┃ ┃ ┃ ┃ ┣ fa-brands-400.ttf <br/>
┃ ┃ ┃ ┃ ┣ fa-brands-400.woff <br/>
┃ ┃ ┃ ┃ ┣ fa-brands-400.woff2 <br/>
┃ ┃ ┃ ┃ ┣ fa-regular-400.eot <br/>
┃ ┃ ┃ ┃ ┣ fa-regular-400.svg <br/>
┃ ┃ ┃ ┃ ┣ fa-regular-400.ttf <br/>
┃ ┃ ┃ ┃ ┣ fa-regular-400.woff <br/>
┃ ┃ ┃ ┃ ┣ fa-regular-400.woff2 <br/>
┃ ┃ ┃ ┃ ┣ fa-solid-900.eot <br/>
┃ ┃ ┃ ┃ ┣ fa-solid-900.svg <br/>
┃ ┃ ┃ ┃ ┣ fa-solid-900.ttf <br/>
┃ ┃ ┃ ┃ ┣ fa-solid-900.woff <br/>
┃ ┃ ┃ ┃ ┗ fa-solid-900.woff2 <br/>
┃ ┃ ┃ ┣ bootstrap.css <br/>
┃ ┃ ┃ ┣ bootstrap.min.css <br/>
┃ ┃ ┃ ┣ fontawesomefree.css <br/>
┃ ┃ ┃ ┣ multiSelect.css <br/>
┃ ┃ ┃ ┗ style.css <br/>
┃ ┃ ┗ login/ <br/>
┃ ┃   ┗ styles.css <br/>
┃ ┣ csv/ <br/>
┃ ┃ ┗ dashboard/ <br/>
┃ ┃   ┣ extrato_adquirente.csv <br/>
┃ ┃   ┗ extrato_banco.csv <br/>
┃ ┣ font/ <br/>
┃ ┃ ┗ cadastro/ <br/>
┃ ┃   ┣ fa-brands-400.eot <br/>
┃ ┃   ┣ fa-brands-400.svg <br/>
┃ ┃   ┣ fa-brands-400.ttf <br/>
┃ ┃   ┣ fa-brands-400.woff <br/>
┃ ┃   ┣ fa-brands-400.woff2 <br/>
┃ ┃   ┣ fa-regular-400.eot <br/>
┃ ┃   ┣ fa-regular-400.svg <br/>
┃ ┃   ┣ fa-regular-400.ttf <br/>
┃ ┃   ┣ fa-regular-400.woff <br/>
┃ ┃   ┣ fa-regular-400.woff2 <br/>
┃ ┃   ┣ fa-solid-900.eot <br/>
┃ ┃   ┣ fa-solid-900.svg <br/>
┃ ┃   ┣ fa-solid-900.ttf <br/>
┃ ┃   ┣ fa-solid-900.woff <br/>
┃ ┃   ┗ fa-solid-900.woff2 <br/>
┃ ┣ imgs/ <br/>
┃ ┃ ┣ admview/ <br/>
┃ ┃ ┃ ┣ logo-duby-conceito - Copia.png <br/>
┃ ┃ ┃ ┣ pencil-draw.png <br/>
┃ ┃ ┃ ┗ qr-code-plus.webp <br/>
┃ ┃ ┣ cadastro/ <br/>
┃ ┃ ┃ ┗ Untitled (1).png <br/>
┃ ┃ ┣ dashboard/ <br/>
┃ ┃ ┃ ┣ duby.ico <br/>
┃ ┃ ┃ ┣ duby2.ico <br/>
┃ ┃ ┃ ┣ logo-duby-conceito - Copia.png <br/>
┃ ┃ ┃ ┣ logo-duby-conceito.png <br/>
┃ ┃ ┃ ┣ undraw_posting_photo.svg <br/>
┃ ┃ ┃ ┣ undraw_profile.svg <br/>
┃ ┃ ┃ ┣ undraw_profile_1.svg <br/>
┃ ┃ ┃ ┣ undraw_profile_2.svg <br/>
┃ ┃ ┃ ┣ undraw_profile_3.svg <br/>
┃ ┃ ┃ ┗ undraw_rocket.svg <br/>
┃ ┃ ┗ login/ <br/>
┃ ┃   ┣ image.png <br/>
┃ ┃   ┗ logo-duby-conceito-azul.webp <br/>
┃ ┗ js/ <br/>
┃   ┣ admview/ <br/>
┃ ┃ ┃ ┗ scriptadm.js <br/>
┃   ┣ cadastro/ <br/>
┃ ┃ ┃ ┗ script.js <br/>
┃   ┣ dashboard/ <br/>
┃ ┃ ┃ ┣ datepicker_files/ <br/>
┃ ┃ ┃ ┃ ┣ bootstrap-datepicker.min.js <br/>
┃ ┃ ┃ ┃ ┣ bootstrap-datepicker.pt-BR.min.js <br/>
┃ ┃ ┃ ┃ ┗ bootstrap-datepicker3.css <br/>
┃ ┃ ┃ ┣ abridged.js <br/>
┃ ┃ ┃ ┣ bootstrap.bundle.min.js <br/>
┃ ┃ ┃ ┣ bootstrap.bundle.min.js.map <br/>
┃ ┃ ┃ ┣ busca.js <br/>
┃ ┃ ┃ ┣ buscaAdquirente.js <br/>
┃ ┃ ┃ ┣ buscaBanco.js <br/>
┃ ┃ ┃ ┣ cadastraAdquirente.js <br/>
┃ ┃ ┃ ┣ cadastraBanco.js <br/>
┃ ┃ ┃ ┣ chart.js <br/>
┃ ┃ ┃ ┣ comportamento_sidebar.js <br/>
┃ ┃ ┃ ┣ intro.js <br/>
┃ ┃ ┃ ┣ jquery.easing.min.js <br/>
┃ ┃ ┃ ┣ jquery.mask.min.js <br/>
┃ ┃ ┃ ┣ jquery.min.js <br/>
┃ ┃ ┃ ┣ multiSelect.js <br/>
┃ ┃ ┃ ┣ perfil.js <br/>
┃ ┃ ┃ ┣ script.js <br/>
┃ ┃ ┃ ┗ sweetalert2_11.js <br/>
┃   ┗ login/ <br/>
┃ ┃   ┗ script.js <br/>
┣ cadastro/ <br/>
┃ ┗ index.html <br/>
┣ dashboard/ <br/>
┃ ┣ busca.html <br/>
┃ ┣ buscaAdquirente.html <br/>
┃ ┣ buscaBanco.html <br/>
┃ ┣ cadastraAdquirente.html <br/>
┃ ┣ cadastraBanco.html <br/>
┃ ┣ index.html <br/>
┃ ┗ perfil.html <br/>
┣ login/ <br/>
┃ ┗ index.html <br/>
┗ README.md <br/>

---

# Instalação e Execução Local

# 1. Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox)
- Editor de código (recomendado: VSCode)
- (Opcional) Plugin Live Server no VSCode

# Como Instalar e Executar

# 2. Download

Baixe a versão mais recente do projeto por este link:

[Download da Última Versão](https://github.com/CBMSU/Zeta/releases/latest)

> Isso baixará um arquivo `.zip` contendo todos os arquivos do projeto.

---

# 3. Extraia e Abra

- Extraia o arquivo `.zip` baixado.
- Abra o projeto em um navegador moderno (Chrome, Firefox, Edge).
  - Dê duplo clique no arquivo:  
    `login/index.html` para iniciar.

---

# 4. Executar
## Opção 1 – Direto no navegador:
Abra login/index.html, dashboard/index.html ou admview/adm.html clicando duas vezes no arquivo.

## Opção 2 – Usando Live Server (VSCode):
Clique com o botão direito em login/index.html e selecione “Open with Live Server”. O mesmo vale para outras páginas.

# 5. Acesso de Teste

- Digite um e-mail com `@admin.com` para simular login como administrador.
- Qualquer outro e-mail válido entra como usuário comum.
- A senha pode ser qualquer valor (não há backend).
- O botão “Esqueci a senha” mostra uma simulação de envio.
- O botão “Cadastrar” abre uma página de cadastro com campos de teste.

# Como Testar
Acesse login/index.html.

Teste o campo de e-mail:

Se terminar com @admin.com, será levado ao admin (admview/adm.html).

Qualquer outro e-mail válido leva ao dashboard (dashboard/index.html).

E-mails inválidos geram alerta.

Digite um número de celular para ver a máscara aplicada.

Após login, experimente iniciar o tour clicando no botão (se houver).

Navegue pelas seções .first, .second, .third, .card-body para acompanhar o walkthrough.

# Personalização
Tour Intro.js: edite intro-config.js para alterar etapas, títulos e descrições.

Estilos: modifique cores, fontes e layout em style.css.

Validadores: personalize expressões regulares no JS para e-mail e celular.

Novas páginas: adicione páginas dentro de dashboard/ ou admview/ conforme necessário.

# Potenciais Melhoria
Adicionar persistência com localStorage para login

Transformar o login em formulário real com backend

Adicionar feedback com loaders ou animações

Adaptar layout para dispositivos móveis (responsividade)


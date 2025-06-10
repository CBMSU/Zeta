# Zeta

Painel administrativo e do usuário com login, validações, máscaras de input e tour interativo usando Intro.js.

---

# Demonstração

Se estiver hospedado no GitHub Pages ou outro servidor, insira o link abaixo:
- 🔗 Demo online: https://cbmsu.github.io/Zeta/dashboard/index.html 

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
- [Bootstrap] (https://getbootstrap.com/) - framework CSS 
- [Intro.js](https://introjs.com/) — biblioteca para Tour Interativo
- [Chart.js](https://www.chartjs.org/) — biblioteca para Criação de Gráficos

---

# Estrutura do Projeto

Zeta/
├── admview/              # Painel do administrador
│   └── adm.html
├── cadastro/             # Tela de cadastro
│   └── index.html
├── dashboard/            # Painel do usuário comum
│   ├── index.html
│   ├── busca.html
│   ├── perfil.html
│   └── ... outros
├── login/                # Tela de login
│   └── index.html
├── assets/
│   ├── css/              # Estilos por módulo
│   │   ├── admview/
│   │   ├── cadastro/
│   │   ├── dashboard/
│   │   └── login/
│   ├── js/               # Scripts JS por módulo
│   │   ├── admview/
│   │   ├── cadastro/
│   │   ├── dashboard/
│   │   └── login/
│   ├── imgs/             # Imagens por módulo
│   │   ├── admview/
│   │   ├── cadastro/
│   │   ├── dashboard/
│   │   └── login/
│   ├── font/             # Fontes utilizadas
│   │   └── cadastro/
│   └── csv/              # Arquivos CSV para carga e leitura
│       └── dashboard/
├── intro-config.js       # Configuração do tour guiado com Intro.js
├── style.css             # Estilos globais
├── README.md             # Manual e instruções do projeto


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


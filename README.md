## 🎮 Fundação Excalibur - Site Imersivo para Jogadores

Bem-vindo ao repositório do **Fundação Excalibur**! Um projeto que combina três páginas temáticas para criar uma experiência envolvente e imersiva para seus jogadores.

### 📋 Descrição

Este projeto apresenta:

1. **Página de Notícias** - Um portal de notícias responsivo inspirado em sites como CNN e G1, com design profissional e moderno
2. **Portal de Login ARES** - Uma tela intermediária imersiva com tema futurista "hackerman" que simula um sistema de acesso seguro
3. **Sistema Secreto ARES** - Um painel de sistema avançado que simula uma organização secreta de combate ao paranormal

### 🎨 Características

#### Página Principal (Notícias)
- ✅ Design responsivo e profissional
- ✅ Header com navegação fixa
- ✅ Notícia destaque em grid
- ✅ Grid de notícias em cards
- ✅ Categorias de conteúdo (Tecnologia, Política, Mundo, Esportes, Saúde)
- ✅ Botão secreto para acessar o portal de login
- ✅ Footer informativo
- ✅ Animações suaves

#### Portal de Login ARES
- ✅ Design futurista com tema cyberpunk/matrix
- ✅ Painel esquerdo com informações da organização
- ✅ Painel direito com formulário de login
- ✅ Animações de partículas flutuantes no fundo
- ✅ Efeitos de brilho e pulsação nos elementos
- ✅ Terminal com histórico de acesso (LOG)
- ✅ Campos de entrada com feedback visual
- ✅ Botão de "Acesso de Emergência" com modal
- ✅ Sistema de salvamento de credenciais
- ✅ Botão de solicitação de acesso
- ✅ Validação de formulário em tempo real
- ✅ Mensagens de status (erro, sucesso, info)

#### Sistema Secreto ARES
- ✅ Tela de acesso com efeito terminal
- ✅ Design futurista com tema matrix-like
- ✅ Sistema de abas (Dashboard, Incidentes, Arquivos, Equipe, Alertas)
- ✅ Cards de status com cores temáticas
- ✅ Log de atividades em tempo real
- ✅ Lista de incidentes críticos
- ✅ Banco de dados de entidades paranormais
- ✅ Painel da equipe
- ✅ Sistema de alertas
- ✅ Efeitos visuais especiais (pulsação, glitch, brilho)

### 📁 Estrutura do Projeto

```
fundacao_excalibur/
├── index.html                 # Página principal de notícias
├── login.html                 # Portal de login ARES
├── sistema-secreto.html       # Página do sistema ARES
├── styles.css                 # Estilos da página de notícias
├── login.css                  # Estilos do portal de login
├── sistema-secreto.css        # Estilos do sistema ARES
├── script.js                  # Scripts da página de notícias
├── login.js                   # Scripts do portal de login
├── sistema-secreto.js         # Scripts do sistema ARES
└── README.md                  # Documentação
```

### 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/santosfellipefernandes-stack/fundacao_excalibur.git
   cd fundacao_excalibur
   ```

2. **Abra no navegador:**
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use um servidor local (ex: Live Server no VS Code)

3. **Navegue entre as páginas:**
   - **Página de Notícias** → Clique no botão **"⚠️ ACESSAR SISTEMA INTERNO ⚠️"**
   - **Portal de Login** → Entre com um código válido (ex: `AGT-0001`) e senha (5+ caracteres) OU use **"🚨 ACESSO DE EMERGÊNCIA"** com a senha `0000`
   - **Sistema ARES** → Navegue pelas abas e explore os dados
   - Para voltar ao portal de notícias, clique em **"← Voltar ao Portal de Notícias"** na página de login

### 🔐 Credenciais de Teste

**Login Normal:**
- Código: `AGT-0001` (ou qualquer código começando com `AGT-`)
- Senha: qualquer senha com 5 ou mais caracteres

**Acesso de Emergência:**
- Senha: `0000`

### 🎭 Personalização

#### Para modificar notícias:
- Edite os cards em `index.html`
- Customize cores em `styles.css` (variáveis CSS)
- Adicione suas imagens substituindo os placeholders

#### Para customizar o portal de login:
- Modifique o texto em `login.html`
- Ajuste cores em `login.css` (variáveis :root)
- Mude as credenciais de teste em `login.js`

#### Para customizar o sistema ARES:
- Modifique incidentes em `sistema-secreto.html`
- Ajuste cores em `sistema-secreto.css` (variáveis :root)
- Adicione novas seções duplicando as abas existentes

### 🎨 Cores e Temas

**Página de Notícias:**
- Primária: Preto (#1a1a1a)
- Destaque: Vermelho (#e74c3c)
- Fundo: Branco e cinzento

**Portal de Login:**
- Primária: Verde Neon (#00ff00)
- Secundária: Vermelho (#ff1744)
- Terciária: Azul (#00bfff)
- Fundo: Azul escuro (#0a0e27)
- Com efeito de partículas flutuantes

**Sistema ARES:**
- Primária: Verde Neon (#00ff00)
- Crítico: Vermelho (#ff1744)
- Aviso: Amarelo (#ffc300)
- Info: Azul (#00bfff)
- Fundo: Azul escuro (#0a0e27)

### 📱 Responsividade

Todas as páginas são totalmente responsivas e funcionam em:
- ��� Desktops
- ✅ Tablets
- ✅ Smartphones

### 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com animações
- **JavaScript** - Interatividade e efeitos dinâmicos
- **Local Storage** - Salvamento de credenciais
- **Sem dependências externas** - Funciona nativamente em qualquer navegador moderno

### 🎯 Funcionalidades Interativas

1. **Efeitos de hover** nos cards e botões
2. **Transições suaves** entre abas e páginas
3. **Tela de acesso animada** no sistema ARES
4. **Partículas flutuantes** no fundo do login
5. **Formulário de login** com validação
6. **Sistema de alertas** e mensagens de erro/sucesso
7. **Log de atividades** em tempo real
8. **Modais** para acesso de emergência e solicitação de acesso
9. **Navegação intuitiva** entre páginas

### 📝 Personalizações Recomendadas

1. Adicione sua própria identidade visual
2. Crie conteúdo temático para seus jogadores
3. Implemente backend para dados dinâmicos
4. Adicione sons e mais efeitos visuais
5. Integre com seu sistema de jogo
6. Customize as credenciais de login
7. Adicione mais incidentes e dados ao sistema

### 🐛 Troubleshooting

**Problema:** Página não carrega corretamente
- **Solução:** Certifique-se de que todos os arquivos estão na mesma pasta

**Problema:** Estilos não aparecem
- **Solução:** Verifique se o navegador está com cache limpo (Ctrl+Shift+Delete)

**Problema:** Botões não funcionam
- **Solução:** Abra o console (F12) e procure por erros

**Problema:** Login não funciona
- **Solução:** Use as credenciais de teste mencionadas acima

### 📞 Suporte

Caso tenha dúvidas ou sugestões, abra uma issue no repositório!

### 📄 Licença

Este projeto está aberto para uso e modificação livre para fins educacionais e de entretenimento.

---

**Desenvolvido para criar uma experiência imersiva e inesquecível! 🎮✨**
document.addEventListener("DOMContentLoaded", function () {
  const terminalContent = document.getElementById("terminalContent");
  const bootScreen = document.getElementById("bootScreen");
  const loginScreen = document.getElementById("loginScreen");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  const bootLines = [
    "ORÁCULO BIOS v3.7.1 ..................... OK",
    "Verificando memória local ................ OK",
    "Carregando módulos de segurança .......... OK",
    "Validando selos criptográficos ........... OK",
    "Sincronizando relógio global ............. OK",
    "Conectando ao nó principal ............... FALHA",
    "Redirecionando para espelho de dados ..... OK",
    "Montando repositório seguro .............. OK",
    "Verificando registros de auditoria ....... OK",
    "Estabelecendo canal criptografado ........ OK",
    "Interface de autenticação liberada."
  ];

  let index = 0;

  function addBootLine() {
    if (index < bootLines.length) {
      const line = document.createElement("div");
      line.textContent = "> " + bootLines[index];
      terminalContent.appendChild(line);

      const lines = terminalContent.querySelectorAll("div");

      if (lines.length > 7) {
        lines[0].remove();
      }

      index++;

      setTimeout(addBootLine, 650);
    } else {
      setTimeout(showLogin, 900);
    }
  }

  function showLogin() {
    bootScreen.style.display = "none";
    loginScreen.style.display = "block";
  }

  addBootLine();

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const agentCode = document.getElementById("agentCode").value.trim();
    const password = document.getElementById("password").value.trim();

    if (agentCode === "AGT-0001" && password === "avalon") {
      loginMessage.textContent = "ACESSO AUTORIZADO // Redirecionando...";
      loginMessage.style.color = "#d9a441";

      setTimeout(function () {
        window.location.href = "oraculo.html";
      }, 1200);
    } else {
      loginMessage.textContent = "ACESSO NEGADO // Credenciais inválidas.";
      loginMessage.style.color = "#ff6b6b";
    }
  });
});

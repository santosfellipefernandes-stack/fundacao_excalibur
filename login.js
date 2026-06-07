document.addEventListener("DOMContentLoaded", function () {
  const terminalContent = document.getElementById("terminalContent");
  const bootScreen = document.getElementById("bootScreen");
  const loginScreen = document.getElementById("loginScreen");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  const bootLines = [
    "ORÁCULO BIOS v3.7.1 ..................... OK [01/16]",
    "Carregando núcleo ORÁCULO ............... OK [02/16]",
    "Verificando integridade do sistema ...... OK [03/16]",
    "Validando selos criptográficos .......... OK [04/16]",
    "Montando Arquivo Central ................ OK [05/16]",
    "Sincronizando Biblioteca Avalon ......... OK [06/16]",
    "Consultando Índice Merlin ............... OK [07/16]",
    "Verificando protocolos Excalibur ........ OK [08/16]",
    "Carregando registros da Távola .......... OK [09/16]",
    "Consultando Arquivo Mordred ............. NEGADO [10/16]",
    "Prosseguindo com privilégios atuais ..... OK [11/16]",
    "Nó secundário indisponível .............. FALHA [12/16]",
    "Ativando redundância .................... OK [13/16]",
    "Conectando ao espelho de dados .......... OK [14/16]",
    "Estabelecendo canal seguro .............. OK [15/16]",
    "Interface de autenticação liberada ...... OK [16/16]"
  ];

  let index = 0;

  function addBootLine() {
    if (index < bootLines.length) {
      const line = document.createElement("div");
      line.textContent = "> " + bootLines[index];

      if (bootLines[index].includes("OK")) {
        line.classList.add("status-ok");
      }

      if (bootLines[index].includes("FALHA")) {
        line.classList.add("status-fail");
      }

      if (bootLines[index].includes("NEGADO")) {
        line.classList.add("status-denied");
      }

      if (bootLines[index].includes("AVISO")) {
        line.classList.add("status-warning");
      }

      terminalContent.appendChild(line);

      const lines = terminalContent.querySelectorAll("div");

      if (lines.length > 6) {
        lines[0].remove();
      }

      index++;

      setTimeout(addBootLine, 500);

    } else {

      const cursorLine = document.createElement("div");
      cursorLine.innerHTML =
        "> aguardando credenciais do operador<span class='cursor'></span>";

      terminalContent.appendChild(cursorLine);

      const lines = terminalContent.querySelectorAll("div");

      if (lines.length > 6) {
        lines[0].remove();
      }

      setTimeout(showLogin, 1400);
    }
  }

  function showLogin() {
    bootScreen.classList.add("fade-out");

    setTimeout(function () {
      bootScreen.style.display = "none";

      loginScreen.style.display = "block";
      loginScreen.style.opacity = "0";
      loginScreen.style.transform = "scale(0.98)";

      setTimeout(function () {
        loginScreen.style.opacity = "1";
        loginScreen.style.transform = "scale(1)";
      }, 50);

    }, 700);
  }

  addBootLine();

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const agentCode =
      document.getElementById("agentCode").value.trim();

    const password =
      document.getElementById("password").value.trim();

    if (agentCode === "AGT-0001" && password === "avalon") {

      loginMessage.className = "login-message success";

      loginMessage.textContent =
        "CREDENCIAIS VERIFICADAS // NÍVEL DE ACESSO: AGENTE";

      setTimeout(function () {
        loginMessage.textContent =
          "CANAL SEGURO ESTABELECIDO // LIBERANDO ORÁCULO...";
      }, 900);

      setTimeout(function () {
        window.location.href = "oraculo.html";
      }, 2200);

    } else {

      loginMessage.className = "login-message error";

      loginMessage.textContent =
        "ACESSO NEGADO // CREDENCIAIS INVÁLIDAS.";
    }
  });
});

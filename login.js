document.addEventListener("DOMContentLoaded", function () {
  const terminalContent = document.getElementById("terminalContent");
  const bootScreen = document.getElementById("bootScreen");
  const loginScreen = document.getElementById("loginScreen");
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

const agents = {
  "EXC-7812": {
    password: "maxminerva812",
    name: "Alex Volkov",
    level: "AGENTE"
  },

  "EXC-091": {
    password: "greenknight",
    name: "Maurice",
    level: "AGENTE"
  },

  "EXC-2147": {
    password: "98.Bodeaux",
    name: "Joana Vianney",
    level: "AGENTE"
  },

  "EXC-1013": {
    password: "Wolff",
    name: "Clive Müller",
    level: "AGENTE"
  }
};

  
const bootLines = [
  "ORÁCULO BIOS v3.7.1 ..................... OK [01/17]",
  "Carregando núcleo ORÁCULO ............... OK [02/17]",
  "Verificando integridade do sistema ...... OK [03/17]",
  "Validando selos criptográficos .......... OK [04/17]",
  "Montando Arquivo Central ................ OK [05/17]",
  "Sincronizando Biblioteca Avalon ......... OK [06/17]",
  "Consultando Índice Merlin ............... OK [07/17]",
  "Verificando protocolos Excalibur ........ OK [08/17]",
  "Carregando registros da Távola .......... OK [09/17]",
  "Consultando Arquivo Mordred ............. NEGADO [10/17]",
  "Prosseguindo com privilégios atuais ..... OK [11/17]",
  "Nó secundário indisponível .............. FALHA [12/17]",
  "Ativando redundância .................... OK [13/17]",
  "Conectando ao espelho de dados .......... OK [14/17]",
  "Estabelecendo canal seguro .............. OK [15/17]",
  "Canal Excalibur estabelecido ............ OK [16/17]",
  "Interface de autenticação liberada ...... OK [17/17]"
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
       document.body.classList.add("glitch-alert");

       setTimeout(function () {
        document.body.classList.remove("glitch-alert");
        }, 280);
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

    const agent = agents[agentCode];

if (agent && agent.password === password) {

  localStorage.setItem("currentAgent", JSON.stringify(agent));
  localStorage.setItem("currentAgentCode", agentCode);

  loginMessage.className = "login-message success";

  loginMessage.textContent =
    `CREDENCIAIS VERIFICADAS // ${agent.name} // NÍVEL: ${agent.level}`;

  setTimeout(function () {
    loginMessage.textContent =
      "CANAL SEGURO ESTABELECIDO // LIBERANDO ORÁCULO...";
  }, 2500);

  setTimeout(function () {
    window.location.href = "oraculo.html";
  }, 4500);

} else {

  loginMessage.className = "login-message error";

  loginMessage.textContent =
    "ACESSO NEGADO // CREDENCIAIS INVÁLIDAS.";
}
  });
});

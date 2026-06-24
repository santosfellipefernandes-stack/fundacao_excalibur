document.addEventListener("DOMContentLoaded", function () {
  const agentData = JSON.parse(localStorage.getItem("currentAgent"));
  const agentCode = localStorage.getItem("currentAgentCode");

  if (!agentData) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("agentName").textContent = agentData.name;
  document.getElementById("agentCode").textContent = "CÓDIGO: " + agentCode;
  document.getElementById("agentLevel").textContent = "NÍVEL: " + agentData.level;

  const missions = [
    {
      code: "EXC-OP-0741",
      codename: "Vernissage",
      status: "EM ANDAMENTO",
      access: "PARCIAL",
      clickable: true,
      location: "San Francisco, Califórnia",

      summary: "Investigação ativa sobre alterações emocionais associadas a material pigmentado de origem ainda não confirmada.",

      objectives: [
        "Identificar a origem do pigmento.",
        "Mapear indivíduos afetados.",
        "Determinar riscos de exposição prolongada.",
        "Localizar possíveis responsáveis pela distribuição do material."
      ],

      team: [
        "Equipe Taj Mahal"
      ],

      agents: [
        "Alex Volkov",
        "Ash",
        "Clive Müller",
        "Joana Vianey",
        "Maurice M. Mahmoudi"
      ],

      images: [
        // Exemplo futuro:
        // "assets/chroma/pigmento.jpg",
        // "assets/chroma/galeria.jpg"
      ],

      miroUrl: "",

      logs: [
        "09:42 // Relatório preliminar recebido.",
        "09:17 // Amostras pigmentadas encaminhadas para análise.",
        "08:51 // Ocorrência classificada como operação ativa."
      ]
    },

    {
      code: "EXC-OP-0319",
      codename: "Maré Alta",
      status: "ARQUIVADA",
      access: "LIBERADO",
      clickable: true,
      location: "Costa Leste dos Estados Unidos",
      summary: "Operação concluída. Dados movidos para arquivo histórico.",
      logs: [
        "Operação encerrada.",
        "Relatório final arquivado.",
        "Acesso liberado para agentes autorizados."
      ]
    },

    {
      code: "EXC-OP-0842",
      codename: "██████████",
      status: "CLASSIFICADO",
      access: "NEGADO",
      clickable: false
    },

    {
      code: "EXC-OP-1027",
      codename: "██████████",
      status: "CLASSIFICADO",
      access: "NEGADO",
      clickable: false
    }
  ];
  const agents = [
  {
    code: "EXC-0204",
    name: "Lina Ward",
    status: "ATIVO",
    access: "COMANDO",
    team: "Olho de Avalon",
    specialty: "Infiltração Digital",

    profile:
      "Entrou na Fundação Excalibur ainda jovem após ser salva por um agente da organização. Foi designada a uma equipe experimental formada por ele e se mostrou muito promissora, atuando no fornecimento de informações e apoio tecnológico. Perdeu os movimentos das pernas após um ataque de ocultista.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "Apresenta desempenho elevado ao agir em momentos de crise, mantendo a calma e procurando a melhor forma de resolver. Sempre prestativa e gentil com os agentes.",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1013",
    name: "Clive Müller",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Tecnologia / Análise Digital",
    profile: "Clive estava na semana de congresso universitário quando encontrou uma placa de circuitos que parecia ser tecnologia elevada. Ao tentar usá-la num computador um ser de energia se manifestou. O rapaz não se lembra de nada depois disso, apenas que a maioria de seus amigos foram mortos e sua namorada desapareceu. A criatura parace ter uma rixa pessoal com ele. Foi recrutado para excalibur após realizar diversas buscas na internet.",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1249",
    name: "Max Park",
    status: "ATIVO",
    access: "ANALISTA",
    team: "Scriptorium",
    specialty: "Ocultismo",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2146",
    name: "Elora Avalon",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Não designada",
    specialty: "Operações de Campo",
    profile: "Elora Avalon era uma policial dedicada na Escócia, dedicada a encontrar seus pais desaparecidos, estava sempre atenta a qualquer coisa que fosse estranha. Ela acompanhava o blog de uma parapsicóloga que relatava histórias estranhas. Quando não houve nenhum post em semanas, decidiu investigar e foi quando descobriu sobre a existêcia do paranormal e foi recrutada por William",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata",
      "Operação Cripta"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2147",
    name: "Joana Vianey",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Campo / Ocultismo",
    profile: "A médica forense, Joana Vianey, tinha uma vida tranquila, mas algo sempre a incomodou. Lendo um blog de uma parapsicóloga que relatava histórias estranhas começou a investigar sobre a origem delas, até que a autora desaparece e Joana decide ir investigar. Se deparando com um caso onde pessoas entravam em coma permanente, seu primeiro contato com o paranormal. Foi recrutada por William após o ocorrido",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2148",
    name: "John Tiltor",
    status: "CAÍDO",
    access: "AGENTE",
    team: "Prélude",
    specialty: "Campo / Ocultismo",
    profile: "John Tiltor era um jornalista que teve seu primeiro contato com o paranormal ainda muito jovem, dentro de sua própria casa. Só veio se tornar um agente quando foi investigar casos de pessoas que pegavam no sono e não mais acordavam. Foi recrutado por William após esta missão. Caído em missão, durante o confronto com uma criatura não identificada",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2189",
    name: "Hector Ignacius",
    status: "CAÍDO",
    access: "AGENTE",
    team: "Prélude",
    specialty: "Campo / Infiltração",
    profile: "Hector Ignatius era um criminoso da américa do sul, que foi recrutado pelo agente Santiago Hernandez durante um incidente com uma criatura que foi atribuído o nome de chupa-cabra. Logo recebeu alguns treinamento, foi alocado na equipe Prélude que foi enviada para investigar acontecimentos no Maine. Caído em missão, durante o confronto com uma criatura não identificada",
    missions: [
      "Gostosuras ou Travessuras",
      "Presa de prata"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7166",
    name: "Maurice M. Mahmoudi",
    status: "ATIVO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Operações Táticas",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7167",
    name: "Ash",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Ocultismo",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7168",
    name: "Robert Drake",
    status: "COMPROMETIDO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Combate Tático",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7175",
    name: "Isabella Ramos",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Ocultista / Pintura",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7812",
    name: "Alex Volkov",
    status: "ATIVA",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Operações de Campo",
    profile: "",
    missions: [
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  }
];

  const contentArea = document.getElementById("content-area");
  const overviewBtn = document.getElementById("overviewBtn");
  const missionsBtn = document.getElementById("missionsBtn");
  const agentsBtn = document.getElementById("agentsBtn");
  const menuButtons = document.querySelectorAll(".menu-button");

  const missionModal = document.getElementById("missionModal");
  const closeMissionModal = document.getElementById("closeMissionModal");

  const agentModal = document.getElementById("agentModal");
  const closeAgentModal = document.getElementById("closeAgentModal");

  const overviewContent = contentArea.innerHTML;

  function setActiveButton(activeButton) {
    menuButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    activeButton.classList.add("active");
  }

  function renderMissionsTable() {
    const rows = missions.map(function (mission) {
      const rowClass = mission.clickable ? "clickable-row" : "locked-row";

      return `
        <tr class="${rowClass}" data-code="${mission.code}">
          <td>${mission.code}</td>
          <td>${mission.codename}</td>
          <td>${mission.status}</td>
          <td>${mission.access}</td>
        </tr>
      `;
    }).join("");

    contentArea.innerHTML = `
      <section class="database-panel">
        <div class="panel-header">
          <h2>MISSÕES OPERACIONAIS</h2>
          <span>EXCALIBUR DATABASE</span>
        </div>

        <table class="mission-table">
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>CODINOME</th>
              <th>STATUS</th>
              <th>ACESSO</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>
      </section>
    `;

    document.querySelectorAll(".clickable-row").forEach(function (row) {
      row.addEventListener("click", function () {
        const code = row.getAttribute("data-code");
        const mission = missions.find(function (item) {
          return item.code === code;
        });

        openMissionModal(mission);
      });
    });
  }

  function renderList(containerId, items, emptyText) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    if (items && items.length > 0) {
      items.forEach(function (text) {
        const item = document.createElement("div");
        item.className = "log-line";
        item.textContent = text;
        container.appendChild(item);
      });
    } else {
      container.innerHTML = `<div class="log-line">${emptyText}</div>`;
    }
  }

  function openMissionModal(mission) {
    document.getElementById("modalMissionCode").textContent = mission.code;
    document.getElementById("modalMissionName").textContent = mission.codename;
    document.getElementById("modalMissionStatus").textContent = mission.status;
    document.getElementById("modalMissionAccess").textContent = mission.access;
    document.getElementById("modalMissionLocation").textContent = mission.location || "NÃO DISPONÍVEL";
    document.getElementById("modalMissionSummary").textContent = mission.summary || "ARQUIVO RESTRITO.";

    renderList("modalMissionObjectives", mission.objectives, "Nenhum objetivo disponível.");
    renderList("modalMissionTeam", mission.team, "Nenhuma equipe vinculada.");
    renderList("modalMissionAgents", mission.agents, "Nenhum agente vinculado.");
    renderList("modalMissionLogs", mission.logs, "Nenhum log disponível.");

    const imagesContainer = document.getElementById("modalMissionImages");
    imagesContainer.innerHTML = "";

    if (mission.images && mission.images.length > 0) {
      mission.images.forEach(function (imageSrc) {
        const img = document.createElement("img");
        img.className = "case-image";
        img.src = imageSrc;
        img.alt = "Imagem relacionada ao caso";
        imagesContainer.appendChild(img);
      });
    } else {
      imagesContainer.innerHTML = `<div class="log-line">Nenhuma imagem vinculada.</div>`;
    }

    const mapContainer = document.getElementById("modalMissionMap");
    mapContainer.innerHTML = "";

    if (mission.miroUrl) {
      mapContainer.innerHTML = `
        <a class="oraculo-action-button" href="${mission.miroUrl}" target="_blank">
          ABRIR MAPA INVESTIGATIVO
        </a>
      `;
    } else {
      mapContainer.innerHTML = `<div class="log-line">Mapa investigativo não vinculado.</div>`;
    }

    missionModal.classList.add("active");
  }

  function openAgentModal(agent) {

  document.getElementById("modalAgentCode").textContent = agent.code;
  document.getElementById("modalAgentName").textContent = agent.name;
  document.getElementById("modalAgentStatus").textContent = agent.status;
  document.getElementById("modalAgentAccess").textContent = agent.access;
  document.getElementById("modalAgentTeam").textContent = agent.team;
  document.getElementById("modalAgentSpecialty").textContent = agent.specialty;

  document.getElementById("modalAgentProfile").textContent =
    agent.profile || "Nenhum perfil registrado.";

  const missionsContainer =
    document.getElementById("modalAgentMissions");

  missionsContainer.innerHTML = "";

  if (agent.missions && agent.missions.length > 0) {

    agent.missions.forEach(function (mission) {

      const item = document.createElement("div");

      item.className = "log-line";
      item.textContent = mission;

      missionsContainer.appendChild(item);

    });

  } else {

    missionsContainer.innerHTML =
      `<div class="log-line">Nenhuma missão registrada.</div>`;

  }

  const restrictedContainer =
    document.getElementById("modalAgentRestricted");

  restrictedContainer.innerHTML = `
    <div class="log-line">
      ████████████████████████████
    </div>

    <div class="log-line">
      AUTORIZAÇÃO COMANDO NECESSÁRIA
    </div>
  `;

  agentModal.classList.add("active");
}

  function closeModal() {
    missionModal.classList.remove("active");
  }

  overviewBtn.addEventListener("click", function () {
    contentArea.innerHTML = overviewContent;
    setActiveButton(overviewBtn);
  });

  missionsBtn.addEventListener("click", function () {
    setActiveButton(missionsBtn);
    renderMissionsTable();
  });

  agentsBtn.addEventListener("click", function () {
  setActiveButton(agentsBtn);

  const rows = agents.map(function (agent) {
    return `
      <tr class="clickable-row" data-agent="${agent.code}">
        <td>${agent.code}</td>
        <td>${agent.name}</td>
        <td>${agent.status}</td>
        <td>${agent.access}</td>
      </tr>
    `;
  }).join("");

  contentArea.innerHTML = `
    <section class="database-panel">
      <div class="panel-header">
        <h2>AGENTES REGISTRADOS</h2>
        <span>EXCALIBUR PERSONNEL DATABASE</span>
      </div>

      <table class="mission-table">
        <thead>
          <tr>
            <th>CÓDIGO</th>
            <th>NOME</th>
            <th>STATUS</th>
            <th>ACESSO</th>
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>
  `;
    document.querySelectorAll(".clickable-row").forEach(function (row) {

  row.addEventListener("click", function () {

    const code = row.getAttribute("data-agent");

    const agent = agents.find(function (item) {
      return item.code === code;
    });

    openAgentModal(agent);

  });

});
});

  
  closeMissionModal.addEventListener("click", closeModal);

  missionModal.addEventListener("click", function (event) {
    if (event.target === missionModal) {
      closeModal();
    }
  });
  closeAgentModal.addEventListener("click", function () {
  agentModal.classList.remove("active");
});

agentModal.addEventListener("click", function (event) {
  if (event.target === agentModal) {
    agentModal.classList.remove("active");
  }
});
});

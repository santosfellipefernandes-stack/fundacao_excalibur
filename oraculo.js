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
      codename: "Projeto Chroma",
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

  const contentArea = document.getElementById("content-area");
  const overviewBtn = document.getElementById("overviewBtn");
  const missionsBtn = document.getElementById("missionsBtn");
  const menuButtons = document.querySelectorAll(".menu-button");

  const missionModal = document.getElementById("missionModal");
  const closeMissionModal = document.getElementById("closeMissionModal");

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

  closeMissionModal.addEventListener("click", closeModal);

  missionModal.addEventListener("click", function (event) {
    if (event.target === missionModal) {
      closeModal();
    }
  });
});

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

  const contentArea = document.getElementById("content-area");
  const overviewBtn = document.getElementById("overviewBtn");
  const missionsBtn = document.getElementById("missionsBtn");
  const menuButtons = document.querySelectorAll(".menu-button");

  const overviewContent = contentArea.innerHTML;

  function setActiveButton(activeButton) {
    menuButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    activeButton.classList.add("active");
  }

  overviewBtn.addEventListener("click", function () {
    contentArea.innerHTML = overviewContent;
    setActiveButton(overviewBtn);
  });

  missionsBtn.addEventListener("click", function () {
    setActiveButton(missionsBtn);

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
            <tr class="clickable-row" data-mission="chroma">
              <td>EXC-OP-0741</td>
              <td>Projeto Chroma</td>
              <td>EM ANDAMENTO</td>
              <td>PARCIAL</td>
            </tr>

            <tr>
              <td>EXC-OP-0319</td>
              <td>Maré Alta</td>
              <td>ARQUIVADA</td>
              <td>LIBERADO</td>
            </tr>

            <tr>
              <td>EXC-OP-1186</td>
              <td>Vernissage</td>
              <td>PLANEJAMENTO</td>
              <td>PARCIAL</td>
            </tr>

            <tr class="locked-row">
              <td>EXC-OP-0007</td>
              <td>██████████</td>
              <td>CLASSIFICADO</td>
              <td>NEGADO</td>
            </tr>
          </tbody>
        </table>

      </section>
    `;
  });
});

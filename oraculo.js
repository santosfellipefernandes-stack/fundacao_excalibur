document.addEventListener("DOMContentLoaded", function () {

  const agentData = JSON.parse(
    localStorage.getItem("currentAgent")
  );

  const agentCode = localStorage.getItem(
    "currentAgentCode"
  );

  if (!agentData) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("agentName").textContent =
    agentData.name;

  document.getElementById("agentCode").textContent =
    "CÓDIGO: " + agentCode;

  document.getElementById("agentLevel").textContent =
    "NÍVEL: " + agentData.level;

});

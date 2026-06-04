// Script para sistema secreto ARES

// Função para simular a tela de acesso
function initAccessScreen() {
    const accessScreen = document.getElementById('accessScreen');
    const dashboard = document.getElementById('dashboard');
    
    // Após 3 segundos, mostrar o dashboard
    setTimeout(() => {
        accessScreen.style.opacity = '0';
        accessScreen.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            accessScreen.style.display = 'none';
            dashboard.style.display = 'flex';
            dashboard.style.animation = 'fadeIn 0.5s ease';
        }, 500);
    }, 3000);
}

// Função para alternar abas
function openTab(tabName) {
    // Esconder todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover classe ativa de todos os botões
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar a aba selecionada
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Marcar o botão como ativo
    event.target.classList.add('active');
}

// Função de logout
function logout() {
    if (confirm('Deseja sair do sistema ARES?')) {
        window.location.href = 'index.html';
    }
}

// Efeito de digitação no terminal
function typewriterEffect(element, lines, speed = 50, lineDelay = 500) {
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex < lines.length) {
            let line = lines[lineIndex];
            let charIndex = 0;
            
            function typeChar() {
                if (charIndex < line.length) {
                    element.innerHTML += line.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, speed);
                } else {
                    lineIndex++;
                    element.innerHTML += '<br>';
                    setTimeout(typeLine, lineDelay);
                }
            }
            
            typeChar();
        }
    }
    
    typeLine();
}

// Simulação de atividade em tempo real
function simulateActivity() {
    const activities = [
        '► Monitorando setor 1...',
        '► Sensor ativo no setor 3',
        '► Anomalia detectada - investigando',
        '► Equipamento funcionando normalmente',
        '► Transmissão de dados: OK'
    ];
    
    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.innerHTML = `
            <span class="time">[${new Date().toLocaleTimeString()}]</span>
            <span class="type">[INFO]</span>
            <span class="message">${randomActivity}</span>
        `;
    }, 10000);
}

// Efeito de glitch
function glitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*';
    
    setInterval(() => {
        let glitched = '';
        for (let i = 0; i < originalText.length; i++) {
            if (Math.random() < 0.1) {
                glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitched += originalText[i];
            }
        }
        element.textContent = glitched;
    }, 100);
    
    setTimeout(() => {
        element.textContent = originalText;
    }, 200);
}

// Adicionar efeitos de hover aos cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.status-card, .incidente-card, .arquivo-card, .equipe-card, .alerta-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 30px rgba(0, 255, 0, 0.5)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = `0 0 15px rgba(0, 255, 0, 0.1)`;
        });
    });
}

// Atualizar relógio do sistema
function updateSystemTime() {
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('pt-BR', { hour12: false });
        document.querySelectorAll('.system-time').forEach(el => {
            el.textContent = timeStr;
        });
    }, 1000);
}

// Pulsação dos números de status
function pulseNumbers() {
    const numbers = document.querySelectorAll('.status-number');
    numbers.forEach(number => {
        setInterval(() => {
            number.style.textShadow = '0 0 20px rgba(0, 255, 0, 0.8)';
            setTimeout(() => {
                number.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
            }, 500);
        }, 2000);
    });
}

// Inicializar quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    initAccessScreen();
    setTimeout(addHoverEffects, 3500);
    updateSystemTime();
    setTimeout(pulseNumbers, 3500);
    console.log('Sistema ARES inicializado com sucesso');
});

// Adicionar animação CSS para glitch
const style = document.createElement('style');
style.textContent = `
    @keyframes screenFlicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.95; }
    }
    
    @keyframes scanlines {
        0% { transform: translateY(0); }
        100% { transform: translateY(10px); }
    }
    
    .dashboard {
        animation: screenFlicker 0.15s infinite;
    }
`;
document.head.appendChild(style);

// Função para adicionar entrada no log
function addLogEntry(type, message) {
    const logType = type.toUpperCase();
    const now = new Date();
    const timeStr = now.toLocaleTimeString('pt-BR', { hour12: false });
    
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `
        <span class="time">[${timeStr}]</span>
        <span class="type">[${logType}]</span>
        <span class="message">${message}</span>
    `;
    
    return logEntry;
}

// Função para simular um novo incidente
function reportIncident(title, location, type, severity) {
    const incidentContainer = document.querySelector('.incidentes-list');
    
    if (incidentContainer) {
        const incidentCard = document.createElement('div');
        incidentCard.className = `incidente-card ${severity.toLowerCase()}`;
        incidentCard.innerHTML = `
            <div class="incidente-header">
                <h4>${title}</h4>
                <span class="incidente-level">${severity.toUpperCase()}</span>
            </div>
            <p><strong>Local:</strong> ${location}</p>
            <p><strong>Tipo:</strong> ${type}</p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
            <p><strong>Status:</strong> Novo Incidente</p>
        `;
        
        incidentContainer.insertBefore(incidentCard, incidentContainer.firstChild);
    }
}
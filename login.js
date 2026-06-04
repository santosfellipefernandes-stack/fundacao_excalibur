// Scripts para página de login ARES

// Criar partículas de fundo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 15;

        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';

        particlesContainer.appendChild(particle);
    }
}

// Alternar visibilidade de senha
function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}

// Adicionar entrada ao log
function addLogEntry(message, type = 'info') {
    const logEntries = document.getElementById('logEntries');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    const time = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    entry.textContent = `[${time}] ${message}`;
    
    logEntries.appendChild(entry);
    
    // Manter apenas os últimos 5 logs visíveis
    const entries = logEntries.querySelectorAll('.log-entry');
    if (entries.length > 5) {
        entries[0].remove();
    }
    
    // Scroll automático para o final
    logEntries.scrollTop = logEntries.scrollHeight;
}

// Mostrar mensagem na área de mensagens
function showMessage(message, type = 'info') {
    const messageArea = document.getElementById('messageArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    messageArea.appendChild(messageDiv);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

// Fechar modal
function closeModal() {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
}

// Mostrar modal de emergência
function emergencyLogin() {
    addLogEntry('Protocolo de emergência ativado', 'warning');
    openModal('emergencyModal');
}

// Confirmar acesso de emergência
function confirmEmergency() {
    const password = document.getElementById('emergencyPassword').value;
    
    if (password === '0000') {
        addLogEntry('Senha de emergência verificada', 'success');
        showMessage('✓ Acesso de emergência autorizado!', 'success');
        
        setTimeout(() => {
            window.location.href = 'sistema-secreto.html';
        }, 1500);
    } else {
        addLogEntry('Tentativa de senha incorreta', 'error');
        showMessage('✗ Senha de emergência incorreta', 'error');
        document.getElementById('emergencyPassword').value = '';
    }
}

// Mostrar modal de registro
function showSignup() {
    addLogEntry('Solicitação de acesso iniciada', 'info');
    openModal('signupModal');
}

// Confirmar registro
function confirmSignup() {
    addLogEntry('Solicitação de acesso enviada para análise', 'success');
    showMessage('✓ Solicitação recebida! Você será contatado em breve.', 'success');
    
    setTimeout(() => {
        closeModal();
    }, 2000);
}

// Lidar com envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const agentCode = document.getElementById('agentCode').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.querySelector('.login-button');
    
    // Validar campos
    if (!agentCode || !password) {
        showMessage('✗ Preencha todos os campos', 'error');
        addLogEntry('Tentativa com campos vazios', 'error');
        return;
    }
    
    // Desabilitar botão e mostrar carregamento
    loginBtn.disabled = true;
    loginBtn.classList.add('loading');
    
    addLogEntry(`Autenticando agente: ${agentCode}`, 'info');
    
    // Simular verificação
    setTimeout(() => {
        // Credenciais válidas: qualquer código começando com "AGT-" e senha com 5+ caracteres
        if (agentCode.startsWith('AGT-') && password.length >= 5) {
            addLogEntry('Credenciais verificadas com sucesso', 'success');
            showMessage('✓ Autenticação bem-sucedida! Redirecionando...', 'success');
            
            // Salvar dados se lembrar foi marcado
            if (document.getElementById('remember').checked) {
                localStorage.setItem('ares_agentCode', agentCode);
            }
            
            // Redirecionar após 2 segundos
            setTimeout(() => {
                window.location.href = 'sistema-secreto.html';
            }, 2000);
        } else {
            addLogEntry('Falha na verificação de credenciais', 'error');
            showMessage('✗ Código ou senha incorretos', 'error');
            
            loginBtn.disabled = false;
            loginBtn.classList.remove('loading');
            
            // Limpar campos
            document.getElementById('password').value = '';
            document.getElementById('agentCode').focus();
        }
    }, 2000);
});

// Carregar dados salvos
function loadSavedCredentials() {
    const savedCode = localStorage.getItem('ares_agentCode');
    
    if (savedCode) {
        document.getElementById('agentCode').value = savedCode;
        document.getElementById('remember').checked = true;
        document.getElementById('password').focus();
        addLogEntry('Credenciais restauradas do cache local', 'info');
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Adicionar animação de slide out
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    loadSavedCredentials();
    
    // Digitação do log inicial
    setTimeout(() => {
        addLogEntry('Sistema ARES v4.2 inicializado', 'success');
        addLogEntry('Aguardando autenticação...', 'info');
    }, 500);
    
    console.log('Portal de Login ARES carregado');
});

// Tecla Enter para submeter formulário
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});

// Tecla Escape para fechar modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

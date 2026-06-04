// Script para página de notícias

// Efeito de digitação para títulos
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal de Notícias carregado');
    
    // Animação de fade-in nos cards
    const cards = document.querySelectorAll('.news-card, .featured-article');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
    });
});

// Adicionar animação CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Função para buscar notícias (simulado)
function buscarNoticia(id) {
    console.log('Buscando notícia:', id);
    alert('Conteúdo da notícia será carregado aqui!');
}

// Adicionar event listeners aos cards
document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Card clicado');
            // Aqui você pode adicionar lógica de navegação
        });
    });
});
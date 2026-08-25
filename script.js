document.addEventListener('DOMContentLoaded', () => {
    // Criar dinamicamente o botão de alternar tema
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.textContent = '🌙 Modo Escuro';
    document.body.appendChild(button);

    // Alternar entre modo claro e escuro
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            button.textContent = '☀️ Modo Claro';
        } else {
            button.textContent = '🌙 Modo Escuro';
        }
    });
});
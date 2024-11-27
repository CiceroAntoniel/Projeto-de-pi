document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Exemplo de validação simples: login e senha fixos
    if (email === 'admin@gmail.com' && password === '12345') {
        
        window.location.href = 'agend/agend.html'; // Redireciona para a página principal após login
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos.';
    }
});

// Função para alternar a visibilidade da senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
});


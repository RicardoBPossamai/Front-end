// Validação do Formulário de Contato
document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('formContato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Resetar mensagens de erro
            document.querySelectorAll('.erro').forEach(el => el.textContent = '');
            
            // Validar campos
            let isValid = true;
            
            // Validar Nome
            const nome = document.getElementById('nome');
            if (nome.value.trim() === '') {
                document.getElementById('erroNome').textContent = 'Por favor, insira seu nome';
                isValid = false;
            }
            
            // Validar E-mail
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                document.getElementById('erroEmail').textContent = 'Por favor, insira seu e-mail';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('erroEmail').textContent = 'Por favor, insira um e-mail válido';
                isValid = false;
            }
            
            // Validar Assunto
            const assunto = document.getElementById('assunto');
            if (assunto.value === '') {
                document.getElementById('erroAssunto').textContent = 'Por favor, selecione um assunto';
                isValid = false;
            }
            
            // Validar Mensagem
            const mensagem = document.getElementById('mensagem');
            if (mensagem.value.trim() === '') {
                document.getElementById('erroMensagem').textContent = 'Por favor, insira sua mensagem';
                isValid = false;
            } else if (mensagem.value.trim().length < 20) {
                document.getElementById('erroMensagem').textContent = 'A mensagem deve ter pelo menos 20 caracteres';
                isValid = false;
            }
            
            // Se tudo estiver válido, mostrar mensagem de sucesso
            if (isValid) {
                const mensagemSucesso = document.getElementById('mensagemSucesso');
                mensagemSucesso.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                mensagemSucesso.style.display = 'block';
                formContato.reset();
                
                // Esconder mensagem após 5 segundos
                setTimeout(() => {
                    mensagemSucesso.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // Filtro do Catálogo
    const filtros = document.querySelectorAll('.filtros button');
    const cards = document.querySelectorAll('.card');
    
    if (filtros.length > 0 && cards.length > 0) {
        filtros.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remover classe ativo de todos os botões
                filtros.forEach(b => b.classList.remove('ativo'));
                
                // Adicionar classe ativo ao botão clicado
                this.classList.add('ativo');
                
                const categoria = this.getAttribute('data-categoria');
                
                // Mostrar/ocultar cards conforme a categoria
                cards.forEach(card => {
                    if (categoria === 'todos' || card.getAttribute('data-categoria') === categoria) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Newsletter (simulação)
    const newsForm = document.getElementById('newsForm');
    if (newsForm) {
        newsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado por assinar nossa newsletter!');
            newsForm.reset();
        });
    }
});
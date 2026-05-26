// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site sobre Cavalos carregado com sucesso! 🐴");

    // 1. EFEITO DE ROLAGEM SUAVE (SMOOTH SCROLL) PARA O MENU
    const linksDoMenu = document.querySelectorAll("nav ul li a");

    linksDoMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            // Verifica se o link aponta para uma seção interna (começa com #)
            const href = link.getAttribute("href");
            if (href.startsWith("#")) {
                evento.preventDefault(); // Impede o comportamento padrão de pulo
                
                const secaoAlvo = document.querySelector(href);
                if (secaoAlvo) {
                    secaoAlvo.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 2. INTERATIVIDADE NOS CARDS (Efeito de clique para exibir detalhes)
    const cardsRacas = document.querySelectorAll(".card");

    cardsRacas.forEach(card => {
        card.addEventListener("click", () => {
            // Seleciona o nome do cavalo dentro do card clicado
            const nomeCavalo = card.querySelector("h3").innerText;
            
            // Exemplo de comportamento interativo: você pode expandir isso para abrir um modal
            console.log(`Usuário demonstrou interesse na raça: ${nomeCavalo}`);
            
            // Destaca temporariamente o card clicado
            cardsRacas.forEach(c => c.style.border = "none");
            card.style.border = "2px solid #d4a373";
        });
    });

    // 3. ANIMAÇÃO DE APARECIMENTO (FADE-IN) AO ROLAR A PÁGINA
    const itensParaAnimar = document.querySelectorAll(".card, .dica-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.6s ease-out";
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do item estiver visível na tela
    });

    itensParaAnimar.forEach(item => {
        // Estado inicial escondido para a animação funcionar
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        observer.observe(item);
    });
});
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

    // Faz os elementos de fundo flutuarem levemente seguindo o mouse
    const flame = document.querySelector('.decor-flame-pink');
    const smiley = document.querySelector('.decor-smiley');
    const polaroid = document.querySelector('.polaroid-wrapper');

    if(flame) flame.style.transform = `translate(${moveX * -1.5}px, ${moveY * -1.5}px)`;
    if(smiley) smiley.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
    
    // Efeito sutil de inclinação na foto de perfil
    if(polaroid) {
        polaroid.style.transform = `rotate(-8deg) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
    }
});

// Animação de clique nos botões de pílula
const buttons = document.querySelectorAll('.btn-pill');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. ANIMAÇÃO DO HEADER AO ROLAR A PÁGINA
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. EFEITO PARALLAX INTERATIVO BASEADO NO MOUSE (Apenas para as caixas de texto/subtítulos)
    const heroContainer = document.querySelector(".hero-title-container");
    const floatingBadges = document.querySelectorAll(".subtitle1, .subtitle2, .subtitle3, .subtitle4, .subtitle5");

    if (heroContainer) {
        heroContainer.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calcula o deslocamento do mouse em relação ao centro
            const moveX = (clientX / innerWidth) - 0.5;
            const moveY = (clientY / innerHeight) - 0.5;

            floatingBadges.forEach((badge, index) => {
                // Modifica levemente a posição das caixas de texto de acordo com o mouse
                const speed = (index + 1) * 15; 
                badge.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px) rotate(${(index % 2 === 0 ? 1 : -1) * 12}deg)`;
            });
        });

        // Reseta a posição das caixas de texto quando o mouse sai da seção
        heroContainer.addEventListener("mouseleave", () => {
            floatingBadges.forEach((badge) => {
                badge.style.transform = "";
            });
        });
    }

    // 3. ANIMAÇÃO DE ENTRADA SUAVE (REVEAL) DOS CARDS DE SKILL
    const skillCards = document.querySelectorAll(".skill-card");

    const observerOptions = {
        root: null,
        threshold: 0.15,
    };

    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Os cards aparecem um por um com um leve atraso
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100); 
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Configuração inicial das propriedades de transição dos cards
    skillCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)";
        skillsObserver.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const olho1 = document.querySelector(".olho1");

    // Função para fazer o olho 1 piscar em tempos totalmente aleatórios
    function piscarAleatorio() {
        if (olho1) {
            olho1.style.transition = "transform 0.1s ease-in-out";
            olho1.style.transform = "scaleY(0.1)"; // Fecha

            setTimeout(() => {
                olho1.style.transform = "scaleY(1)"; // Abre
            }, 120);
        }
        
        // Define o próximo piscar entre 3 e 7 segundos
        const proximoTempo = Math.random() * (7000 - 3000) + 3000;
        setTimeout(piscarAleatorio, proximoTempo);
    }

    // Inicia o ciclo do JS
    piscarAleatorio();
});


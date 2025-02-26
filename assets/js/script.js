document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item"); // Lista de carros
    const indicators = document.querySelectorAll(".indicators li"); // Bolinhas do indicador
    const numberIndicator = document.querySelector(".number"); // Número do carro
    const prevBtn = document.querySelector(".arrow.left"); // Botão esquerdo
    const nextBtn = document.querySelector(".arrow.right"); // Botão direito

    let currentIndex = 0; // Índice do carro atual

    // Função para atualizar a exibição do carro
    function updateCar(index) {
        // Remove a classe "active" de todos os itens
        items.forEach(item => item.classList.remove("active"));
        indicators.forEach(indicator => indicator.classList.remove("active"));

        // Adiciona a classe "active" ao item e indicador corretos
        items[index].classList.add("active");
        indicators[index].classList.add("active");

        // Atualiza o número do indicador
        numberIndicator.textContent = (index + 1).toString().padStart(2, '0');
    }

    // Evento para passar para o próximo carro
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length; // Se for o último, volta ao primeiro
        updateCar(currentIndex);
    });

    // Evento para voltar ao carro anterior
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Se for o primeiro, volta ao último
        updateCar(currentIndex);
    });

    // Atualiza o primeiro carro ao carregar a página
    updateCar(currentIndex);
});

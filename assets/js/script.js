document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Slider functionality
    const items = document.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicator');
    const numberDisplay = document.querySelector('.number');
    const prevBtn = document.querySelector('.arrow-left');
    const nextBtn = document.querySelector('.arrow-right');

    let currentIndex = 0;
    const totalItems = items.length;

    // Function to update the display
    function updateDisplay() {
        // Update items
        items.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });

        // Update number display (01, 02, 03, etc.)
        const displayNumber = (currentIndex + 1).toString().padStart(2, '0');
        numberDisplay.textContent = displayNumber;
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateDisplay();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateDisplay();
    });

    // Event listeners for indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.dataset.index);
            updateDisplay();
        });
    });

    // Auto-rotate slides every 5 seconds
    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateDisplay();
    }, 5000);

    // Pause auto-rotation when user interacts
    document.querySelector('.list').addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.list').addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateDisplay();
        }, 5000);
    });

    // Initialize display
    updateDisplay();
});
document.addEventListener('DOMContentLoaded', function () {
    const benefits = document.querySelectorAll('.benefit');
    const additionalBenefits = document.querySelectorAll('.additional');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const toggleButton = document.getElementById('toggle-button');
    let currentIndex = 0;

    function showBenefit(index) {
        benefits.forEach((benefit, i) => {
            if (i === index) {
                benefit.style.display = 'block';
            } else {
                benefit.style.display = 'none';
            }
        });
    }

    showBenefit(currentIndex);

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + benefits.length) % benefits.length;
        showBenefit(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % benefits.length;
        showBenefit(currentIndex);

        // Mostrar/Esconder imagens adicionais quando necessário
        if (currentIndex === benefits.length - 1) {
            additionalBenefits.forEach((additionalBenefit) => {
                additionalBenefit.style.display = 'block';
            });
        } else {
            additionalBenefits.forEach((additionalBenefit) => {
                additionalBenefit.style.display = 'none';
            });
        }
    });

    // Adicionar funcionalidade ao botão de alternar
    toggleButton.addEventListener('click', function () {
        additionalBenefits.forEach((additionalBenefit) => {
            additionalBenefit.style.display = (additionalBenefit.style.display === 'none') ? 'block' : 'none';
        });
    });
});
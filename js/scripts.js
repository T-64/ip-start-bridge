document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    // ��ʼ������ʾ��һ��ͼƬ
    slides[currentIndex].classList.add('active');

    // �л�����һ��
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length; // ѭ������ͷ
        slides[currentIndex].classList.add('active');
    }

    // �л�����һ��
    function showPrevSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // ѭ������β
        slides[currentIndex].classList.add('active');
    }

    // ��ť�¼�
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000); // ÿ 3 ���л�
});
// JavaScript for language switching
document.addEventListener('DOMContentLoaded', function () {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove current-lang class from all buttons
            langBtns.forEach(b => b.classList.remove('current-lang'));

            // Add current-lang class to clicked button
            this.classList.add('current-lang');

            const lang = this.textContent.trim();

            // Here you would implement the actual language switching logic
            console.log('Switching to language:', lang);

            // For demonstration purposes only
            alert('Switching to ' + lang);
        });
    });
});
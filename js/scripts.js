document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;

    // 初始化：显示第一张图片
    slides[currentIndex].classList.add('active');

    // 切换到下一张
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length; // 循环到开头
        slides[currentIndex].classList.add('active');
    }

    // 切换到上一张
    function showPrevSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // 循环到结尾
        slides[currentIndex].classList.add('active');
    }

    // 按钮事件
    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000); // 每 3 秒切换
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
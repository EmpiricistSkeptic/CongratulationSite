document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");

    function createFallingStar() {
        const star = document.createElement("div");
        star.classList.add("falling-star");

        // Задаём случайную горизонтальную позицию появления
        star.style.left = (Math.random() * 100) + "vw";
        star.style.top = (-Math.random() * 50) + "px";
        star.style.animationDuration = (5 + Math.random() * 3) + "s";

        // Добавляем звезду в контейнер
        starContainer.appendChild(star);

        // Убираем звезду после завершения анимации
        star.addEventListener("animationend", () => {
            star.remove();
        });
    }

    // Генерируем звезды каждые 1-2 секунды
    setInterval(createFallingStar, 2000);
});


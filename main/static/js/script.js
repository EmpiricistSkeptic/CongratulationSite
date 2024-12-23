document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".stars");

    function createFallingStar() {
        const star = document.createElement("div");
        star.classList.add("falling-star");

        // Задаём случайную позицию и скорость
        star.style.left = `${Math.random() * 100}vw`; // добавлены кавычки для шаблонной строки
        star.style.animationDuration = `${2 + Math.random() * 3}s`; // добавлены кавычки и единицы измерения (s)

        // Добавляем звезду в контейнер
        starContainer.appendChild(star);

        // Убираем звезду после завершения анимации
        star.addEventListener("animationend", () => {
            star.remove();
        });
    }

    // Генерируем звезды каждые 1-2 секунды
    setInterval(createFallingStar, 1000);
});


document.addEventListener("DOMContentLoaded", function(event) {

    // Функция-генератор цвета
    function randColor(elem) {
        var element = document.querySelector(elem),
            code_color = document.querySelector('.code_color'),
            r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256)),
            color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            element.style.background = color;
            code_color.innerText = color;
    }

    // Получаем нажатие кнопки
    document.addEventListener('keydown', function (e) { 
        if (e.code == "Space") {
            randColor(".color-container");
        }
    });

    // Получаем Range и блок
    // console.dir(document.querySelector(".border-lt"));
    let topLeft = document.querySelector(".border-lt");
    let topRight = document.querySelector(".border-rt");
    let center = document.querySelector(".center");
    let bottomLeft = document.querySelector(".border-lb");
    let bottomRight = document.querySelector(".border-rb");

    topLeft.addEventListener('change', function (e) {
        center.style.borderTopLeftRadius = topLeft.value + 'px';
        // Второй вариант 
        // center.setAttribute("style", `border-top-left-radius: ${topLeft.value}px`);
        console.log(topLeft);
    });
    topRight.addEventListener('change', function (e) {
        center.style.borderTopRightRadius = topRight.value + 'px';
    });
    bottomLeft.addEventListener('change', function (e) {
        center.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    });
    bottomRight.addEventListener('change', function (e) {
        center.style.borderBottomRightRadius = bottomRight.value + 'px';
    });
});

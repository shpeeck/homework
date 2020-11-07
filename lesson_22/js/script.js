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


});



// Из инета
// html 
{/* <div class="code_color">#ffffff</div>
<button onclick="randColor('.example')">Нажми</button> */}

// js 

// function randColor(elem) {
    /*СОЗДАЕМ ПЕРЕМЕННЫЕ
    elem - элемент которому будем менять задний фон
    code_color - получаем элемент в который будет выводить код цвета
    r,g,b - отвечают за кодировку и вместе выводят цвет
    color - в нее записываем полную строку значения цвета
    */
            //     var element = document.querySelector(elem),
            //         code_color = document.querySelector('.code_color'),
            //         r = Math.floor(Math.random() * (256)),
            //         g = Math.floor(Math.random() * (256)),
            //         b = Math.floor(Math.random() * (256)),
            //         color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    
            //     element.style.background = color;
            //     code_color.innerText = color;
            // }
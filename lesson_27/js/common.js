$(document).ready( function() {

    title = $(document).find("title").text();
    // console.log(title);

    if (title == "Massiv") {
        // Проверка возраста
        let name = prompt("Ваше имя");
        let age = prompt("Ваш возраст");

        if(age<0) {
            alert("Неправильно введен возраст!")
        }
        else if(age<=16){
            alert(`Привет, ${name}! Вы подросток!`);
        }
        else if (age >= 17 && age <= 40){
            alert(`Привет, ${name}! Вы молодой человек`)
        }
        else if(age >= 41){
            alert(`Привет, ${name}! Вы старичок`)
        }
    } else if (title == "Color Generator") {
        // Функция-генератор цвета
        function randColor(elem) {
            let element = $(elem),
                code_color = $('.code_color'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
                element.css('background', color);
                code_color.text(color);
        };

        // Получаем нажатие кнопки
        $(document).on('keydown', function (e) { 
            if (e.code == "Space") {
                randColor(".color-container");
            }
        });
    } else if(title == "Border radius") {
        // Скругление углов
        let topLeft = $(".border-lt");
        let topRight = $(".border-rt");
        let center = $(".center");
        let bottomLeft = $(".border-lb");
        let bottomRight = $(".border-rb");

        topLeft.on("input", function (e) {
            center.css('border-top-left-radius', (topLeft.val() + 'px'));
        });
        topRight.on("input", function (e) {
            center.css('border-top-right-radius', (topRight.val() + 'px'));
        });
        bottomLeft.on("input", function (e) {
            center.css('border-bottom-left-radius', (bottomLeft.val() + 'px'));
        });
        bottomRight.on("input", function (e) {
            center.css('border-bottom-right-radius', (bottomRight.val() + 'px'));
        });
    }
})

$(document).ready( function() {

    title = $(document).find("title").text();
    // console.log(title);

    if (title == "Massiv") {
        let arr = [
            ["овощи", "фрукты", "ягоды"],
            ["vegetables", "fruit", "berries"]
        ];
        
        let rus = $(".rus");
        let eng = $(".eng");
        
        rus.on("click", function () {
            for (let i = 0; i < arr[0].length; i++) {
                console.log(arr[0][i]);
            }
            $(".mass-text").text(arr[0].join(" "));
        })
        eng.on("click", function () {
            for (let i = 0; i < arr[1].length; i++) {
                console.log(arr[1][i]);
            }
            $(".mass-text").text(arr[1].join(" "));
        })
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

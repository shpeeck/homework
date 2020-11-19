document.addEventListener("DOMContentLoaded", function () {
    let tabsContent = document.querySelectorAll(".tab__content");
    let tabsControl = document.querySelectorAll(".tab__item")
    // console.log(tabsContent);
    // console.log(tabsControl);


    tabsControl.forEach( elem => {
        elem.addEventListener("click",function () {
            showTabContent(elem.dataset.tabnumber);
            tabsControl.forEach(elem => {
                elem.classList.remove("tab__item--active");
            });
            this.classList.add("tab__item--active");
        });
    });

    function hideTabContent() {
        for (let i = 1; i < tabsContent.length; i++){
            tabsContent[i].classList.add("tab--hidden");
        }
    }


    hideTabContent();

    function showTabContent(tabnumber) {
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");
        }

        tabsContent[tabnumber - 1].classList.remove("tab--hidden");
    }




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
    let center = document.querySelector(".center-radius");
    let bottomLeft = document.querySelector(".border-lb");
    let bottomRight = document.querySelector(".border-rb");

    topLeft.addEventListener('input', function (e) {
    // topLeft.addEventListener('change', function (e) {
        center.style.borderTopLeftRadius = topLeft.value + 'px';
        // Второй вариант 
        // center.setAttribute("style", `border-top-left-radius: ${topLeft.value}px`);
        console.log(topLeft);
    });
    topRight.addEventListener('input', function (e) {
        center.style.borderTopRightRadius = topRight.value + 'px';
    });
    bottomLeft.addEventListener('input', function (e) {
        center.style.borderBottomLeftRadius = bottomLeft.value + 'px';
    });
    bottomRight.addEventListener('input', function (e) {
        center.style.borderBottomRightRadius = bottomRight.value + 'px';
    });




    // validate
    let selector = document.querySelectorAll("input[type='phone']");

    let im = new Inputmask("+38(099)99-99-999");

    let modal = document.querySelector(".modal");

    im.mask(selector);


    new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },

        messages: {
            name: 
            {
                required: 'Потрібно ввести ім\'я',
                minLength: 'Портібно більше двох літер' 
            },
            email: 'Потрібно ввести email',
            phone: 'Потрібно ввести телефон'
        },

        submitHandler: function (form) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "mail.php", true);
            let formData = new FormData(form);
            
            xhr.addEventListener("load", function () {
                if (xhr.readyState === 4 ) {
                    switch (xhr.status) {
                        case 200:
                            console.log("Форма оправлена!");
                            form.reset();
                            modal.classList.add("modal-active");
                            setTimeout(() => {
                                modal.classList.remove("modal-active");
                            }, 2000);
                            break;
                    
                        case 404: 
                            console.log("Ничего не вышло");
                        default:
                            console.log("Error");
                            break;
                    }
                }
            })
            xhr.send(formData);
        },
    });





})
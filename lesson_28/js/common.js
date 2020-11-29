// let selector = document.querySelectorAll("input[type='phone']");
let selector = $("input[type='phone']");


let im = new Inputmask("+38(099)99-99-999");

// let modal = document.querySelector(".modal");
let modal = $(".modal");


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

    submitHandler: function (form, value, ajax) {
        console.log(form);
        
        $.ajax({
            url: 'mail.php',
            method: 'POST',
            data: value,
            async: true,
            callback: function(response)  {
                console.log(response)
            },
            success: function(response) {
                console.log(response);
                console.log("Форма оправлена!");
                form.reset();
                $(modal).addClass("modal-active");
                setTimeout(() => {
                    $(modal).remove("modal-active");
                }, 2000);
            },
            error: function (response) {
                console.log(response)
                console.log("Ничего не вышло");
            }
        
        });
    },
});


// submitHandler: function (form) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "mail.php", true);
//     let formData = new FormData(form);

//     xhr.addEventListener("load", function () {
//         if (xhr.readyState === 4 ) {
//             switch (xhr.status) {
//                 case 200:
//                     console.log("Форма оправлена!");
//                     form.reset();
//                     modal.classList.add("modal-active");
//                     setTimeout(() => {
//                         modal.classList.remove("modal-active");
//                     }, 2000);
//                     break;
//                 case 404: 
//                     console.log("Ничего не вышло");
//                 default:
//                     console.log("Error");
//                     break;
//             }
//         }
//     })
//     xhr.send(formData);
// },
// });





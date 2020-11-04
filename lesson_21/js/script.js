let arr = [
    ["овощи", "фрукты", "ягоды"],
    ["vegetables", "fruit", "berries"]
];

let rus = document.querySelector(".rus");
let eng = document.querySelector(".eng");

rus.addEventListener("click", function () {
    for (let i = 0; i < arr[0].length; i++) {
        console.log(arr[0][i]);
    }
})

eng.addEventListener("click", function () {
    for (let i = 0; i < arr[1].length; i++) {
        console.log(arr[1][i]);
    }
})




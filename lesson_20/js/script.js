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

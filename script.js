
let countValue = 0;
let value = document.querySelector(".text");


let Minus = document.querySelector('.minus'); //Decrease Count
Minus.addEventListener('click', () => {
    countValue --;
    value.innerText = countValue;
});

let Plus = document.querySelector('.plus'); //Increase Count
Plus.addEventListener('click', () => {
    countValue ++;
    value.innerText = countValue;
});


let Reset = document.querySelector('.reset'); //Reset Count
Reset.addEventListener('click', () => {
    countValue = 0;
    value.innerText = countValue;
});


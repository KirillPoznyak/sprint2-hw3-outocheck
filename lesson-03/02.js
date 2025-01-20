// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number % 2 === 0) {
        number = true;
        } else {
            number = false;
        }
    return number;
}

isEven
let parity = isEven(4);
console.log('Число чётное(true)/нечётное(false): ', parity);
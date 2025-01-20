// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    let largestNumber;
    switch((number1 > number2 && number1 > number3) ||
            (number2 > number1 && number2 > number3) ||
            (number3 > number1 && number3 > number2)){
        case (number1 > number2 && number1 > number3): {
            largestNumber = number1;
            break;
        }
        case (number2 > number1 && number2 > number3): {
            largestNumber = number2;
            break;
        }
        case (number3 > number1 && number3 > number2): {
            largestNumber = number3;
            break;
        }
    }
    return largestNumber;
}

let largestNumber = findLargest(888 , 3, 27);
console.log('Наибольшее число: ', largestNumber);
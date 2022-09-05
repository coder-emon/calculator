const screen = document.getElementById('screen');
const calculator = document.getElementById("calculator")
let screenValue = "";
calculator.addEventListener("click", function(event) {
    let number = event.target.innerText;
    const previousTypedNumber = screen.value;
    if(isNaN(number)){
        if (number == "AC") {
            screen.value = "";
        } else if (number == "DEL") {
            const typedChar = previousTypedNumber.split('');
            console.log(typedChar);
            typedChar.pop();
            const newtypedChar = typedChar.join('');
            screen.value = newtypedChar;
        }else if(number == "="){
            screen.value = eval(previousTypedNumber);
        }else if (number == "+"){
            const newTypedNumber = previousTypedNumber + number;
            screen.value = newTypedNumber;
        } else if (number == "-") {
            const newTypedNumber = previousTypedNumber + number;
            screen.value = newTypedNumber;
        } else if (number == "*") {
            const newTypedNumber = previousTypedNumber + number;
            screen.value = newTypedNumber;
        } else if (number == "÷") {
            number = '/';
            const newTypedNumber = previousTypedNumber + number;
            screen.value = newTypedNumber;
        } else if (number == ".") {
            const newTypedNumber = previousTypedNumber + number;
            screen.value = newTypedNumber;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        screen.value = newTypedNumber;
    }
})

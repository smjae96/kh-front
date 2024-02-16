function calculate() {
    let result = document.getElementById("result");
    let firstValue = document.getElementById("first-value");
    let math = document.getElementById("math");
    let secondValue = document.getElementById("second-value");
    result.style.background = ""

    if(math.value == "+") {
        result.value = parseInt(firstValue.value) + parseInt(secondValue.value);
    } else if(math.value == "-") {
        result.value = parseInt(firstValue.value) - parseInt(secondValue.value);
    } else if(math.value == "*") {
        result.value = parseInt(firstValue.value) * parseInt(secondValue.value);
    } else if(math.value == "/") {
        if(parseInt(secondValue.value) == 0) {
            result.value = "연산불가";
            result.style.background = "red";
        } else {
            result.value = parseInt(firstValue.value) / parseInt(secondValue.value);
        }  
    } else {
        if(parseInt(secondValue.value) == 0) {
            result.value = "연산불가";
            result.style.background = "red";
        } else {
            result.value = parseInt(firstValue.value) % parseInt(secondValue.value);
        }  
    }
    
}
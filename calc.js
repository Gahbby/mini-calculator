function displayNumber(value){
    console.log(value);
    userInput.value += value
}

function evaluateValues(){
    let displayedValues = userInput.value
    let result = eval(displayedValues)
    answer.innerHTML = `<h3> Answer = ${result} <h3>`
    userInput.value = result
}
function clearInput(){
    userInput.value = ""
    answer.innerHTML = ""
}
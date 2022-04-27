// evalArr -> [ (1st number), (operator), (2nd number)]
evalArr = [NaN, '', '']

// displayStr -> value displayed at top of calculator
displayStr = document.querySelector('.display-value')

// when a numeric button is clicked, it appends that value to the display value
// also depends on whether there is an operator or not
function numericButtonListener(val) {
    if (!evalArr[1] || isNaN(evalArr[0])) {
        if (displayStr.textContent != '0' && displayStr.textContent != '-0') {
            displayStr.textContent += String(val)
        } else {
            // if user inputted a negative toggle, there's a '-0', thus needing to make the next value inputted to be negative
            displayStr.textContent = (displayStr.textContent == '-0') ? '-' + String(val) : String(val)
        }
    } else { // there is an operator
        evalArr[2] += (String(val))
        displayStr.textContent = evalArr[2]
    }
}

// when an operator value is clicked, it does the following depending on whether 2nd number is there or not
function operatorButtonListener(oper) {
    if (!evalArr[2]) { // 2nd number does not exist
        evalArr[0] = displayStr.textContent
        evalArr[1] = oper
        // console.log(evalArr)
    } else { // 2nd number does exist, thus evaluate then append the new operator to evalArr 2nd element 
        evalArr[0] = String(eval(evalArr.join(' '))) // turns evalArr into string, evaluates it, then sets that to 1st element
        evalArr[1] = oper // reseting array
        evalArr[2] = '' // removing number
        displayStr.textContent = evalArr[0] // displays result
    }
}

// when the negative/positive button is clicked, it will either add or remove a (-) to the displayStr
// also if user operates, then chooses to toggle the number
function negativeListener() {
    if (displayStr.textContent[0] != '-') {
        displayStr.textContent = '-' + String(displayStr.textContent)
    } else {
        displayStr.textContent = displayStr.textContent.slice(1)
    }
    // if the second value is being stored, multiply by -1 then convert back to string
    if (evalArr[2]) {
        evalArr[2] = String(evalArr[2] * -1)
    }
}

// resets everything
function resetListener(){
    evalArr = [NaN, '', '']
    displayStr.textContent = '0'
}

// the undo function utilizes a dictionary along with functions
undoDictionary = {
    
}

function assignListeners() {
    lastAction = 'none'
    // assigning numericButtonListeners to the buttons with numbers
    document.querySelectorAll('.number-btn').forEach(element => {
        element.addEventListener("click", () => {
            numericButtonListener(element.textContent)
            console.log(evalArr)
        })
    });
    // assigning operatorButtonListeners to the buttons /w operators (/, x, -, +)
    document.querySelectorAll('.operator-btn').forEach(element => {
        element.addEventListener("click", () => {
            operatorButtonListener((element.textContent != 'x') ? element.textContent : '*')
            console.log(evalArr)
        })
    })

    // assigning negative toggle
    document.querySelector('.pos-neg-btn').addEventListener("click", negativeListener)

    // assigning clear button
    document.querySelector('.clear-btn').addEventListener("click", resetListener)
}

assignListeners()
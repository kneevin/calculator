// evalArr -> [ (1st number), (operator), (2nd number)]
evalArr = [NaN, '', '']

// displayStr -> value displayed at top of calculator
displayStr = document.querySelector('.display-value')

// when a numeric button is clicked, it appends that value to the display value
// also depends on whether there is an operator or not
function numericButtonListener(val) {
    if (!evalArr[1] || isNaN(evalArr[0])) {
        if (displayStr.textContent != '0') {
            displayStr.textContent += String(val)
        } else {
            displayStr.textContent = String(val)
        }
    }else{ // there is an operator
        evalArr[2] += (String(val))
        displayStr.textContent = evalArr[2]
    }
}

// when an operator value is clicked, it does the following depending on whether 2nd number is there or not
function operatorButtonListener(oper) {
    if(!evalArr[2]){ // 2nd number does not exist
        evalArr[0] = displayStr.textContent
        evalArr[1] = oper
        // console.log(evalArr)
    }else{ // 2nd number does exist, thus evaluate then append the new operator to evalArr 2nd element 
        evalArr[0] = String(eval(evalArr.join(''))) // turns evalArr into string, evaluates it, then sets that to 1st element
        evalArr[1] = oper // reseting array
        evalArr[2] = '' // removing number
        displayStr.textContent = evalArr[0] // displays result
    }
}

function assignListeners() {
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
}

assignListeners()
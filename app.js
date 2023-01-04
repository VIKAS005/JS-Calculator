const screenDisplay = document.querySelectorAll('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []


function calculate(button)
{
    const value = button.textContent
    if (value == "CLEAR")
{
    calculation = []
    screenDisplay.textContent = '.'
} elseif (value == "=") {
    console.log()
    screenDisplay.textContent = eval(accumulativecalculation)
} else {


    calculation.push(value)
    accumulativecalculation = calculation.join('')
    screenDisplay.textContent = accumulativecalculation
    
}  

}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
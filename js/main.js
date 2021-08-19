document.getElementById('c').addEventListener('click', function () {
    document.getElementById('display').value = '';
})
document.getElementById('b').addEventListener('click', function () {
    const displayElemnt = document.getElementById('display');
    const displayValue = displayElemnt.value;
    displayElemnt.value = displayElemnt.value.substr(0, displayValue.length - 1);
})
const numbers = document.getElementsByClassName('numbers');
for (const number of numbers) {
    number.addEventListener('click', function () {
        const displayElemnt = document.getElementById('display');
        displayElemnt.value += number.innerText;
    })
}
document.getElementById('equal').addEventListener('click', function () {
    const displayElemnt = document.getElementById('display');
    const displayValue = displayElemnt.value;
    const calculation = eval(displayValue)
    displayElemnt.value = calculation;
})
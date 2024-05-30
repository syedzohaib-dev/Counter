let counter = 0

function updateDisplay() {
    document.getElementById('counter').innerText = counter
}

function valDecrease() {
    let step = parseInt(document.getElementById('counter').value) || 1
    counter--
    updateDisplay()
}

function valReset() {
    counter = 0
    updateDisplay()
}
function valIncrease() {
    let step = parseInt(document.getElementById('counter').value) || 1
    counter++
    updateDisplay()
}



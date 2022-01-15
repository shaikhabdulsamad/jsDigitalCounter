let num = document.getElementById('num')

let input = document.getElementById('input')
let slash = document.getElementById('slash')
let countBtn = document.getElementById('countBtn')
let simpleCntr = document.getElementById('simpleCounter')
let counterTarget = document.getElementById('counterTarget')
let svTar = document.getElementById('saveTarget')
let stTar = document.getElementById('setTarget')
simpleCntr.style.display = 'none'
svTar.style.display = 'none'
stTar.style.display = 'none'

let counter = 0
let counterWithTargetOn = false


const reset = () => {
    counter = 0
    num.innerText = '00'
    countBtn.disabled = false
    countBtn.style.color = 'white'
}


const setTarget = () => {
    input.style.borderBottom = '2px solid black'
    input.disabled = false
}
const saveTarget = () => {
    input.disabled = true
    input.style.borderBottom = 'none'
    input.value < 10 ? input.value = `0${input.value}` : true

}

const counterWithTarget = () => {
    counterWithTargetOn = true
    input.style.display = 'block'
    slash.style.display = 'block'

    input.autofocus = true
    simpleCntr.style.display = 'inline-block'
    counterTarget.style.display = 'none'
    svTar.style.display = 'inline-block'
    stTar.style.display = 'inline-block'
}
const simpleCounter = () => {
    counterWithTargetOn = false
    input.style.display = 'none'
    slash.style.display = 'none'
    simpleCntr.style.display = 'none'
    counterTarget.style.display = 'block'
    svTar.style.display = 'none'
    stTar.style.display = 'none'
}

const count = () => {
    if (counterWithTargetOn === true) {
        if (input.disabled === true) {
            counter++
            counter < 10 ? num.innerText = `0${counter}` : num.innerText = `${counter}`

            if (counter == input.value) {

                countBtn.disabled = true
                countBtn.style.color = 'grey'
                alert('your target completed!')
            }

        }
        else { alert('Set and save your target first') }
    }
    else {
        counter++
        counter < 10 ? num.innerText = `0${counter}` : num.innerText = `${counter}`
    }
}


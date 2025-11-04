input.onButtonPressed(Button.A, function () {
    enecendido = !(enecendido)
})
let enecendido = false
basic.clearScreen()
enecendido = false
basic.forever(function () {
    if (enecendido == true) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})

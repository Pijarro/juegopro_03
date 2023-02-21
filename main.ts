function cambia_emoji () {
    icono = randint(0, 9)
    emojis[icono].showImage(0)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    let list = false
    if (list == false) {
        pulsado = true
    }
    if (numero_icono == 0 || numero_icono == 2) {
        basic.showString("A: has perdido")
        basic.pause(500)
    } else {
        if (Puntos_A > 0) {
            numero_icono += -1
        }
    }
})
function partida_nueva () {
    primero = false
    Puntos_A = 0
    Puntos_B = 0
    pulsado = false
}
input.onButtonPressed(Button.AB, function () {
    partida_nueva()
})
input.onButtonPressed(Button.B, function () {
    if (pulsado == false) {
        pulsado = true
        if (numero_icono == 0 || numero_icono == 2) {
            basic.showString("A: has perdido")
            basic.pause(500)
        } else {
            if (Puntos_A > 0) {
                Puntos_A += -1
            }
        }
    }
})
let Puntos_B = 0
let primero = false
let Puntos_A = 0
let numero_icono = 0
let pulsado = false
let icono = 0
let emojis: Image[] = []
emojis = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.No),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Scissors),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Pitchfork),
images.iconImage(IconNames.Surprised),
images.iconImage(IconNames.TShirt)
]
partida_nueva()
basic.forever(function () {
    let juego_detenido = 0
    if (!(juego_detenido)) {
        cambia_emoji()
    }
})
basic.forever(function () {
    cambia_emoji()
})

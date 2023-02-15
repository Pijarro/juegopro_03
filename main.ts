function cambia_emoji () {
    icono = randint(0, 9)
    emojis[icono].showImage(0)
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    if (icono == 3) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let icono = 0
let emojis: Image[] = []
emojis = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.No),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.TShirt),
images.iconImage(IconNames.Scissors),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Pitchfork)
]
basic.forever(function () {
    cambia_emoji()
})

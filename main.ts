controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    control.runProgram(".menu")
})
let s2: Sprite = null
let s1: Sprite = null
let dots: Sprite[] = []
let mySprite: Sprite = null
for (let index = 0; index < 6; index++) {
    mySprite = sprites.create(img`
        . 
        `, SpriteKind.Player)
    mySprite.setVelocity(randint(22, 44), randint(11, 33))
    mySprite.setBounceOnWall(true)
}
let picture = image.create(scene.screenWidth(), scene.screenHeight())
color.setPalette(
color.Adafruit
)
game.onUpdate(function () {
    picture.fill(0)
    dots = sprites.allOfKind(SpriteKind.Player)
    for (let index2 = 0; index2 <= dots.length - 1; index2++) {
        s1 = dots[index2]
        s2 = dots[(index2 + 1) % dots.length]
        picture.drawLine(s1.x, s1.y, s2.x, s2.y, (index2 + 1) * 2)
    }
    scene.setBackgroundImage(picture)
})
game.onUpdateInterval(2000, function () {
    color.RotatePalette.startScreenEffect(2000)
})
game.onUpdateInterval(2000, function () {
    sprites.allOfKind(SpriteKind.Player)._pickRandom().x += randint(-1, 1)
    sprites.allOfKind(SpriteKind.Player)._pickRandom().x += randint(-1, 1)
})

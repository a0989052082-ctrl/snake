input.onGesture(Gesture.TiltLeft, function () {
    Snake.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenDown, function () {
    Snake.change(LedSpriteProperty.Y, 1)
})
function sp () {
    cake.set(LedSpriteProperty.Brightness, 0.1)
}
input.onGesture(Gesture.ScreenUp, function () {
    Snake.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Snake.change(LedSpriteProperty.X, 1)
})
function l (sprite: game.LedSprite) {
    Snake.set(LedSpriteProperty.Brightness, 100)
}
let Snake: game.LedSprite = null
let cake: game.LedSprite = null
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 1)
cake = game.createSprite(randint(0, 4), randint(0, 4))
Snake = game.createSprite(2, 2)
game.setLife(100)
Snake.set(LedSpriteProperty.Blink, 0)
Snake.set(LedSpriteProperty.Blink, 0)
music.setVolume(255)
record.startRecording(record.BlockingState.Blocking)
record.playAudio(record.BlockingState.Blocking)
basic.forever(function () {
    if (cake.isDeleted()) {
        cake = game.createSprite(randint(1, 3), randint(1, 3))
    }
    if (game.score() == 10) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Happy)
        basic.showString("restarting.")
        basic.pause(5000)
        game.setScore(0)
    }
    if (Snake.isTouching(cake)) {
        game.addScore(1)
        cake.delete()
        music.play(music.createSoundExpression(
        WaveShape.Square,
        1600,
        1,
        255,
        2550,
        300,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 C A C G D A C ", 120), music.PlaybackMode.UntilDone)
})

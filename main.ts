basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() > -10 && input.temperature() < 0) {
        music.playTone(196, music.beat(BeatFraction.Whole))
    } else if (input.temperature() > 0 && input.temperature() < 10) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (input.temperature() > 10 && input.temperature() < 20) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (input.temperature() > 20 && input.temperature() < 30) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})

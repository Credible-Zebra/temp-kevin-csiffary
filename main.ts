basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() > -10 && input.temperature() < 0) {
        music.ringTone(262)
    } else if (input.temperature() > 0 && input.temperature() < 10) {
        music.ringTone(392)
    } else if (input.temperature() > 10 && input.temperature() < 20) {
        music.ringTone(494)
    } else if (input.temperature() > 20 && input.temperature() < 30) {
        music.ringTone(988)
    }
})

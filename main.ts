radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 35)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 35)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . # . .
                # # # # #
                . . # . #
                . # . # .
                . # . # .
                `)
            basic.showLeds(`
                . . # . #
                # # # # #
                # . # . .
                . # . # .
                . # . # .
                `)
        }
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Skull)
            music.playMelody("C5 D C5 D C5 D C5 D ", 120)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendNumber(3)
})
radio.setGroup(156)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)

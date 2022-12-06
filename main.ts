input.onSound(DetectedSound.Loud, function () {
    Kitronik_Robotics_Board.allOff()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 30)
        basic.pause(5000)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.pause(100)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 30)
        basic.pause(2500)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.pause(100)
    }
})
led.toggle(2, 2)
input.setSoundThreshold(SoundThreshold.Loud, 40)
basic.forever(function () {
	
})

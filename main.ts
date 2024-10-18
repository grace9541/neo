let 밝기 = 50
let strip = neopixel.create(DigitalPin.P8, 18, NeoPixelMode.RGB)
strip.setBrightness(밝기)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(1000)
})

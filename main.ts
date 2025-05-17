basic.forever(function () {
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P0),
    1,
    true
    )
})

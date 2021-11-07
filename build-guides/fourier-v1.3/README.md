# Fourier v1.3

!> This page is not complete.

## Parts List

Here's a list of parts needed for the build:

* 1 x [Fourier v1.3 Keyboard Kit](https://keebd.com/)

  Kit Includes:
  * 2 x Fourier PCBs (Left/Right)
  * 2 x Fourier Switch Plates (Left/Right)
  * 2 x Reset Buttons
  * 2 x 4.7kΩ Resistors
  * 2 x TRRS Jacks
  * 1 x TRRS Cable
  * 49 x 1N4148 Diodes - through hole \(included in kit\) and [SMD diodes](https://keebd.com/products/1n4148-diodes-pack-of-10?variant=40957931126936) supported
  * 14 x M2 6mm Screws
  * 14 x M2 4mm Screws
  * 14 x M2 10mm Standoffs

Not included in the kit but required to complete:
* 2 x [Arduino Pro Micros](https://keebd.com/products/pro-micro-controller-atmega32u4)
* 1 x Micro USB Cable
* [PCB-mount MX stabilizers](https://keebd.com/products/cherry-screw-in-stabilizers)
* [MX or Alps compatible keyswitches](https://keebd.com/collections/switches)
* [WS2812B Compatible RGB LED strip](https://keebd.com/products/ws2812b-rgb-led-strip) \(optional, for underglow\)

## Build Steps

1. Prepare components
2. Solder components
    * Solder Diodes
    * Solder 4.7kΩ Resistors \(optional\)
    * Solder TRRS Jacks
    * Solder Reset Button
    * Solder Pro Micro Header Pins
3. Solder Switches
4. Flash Pro Micro
5. Solder Pro Micro
6. Solder RGB strip \(optional\)

## Prepare Components

![](./fourier-v1-3-pcb-left.png ':size=350px')
![](./fourier-v1-3-pcb-right.png ':size=350px')

Grab your PCBs. Pictured bottoms up -- left is on the left, right is on the right.

![](./diode-through-hole-1.jpg ':size=700px')


If you're using through hole diodes, bend 'em up. Here, I'm just bending it around my finger

![](./diode-through-hole-2.jpg ':size=700px')


Another way to do it, resistors shown here

![](./diode-through-hole-3.jpg ':size=700px')


Strip of diodes bent

![](./diode-through-hole-4.jpg ':size=700px')


Ripping off the paper holding all the resistors together. Grip the diodes tightly so they don't bend as you're ripping the paper off.

![](./diode-through-hole-5.jpg ':size=700px')


All separated from the paper

## Solder Components

![](./solder-through-hole-diodes.jpg ':size=350px')
![](./solder-smd-diodes-2.jpg ':size=350px')

Install either the through hole or SMD diodes (example shown above). SMD diodes will be used for the following steps.

> The orientation of all the diodes are the same, they are vertically oriented, with the band/line on the diodes facing towards the bottom, square pad.

SMD diodes have a white band and through-hole diodes will have a black band.

![](./solder-smd-diodes-1.jpg ':size=700px')

Add a small amount of solder to one of the diode pads first.

![](./solder-smd-diodes-2.jpg ':size=700px')

Hold the diode with tweezers and melt the solder on the pad before placing the diode into position. Let the solder cool to hold the diode in place.
Add some solder to the other side of the diode to ensure a good connection on both ends.

![](./solder-resistors.jpg ':size=700px')

Install the I2C resistors (optional).

![](./solder-trrs-jack.jpg ':size=700px')

Install the TRRS jack.

![](./solder-reset-switch.jpg ':size=700px')

Install the reset switch and controller header pins.

![](./solder-right-half.jpg ':size=700px')

Repeat the same process with the diodes, TRRS jack, reset switch and controller header pins with the right half. Note that there's no I2C resistor slots on this side, as they're only needed on one half.

![](./install-stabilizers.jpg ':size=700px')

Add stabilizers to the keys you want to stabilize.

![](./install-switches.jpg ':size=700px')

Time to add the switches. Put a few switches into the corners of the switch plate and then attach the switches to the PCB. Make sure the switches are pushed all the way down onto the PCB.

Due to the multiple layout options, it may be helpful to put keycaps on the switches to make sure everything is in the correct slots.

![](./left-switches.jpg ':size=700px')

All the switches installed and soldered in.

![](./left-controller.jpg ':size=700px')

Time to install the Pro Micro now that the switches have been soldered in.

!> Flash your Pro Micro before installing it on the board to ensure it works as expected and the controller connects to the PCB face down (so you cannot see the controller components)

![](./right-complete.jpg ':size=700px')

Repeat the process of stabilizer, switch, and Pro Micro installation on the right PCB.

![](./right-controller.jpg ':size=700px')

Once again, the component side of the Pro Micro will be hidden from you.

![](./install-led-strip-left.jpg ':size=700px')

Optional, add the RGB strip to the backside of the PCB and solder to the following points:

Left Side
- RGB breakout goes to Din on strip
- VCC breakout goes to +5V on strip
- GND breakout goes to GND on strip
- Extra Data goes to Do/Dout on strip

![](./install-led-strip-right.jpg ':size=700px')

Right Side
- VCC breakout goes to +5V on strip
- GND breakout goes to GND on strip
- Extra Data goes to Din on strip
- RGB breakout remains empty for now

![](./complete.jpg ':size=700px')

Complete with screws, standoffs, and bottom plates.
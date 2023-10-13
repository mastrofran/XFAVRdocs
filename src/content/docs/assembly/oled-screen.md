---
title: Connecting the OLED Screen
description: Docs for connecting a OLED screen to the XFAVR device
---

## 1. Positioning the OLED Screen

Place the OLED screen on the XFAVR lid with the OLED contacts going through the appropriate hole on the lid:
![OLED screen on XFAVR lid](/assets/assembly/oled-screen/IMG_1255.HEIC.png)

## 2. Connecting the OLED Screen

The OLED screen should be connected to the microcontroller using female-to-male jumper wires and matching the labeled OLED pins to the respective microcontroller pins. "GND" from the OLED screen should be connected to ground, "VCC" connected to 3.3V line on the breadboard, and "SCL" and "SDA" ports connected to the respective pins on the microcontroller. The configuration is outlined in the table below:

| From OLED Screen    | To Microcontroller/Breadboard Pin |
|-----------|-------|
| GRND | Ground line on main breadboard |
| VCC | 3.3V line on main breadboard |
| SCL | SCL pin |
| SDA | SDA pin |

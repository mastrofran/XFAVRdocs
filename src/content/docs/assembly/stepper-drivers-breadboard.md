---
title: Stepper Motor Drivers and Main Breadboard
description: Instructions for installing the main breadboard and the stepper motor drivers
---

## 1. Adding Jumper Wires to Drivers
- Using 10 female-to-male jumper wires per driver, connect the female heads to the drivers. An example of proper connection is shown below.
![Jumper wires on driver](/assets/assembly/drivers-breadboard/IMG_1144.HEIC.png)

## 2. Positioning the Drivers
- Connect both the vial rotator and valve rotator drivers to the microcontroller case by positioning them on the provided pins on the case.
- The **vial rotator** driver is positioned in the bottom left of the case, wherease the **valve rotator** is positioned in the top left of the case.
- Ensure that the drivers are aligned such that the pins labeled "A", "B", "C", and "D" are facing the left wall of the case.
- For the **vial rotator** driver, feed the jumper wires connecting to pins labeled "A", "B", "C", and "D" through the rectangular opening on the left side of the case.

## 3. Positioning the Main Breadboard
- Place the main breadboard in the space between the two stepper motor drivers.
- Using 3 male-to-male jumper cables, connect the 5V, 3.3V, and ground lines from the microcontroller to the breadboard.

## 4. Wiring Stepper Drivers to Breadboard
- On both drivers, connect the male head of the jumper wire located on the "+" label of the driver to the 5V line you created on the breadboard.
- On both drivers, connect the male head of the jumper wire located on the "-" label of the driver to the ground line you created on the breadboard.

## Read Before Proceeding
- Successful configuration should look like below. Please ensure that your setup looks similar to the example below before proceeding to the next step.

![Breadboard](/assets/assembly/drivers-breadboard/BreadboardLogic.jpg)


| Wire Color | From   | To |
|-----------|-----------|-------|
| White | "+" of **Valve Rotator** Driver | 5V Line on Breadboard |
| Black | "-" of **Valve Rotator** Driver | Ground Line on Breadboard |
| Orange-Brown | "+" of **Vial Rotator** Driver | 5V Line on Breadboard |
| Red | "-" of **Vial Rotator** Driver | Ground Line on Breadboard |

---
title: Quick Start Guide
description: Get the XFAVR device up and running quickly
---

## Starting the XFAVR device
- To start the device, connect the USB-A to USB-B cable to the microcontroller. The USB-B head should plug right into the microcontroller and the USB-A head can plug into the USB Wall charger. The device should automatically power on once plugged in.

## Boot Sequence
- Upon starting the XFAVR device, you will be greeted with a 'Welcome' screen.
![Welcome screen](/assets/operation/quick-start/IMG_1263.HEIC.png)

- Immediately after the welcome screen is displayed, the screen will be awaiting input.
![Awaiting input](/assets/operation/quick-start/IMG_1556.jpg)

## XFAVR Run Settings
- **IMPORTANT:** The XFAVR device is a time-based device. The fundamental method of operation relies on an input measured in seconds that corresponds to the length of time it takes for the liquid coming off of the chromatography column to fill roughly ~90% of a vial. When this time is reached, the valve rotator will close the valve, and the vial rotator will then move the pivot arm to the next vial that is ready to be filled. Once the pivot arm has reached the next vial, the valve rotator will move the column valve to the open position, and the timer restarts. This sequential behavior of filling a collection vial, closing the column valve, rotating the pivot arm, and opening the column valve will continue until the last vial has been completely filled. After all vials are filled, the XFAVR device will stop operation and wait for the user to collect all the vials as necessary. To restart the XFAVR device, just press the reset button.

- Therefore, the "Awaiting Input..." signal is waiting for a time input in seconds that it receives from the user via the keypad. **BEFORE TYPING IN A VALUE ON THE KEYPAD, IT IS IMPORTANT TO KNOW HOW LONG IT WILL TAKE TO FILL UP ON VIAL**. Therefore it is recommended that before using the XFAVR device, you manually place a one vial under the chromatography column and time how long it will take to fill up the vial ~90% of the way. The length of time it takes to fill the vial depends on the type and volume of solvents that you're using, as well as what chromatographic medium you're using. **CALCULATION OF VIAL FILL TIME MUST BE DONE EACH TIME BEFORE YOU RUN THE XFAVR DEVICE**.

## Using the Keypad for Input
- To input the time in seconds for each vial to be filled via the keypad, press the numbers on the keypad as you would if you were using a microwave keypad. For example, if you wanted to run the microwave for 60 seconds, you would push the "6" and then the "0".
- When you finished your input, you must press the "#" button. This lets the XFAVR device know that the user has finished entering the time in seconds for vial filling.
- **IMPORTANT**: If you happen to mess up the input, you can clear the input and start over by pressing the * button. For example, if the time to fill each vial is 60 seconds, and I accidentally push "6" and "2" (62 seconds), I can push the * button and input the correct value ("6" and then "0" for 60 seconds).
- To start the device, press the "A" button on the keypad.

## Screen Statistics and Information
- During operation, the screen will let the user know some important information as the automatic chromatography is ongoing. The information displayed is as follows:

| Setting   | Meaning |
|-----------|-------|
| Seconds/Vial | Duration (s) the XFAVR device spends on each vial |
| Vial Runtime (s) | How long (s) the device has been filling the current vial for |
| Vial Number | The vial number that the XFAVR device is currently filling |
| Time Remain (m) | Estimated total time remaining (in minutes) to fill the remaining vials |

- An example of the statistics shown on the screen is below:
![XFAVR screen statistics](/assets/operation/quick-start/IMG_1268.HEIC.png)

## Restarting the XFAVR Device
- If you need to restart the XFAVR device for any reason, including to continue to run the chromatography after the previous operation has fully completed, you can press the reset button.
- Pressing the reset button will restart the XFAVR device and allow you to retype the XFAVR settings in when the screen reads "Awaiting Input..."

## Shutdown
- To shutdown the XFAVR device, you must physically unplug the wall charger from the wall outlet.
- It is highly recommended to keep the XFAVR device unplugged unless the device is in operation.
- We do not accept any responsibilities pertaining to circuit shorting, injury, or broken components when the XFAVR is in operation or left in the "off" state.
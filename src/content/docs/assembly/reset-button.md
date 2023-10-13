---
title: Connecting a Reset Button
description: Docs for connecting a reset button to the XFAVR device
---

## Notes
- Connecting a reset button is optional but highly recommended. Sometimes you need to restart your vial collection process, or perhaps you typed in the wrong value for the duration between vial rotations and need to restart the operation. A reset button will allow you to do this, quite literally with a push of a button 😊.

## Connecting the button
- Personally, we like using breadboards to integrate my components. We placed the button on a breadboard, and then connected the left side of the button to a "GND" pin on the microcontroller. The right side of the button was connected to the "RESET" pin of the microcontroller. Pushing the button will restart the microcontroller and give the user a chance to re-input settings for a given operation.

![Button on breadboard](/assets/assembly/button/IMG_1553.jpg)
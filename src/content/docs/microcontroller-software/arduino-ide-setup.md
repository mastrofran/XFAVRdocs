---
title: Arduino IDE Setup
description: General information for setting up the Arduino IDE
---

## General Notes
- In this tutorial we will be running the **Arduino IDE (v2.2.1)** program on a **PC with Linux Mint as the OS**. The microcontroller board we are using in this tutorial is the [ELEGOO MEGA R3](https://www.amazon.com/ELEGOO-ATmega2560-ATMEGA16U2-Arduino-Compliant/dp/B01H4ZDYCE/ref=sr_1_3?keywords=elegoo%2Bmega&sr=8-3&th=1).
- **These instructions will be largely the same regardless of your OS (Windows, Mac, Linux) and microcontroller board, so no need to worry. However, the location of various buttons and components in the Arduino IDE may change in future versions.** We will try our best to keep this page updated as new program versions roll out!
    - If your OS is a linux-based distribution, you will need to add your user to the dialout group in order for your PC to communicate with the microcontroller board. 
        - Upon first boot of the Arduino IDE, you may receive a pop-up asking you to add your user to the dialout group. If you receive this pop-up, click the **"Add"** button.
        - If you don't receive this pop-up but are having trouble with the Arduino IDE recognizing your microcontroller board, you can add your user to the dialup group manually. To do so, type in the following commands in your terminal:
        ```
        sudo usermod -a -G tty [username]
        sudo usermod -a -G dialout [username]
        ```
        Replace [username] with your PC username (i.e. francesco or xander). Then logout of your PC and log back in. The Arduino IDE should now recognize your board following the below instructions.

## Steps:

### Launch Arduino IDE
1. Launch the Arduino IDE program. If you have not yet installed this software, please take a look at the <a href="/getting-started/general-info/#arduino-program">General Information</a> section for a link to download the software.
![Arduino IDE](/assets/microcontroller-software/Step1.png)

### Select Correct Microcontroller
1. Connect the microcontroller board to your PC using a [USB-A to USB-B](https://www.amazon.com/gp/product/B00NH11KIK/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&th=1) cable.

2. The Arduino IDE should automatically detect the microcontroller in the microcontroller dropdown menu. Select the appropriate microcontroller from the menu. In our case, the appropriate Arduino-equivalent board is the 'Arduino Mega or Mega 2560' option. The appropriate selection will be dependent on the board that you have.
![Arduino IDE Microcontroller Boards](/assets/microcontroller-software/Step2.png)

    ⚠️ If the Arduino IDE does not automatically detect your board or detects the wrong board, you can manually select your board by clicking the dropdown, and selecting 'Select other board in port...'. From this menu, you can manually select the correct board and serial port. 
![Arduino IDE Microcontroller Boards](/assets/microcontroller-software/Step2b.png)

### Install Required Libraries
1. **Adafruit GFX Library**: Navigate to 'Tools' -> 'Manage Libraries...' and search for 'gfx'. Locate the Adafruit GFX Library (v1.11.7 at the time of writing) and click install. It may prompt that not all dependencies are installed. If so, install the missing dependencies by clicking 'Install All'.
![Install Adafruit GFX Library](/assets/microcontroller-software/Step3.png)

2. **Adafruit SSD1306**: Go back to 'Manage Libraries...' and search for '1306'. Locate the Adafruit SSD1306 library (v2.5.7 at the time of writing) and click install. It may prompt that not all dependencies are installed. If so, install the missing dependencies by clicking 'Install All'.
![Install Adafruit SSD1306](/assets/microcontroller-software/Step4.png)

3. **Keypad**: Go back to 'Manage Libraries...' and search for 'keypad'. Locate the Keypad library (v3.1.1 at the time of writing) by Mark Stanley and Alexander Brewig and click install. It may prompt that not all dependencies are installed. If so, install the missing dependencies by clicking 'Install All'.
![Install Keypad](/assets/microcontroller-software/Step5.png)


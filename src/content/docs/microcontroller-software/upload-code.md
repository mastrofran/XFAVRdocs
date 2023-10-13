---
title: Upload XFAVR Program to Microcontroller
description: Information on how to upload the XFAVR program to the microcontroller board
---

## Steps:

### Launch Arduino IDE
1. Launch the Arduino IDE program.
![Arduino IDE](/assets/microcontroller-software/Step1.png)

### Open XFAVR Program File
1. Click File > Open and navigate to the XFAVR_Code.ino file and click "Open". This file should be located in the [Code/XFAVR_Code](https://github.com/mastrofran/XFAVR-Auto-Column-Chromatography/tree/main/Code/XFAVR_Code) subfolder of the [XFAVR GitHub Repository](https://github.com/mastrofran/XFAVR-Auto-Column-Chromatography). If you have not cloned this repository yet, please visit the [General Information](/getting-started/general-info/#project-files) section to learn how to clone the repository. Once loaded the Arduino IDE should look similar to below:
![XFAVR Code in Arduino IDE](/assets/microcontroller-software/Step6.png)

### Verify and Upload Code to Microcontroller
1. Click the 'Verify' button in the top-left corner to verify that the code was uploaded correctly and does not contain any errors. If the code compiles, you will see a message in the bottom-right corner that reads "Done Compiling."
![Verify XFAVR Code](/assets/microcontroller-software/Step7a.png)

2. Plug in your microcontroller to your PC, ensure that it is detected by the Arduino IDE, and click the 'Upload' button to upload the XFAVR_Code.ino file to the microcontroller board.
![Upload XFAVR Code](/assets/microcontroller-software/Step7b.png)

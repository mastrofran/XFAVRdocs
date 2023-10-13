---
title: Stepper Motor Adapter
description: Instructions for 3D printing the stepper motor adapter for the XFAVR device
---

## Notes
- ⚠️ **IMPORTANT**: The type of filament used for printing will be dependent on the specific applications you have in mind for the XFAVR device. 
    - If you work in a chemical lab and typically use organic solvents such as DCM, ethyl acetate, chloroform, methanol, etc, then PLA will not serve a sufficient filament for printing as PLA is slightly soluble in most organic solvents.
    - We recommend using a PVA (polyvinyl alcohol) filament for 3D printing if the XFAVR device will be in close contact with these organic solvents. Keep in mind that the PVA filament is water-soluble, so if you will be working with aqeuous solvents (such as in a biology lab), then please use PLA as a filament.
    - Note: We recognize that PVA is considerably more expensive than PLA. If you are working in a chemical lab with organic solvents that may come in contact with the XFAVR device during operation and strongly prefer not using PVA, PLA can be used if it is covered with a chemically resistant material. We had some success with wrapping the printed components using a clear garbage bag ([such as this one](https://www.amazon.com/Gallon-Small-Bags-Magesh-Garbage/dp/B0B8TD6KXB/ref=sr_1_8?keywords=clear%2Btrash%2Bbag&sr=8-8&th=1)), cutting the excess garbage bag plastic using scissors, and tying the ends with a small ziptie.

**TLDR (Too Long, Didn't Read): If using organic solvents, it is recommended to print with PVA filament. If using aqueous solvents, it is recommended to print with PLA filament.**

## Files
If you have not done so already, please clone the XFAVR Github repository using the command below:
```
git clone https://github.com/mastrofran/XFAVR-Auto-Column-Chromatography.git
```

The files to be printed are located in the ['3D Printing Files'](https://github.com/mastrofran/XFAVR-Auto-Column-Chromatography/tree/main/3D%20Printing%20Files) subfolder.

**The file for the stepper motor adapter component is the 'SingleStepperMotorAdapter.stl' file.**

For printing PLA, the recommended printing temperature is ~200 &deg;C. For PVA, the recommended printing temperature is ~220 &deg;C. **Please follow the recommended printing temperature for your respective PLA or PVA filament**. The recommended 3D printer bed temperature is 60 &deg;C and 50 &deg;C for PLA and PVA, respectively.

## Print Settings
| Setting   | Value |
|-----------|-------|
| Infill Density | 100% |
| Infill Pattern | Lines |
| Shell Thickness | 0.8 mm (Walls), 0.8 mm (Top & Bottom) |
| Layer Height | 0.20 mm |
| Support | None |
| Adhesion | Brim (or Skirt) |

Example of Cura program using the correct settings with PLA as the chosen filament:
![Cura pivot arm](/assets/3d-printing/example-imgs/StepperMotorAdapter.png)

⚠️ **The same settings would be used if PVA is your filament of choice.**

After confirming the correct settings, click on the blue 'Slice' button in the bottom right of Cura and save the output to a removable microSD card/USB thumbdrive depending on the input memory device that your printer utilizes and begin printing the structures on your 3D printer.
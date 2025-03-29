---
layout: post
title: "From Idea to Reality: Building a Custom RP2040 Microcontroller Board - Part 3: Programming the Board"
categories: rp2040
---

### Diving into the C SDK: The Heart of RP2040 Programming

Now that I've designed and assembled my custom RP2040 microcontroller board, it's time to bring it to life with code. The cornerstone of RP2040 development is the Raspberry Pi Pico SDK (Software Development Kit). This comprehensive SDK, provided and meticulously maintained by Raspberry Pi, equips someone with all the necessary tools to craft robust C and C++ applications for a rp2 microcontroller.

To tailor the SDK for my custom board, a crucial step is creating a custom board header file. This involves forking the official `pico-sdk` repository on GitHub and adding an unique header. This file acts as a blueprint, defining the specific configuration of my board. It details:

* **GPIO Pin Assignments:** Specifies which GPIO pins are allocated for various interfaces (e.g., UART, SPI, I2C). This ensures the software interacts correctly with the hardware components connected to those pins.
* **Flash Memory Size:** Defines the total flash memory capacity of the board, allowing the compiler to optimize code and data storage.
* **Crystal Oscillator Details:** Specifies the frequency and characteristics of the crystal oscillator, which provides the timing reference for the microcontroller.

Creating a custom header file ensures that the compiler understands the unique hardware configuration of the board, preventing conflicts and ensuring optimal performance.

### Crafting An Application: C Code and CMake Integration

Developing a program for the RP2040 involves more than just writing C code. I also need to create a CMake file, which acts as a build configuration script. This file instructs the compiler on:

* **Source File Inclusion:** Specifies which C/C++ files should be included in the compilation process.
* **Library Dependencies:** Lists the required libraries from the SDK, such as those for GPIO control, UART communication, or other peripherals.
* **Build Settings:** Defines compiler flags and other build parameters.

CMake simplifies the build process, especially for larger projects with multiple source files and dependencies. If you're new to CMake, numerous online tutorials and resources can guide you through the process.

### Flashing The Board: From Binary to Reality

Once the code is compiled into a binary file, flash it onto the RP2040's flash memory. There are several methods to achieve this:

* **USB Drag-and-Drop:** This beginner-friendly method involves placing the compiled binary file onto the RP2040's mass storage device, which appears when the board is connected in bootloader mode.
* **Picotool:** A command-line utility that provides more advanced flashing capabilities. Picotool offers greater control and flexibility, allowing us to flash the board directly from the command line.

Initially, I opted for the simplicity of USB drag-and-drop. However, as I became more comfortable with the development process, I transitioned to using Picotool. Its efficiency and command-line interface proved to be a more streamlined approach for my workflow.

Using picotool allows for automation of the flashing process, and helps when using a continious integration or continious deployment pipeline.

By mastering the C SDK, CMake, and the flashing process, we can unlock the full potential of our custom RP2040 microcontroller board and bring our innovative ideas to life.

---
layout: post
title: "From Idea to Reality: Building a Custom RP2040 Microcontroller Board - Part 1: Conception and Initial Attempt"
categories: rp2040
---

### Motivation

Driven by a desire to deepen my understanding of embedded systems post-graduation with a Bachelor of Engineering in Electrical Engineering and Information Technology, I embarked on a personal project. Notably, PCB design was a skill I lacked, and I believed hands-on creation was the most effective learning method.

### Microcontroller Selection

My experience with microcontrollers included Arduino and SparkFun boards from university courses. The Raspberry Pi Pico's announcement piqued my interest, especially since I already owned a Raspberry Pi 3B. The comprehensive datasheet, widespread availability, and the option to purchase the RP2040 chip separately solidified my choice. The Raspberry Pi Hardware Design Guide provided the necessary resources.

### Software Selection

Due to my Chromebook's limitations, I required cloud-based software. After researching, I discovered flux.ai, a cloud-native AI-powered schematic and PCB design tool.

I quickly designed the `Alyx Base V1` adhering to the design guide but incorporating a USB-C port.

### Manufacturing Choice

I selected JLCPCB for manufacturing, a decision I haven't regretted. Opting for self-assembly, I ordered the PCBs from JLCPCB and components from DigiKey.

### Execution and Setback

Upon receiving the PCBs and components, I was eager to begin soldering. However, I encountered significant challenges. The passive components, sized 0402 (1 mm x 0.5 mm), were too small for my skill level and available equipment. Furthermore, the USB-C footprint was incompatible with the chosen component. The `Alyx Base V1` was a failure, necessitating a complete redesign. Undeterred, I initiated the `Alyx Base V2` project.

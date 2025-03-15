---
layout: post
title: "From Idea to Reality - How I created my custom RP2040 Microcontroller Board - Part 1: Idea and first try"
categories: rp2040
---

### Motivation
After I finished University and got my Bachelor of Engineering in Electrical Engineering and Information Technology I wanted to dive deeper into Embedded Systems and its development. 

One thing I didn't learn in university was how to create a pcb, I knew I had to change that and decided the best way to learn is through creation. 

### Choice of Microcontroller
I already used a couple of different Microcontroller Development Boards during university courses, like an Arduino Board and a Sparkfun Board. Then I heard the announcement of the Raspberry Pi Pico and since I already owned a Raspberry Pi 3B at that time I looked into it further. It became better and better, an extensive datasheet, easily available and the best part the microcontroller could be ordered separately at many places. After finding the Hardware Design Guide by Raspberry Pi the search was finished.

### Choice of Software
Since I own a Chromebook I needed Software compatible with it. Natively installation was out if the picture - a cloud only solution was needed. After searching the Internet a newcomer was found - flux.ai, a cloud only AI schematic and pcb design tool.

I began work on the `Alyx Base V1` and finished quickly. I followed the design guide but added a USB C Port instead.

### Choice of Production
The choice fell onto JLCPCB, I do not know why but I don't regret that choice at all. I decided that I would be capable of soldering the board myself and ordered the pcb from JLCPCB and the parts from DigiKey.

### Realisation
I got all the parts and the pcb in the mail and was exited to solder it all together but then the harsh reality hit like a truck. The passive components like resostors and capacitors were on size 0402 which basically means they are 1 mm by 0.5 mm in size and way out of my league - especially without the proper soldering equipment. I tried and I failed but also found out that the USB C Footprint didn't match the component. All in all it was a disaster and I had to rethink everything but I didn't give up. A new project stood: the `Alyx Base V2`.

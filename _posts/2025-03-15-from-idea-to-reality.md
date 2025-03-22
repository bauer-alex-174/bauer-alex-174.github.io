---
layout: post
title: "From Idea to Reality: Building a Custom RP2040 Microcontroller Board - Part 1: Conception and Initial Attempt"
categories: rp2040
---

### The Spark of Curiosity: Diving Deeper into Embedded Systems

Fresh from earning my Bachelor of Engineering in Electrical Engineering and Information Technology, I felt a strong desire to solidify my theoretical knowledge with practical experience. While my academic journey had provided a solid foundation, I recognized a gap in my skillset: PCB design. This wasn't just about filling a resume bullet point; it was about truly understanding the intricate dance between hardware and software. I firmly believe that hands-on creation is the most effective way to learn, and I was eager to put that belief to the test.

This personal project wasn't just about building a board; it was about building my understanding of embedded systems from the ground up. I wanted to move beyond the pre-made development boards and delve into the intricacies of custom hardware design.

### Choosing the RP2040: A Microcontroller That Captured My Imagination

My previous microcontroller experience revolved around Arduino and SparkFun boards, staples of university courses. However, the announcement of the Raspberry Pi Pico and its RP2040 microcontroller sparked a new wave of interest. As a Raspberry Pi 3B owner, I was already familiar with the Raspberry Pi ecosystem. The RP2040's detailed datasheet, its wide availability, and the option to purchase the chip separately offered a level of flexibility and control that resonated with me. The Raspberry Pi Hardware Design Guide served as an invaluable resource, providing the necessary technical information to guide my project.

The RP2040's dual-core architecture and programmable I/O capabilities presented an exciting opportunity to explore more advanced embedded system concepts. I saw this project as a chance to push my boundaries and learn by doing.

### Navigating the Software Landscape: Embracing Cloud-Based Design

My choice of software was heavily influenced by the limitations of my Chromebook. I needed a robust design tool that could operate seamlessly in a cloud-based environment. After extensive research, I discovered flux.ai, a cloud-native, AI-powered schematic and PCB design platform. Its intuitive interface and powerful features made it an ideal choice for my project.

With flux.ai, I quickly set about designing the `Alyx Base V1`. I meticulously followed the Raspberry Pi Hardware Design Guide, ensuring that my design adhered to the recommended specifications. However, I decided to add a touch of modernity by incorporating a USB-C port, reflecting my desire to stay current with emerging technologies.

### Manufacturing and the Reality Check: JLCPCB and the 0402 Challenge

For manufacturing, I chose JLCPCB, a decision I haven't regretted. Their user-friendly platform, competitive pricing, and reliable service made them an ideal partner for my project. I opted for self-assembly, eager to experience the entire process from design to fabrication. I ordered the PCBs from JLCPCB and sourced the components from DigiKey, ensuring that I had everything I needed to bring my design to life.

However, the reality of soldering 0402 components quickly set in. These tiny passive components, measuring a mere 1 mm x 0.5 mm, proved to be far more challenging to handle than I had anticipated. My skill level and available equipment were simply not up to the task. Furthermore, I discovered that the USB-C footprint I had chosen was incompatible with the selected component, a critical oversight that further compounded my difficulties.

The `Alyx Base V1` ultimately proved to be a learning experience in failure. Despite my best efforts, the board was not functional. Undeterred, I recognized this setback as an opportunity to learn and improve. I immediately began planning the `Alyx Base V2`, determined to apply the lessons learned from my initial attempt and create a successful custom RP2040 board. This first step, though fraught with challenges, was a crucial part of my journey into the world of custom hardware design.

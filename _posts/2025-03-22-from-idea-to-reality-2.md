---
layout: post
title: "From Idea to Reality: Building a Custom RP2040 Microcontroller Board - Part 2: First Working Prototype"
categories: rp2040
---

### A Necessary Redesign: Lessons Learned from Alyx Base V1

The journey from concept to tangible hardware is rarely without its stumbles. My initial attempt, the `Alyx Base V1`, highlighted several critical design flaws that necessitated a complete overhaul. The original design's complexity, characterized by double-sided component placement and inefficient layer utilization, proved to be a significant hurdle. Recognizing the need for a more streamlined approach, I embarked on a redesign, aiming for simplicity and manufacturability.

In this redesign, I drew inspiration from the Raspberry Pi Zero/µHAT form factor, envisioning a compact and versatile board. While the `Alyx Base V2` ultimately diverged from strict header compatibility, the underlying principle of a small, efficiently designed board remained central to the new design.

### Component Selection and the Shift to Assembly Services

One of the key lessons learned from the `Alyx Base V1` was the importance of accurate component footprints. To mitigate the risk of future errors, I opted for a readily available, fully specified USB-C part from JLCPCB. This ensured compatibility and simplified the assembly process. Additionally, while retaining the 0402 component size for its compactness, I made the strategic decision to leverage JLCPCB's assembly services. This move not only streamlined production but also minimized the potential for human error during the assembly phase.

### The Persistent Challenge of Human Error

Despite meticulous planning and careful execution, the `Alyx Base V2` project was not immune to human error. Three critical issues surfaced, highlighting the complexities of hardware development:

* **Flash Chip Misidentification:** A 16MB flash chip was incorrectly labeled and, crucially, had an incorrect part number within flux.ai. This discrepancy led to the chip's omission during the JLCPCB assembly process, a costly oversight.
* **USB-C Port Footprint Inaccuracy:** The USB-C port footprint, despite careful review, remained incorrect within flux.ai. While JLCPCB graciously agreed to a workaround by manually trimming the part, this highlighted the importance of precise footprint verification.
* **LDO Voltage Discrepancy:** The LDO part number was also incorrect within flux.ai, resulting in the installation of a 5V version instead of the required 3.3V. This voltage mismatch posed a significant risk to the RP2040 and necessitated immediate rectification.

### Rectifying the Mistakes and Achieving Functionality

To address these errors, I procured the correct LDOs and flash chips from DigiKey. The LDO replacement was successfully completed across all boards, restoring the correct operating voltage. However, the flash chip replacement proved more challenging, with only two out of five boards successfully soldered. Fortunately, the RP2040's ability to operate in RAM-only mode prevented the complete loss of the remaining boards.

With the correct voltages and partial flash functionality, the boards were recognized as drives by my PC. However, a new hurdle emerged: programs would not execute after being dragged onto the boards.

After extensive online research, I discovered the root cause: the crystal oscillator's response time was too slow for the RP2040. The solution involved modifying the `Alyx Base V2`'s board header file to increase the wait time, allowing the RP2040 to properly initialize.

Finally, after overcoming these challenges, I had a functional and programmable board. This milestone marked a significant step forward, enabling me to begin developing and testing applications on my custom RP2040 board. This process highlighted the iterative nature of hardware development and the importance of persistence in the face of setbacks.

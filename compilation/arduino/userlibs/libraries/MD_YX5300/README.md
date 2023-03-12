# Arduino YX5300 Serial MP3 Player Library

[![arduino-library-badge](https://www.ardu-badge.com/badge/MD_YX5300.svg?)](https://www.ardu-badge.com/MD_YX5300)

This library implements functions to control RS232 Serial MP3 players based 
on the YX5300 IC. These are often sold as "Catalex" Serial MP3 players.

The YX5300 supports 8k Hz ~ 48k Hz sampling frequency MP3 and WAV file formats. The audio files
are stored on micro SD cards that plug into a TF card socket on the back of the board. The MCU
controls the MP3 playback by sending serial commands to the module via UART port. This library 
manages the serial interface and request/response sequences.

If you like and use this library please consider making a small donation using [PayPal](https://paypal.me/MajicDesigns/4USD)

[Library Documentation](https://MajicDesigns.github.io/MD_YX5300/)

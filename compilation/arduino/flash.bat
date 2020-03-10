@echo off
.\tools\avr\bin\avrdude -p%1 -c%2 -P%3 -b%4 -D -Uflash:w:.\build\sketch.ino.hex:i
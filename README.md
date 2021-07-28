# Otto Blockly

This is a free and open source visual programming language based on Blockly from Google & MIT, to generate C/C++ code, compile and upload to any Arduino. Compatible [with any Otto DIY robot or Arduino related boards](https://www.ottodiy.com/academy). It is the perfect software to get you started into coding and STEM robotics.

## [Watch the video to see all the main features](https://youtu.be/chcWxh4Co_c)

## Installer
This software can work offline by installing it on your computer for [Windows (master branch)](https://github.com/OttoDIY/blockly) or [for Linux operating systems](https://github.com/OttoDIY/blockly/tree/versionlinux). You can [download the latest release version from here](https://github.com/OttoDIY/blockly/releases). After the software is installed in your PC, it is ready to use immediately, no need to import Arduino libraries or any additional boards because it comes with a copy of the Arduino CLI, it is all in one software!, ready to upload codes directly to your robot or any other Arduino project via USB. 

If your computer do not recognize the USB device or Otto, you have to [install the CH340 or CH341 or FTDI driver that is in the "driversUSB" folder](https://github.com/OttoDIY/blockly/tree/master/driversUSB) or [download from this link](https://sparks.gogo.co.nz/ch340.html)

MAC and Chrome  versions are under development,you will need a Virtual Machine or use the online version of App

## Online App
Otto Blockly is also a web tool. You can [give it a try here.](https://ottoschool.com/blockly/) and you can use it from any operative system including chrome books. But you will need to [do an initial setup following the steps here](https://ottoschool.com/en/config-blockly/) then the USB device will be recognized by Chrome browser and you can upload code directly from the internet!

## How to Use

1. Open any example.
2. Connect your Otto robot.
3. Select Arduino nano and the USB port where Otto is connected.
4. Upload and yes is that easy you can even just click upload and the code will be automatically compiled!

Drag , drop, mix, play and create your own codes.[Join the Otto Builder community, see all the cool stuff we are making with Otto BLockly and post your ideas!](http://builders.ottodiy.com/) 

Learn more of [how to use Otto blockly here](https://ottoschool.com/en/courses/code/)

## We also have the Scratch 3.0 version! [Otto Scratch AI](https://ottoschool.com/scratch/) 
Otto Scratch AI is more child friendly coding interface and you can do Artificial Intelligence interactions, we will be slowly combining these two projects but now they serve to different purposes;
Otto Blockly can create, compile and upload native Arduino code, it works offline.
Otto Scratch AI needs a previously uploaded firmware to get the commands via Bluetooth, requires the internet because it is connected to AI servers.

[## Support us by buying our awesome STEM robot kits](http://store.ottodiy.com/)

## Help us add new Languages

We are translating Blockly for Otto for the international community, you are welcome to contribute with the languages you know, it will benefit you and everyone in your community.

The more people helping to translate the better, it is important to translate while understanding the context, or what is the robot actually doing, to be accurate.

1. Go to [lang folder and duplicate the Arduino_en.js Blockly_en.js and msg_en.js  files from english](https://github.com/OttoDIY/blockly/tree/master/www/lang), 
2. Rename them according to your ISO language code, for example fr is for French,so the files are renamed like this: Arduino_fr.js Blockly_fr.js and msg_fr.js  
3. Edit the files with any code editor software like [Visual Studio Code](https://code.visualstudio.com/) translating only the english part after = in between the quotes "" in visual studio is the text in red.
4. Then [pull a request here in github](https://github.com/OttoDIY/blockly/pulls) or just [attach the files in an new issue](https://github.com/OttoDIY/blockly/issues).

## How to Contribute
Contributing to this software is warmly welcomed. There are 5 ways you can contribute to this project:
1. Test and report. Let us know if there is something missing in the issue section.
2. Helps us [solve current issues or other bugs.](https://github.com/OttoDIY/blockly/issues) 
3. Suggest or request new blocks.

You can do this [basically by forking](https://help.github.com/en/articles/fork-a-repo), committing modifications and then a [pull requests](https://help.github.com/en/articles/about-pull-requests). Please explain the changes and make sure they have been tested.

Just make sure to keep consistency in the naming and make a record of the change or improvement made.

Welcome to the Otto DIY development team!
Thanks for your contribution.

## Attribution

Thanks to all these great people it has been possible to make this project:

- [Blockly](https://developers.google.com/blockly)
- [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino)
- [Blocklino](https://github.com/fontainejp/blocklino/)
- [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino)
- [Blocklyduino for MRTduino](https://logix5.com/Blockyduino-para-MRTDuino/)
- [Ardublockly](https://github.com/carlosperate/ardublockly)
- [Bodo Minea](https://github.com/BodoMinea)
- [Node.js](https://nodejs.org/)
- [Bootstrap](http://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [JQuerry](https://jquery.com)
- [electron](https://electronjs.org/)
- [electron-builder](https://github.com/electron-userland/electron-builder)
- [Serialport](https://github.com/node-serialport/node-serialport)
- [arduino-builder](https://github.com/arduino/arduino-builder)
- [arduino-cli](https://github.com/arduino/arduino-cli)
- [winAVR](https://sourceforge.net/projects/winavr)
- [Avrdude](http://www.nongnu.org/avrdude)
- [microbit](https://microbit.org/)
- [micropython](https://wiki.mchobby.be/index.php?title=MicroPython-Accueil)
- [Python](https://docs.python.org/)
- [ampy](https://github.com/pycampers/ampy)
- [pyflakes](https://github.com/PyCQA/pyflakes)
- [NSIS](https://sourceforge.net/projects/nsis)
- [masayloBlockly](https://github.com/agomezgar/masayloBlockly)
- [Escornabot](escornabot.com) 
- [Masaylo](https://github.com/agomezgar/masaylo)

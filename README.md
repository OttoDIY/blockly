# Otto Blockly

This is a free and open source visual programming language based on Blockly from Google & MIT, Arduino codes are created by just combining the blocks, then they are compiled (check or verified) and quickly [upload to any Otto robot](https://wikifactory.com/+OttoDIY/projects) or similar Arduino(C++) or Micro:bit or Python robots.

## [Watch the video to see all the main features](https://youtu.be/chcWxh4Co_c)

## Installer
This software already works offline on Windows operating systems. You can [download the latest release from here](https://github.com/OttoDIY/blockly/releases), after install it is ready to use, no need to copy libraries or additional setup or even Arduino IDE, it is all integrated, ready to upload codes. Only if your computer do not recognize the USB device or Otto, you have to install the CH341 driver that is also [here in the "pilotes" folder.](https://github.com/OttoDIY/blockly/tree/master/pilotes/_CH341)

MAC and Linux version are under development, as some requested and as much as we want them to be ready too, unfortunately, there are not many collaborators, neither committed volunteers even for very simple BETA Tests, so WE NEED YOU!, if you really need this software for your OS, help us please and don't ask when it would be available, since it only will be ready with your support..

## Online App
Otto Blockly is also a web tool. You can [give it a try here.](https://ottodiy.github.io/blockly/) BUT the USB device cannot be recognized by the browser, therefore you won't be able to compile or upload the code.., although you can just simple copy and paste the generated code into your [local Arduino IDE](https://www.arduino.cc/en/Main/Software), therefore you can already use this tool from any operative system.

## How to Contribute
Contributing to this software is warmly welcomed. There are 5 ways you can contribute to this project:
1. Test and report.
2. Helps us [solve current issues](https://github.com/OttoDIY/blockly/issues) or other bugs.
3. Bring missing features from similar Blockly or Scratch alike programs, request new useful blocks.
5. Translating to new languages or fixing current ones.

You can do this [basically by forking](https://help.github.com/en/articles/fork-a-repo), committing modifications and then a [pull requests](https://help.github.com/en/articles/about-pull-requests). Please explain detailed the changes and make sure they have been tested.

Just make sure to keep consistency in the naming and make a record of the change or improvement made.
Welcome to the Otto DIY code development team!

Thanks for your contribution.

## More Languages

We are translating Blockly for Otto for the international community, you are welcome to contribute with the languages you know, it will benefit you and everyone in your Otto Builder club, you just need to duplicate and change [the files in the lang folder](https://github.com/OttoDIY/blockly/tree/master/www/lang), In code.js you define new languages or new spots in the app for translatable string, while for the translations themselves you need to add more of or edit the existing COMPONENT_LANG.js file, like Arduino_en.js.

The more people helping to translate the better, it is important to translate while understanding the context, or what is the robot actually doing, to be accurate.

## How to Use
[<img src="https://github.com/OttoDIY/blockly/blob/master/www/media/Ottoblockly.png" width="500" align="center">](https://youtu.be/chcWxh4Co_c)

1. Open any example.
2. Connect your Otto robot.
3. Select Arduino nano and USB port where Otto is connected.
4. Check the code.
5. Upload and yes is that easy!
6. Drag , drop, mix, play and create your own codes.
7. [Join the Otto Builder community and share them!](https://www.ottodiy.com/#join-us) 
8. [Subscribe to our YouTube channel for tutorials](https://www.youtube.com/c/ottodiy?sub_confirmation=1)

## Attribution

Thanks to all these tools created by great people. that without them, would have not been possible to make this project:

- [Blockly](https://developers.google.com/blockly)
- [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino)
- [Blocklino](https://github.com/fontainejp/blocklino/)
- [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino)
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
- [winAVR](https://sourceforge.net/projects/winavr)
- [Avrdude](http://www.nongnu.org/avrdude)
- [microbit](https://microbit.org/)
- [micropython](https://wiki.mchobby.be/index.php?title=MicroPython-Accueil)
- [Python](https://docs.python.org/)
- [ampy](https://github.com/pycampers/ampy)
- [pyflakes](https://github.com/PyCQA/pyflakes)
- [NSIS](https://sourceforge.net/projects/nsis)

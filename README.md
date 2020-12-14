# Otto Blockly

This is a free and open source visual programming language based on Blockly from Google & MIT, Arduino codes are created by just combining the blocks, then they are compiled (check or verified) and quickly [upload to any Otto robot](https://wikifactory.com/+OttoDIY/projects) or any Arduino project (C++) or Micro:bit or Python robots.

## [Watch the video to see all the main features](https://youtu.be/chcWxh4Co_c)

## Installer
This software already works offline by installing it on your computer for [Windows (master branch)](https://github.com/OttoDIY/blockly) and [Linux](https://github.com/OttoDIY/blockly/tree/versionlinux) operating systems. You can [download the latest release from here](https://github.com/OttoDIY/blockly/releases), after is installed, it is ready to use, no need to import Arduino libraries or any additional boards setup or even the neeed of Arduino IDE software, it is all integrated!, ready to upload codes direclty to your robot via USB. Only if your computer do not recognize the USB device or Otto, you have to install the CH341 driver that is also [here in the "pilotes" folder.](https://github.com/OttoDIY/blockly/tree/master/pilotes/_CH341)

MAC and Chrome  versions are under development, as some requested and as much as we want them to be ready too, unfortunately, it is very hard!, so WE NEED YOU!, if you really need this software for your OS, help us please and don't ask when it would be available, since it only will be ready with your support..So for now you will need a Virtual Machine or use the online App and download the code to open and upload manually from a previosly installed Arduino IDE with [Otto libraries](https://github.com/OttoDIY/OttoDIYLib)

## Online App
Otto Blockly is also a web tool. You can [give it a try here.](https://ottodiy.github.io/blockly/) BUT the USB device cannot be recognized by the browser, therefore you won't be able to compile or upload the code.., although you can just simple copy and paste or save the blocks or download the generated code into your [local Arduino IDE](https://www.arduino.cc/en/Main/Software), therefore you can already use this tool from any operative system even from your phone if you have an OTG USB cable

## How to Contribute
Contributing to this software is warmly welcomed. There are 5 ways you can contribute to this project:
1. Test and report. Lets us know if there is something missing in the issue section.
2. Helps us [solve current issues](https://github.com/OttoDIY/blockly/issues) or other bugs.
3. Bring missing features from similar Blockly or Scratch alike programs, request new useful blocks.
5. Translating to new languages or fixing current ones.

You can do this [basically by forking](https://help.github.com/en/articles/fork-a-repo), committing modifications and then a [pull requests](https://help.github.com/en/articles/about-pull-requests). Please explain detailed the changes and make sure they have been tested.

Just make sure to keep consistency in the naming and make a record of the change or improvement made.
Welcome to the Otto DIY code development team!

Thanks for your contribution.

## More Languages

We are translating Blockly for Otto for the international community, you are welcome to contribute with the languages you know, it will benefit you and everyone in your community.

The more people helping to translate the better, it is important to translate while understanding the context, or what is the robot actually doing, to be accurate.

1. Go to [lang folder and duplicate the Arduino_en.js Blockly_en.js and msg_en.js  files from english](https://github.com/OttoDIY/blockly/tree/master/www/lang), 
2. Rename them according to your ISO language code, for example fr is for French,so the files are renamed like this: Arduino_fr.js Blockly_fr.js and msg_fr.js  
3. Edit the files with any code editor software like [Visual Studio Code](https://code.visualstudio.com/) translating only the english part after = in between the quotes "" in visual studio is the text in red.
4. Then pull a request here in github or just send us the files.

## How to Use
[<img src="https://github.com/OttoDIY/blockly/blob/master/www/media/Ottoblockly.png" width="500" align="center">](https://youtu.be/chcWxh4Co_c)

1. Open any example.
2. Connect your Otto robot.
3. Select Arduino nano and USB port where Otto is connected.
4. Check the code.
5. Upload and yes is that easy you can even just click upload and the code will be automatically compiled!
6. Drag , drop, mix, play and create your own codes.
7. [Join the Otto Builder community and share them!](http://builders.ottodiy.com/) 
8. Share your creations! 

## UPDATE! We now have the Scratch 3.0 version! [Otto Scratch AI](https://ottoschool.com/scratch/) 
This one is more child friendly coding interface and you can do Artificial Intelligence interactions, we will be slowly combining these two projects but now they serve to different purposes;
Otto Blockly can create, compile and upload native Arduino code, it works offline.
Otto Scratch AI needs a previous uploaded firmware to get the commands via Bluetooth, requires internet but is connected to AI servers.

[Support us by buying our great robot kits](https://www.ottodiy.com/store)

## Attribution

Thanks to all these tools created by great people. that without them, would have not been possible to make this project:

[Blockly](https://developers.google.com/blockly) [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino) [Blocklino](https://github.com/fontainejp/blocklino/) [Bodo Minea](https://github.com/BodoMinea) [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino) [Ardublockly](https://github.com/carlosperate/ardublockly) 
[Node.js](https://nodejs.org/) [Bootstrap](http://getbootstrap.com) [Font Awesome](http://fontawesome.io) [JQuerry](https://jquery.com) [electron](https://electronjs.org/) [electron-builder](https://github.com/electron-userland/electron-builder) [Serialport](https://github.com/node-serialport/node-serialport) [arduino-builder](https://github.com/arduino/arduino-builder) [winAVR](https://sourceforge.net/projects/winavr) [Avrdude](http://www.nongnu.org/avrdude) [microbit](https://microbit.org/) [micropython](https://wiki.mchobby.be/index.php?title=MicroPython-Accueil) [Python](https://docs.python.org/) [ampy](https://github.com/pycampers/ampy) [pyflakes](https://github.com/PyCQA/pyflakes) [NSIS](https://sourceforge.net/projects/nsis)

# Otto Blockly for GNU/Linux OS
This is a free and open source visual programming language based on Blockly from Google & MIT, Arduino codes are created by just combining the blocks, then they are compiled (check or verified) and quickly [upload to any Otto robot](https://wikifactory.com/+OttoDIY/projects) or similar Arduino(C++) or Micro:bit or Python robots.

## Installer 
### Distribution(s) and kernel(s)
* Ubuntu 20
* Ubuntu 18.04
```
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.3 LTS
Release:	18.04
Codename:	bionic
$ uname -a
Linux blue 5.4.0-53-generic #59~18.04.1-Ubuntu SMP Wed Oct 21 12:14:56 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

### Dependencies (nodejs, npm)
```
cd
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
nodejs -v
#https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04
```

### Builing project
```
git clone --single-branch --branch versionlinux https://github.com/ottodiy/blockly
cd ~/blockly
npm install
sudo chown -R $USER:$(id -gn $USER) /home/$USER/.config
npm start #to test app
npm run compiler #To compile
```

### Cleaning project
```
rm -rf dist/
rm -rf node_modules/
rm -rf package-lock.json
```

### USB connection
First, make sure that your user is part of the `dialout` group if it is necessary in your Linux distribution. You can do this with the following command:
```bash
sudo usermod -a -G dialout youruser
```
where **youruser** is the user name you are running the program with.

Testing the port of arudino with `Board: Arduino Nano; Processor: ATMega328P; Port:/dev/ttyUSB0`
```
ls -l /dev/ttyUSB*
crw-rw---- 1 root dialout 188, 0 Sep 13 08:21 /dev/ttyUSB0
```

## Usage
1. Open Otto blockly
2. Open any example.
3. Connect your Otto robot.
4. Select Arduino nano and USB port where Otto is connected (e.g., /dev/ttyUSB0)
5. Check the code.
6. Upload and yes is that easy!
7. Drag , drop, mix, play and create your own codes.  
[<img src="https://github.com/OttoDIY/blockly/blob/master/www/media/Ottoblockly.png" width="500" align="center">](https://youtu.be/chcWxh4Co_c)

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
- [masayloBlockly](https://github.com/agomezgar/masayloBlockly)
- [Escornabot](escornabot.com) 
- [Masaylo](https://github.com/agomezgar/masaylo)

## Contributors of Otto/blockly for GNU/Linux OS version 
- Antonio Gómez [@agomezgar](https://github.com/agomezgar) (Developer) 
- Mª Dolores Nogueras (Developer)
- Oresztesz Margaritisz [@gitaroktato](https://github.com/gitaroktato) (tester)
- Miguel Xochicale [@mxochicale](https://github.com/mxochicale) (tester)

## How to Contribute
Contributing to this software is warmly welcomed. There are 5 ways you can contribute to this project:
1. Test and report.
2. Helps us [solve current issues](https://github.com/OttoDIY/blockly/issues) or other bugs.
3. Bring missing features from similar Blockly or Scratch alike programs, request new useful blocks.
5. Translating to new languages or fixing current ones.

You can do this [basically by forking](https://help.github.com/en/articles/fork-a-repo), committing modifications and then a [pulling requests](https://help.github.com/en/articles/about-pull-requests). Please provide as much details as you can for any changes and make sure they have been tested
when you do a pull request. Similarly, make sure to keep consistency in the naming.

## Forums and more of Otto 
- [Join the Otto Builder community and share them!](https://www.ottodiy.com/#join-us) 
- [Subscribe to our YouTube channel for tutorials](https://www.youtube.com/c/ottodiy?sub_confirmation=1)




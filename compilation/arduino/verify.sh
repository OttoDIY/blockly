
if [ $1 = "nanooptiboot" ];
then
./arduino-cli compile --fqbn arduino:avr:nano sketch
elif [ $1 =  "nano" ];
then
  ./arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328old sketch

else
./arduino-cli compile --fqbn arduino:avr:$1 sketch
fi

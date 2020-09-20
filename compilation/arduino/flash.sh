if [ $2 = "nanooptiboot" ];
then
./arduino-cli upload --port $1 --fqbn arduino:avr:nano sketch
elif [ $2 =  "nano" ];
then
  ./arduino-cli upload --port $1 --fqbn arduino:avr:nano:cpu=atmega328old sketch


else
  ./arduino-cli upload --port $1 --fqbn arduino:avr:$2 sketch
fi



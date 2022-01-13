#include <escornabot.h>

escornabot mirobot;

boolean funciona = false;

void setup() {
  mirobot.us(11, 12); //configuramos los pines trigger y echo
}

void loop() {

  compruebaBoton();

  if (funciona == true) {


    mirobot.driveD(-5, 10);

    if (mirobot.distance() <= 15) {

      mirobot.driveD (5, 10);
      mirobot.turnA (-45, 10);

    }


  }

  else if (funciona == false) {
    mirobot.Stop();
  }

}

void compruebaBoton () {
  if (mirobot.pushButton() == right) {
    funciona = !funciona;
    delay (300);
  }
}

#include <escornabot.h>

escornabot miescorni;
boolean funciona = false;

void setup() {
  //Serial.begin(9600);
  miescorni.infrared(11,12);
  
}

void loop() {

  compruebaBoton();

  if (funciona == true) {

    if (miescorni.blackRight() && miescorni.whiteLeft()) {//si sensor izquierdo encuentra blanco
      miescorni.turnA(-5, 10);//gira hacia la derecha en el sentido contrario a la marcha
    }
    if (miescorni.whiteRight() && miescorni.blackLeft()) {//si sensor derecho encuentra blanco
      miescorni.turnA(5, 10);//gira hacia la izquierda en el sentido contrario a la marcha
    }

    if (miescorni.blackRight() && miescorni.blackLeft()) {//si los dos sensores encuentran negro
      miescorni.driveD(-2, 13);//se mueve hacia delante en el sentido contrario a la marcha
    }
    if (miescorni.whiteRight() && miescorni.whiteLeft()) {//si los dos sensores encuentran blanco
      miescorni.driveD(2, 13);//se mueve hacia detrás en el sentido contrario a la marcha
    }

  }

  else if (funciona == false) {
    miescorni.Stop();
  }

}

void compruebaBoton () {
  if (miescorni.pushButton() == right) {
    funciona = !funciona;
    delay (300);
  }
}

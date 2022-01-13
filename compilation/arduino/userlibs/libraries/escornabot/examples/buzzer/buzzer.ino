#include <escornabot.h>

escornabot miescorni;

void setup() {

  miescorni.buzzer(10);

}

void loop() {

  for (int x = 0; x < 1000; x = x + 100) {
    miescorni.tono(x, 500);
  }

  for (int x = 1000; x >=0; x = x - 100) {
    miescorni.tono(x, 500);
  }
}

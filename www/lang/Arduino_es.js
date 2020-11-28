'use strict';
goog.provide ('Blockly.Msg.fr');
goog.require ('Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Seleccionar puerto USB";
Blockly.Msg.com2 = "🔔 Seleccione USB por favor";
Blockly.Msg.check = "Verificar ...";
Blockly.Msg.upload = "Cargar ...";
Blockly.Msg.error = "🔔 ERROR: bloques no conectados";
Blockly.Msg.verif = "🔔 Verifique el código primero"
Blockly.Msg.save = "Guardar como formato";
Blockly.Msg.update = "Actualizar";
Blockly.Msg.new_update = "Hay una nueva versión disponible, ¿desea descargarla e instalarla ahora?" ;
Blockly.Msg.yes = "yes";
Blockly.Msg.no = "no";
Blockly.Msg.uptodate = "💯 ¡La versión está actualizada!" ;
Blockly.Msg.download = "Descarga completada, la aplicación se instalará y reiniciará ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "en el pin";
Blockly.Msg._AT = "at";
Blockly.Msg.AV = "adelante";
Blockly.Msg.AR = "hacia atrás";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "derecha";
Blockly.Msg.left = "izquierda";
Blockly.Msg.LetR = "derecha e izquierda";
Blockly.Msg.direction = "direccion";
Blockly.Msg.vitesse = "velocidad";
Blockly.Msg.values = "[0-90]";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ Almacenamiento";
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Analog";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Tabla";
Blockly.Msg.CAT_list = "▤ Lista";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Lógica";
Blockly.Msg.CAT_MATH = "∑ Math";
Blockly.Msg.CAT_TEXT = "❝ Texto";
Blockly.Msg.CAT_VARIABLES = "↝ Variable";
Blockly.Msg.CAT_FUNCTIONS = "∬ Función";
Blockly.Msg.CAT_ARDUINO = "∞ Estructura";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Entrada / Salida";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Salir";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ Tiempo";
Blockly.Msg.CAT_actionneur = "↻ Motor";
Blockly.Msg.CAT_com = "📡 Comunicación";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "Serie USB";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "SoftwareSerial";
Blockly.Msg.CAT_ARDUINO_moteur = "↻ Motor DC";
Blockly.Msg.CAT_ultrason = "⇣ Sensores";
Blockly.Msg.CAT_bluetooth = "Bluetooth";
Blockly.Msg.CAT_RemoteIR = "C.Remoto IR";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Boca";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Ojos";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "Grove LCD";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "MP3 DFMini";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoid";
Blockly.Msg.CAT_OLED_U8G = "OLED";
Blockly.Msg.CAT_NEOPIXEL = "Neopixel";
Blockly.Msg.CAT_CCS811 = "Sensor CO2";
Blockly.Msg.CAT_Displays = "📺 Displays";
Blockly.Msg.CAT_AUDIO = "♫ Audio";
Blockly.Msg.CAT_OPENSMART = "MP3 OpenSmart";
Blockly.Msg.CAT_CAMERAS = "📷 Camaras";
Blockly.Msg.CAT_MUVISION = "MuVision";
Blockly.Msg.CAT_OTTO_DIY = "⊟ Otto DIY";
Blockly.Msg.CAT_SENSORS = "⇣ Sensores";
Blockly.Msg.CAT_LED = "Led";
Blockly.Msg.CAT_LEDRGB = "RGB Led";
Blockly.Msg.CAT_MAX7219 = "Matriz MAX7219";
Blockly.Msg.CAT_BARGRAPH = "BarGraph";
Blockly.Msg.CAT_LCDI2C = "LCD I2C";

//Wireless
Blockly.Msg.esp8266_init_tooltip = "inicialización del módulo wifi y conexión con los parámetros indicados";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "clave";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "puerta de enlace";
Blockly.Msg.esp8266_6 = "máscara";
Blockly.Msg.esp8266_7 = [[" cliente ","cliente "], [" servidor "," servidor "]];
Blockly.Msg.esp8266_8 = "puerto";
Blockly.Msg.esp8266_9 = [[" dinámico "," dinámico "], [" estático "," estático "]];
Blockly.Msg.esp8266_10 = "dirección";
Blockly.Msg.esp8266_recept_tooltip = "recepción";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "enviar página HTML";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "iniciar servidor";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "si en la consulta encontramos";
Blockly.Msg.esp8266_request_container = "encontramos";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupción: cuando a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "deshabilitar interrupción en pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Especifica una acción a tomar cuando ocurre una interrupción externa (4 modos posibles) en el pin 2 o 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Deshabilitar la interrupción externa especificada anteriormente";
Blockly.Msg.LKL_MODE = 'se detecta en el pin';
// FIELDDROPDOWN
Blockly.Msg.note = [["DO \u2083", "261"], ["RE \u2083", "293"], ["MI \u2083", "329"], ["FA \u2083", "349"], ["SOL \u2083", "392"], ["LA \u2083", "440"], ["SI \u2083", "493"], ["DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "] , ["LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [[" lentamente "," 1000 "], [" rápido "," 100 "]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["segundos", "s"], ["milisegundos", "m"], ["microsegundos", "u"]];
Blockly.Msg.time = [["segundos", "s"], ["milisegundos", "m"]];
Blockly.Msg.char_lcd = [["# 1", "1"], ["# 2", "2"], ["3", "3"], ["# 4", "4"], ["# 5", "5"], ["# 6", "6"], ["No. 7", "7"], ["# 8", "8"]];
Blockly.Msg.rxtx = [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["encender", Blockly.Msg.high], ["apagar", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [[' flanco ascendente ',' RISING '], [' flanco descendente ',' FALLING '], [' estado cambiante ',' CAMBIO '], [' estado bajo ', Blockly. Msg.low]];
Blockly.Msg.irq = [['borde ascendente', 'Pin.IRQ_RISING'], ['borde descendente', 'Pin.IRQ_FALLING'], ['estado alto', 'Pin.IRQ_HIGH_LEVEL'], ["estado bajo "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [[" humedad "," h "], [" temperatura "," t "]];
Blockly.Msg.couleur = [["azul", "azul"], ["amarillo", "amarillo"], ["rojo", "rojo"], ["verde", "verde"]];
Blockly.Msg.sens = [["adelante", "a"], ["girar a la derecha", "d"], ["girar a la izquierda", "g"]];
//sensor
Blockly.Msg.VL53L0X = "Sensor de distancia láser";
Blockly.Msg.VL53L0X_tooltip = "inicializar sensor. \n Sensor <--> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance = "distancia medida por láser";
Blockly.Msg.VL53L0X_distance_tooltip = "VL530X: \nretorno Distancia medida por láser en mm";
Blockly.Msg.bme280 = "Sensor de presión atmosférica";
Blockly.Msg.bme280_tooltip = "inicializar sensor. \nSensor <--> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.bme280_pressure = "presión atmosférica";
Blockly.Msg.bme280_pressure_tooltip = "BME280: \nrecuperar la presión atmosférica en hPa";
Blockly.Msg.inter = "cambiar es";
Blockly.Msg.inter_tooltip = "devuelve true (false) si el interruptor está (no está) en la posición indicada";
Blockly.Msg.mc005 = "presencia detectada en el pin";
Blockly.Msg.mc005_tooltip = "MC005: \n devuelve true (false) si se detecta (no se detecta) una presencia";
Blockly.Msg.bp = "botón presionado en el pin";
Blockly.Msg.bp_tooltip = "devuelve true (false) si se presiona (no se presiona) un botón";
Blockly.Msg.dht11_tooltip = "DHT11: \n devuelve la humedad del aire (del 20 al 80%) o \n la temperatura (de 2 a 50 ° C)";
Blockly.Msg.dht22_tooltip = "DHT22: \n devuelve la humedad del aire (de 0 a 100%) o \n la temperatura (de -40 a 80 ° C)";
Blockly.Msg.suiveur_ligne = "línea negra detectada en el pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \n devuelve true (false) si se detecta (no se detecta) una línea negra";
Blockly.Msg.light = "brillo en el pin";
Blockly.Msg.light_tooltip = "devuelve un valor dependiendo del brillo \n0: oscuridad \n255: luz completa";
Blockly.Msg.hum = "humedad del suelo en el pasador";
Blockly.Msg.hum_tooltip = "CAP 615: \n devuelve la humedad del suelo de 0 a 100%";
Blockly.Msg.light_tooltip = "devuelve un valor dependiendo del brillo \n0: oscuridad \n255: luz completa";
Blockly.Msg.grove_ldr = "brillo en el pin";
Blockly.Msg.grove_ldr_tooltip = "devuelve el brillo medido \n0: sin luz \n100: luz muy intensa";
Blockly.Msg.potar = "posición del cursor en el pin";
Blockly.Msg.potar_tooltip = "devuelve un valor basado en la posición del cursor \n0: cursor izquierda \n255: cursor derecha";
Blockly.Msg.lm35 = "temperatura en el pin";
Blockly.Msg.lm35_tooltip = "LM35: \n devuelve la temperatura medida en grados centígrados (de 0 a 80 �)";
Blockly.Msg.ultrason_1 = "distancia <límite";
Blockly.Msg.ultrason_2 = "devuelve un estado Alto si la distancia medida es menor que el límite";
Blockly.Msg.ultrason_distance1 = "distancia medida por ultrasonido";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSensor de sonido que permite realizar mediciones de distancia (de 3 cm y 4 m) \nindicar los pines del Arduino al que se conectarán TRIG y ECHO";
Blockly.Msg.ultrason = "pines de ultrasonido";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \n devuelve la distancia medida en cm por el detector ultrasónico";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "movimiento detectado";
Blockly.Msg.feu = "llama detectada";
Blockly.Msg.presence = "obstáculo detectado";
Blockly.Msg.appui = "tocar";
Blockly.Msg.pir_tooltip = "HC-SR501: \n devuelve true (false) si se detecta (no se detecta) una presencia";
Blockly.Msg.feu_tooltip = "CAP168: \n devuelve true (false) si se detecta (no se detecta) una llama";
Blockly.Msg.presence_tooltip = "CAP711: \n devuelve true (false) si un contacto ha tenido lugar (no)";
Blockly.Msg.appui_tooltip = "CAP831: \n devuelve true (false) si un soporte es (no es) detectado";
// Bluetooth
Blockly.Msg.bluetooth1 = "si los datos recibidos por bluetooth";
Blockly.Msg.bluetooth1_tooltip = "recepción de datos bluetooth \n conectando el módulo HC-06 a los pines 0 y 1 \ pines cruzados de red Rx y Tx";
Blockly.Msg.bluetooth2 = "enviar por bluetooth";
Blockly.Msg.bluetooth2_tooltip = "envía datos a través del bluetooth \nconectando el módulo HC-06 a los pines 0 y 1 \ pines cruzados de red Rx y Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate

// SOFTWARE SERIAL FOR BT
Blockly.Msg.SSERIAL_BT_Init="Inicializa Bluetooth SoftwareSerial";
Blockly.Msg.SSERIAL_BT_TX="Pin TX#";
Blockly.Msg.SSERIAL_BT_RX="Pin RX#";
Blockly.Msg.SSERIAL_BT_BAUD="Baudios";
Blockly.Msg.SSERIAL_BT_Read="SoftwareSerial BT Leer byte";
Blockly.Msg.SSERIAL_BT_Println="SoftwareSerial BT Imprimir en una nueva linea";
Blockly.Msg.SSERIAL_BT_Print="SoftwareSerial BT Imprimir en la misma linea";
Blockly.Msg.SSERIAL_BT_Write="SoftwareSerial BT escribir"
Blockly.Msg.SSERIAL_BT_Avai="SoftwareSerial BT disponible?";
Blockly.Msg.SSerial_BT_Print_Format="SoftwareSerial BT Imprimir en formato";
Blockly.Msg.SSERIAL_BT_ReadNum="SoftwareSerial BT Leer como número";
Blockly.Msg.SSERIAL_BT_ReadString="SoftwareSerial BT Leer como String";
Blockly.Msg.SSERIAL_BT_Readlf="hasta el salto de línea";


//Pantalla LCD
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "Pantalla LCD";
Blockly.Msg.LCDi2c_tooltip = "inicializa el LCD I2C de 2 líneas y 16 caracteres con retroiluminación RGB. \ N Pantalla <-> Arduino \ nSDA <--------> A4 \ nSCL <- ---- ---> A5 ";
Blockly.Msg.LCD_tooltip = "inicializa la pantalla LCD, 2 líneas y 16 caracteres, indicando los pines para conectar";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "mostrar en LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "muestra el texto en la ubicación especificada";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "escribe el texto en la pantalla LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "línea 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "línea 2";
Blockly.Msg.LCD_line = "línea";
Blockly.Msg.LCD_col = "columna";
Blockly.Msg.LCD_raz = "borrar la pantalla LCD";
Blockly.Msg.LCD_raz_tooltip = "borrar pantalla";
Blockly.Msg.lcd_aff_symbole = "mostrar el símbolo";
Blockly.Msg.lcd_aff_symbole_tooltip = "muestra el símbolo que se ha definido antes";
Blockly.Msg.lcd_symbole = "define el símbolo";
Blockly.Msg.lcd_symbole_tooltip = "definición de un carácter para la pantalla LCD: \n 0 apaga un píxel \n 1 enciende un píxel";
// estructura
Blockly.Msg.loop = "Bucle";
Blockly.Msg.init = "Configuración";
Blockly.Msg.base_setup_loop = "La función de inicialización: \nSe usa para inicializar las variables, la dirección de los pines ... \nSe ejecuta solo una vez \nLa función de bucle: \nEsta es la parte principal del programa, todo los bloques colocados aquí se ejecutarán en bucle e indefinidamente (varios miles de veces por segundo) "
Blockly.Msg.loop_tooltip = "todos los bloques colocados aquí se ejecutarán en un bucle e indefinidamente (varios miles de veces por segundo)";
Blockly.Msg.begin_tooltip = "este bloque se utiliza para definir el orden en que se debe ejecutar el programa";
Blockly.Msg.begin = "START";
Blockly.Msg.def = "Declaración";
Blockly.Msg.def_tooltip = "todos los bloques colocados aquí solo se ejecutarán una vez, aquí es donde se configuran los diferentes sensores o actuadores";
Blockly.Msg.END = "END";
Blockly.Msg.END_tooltip = "Detener el programa, los bloques colocados después serán ignorados";
Blockly.Msg.code_tooltip = "Escriba una instrucción aquí que no esté en bloques";
//matriz
Blockly.Msg.matriceLC = "poner el LED, línea";
Blockly.Msg.matrice_create_aff = "Crear bloque 'mostrar símbolo% 1'";
Blockly.Msg.matrice_create_symbole = "Crear el bloque 'establecer el símbolo% 1'";
Blockly.Msg.matrice = "matriz";
Blockly.Msg.matrice8x8_tooltip = "Inicialización de la matriz a 64 LED, es necesario indicar los pines del arduino al que se conectarán DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define el símbolo";
Blockly.Msg.matrice8x8_symbole_tooltip = "definición de un símbolo para la matriz: \n 0 apaga un LED \n 1 enciende un LED";
Blockly.Msg.matrice8x8_efface = "borrar la matriz";
Blockly.Msg.matrice8x8_aff = "mostrar el símbolo";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 enciende un LED de la matriz y 0 lo apaga";
Blockly.Msg.matrice8x8_del_tooltip = "Enciende (apaga) un LED en la matriz que indica sus coordenadas \nLa marcación de precaución comienza en 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Mostrar el símbolo que se ha definido previamente";
Blockly.Msg.matrice8x8_efface_tooltip = "Apague todos los LED en la matriz";
Blockly.Msg.matrice8x8_helpurl = "https://playground.arduino.cc/Main/MAX72XXHardware/#WiringPrintout";
Blockly.Msg.matrice16x8_tooltip = "Inicialización de la matriz a 128 LED. \nMatriz <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define el símbolo";
Blockly.Msg.matrice16x8_symbole_tooltip = "definición de un símbolo para la matriz: \n 0 apaga un LED \n 1 enciende un LED";
Blockly.Msg.matrice16x8_efface = "apaga los LED de la matriz";
Blockly.Msg.matrice16x8_aff = "mostrar el símbolo";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 enciende un LED de la matriz y 0 lo apaga";
Blockly.Msg.matrice16x8_del_tooltip = "Enciende (apaga) un LED en la matriz que indica sus coordenadas \nLa marcación de precaución comienza en 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Mostrar el símbolo que se ha definido previamente";
Blockly.Msg.matrice16x8_efface_tooltip = "Apague todos los LED en la matriz";
Blockly.Msg.matrice16x8_helpurl = "";
//hora
Blockly.Msg.millis = "tiempo transcurrido en";
Blockly.Msg.millis_start = "iniciar un cronometraje en";
Blockly.Msg.millis_tooltip = "";
Blockly.Msg.millis_start_tooltip = "";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "devuelve la duración en microsegundos de un pulso UP o DOWN aplicado a un pin. Si el valor del parámetro es HIGH, el bloque espera a que el pin llegue a HIGH, comienza el tiempo, espera que el pin regrese al nivel BAJO y luego detenga el tiempo ";
Blockly.Msg.ARDUINO_BASE_DELAY = "esperar";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Especifique el tiempo de espera en segundos, milisegundos o microsegundos. \n El programa no hace nada más durante este tiempo";
Blockly.Msg.millis1 = "duración en";
Blockly.Msg.millis2 = "desde el principio";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "devuelve la duración en milisegundos, segundos o microsegundos desde que se inició el programa";
Blockly.Msg.ARDUINO_PULSEIN = "duración del estado";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "Este bloque verifica si el tiempo indicado ha llegado, si es el caso, entonces ejecuta los bloques colocados dentro ... A diferencia del bloque 'esperar' este no está bloqueando." ;
Blockly.Msg.tempo1 = "cada";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "el LED en el tablero";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Apague o encienda el LED en la placa Arduino";
Blockly.Msg.blink = "parpadea el LED de la placa";
Blockly.Msg.blink_tooltip = "El LED de la placa parpadea 1 o 10 veces por segundo";
Blockly.Msg.del = "el LED en el pin";
Blockly.Msg.del_tooltip = "enciende (apaga) el LED conectado al pin indicado";
Blockly.Msg.bargraphe = "gráfico de barras";
Blockly.Msg.bargraphe_allume = "encienda los LED a";
Blockly.Msg.bargraphe_allume_tooltip = "0 no enciende LED \n2,5 enciende los primeros 2 LED y la tercera mitad se enciende \n10 enciende todos los LED";
Blockly.Msg.bargraphe_tooltip = "módulo de gráfico de barras compuesto por 10 LED (8 verdes, 1 amarillo y 1 rojo), es necesario indicar los pines del arduino en el que se conectarán DCKI y DI";
Blockly.Msg.rvb_init = "LED RGB";
Blockly.Msg.rvb_init_tooltip = "indica los pines PWM para conectar al LED RGB";
Blockly.Msg.rvb_set = "mostrar color";
Blockly.Msg.rvb_set_tooltip = "muestra un color que indica un valor para los tres componentes (rojo, verde, azul)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "actualizar píxeles";
Blockly.Msg.pixel3 = "con color";
Blockly.Msg.pixel4 = "número";
Blockly.Msg.pixel5 = "establecer el brillo del píxel en";
Blockly.Msg.pixel6 = "establecer el píxel";
Blockly.Msg.pixel1_tooltip = "El módulo neopixel RGB indica el pin que se va a conectar y la cantidad de píxeles";
Blockly.Msg.pixel2_tooltip = "mostrar los cambios realizados";
Blockly.Msg.pixel5_tooltip = "ajusta el brillo del píxel (de 0 a 255)";
Blockly.Msg.pixel3_tooltip = "elige el píxel para iluminar y su color \nPrecaución, la numeración comienza en 0";
// salida
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "poner el pin DIGITAL";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escribe un estado lógico 0 o 1 en una salida específica";
Blockly.Msg.toggle = "alternar el estado del pin";
Blockly.Msg.toggle_tooltip = "Toggle: \ n escribe un estado lógico 0 si antes había un estado 1 (y viceversa) en la salida especificada";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "poner el pin PWM";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "enviar un valor entre 0 y 255 en una salida específica";
// entrada
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "Estado del pin DIGITAL";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "devuelve el estado lógico (0 o 1) del pin \nreturns 1 (estado alto) indicado por defecto si el pull-up está habilitado";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "leer el estado lógico 0 o 1 del pin digital";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "Valor del pin ANALÓGICO";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "devuelve un valor entre 0 y 1023";
// audio
Blockly.Msg.play = "reproducir";
Blockly.Msg.play_tooltip = "tocar la nota";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "pitido en el pin";
Blockly.Msg.beep_TOOLTIP = "pitidos (a 440Hz por 1s) en el pin seleccionado";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emitir un sonido en el pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frecuencia (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duración (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emitir un sonido en el pin seleccionado, a la frecuencia deseada y durante el tiempo deseado";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "detener el sonido en el pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "detener el sonido en el pin seleccionado";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "volumen [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "Reproducción automática";
Blockly.Msg.lp2i_mp3 = "reproductor de MP3";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ ninicialización del módulo, volumen y modo operativo \nMódulo MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "reproducir el archivo mp3";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "reproducir la canción especificada";
Blockly.Msg.lp2i_mp3_play_tooltip = "reproduce la canción actual";
Blockly.Msg.lp2i_mp3_pause = "pausar el archivo mp3";
Blockly.Msg.lp2i_mp3_pause_tooltip = "detener la canción actual";
Blockly.Msg.lp2i_mp3_prev = "leer el archivo mp3 anterior";
Blockly.Msg.lp2i_mp3_prev_tooltip = "reproducir la pista anterior";
Blockly.Msg.lp2i_mp3_vol = "establecer el volumen en";
Blockly.Msg.lp2i_mp3_vol_tooltip = "establece el volumen al valor especificado [0-48]";
Blockly.Msg.lp2i_mp3_next = "leer el siguiente archivo mp3";
Blockly.Msg.lp2i_mp3_next_tooltip = "reproduce la siguiente canción";
// servo motor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotar servo";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "ángulo [0 ° -180 °]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "posible rotación entre 0 y 180 grados";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "spin servo";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Girar el servo conectado al pin especificado, a la velocidad indicada y en la dirección seleccionada";
//motor
Blockly.Msg.mot_tooltip = "Blindaje del controlador de motor L293D: \n activa ambos motores (M1 y M2) para avanzar o girar, la velocidad se puede establecer entre 0 y 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "Escudo del controlador de motor L293D: \ndetenga los dos motores (M1 y M2)";
Blockly.Msg.moteur = "activar el motor";
Blockly.Msg.moteurstop = "parar el motor";
Blockly.Msg.moteur_tooltip = "arranca el motor de CC conectado al pin especificado, a la velocidad indicada \nspeed = 0 -> parada del motor";
Blockly.Msg.moteurdagu_tooltiprs040 = "Tarjeta RS 040: \ n activa una de las 2 salidas para conducir motores de CC, la velocidad se puede establecer entre 0 y 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "Tarjeta RS 040: \ ndetener uno de los 2 motores";
Blockly.Msg.moteurdagu_tooltiprs027 = "Tarjeta RS 027: \ n opera una de las 2 salidas para conducir motores de CC, la velocidad se puede establecer entre 0 y 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - Motor DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - Motor DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse + "[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "adelante";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "hacia atrás";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "detener";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Motor paso a paso";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - motor paso a paso";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "no por turno";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "velocidad (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "número de pasos";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "Motor DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "Motor DC 2";
Blockly.Msg.m_pap = "motor paso a paso";
Blockly.Msg.m_pap_step = "paso";
Blockly.Msg.m_pap_step1 = "avanzar";
Blockly.Msg.m_pap_tooltip = "Inicialización de un motor paso a paso. \ NIndique el número de pasos, la velocidad en rpm y los pines para conectar";
Blockly.Msg.m_pap_step_tooltip = "activa el motor paso a paso por la cantidad de pasos indicados, la siguiente instrucción solo se ejecutará una vez que se haga la rotación del motor";
// serial
Blockly.Msg.Serial_Init = "puerto serie activado";
Blockly.Msg.Serial_Init_tooltip = "Establecer la velocidad de comunicación en caracteres por segundo para la comunicación en serie";
Blockly.Msg.Serial_Write = "enviar al puerto serie";
Blockly.Msg.Serial_write_tooltip = "Enviar datos al puerto serie";
Blockly.Msg.Serial_read = "datos leídos en el puerto serie";
Blockly.Msg.Serial_read_tooltip = "devuelve el primer byte de datos disponible en el puerto serie, o -1 si no hay datos disponibles";
Blockly.Msg.Serial_available = "cantidad de datos en el puerto serie";
Blockly.Msg.Serial_available_tooltip = "devuelve el número de bytes disponibles en la cola del puerto serie, o 0 si no hay nada disponible";
Blockly.Msg.Serial_saut = "un salto de línea";
Blockly.Msg.Serial_saut_tooltip = "devuelve un salto de línea en el monitor en serie";
Blockly.Msg.Serial_space = "un separador";
Blockly.Msg.Serial_space_tooltip = "devolver un espacio en el monitor en serie";
Blockly.Msg.repl_read = "comando ingresado por el usuario";
// serie de software
Blockly.Msg.SSERIAL_Init = "puerto de software en Rx";
Blockly.Msg.SSERIAL_tooltip = "Creando un nuevo puerto de comunicación usando los pines y la velocidad especificados";
Blockly.Msg.SSERIAL_Read = "datos leídos en el puerto de software";
Blockly.Msg.SSERIAL_Read_tooltip = "devuelve el primer byte de datos entrantes disponibles en el puerto de software, o -1 si no hay datos disponibles";
Blockly.Msg.SSERIAL_Write = "enviar al puerto de software";
Blockly.Msg.SSERIAL_Write_tooltip = "Enviar datos al puerto de software";
Blockly.Msg.SSERIAL_Read_tooltip = "devuelve el primer byte de datos entrantes disponibles en el puerto de software, o -1 si no hay datos disponibles";
Blockly.Msg.SSERIAL_Available = "cantidad de datos en el puerto de software";
Blockly.Msg.SSERIAL_Available_tooltip = "devuelve el número de bytes disponibles en la cola del puerto de software, o 0 si no hay nada disponible";
//////////////////////////// OTTO DIY Robot /////////////////// //
Blockly.Msg.OTTO9_HOME_TEXT = "inicio";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto va directamente a la posición inicial.Pines: 2-PiernaIzq 3-PiernaDerecha 4-PieIzq 5-PieDerecho 8-Trigger US 9-Echo US and 13-Buzzer Pasivo";
Blockly.Msg.OTTO9H_HOME_TOOLTIP = "Otto va directamente a la posición inicial.Pines: 2-PiernaIzq 3-PiernaDerecha 4-PieIzq 5-PieDerecho 6-BrazoIzq 7-BrazoDerecho 8-Trigger US 9-Echo US A6-Micrófono and 13-Buzzer Pasivo";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='calibrar ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='pierna ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='pie ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='brazo ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP = 'usa pequeños valores positivos y negativos de forma iterativa, cambia gradualmente hasta que esté completamente recto (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT = 'guardar Trims en EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP = 'Usar solo después de una línea completamente recta (90º) una vez, eliminar este BLOQUE después para continuar la programación';
Blockly.Msg.OTTO9_MOVE_TEXT = "mover";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto movimientos básicos";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ adelante", "FORWARD"], ["↓ hacia atrás", "BACKWARD"], ["↺ girar a la izquierda", "LEFT"], ["↻ girar a la derecha", "RIGHT "], ["inclinar a la izquierda "," BENDLEFT "], ["inclinar a la derecha"," BENDRIGHT "], ["agitar izquierda"," SHAKELEFT "], ["agitar derecha"," SHAKERIGHT "], [" arriba "," jump "]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ adelante", "FORWARD"], ["↓ hacia atrás", "BACKWARD"], ["↺ girar a la izquierda", "LEFT"],["↻ girar a la derecha", "RIGHT "]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "velocidad";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [[" normal "," 1000 "], [" lento "," 2000 "], [" muy lento "," 3000 "], [" rápido "," 750 "], [" muy rápido "," 500 "], ["demasiado rápido"," 250 "]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [[" normal "," 45 "], [" lento "," 20 "], [" muy lento "," 10 "], [" rápido "," 60 "], [" muy rápido "," 90 "]];
Blockly.Msg.OTTO9_DANCE_TEXT = "bailar";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "¡Otto dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"], ["moonwalk ⟶", "moonwalkerRIGHT"], ["crusaito ⟵", "crusaitoLEFT"], ["crusaito ⟶", "crusaitoRIGHT"] , ["aleteo ↑", "flappingFRONT"], ["aleteo ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "tamaño";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [[" normal "," 25 "], [" pequeño "," 10 "], [" grande "," 40 "]];
Blockly.Msg.OTTO9_DO_TEXT = "hacer";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto movimientos complejos";
Blockly.Msg.OTTO9_DO_CHOICE = [["meneo"," swing "], ["subeBaja"," updown "], ["puntillasMeneo "," tiptoeSwing "], ["inquieto"," jitter "], [" giroAscendente "," ascendingTurn "]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesto";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Sonidos emocionales combinados con movimientos";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃", "OttoSuperHappy"], ["🙂", "OttoHappy"], ["🙁", "OttoSad"], ["😴", "OttoSleeping"], ["😕 "," OttoConfused "], [" 😰 "," OttoFretful "], [" 😍 "," OttoLove "], [" 😡 "," OttoAngry "], [" 🤩 "," OttoMagic "], [" 😐 "," OttoWave "], [" 😎 "," OttoVictory "], [" 😞 "," OttoFail "], [" 💩 "," OttoFart "]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sonido";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Sonidos emocionales";
Blockly.Msg.OTTO9_SOUND_CHOICE = [["😃", "S_superHappy"], ["🙂", "S_happy"], ["😊", "S_happy_short"], ["🙁", "S_sad"], ["😕 "," S_confused "], [" 🤗 "," S_cuddly "], [" 😮 "," S_OhOoh "], [" 😯 "," S_OhOoh2 "], [" 😲 "," S_surprise "], [" 🤖 1 "," S_connection "], [" 🤖2 "," S_disconnection "], [" 👇 "," S_buttonPushed "], [" ❗ "," S_mode1 "], [" ❗❗ "," S_mode2 "], ["❗❗❗", "S_mode3"], ["💤", "S_sleeping"], ["💩1", "S_fart1"], ["💩2", "S_fart2"], ["💩3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distancia [cm].Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TEXT2 = "Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Distancia de rango entre 2 cm y 400 cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstáculo";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["cerca", "10"],["muy cerca", "3"],["lejos", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "ruido medido. Pin A6";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 es silencioso, 500 ruido y más de 1000 es ruidoso, recuerde ajustar físicamente la sensibilidad del sensor";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch. Pin A0";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "usar si es condicional";
Blockly.Msg.OTTO9_GETG_TEXT = "I2C.Leer las aceleraciones y velocidades angulares";
Blockly.Msg.OTTO9_GETG_TEXT2 = "Valor";
Blockly.Msg.OTTO9_MOUTH_TEXT = "boca";
Blockly.Msg.OTTO9_MOUTH_TEXT2 = "Pines: DIN A3, CS A2, CLK A1";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "emoción de boca para la matriz de LED 8x8 # 0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃", "happyOpen"], ["🙂", "happyClosed"], ["😊", "smile"], ["😦", "23"], ["🙁 "," 24 "], [" 😮 "," smallSurprise "], [" 😲 "," bigSurprise "], [" 😕 "," confundido "], [" 😛 "," tongueOut "], [" 🙃 "," culito "], [" 😑 "," lineMouth "], [" 🙄 "," 21 "], [" 💖 "," heart "], [" 🦇1 "," vamp1 "], [" 🦇2 "," vamp2 "], [" ❌ "," xMouth "], [" ✅ "," okMouth "], [" ❓ "," 27 "], [" ⚡ "," trueno "]];
Blockly.Msg.OTTO9_EYES_TEXT = "Ojos";
Blockly.Msg.OTTO9_EYES_TEXT2 = "Pines: I2C";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "emoción de los ojos por la matriz de LED i2C de 16x8";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃", "happy_bmp"], ["🙂", "eyes_bmp"], ["😦", "sad_bmp"], ["😡1", "angry_bmp"], [" 😡2 "," angry2_bmp "], [" 😰 "," freetful_bmp "], [" 😕 "," confused_bmp "], [" 😴 "," sleep_bmp "], [" 😍 "," love_bmp "], [ "😑", "wave_bmp"], ["🤩", "magic_bmp"], ["😞", "fail_bmp"], ["🤖", "logo_bmp"], ["❌❌", "XX_bmp"], ["xx", "xx_bmp"], ["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "texto de ojos";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " borrar ojos";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limitado a CAPITALS A a Z NÚMEROS 0 a 9:; <> = @, max.9 caracteres";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "texto de boca";
Blockly.Msg.OTTO9_CLEAR_TEXT = "borrar boca";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Apaga todos los LED de la matriz de la boca 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "brazos";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "¡mueve los brazos!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["manos arriba", "HANDSUP"], ["saludo izquierdo", "HANDWAVE1"], ["saludo derecho", "HANDWAVE2"]];

Blockly.Msg.CCS811="Inicialización sensor CO2(CCS811)";
Blockly.Msg.CCS811_name="Sensor CO2(CCS811)";
Blockly.Msg.CCS811_2="SDA-SCL y conectar WAK a GND";
Blockly.Msg.CCS811_available="El sensor esta disponible";
Blockly.Msg.CCS811_readed = "Hay lectura del sensor";
Blockly.Msg.CCS811_values="valor de";

//LCD I2C
Blockly.Msg.LCD_I2C_setup = "Inicialización LCD I2C Dirección";
Blockly.Msg.LCDP_Column = "Columnas";
Blockly.Msg.LCDP_Row = "Filas";
Blockly.Msg.LCDP_Column2 = "columna";
Blockly.Msg.LCDP_Row2 = "fila";
Blockly.Msg.LCDP_Print = "y imprimir";
Blockly.Msg.LCDP_Clear = "LCD I2C Limpiar ";
Blockly.Msg.LCDP_scrollDisplay = "LCD I2C scroll display ";
Blockly.Msg.LCDP_setBcklight = "LCD I2C encender luz ";
Blockly.Msg.LCDP_showCursor = "LCD I2C mostrar cursor";
Blockly.Msg.LCDP_blinkCursor = "LCD I2C parpadear cursor ";
Blockly.Msg.LCDP_Home = "LCD I2C inicio";
Blockly.Msg.LCDP_SetCursor = "LCD I2C poner cursor";
Blockly.Msg.LCDP_Display = "LCD I2C ";

Blockly.Msg.KEY="Botón";
Blockly.Msg.GENERAL_IR="Control Remoto por IR";
Blockly.Msg.GENERAL_PRESSED="Tecla leida";
Blockly.Msg.PIN="PIN";

//OPEN SMART MP3
Blockly.Msg.MP3OS_name = "Mp3 OpenSmart";
Blockly.Msg.MP3OS_init = "Init Mp3 Opensmart using software serial";
Blockly.Msg.MP3OS_TX="Port TX#";
Blockly.Msg.MP3OS_RX="Port RX#";
Blockly.Msg.MP3OS_equalizer = "Set equalizer";
Blockly.Msg.MP3OS_volumen = "Set volumen(0-30)";
Blockly.Msg.MP3OS_operation = "Operation:";
Blockly.Msg.MP3OS_check = "Check mp3.Need to be executed in main loop";
Blockly.Msg.MP3OS_playsong = "Play track number";
Blockly.Msg.MP3OS_playsongdirectory = "in folder number";
Blockly.Msg.MP3OS_inject="Inject track number";


//Mu Vision

/*Help*/
Blockly.LKL_VS2_HELP_INIT = "initialize MU vision sensor, and choose the port.";     
Blockly.LKL_VS2_HELP_VISION_LEVEL = 'Set the recognition level, the level increases, the false alarm rate decreases, and the recognition rate will decrease accordingly.';//'设置识别等级，等级升高，误报率降低，识别率也会相应降低';
Blockly.LKL_VS2_HELP_VISION_ZOOM = 'Set the image zoom level, the level is raised, the farther the recognition distance is, the smaller the recognition angle is.';//'设置图像缩放等级，等级升高，识别距离越远，识别角度越小';

/*Warning**/
Blockly.LKL_VS2_WARNING_SETUP_ONLY = 'This block can only be placed in the setup block!';
Blockly.LKL_VS2_WARNING_MU_INIT = 'Please DON\'T forget initialize the uart1, Serial1. Configure the bauds too';             //'请勿同时使用Serial连接MU与电脑打印字符，此操作会导致电脑端打印字符错乱或通信异常';


//LED color type
Blockly.LKL_VS2_LED_CLOSE = 'Close';					//'关闭';
Blockly.LKL_VS2_LED_RED = 'Red';						//'红色';
Blockly.LKL_VS2_LED_GREEN = 'Green';					//'绿色';
Blockly.LKL_VS2_LED_YELLOW = 'Yellow';					//'黄色';
Blockly.LKL_VS2_LED_BLUE = 'Blue';						//'蓝色';
Blockly.LKL_VS2_LED_PURPLE = 'Purple';					//'紫色';
Blockly.LKL_VS2_LED_CYAN = 'Cyan';						//'青色';
Blockly.LKL_VS2_LED_WHITE = 'White';					//'白色';
//Vision Zoom
Blockly.LKL_VS2_AUTO = 'auto';							//'自动';
Blockly.LKL_VS2_VISION_ZOOM = 'Zoom';					//'缩放';
//Vision Level
Blockly.LKL_VS2_LEVEL = 'level';						//'等级';
Blockly.LKL_VS2_HIGH_SPEED = 'highSpeed';				//'速度优先';
Blockly.LKL_VS2_NORMAL = 'normal';						//'性能均衡';
Blockly.LKL_VS2_HIGH_ACCURACY = 'highAccuracy';			//'准确度优先';
//UART status
Blockly.LKL_VS2_UART_OPEN = 'Open';						//'打开';
Blockly.LKL_VS2_UART_CLOSE = 'Close';					//'关闭';
//Vision type
Blockly.LKL_VS2_COLOR_BLOCK = 'ColorBlock';             //'色块';
Blockly.LKL_VS2_VISION_COLOR_DETECT = 'ColorBlock';	    //'色块检测';
Blockly.LKL_VS2_VISION_COLOR_RECOGNITION = 'ColorRecognition';	//'颜色识别';
Blockly.LKL_VS2_VISION_BALL = 'Ball';					//'球';
Blockly.LKL_VS2_VISION_LINE = 'Line';					//'线条';
Blockly.LKL_VS2_VISION_BODY = 'Body';					//'人体';
Blockly.LKL_VS2_VISION_FACE = 'Face';					//'人脸';
Blockly.LKL_VS2_VISION_TRAFFIC_CARD = 'TrafficCard';	//'交通卡片';
Blockly.LKL_VS2_VISION_SHAPE_CARD = 'ShapeCard';		//'形状卡片';
Blockly.LKL_VS2_VISION_NUM_CARD = 'NumberCard';			//'数字卡片';
//Card type
Blockly.LKL_VS2_CARD_CIRCLE = 'Circle';					//'圆形';
Blockly.LKL_VS2_CARD_TRIANGLE = 'Triangle';				//'三角形';
Blockly.LKL_VS2_CARD_SQUARE = 'Square';					//'方形';
Blockly.LKL_VS2_CARD_TICK = 'Tick';						//'钩';
Blockly.LKL_VS2_CARD_CROSS = 'Cross';					//'叉';
Blockly.LKL_VS2_CARD_STRAIGHT = 'Straight';				//'向前';
Blockly.LKL_VS2_CARD_TURN_LEFT = 'TurnLeft';			//'向左';
Blockly.LKL_VS2_CARD_TURN_RIGHT = 'TurnRight';			//'向右';
Blockly.LKL_VS2_CARD_TURN_AROUND = 'TurnAround';		//'掉头';
Blockly.LKL_VS2_CARD_WHISTLE = 'Whistle';				//'鸣笛';
Blockly.LKL_VS2_CARD_STOP = 'Stop';						//'停止';
//Vision state
Blockly.LKL_VS2_STATE_VALUE_X = 'Horizontal';			//'横向坐标';
Blockly.LKL_VS2_STATE_VALUE_Y = 'Vertical';				//'纵向坐标';
Blockly.LKL_VS2_STATE_VALUE_WIDTH = 'Width';			//'宽度';
Blockly.LKL_VS2_STATE_VALUE_HEIGHT = 'Height';			//'高度';
Blockly.LKL_VS2_STATE_VALUE_R_CHANNEL = 'ChannelR';		//'红色通道';
Blockly.LKL_VS2_STATE_VALUE_G_CHANNEL = 'ChannelG';		//'绿色通道';
Blockly.LKL_VS2_STATE_VALUE_B_CHANNEL = 'ChannelB';		//'蓝色通道';
Blockly.LKL_VS2_STATE_VALUE_LABEL = 'Label';			//'标签';
//True False
Blockly.LKL_VS2_TRUE = 'True';							//'是';
Blockly.LKL_VS2_FALSE = 'False';						//'否';
//Enable Disable
Blockly.LKL_VS2_ENABLE = 'enable';						//'开启';
Blockly.LKL_VS2_DISABLE = 'disable';					//'关闭';
//Camera AWB
Blockly.LKL_VS2_LOCK_AWB = 'LockAWB';					//'锁定白平衡';
Blockly.LKL_VS2_WHITE_LIGHT = 'WhiteLight';				//'白光模式';
Blockly.LKL_VS2_YELLOW_LIGHT = 'YellowLight';			//'黄光模式';
Blockly.LKL_VS2_ALL = 'All';                            //'所有';

//Other
Blockly.LKL_VS2_COLOR = 'color';						//'颜色';
Blockly.LKL_VS2_DEFAULT = 'default';                    //'默认';
Blockly.LKL_VS2_LOW = 'low';                            //'低';
Blockly.LKL_VS2_MID = 'middle';                         //'中';
Blockly.LKL_VS2_HIGH = 'high';                          //'高';

/*模块文本*/
Blockly.LKL_VS2_MU = 'initialize';									//'初始化';
Blockly.LKL_VS2_MODE = 'mode';										//'模式';
Blockly.LKL_VS2_SetupVS = 'setup';          						//'设置';
Blockly.LKL_VS2_SET_RECOGNITION_REGION = 'set recognition region';  //'设置识别区域';
Blockly.LKL_VS2_SET_MIN_RECOGNITION_SIZE = 'set min recognition size';//'设置最小识别尺寸';
Blockly.LKL_VS2_SERIAL = 'port';									//'端口';
Blockly.LKL_VS2_ADDRESS = 'address';								//'地址';
Blockly.LKL_VS2_RESET = 'reset to default';						    //'恢复默认设置';
Blockly.LKL_VS2_LED_DETECT_COLOR = 'when detected then';			//'识别到物体亮';
Blockly.LKL_VS2_LED_UNDETECT_COLOR = 'else';				        //'没识别到物体亮';
Blockly.LKL_VS2_BRIGHTNESS = 'brightness';							//'亮度';
Blockly.LKL_VS2_VISION_TYPE = 'algorithm';						    //'算法';
Blockly.LKL_VS2_SET_VISION_LEVEL = 'level';				            //'设置识别等级';
Blockly.LKL_VS2_SET_FRAME_ROTATE = 'rotate Frame';					//'图像翻转';
Blockly.LKL_VS2_SET_CAMERA_HFR = 'high FPS mode';   				//'高帧率模式';
Blockly.LKL_VS2_SET_CAMERA_AWB = 'camera white balance';			//'摄像头白平衡';
Blockly.LKL_VS2_SET_VISION_ZOOM = 'zoom';   					    //'图像缩放等级';
Blockly.LKL_VS2_SET_UART_BAUD = 'UART baudrate';					//'串口波特率';
Blockly.LKL_VS2_DETECTED = 'detected';								//'检测到';
Blockly.LKL_VS2_RECOGNIZED = 'recognized';                          //'识别到';
Blockly.LKL_VS2_GET_DETECTED_MESSAGE = 'get';						//'获取';
Blockly.LKL_VS2_VALUE = 'value';									//'值';
Blockly.LKL_VS2_GET_PIX_COLOR = 'get Position';						//'捕获坐标';
Blockly.LKL_VS2_CARD_TYPE = 'type';								    //'卡片类型';
Blockly.LKL_VS2_SET_DETECT_COLOR = 'setDetectColor';				//'设置识别颜色';
Blockly.LKL_VS2_COORDINATE = 'coordinate';                          //'坐标';

// Light sensor
Blockly.LKL_VS2_LIGHT_SENSOR = 'light sensor';                      //'光线传感器';
Blockly.LKL_VS2_SET = 'set';                                        //'设置';
Blockly.LKL_VS2_SENSITIVITY = 'sensitivity';                        //'灵敏度';
Blockly.LKL_VS2_WB_CORRECTION = 'white balance correction';         //'白平衡校准';
Blockly.LKL_VS2_READ = 'read';                                      //'读取';
Blockly.LKL_VS2_PROXIMITY = 'proximity detection';                  //'接近检测';
Blockly.LKL_VS2_ALS = 'ambient light detection';                    //'环境光检测';
Blockly.LKL_VS2_GESTURE_SENSOR = 'gesture detection';               //'手势检测';
Blockly.LKL_VS2_GESTURE = 'gesture';                                //'手势';
Blockly.LKL_VS2_GESTURE_UP = 'upward';                              //'上划';
Blockly.LKL_VS2_GESTURE_DOWN = 'downward';                          //'下划';
Blockly.LKL_VS2_GESTURE_LEFT = 'leftward';                          //'左划';
Blockly.LKL_VS2_GESTURE_RIGHT = 'rightward';                        //'右划';
Blockly.LKL_VS2_GESTURE_LIFT_UP = 'pull';                           //'上抬';
Blockly.LKL_VS2_GESTURE_PUSH_DOWN = 'push';                         //'下压';

// AT WiFi
Blockly.LKL_VS2_SSID = "ssid";                                      //"名称";
Blockly.LKL_VS2_PASSWORD = "password";                              //"密码";
Blockly.LKL_VS2_WAIT_CONNECT = "connection succeeded";              //"连接成功";
Blockly.LKL_VS2_DISCONNECT = "disconnect";                          //"断开连接";
Blockly.LKL_VS2_CLIENT = "client";                                  //"客户端";
Blockly.LKL_VS2_HOT_SPOT = "hot-spot";                              //"热点";
Blockly.LKL_VS2_TARGET_IP = "target IP";                            //"目标IP";
Blockly.LKL_VS2_LOCAL_IP = "local IP";                              //"本地IP";
Blockly.LKL_VS2_WRITE = "write";                                    //"写入";

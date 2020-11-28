'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Select USB port";
Blockly.Msg.com2 = "🔔 Select USB please" ;
Blockly.Msg.check = "Check...";
Blockly.Msg.upload = "Upload...";
Blockly.Msg.error = "🔔 ERROR: Blocks not connected";
Blockly.Msg.verif = "🔔 Check the code first "
Blockly.Msg.save = "Save as format";
Blockly.Msg.update = "Update";
Blockly.Msg.new_update = "A new version is available, do you want to download and install it now?" ;
Blockly.Msg.yes = "yes";
Blockly.Msg.no = "no";
Blockly.Msg.uptodate = "💯 Version is up to date!" ;
Blockly.Msg.download = "Download completed, the application will install and restart ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "pin";
Blockly.Msg._AT = "at";
Blockly.Msg.AV = "forward";
Blockly.Msg.AR = "backward";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "right";
Blockly.Msg.left = "left";
Blockly.Msg.LetR = "right & left";
Blockly.Msg.direction = "direction";
Blockly.Msg.vitesse = "speed ";
Blockly.Msg.values = "[0-90]";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ Storage";
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Analog";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Table";
Blockly.Msg.CAT_list = "▤ List";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Logic";
Blockly.Msg.CAT_MATH = "∑ Math";
Blockly.Msg.CAT_TEXT = "❝ Text";
Blockly.Msg.CAT_VARIABLES = "↝ Variable";
Blockly.Msg.CAT_FUNCTIONS = "∬ Function";
Blockly.Msg.CAT_ARDUINO = "∞ Structure";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Input/Output";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "⏱ Time"; 
Blockly.Msg.CAT_actionneur = "↻ Motor";
Blockly.Msg.CAT_com = "📡 Communication";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "Serial USB";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "SoftwareSerial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motor Stepper";
Blockly.Msg.CAT_ultrason = "⇣ Sensors";
Blockly.Msg.CAT_bluetooth = "Bluetooth";
Blockly.Msg.CAT_RemoteIR = "IR R.Control";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Mouth";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "Grove LCD";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "MP3 DFMini";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoid";
Blockly.Msg.CAT_OLED_U8G = "OLED";
Blockly.Msg.CAT_NEOPIXEL = "NeoPixel";
Blockly.Msg.CAT_CCS811 = "CO2 sensor";
Blockly.Msg.CAT_Displays = "📺 Displays";
Blockly.Msg.CAT_AUDIO = "♫ Audio";
Blockly.Msg.CAT_OPENSMART = "MP3 OpenSmart";
Blockly.Msg.CAT_CAMERAS = "📷 Cameras";
Blockly.Msg.CAT_MUVISION = "MuVision";
Blockly.Msg.CAT_OTTO_DIY = "⊟ Otto DIY";
Blockly.Msg.CAT_SENSORS = "⇣ Sensors";
Blockly.Msg.CAT_LED = "Led";
Blockly.Msg.CAT_LEDRGB = "RGB Led";
Blockly.Msg.CAT_MAX7219 = "MAX7219 Matrix";
Blockly.Msg.CAT_BARGRAPH = "BarGraph";
Blockly.Msg.CAT_LCDI2C = "LCD I2C";
Blockly.Msg.CAT_RTC_DS3231 = "RTC DS3231";
Blockly.Msg.CAT_TIME_GENERAL = "General";


//RTC DS3231
Blockly.Msg.RTCDS3231_NAME="Init RTC DS3231.I2C pins";
Blockly.Msg.RTCDS3231_RTC="Set DateTime DS3231";
Blockly.Msg.RTCDS3231_DAY="Day";
Blockly.Msg.RTCDS3231_MONTH="Month";
Blockly.Msg.RTCDS3231_YEAR="Year";
Blockly.Msg.RTCDS3231_HOUR="Hour";
Blockly.Msg.RTCDS3231_MINUTE="Minute";
Blockly.Msg.RTCDS3231_SECOND="Second";
Blockly.Msg.RTCDS3231_DOFWEEK="Day of week";
Blockly.Msg.RTCDS3231_READ_RTC="RTC DS3231.Read the date and time";
Blockly.Msg.RTCDS3231_VALUES="value";
Blockly.Msg.RTCDS3231_Name2="RTC DS3231.";
Blockly.Msg.RTCDS3231_TEXT_DOFWEEK="Day of week in string";
Blockly.Msg.RTCDS3231_TEXT_MONTH="Month in string ";


//Wireless
Blockly.Msg.esp8266_init_tooltip = "initialization of the wifi module and connection with the indicated parameters";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/OttoDIYESP";// do not translate
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "send HTML page";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "start server";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "if in the query we find";
Blockly.Msg.esp8266_request_container = "we find";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupt: when a';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "disable interrupt on pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]]; // do not translate
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["seconds", "s"], ["milliseconds", "m"], ["microseconds", "u"]];
Blockly.Msg.time = [["seconds", "s"], ["milliseconds", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["turn on", Blockly.Msg.high], ["turn off", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['rising edge', 'Pin.IRQ_RISING'], ['falling edge', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["humidity", "h"], ["temperature", "t"]];
Blockly.Msg.couleur = [["blue", "blue"], ["yellow", "yellow"], ["red", "red"], ["green", "green"]];
Blockly.Msg.sens = [["forward", "a"], ["turn right", "d"], ["turn left", "g"]];
//sensor
Blockly.Msg.VL53L0X="Laser distance sensor";
Blockly.Msg.VL53L0X_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distance measured by laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nreturn Distance measured by laser in mm";
Blockly.Msg.bme280="Atmospheric pressure sensor";
Blockly.Msg.bme280_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="atmospheric pressure";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nreturn atmospheric pressure in hPa";
Blockly.Msg.inter="switch is";
Blockly.Msg.inter_tooltip="returns true (false) if the switch is (is not) at the indicated position";
Blockly.Msg.mc005="presence detected on the pin";
Blockly.Msg.mc005_tooltip="MC005:\nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.bp = "button pressed on the pin";
Blockly.Msg.bp_tooltip = "returns true (false) if a pushbutton is (is not) pressed";
Blockly.Msg.dht11_tooltip="DHT11 :\nreturns the humidity of the air (from 20 to 80%) or \n the temperature (from 2 to 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nreturns the humidity of the air (from 0 to 100%) or \n the temperature (from -40 to 80 � C)";
Blockly.Msg.suiveur_ligne = "black line detected on the pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brightness on the pin";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.hum = "soil moisture on the pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nreturns soil moisture from 0 to 100%";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.grove_ldr = "brightness on the pin";
Blockly.Msg.grove_ldr_tooltip = "returns the measured brightness \n0: no light \n100: very intense light";
Blockly.Msg.potar = "cursor position on the pin";
Blockly.Msg.potar_tooltip = "returns a value based on the cursor position \n0: cursor left \n255: cursor right";
Blockly.Msg.lm35 = "temperature on the pin";
Blockly.Msg.lm35_tooltip = "LM35: \nreturns the measured temperature in degrees celcius (from 0 to 80 �)";
Blockly.Msg.ultrason_1 = "distance < limit";
Blockly.Msg.ultrason_2 = "returns a High state if the measured distance is less than the limit";
Blockly.Msg.ultrason_distance1 = "distance measured by ultrasound";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSound sensor that allows to make distance measurements (of 3 cm and 4 m) \nindicate the pins of the Arduino to which will be connected TRIG and ECHO";
Blockly.Msg.ultrason = "ultrasound pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nreturns the distance measured in cm by the ultrasonic detector";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "motion detected ";
Blockly.Msg.feu = "flame detected ";
Blockly.Msg.presence = "obstacle detected ";
Blockly.Msg.appui = "touch ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.feu_tooltip = "CAP168: \nreturns true (false) if a flame is (is not) detected";
Blockly.Msg.presence_tooltip = "CAP711: \nreturns true (false) if a contact has (did not) take place";
Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected";
// bluetooth
Blockly.Msg.bluetooth1 = "if the data received by bluetooth";
Blockly.Msg.bluetooth1_tooltip = "bluetooth data reception \nconnecting module HC-06 to pins 0 and 1 \net cross Rx and Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
Blockly.Msg.bluetooth2_tooltip = "sends data via bluetooth \nconnecting module HC-06 to pins 0 and 1 \net cross pins Rx and Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate


// SOFTWARE SERIAL FOR BT
Blockly.Msg.SSERIAL_BT_Init="Init Bluetooth SoftwareSerial";
Blockly.Msg.SSERIAL_BT_TX="Pin TX#";
Blockly.Msg.SSERIAL_BT_RX="Pin RX#";
Blockly.Msg.SSERIAL_BT_BAUD="Baudios";
Blockly.Msg.SSERIAL_BT_Read="SoftwareSerial BT Read byte";
Blockly.Msg.SSERIAL_BT_Println="SoftwareSerial BT Print on new line";
Blockly.Msg.SSERIAL_BT_Print="SoftwareSerial BT Print on same line";
Blockly.Msg.SSERIAL_BT_Write="SoftwareSerial BT write"
Blockly.Msg.SSERIAL_BT_Avai="SoftwareSerial BT Available?";
Blockly.Msg.SSerial_BT_Print_Format="SoftwareSerial BT Print  Format";
Blockly.Msg.SSERIAL_BT_ReadNum="SoftwareSerial BT Read as number";
Blockly.Msg.SSERIAL_BT_ReadString="SoftwareSerial BT Read String";
Blockly.Msg.SSERIAL_BT_Readlf="until line feed";


//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";// do not translate
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "∞ Loop";
Blockly.Msg.init = "⚙️ Setup";
Blockly.Msg.base_setup_loop = "The initialization function: \nIt is used to initialize the variables, the direction of the pins ... \nIt is executed only once \nThe loop function: \nThis is the main part of the program, all the blocks placed here will run in loop and indefinitely (several thousand times per second) ";
Blockly.Msg.loop_tooltip = "all blocks placed here will run in a loop and indefinitely (several thousand times per second)";
Blockly.Msg.begin_tooltip = "this block is used to define the order in which the program should execute";
Blockly.Msg.begin = "🏁 START";
Blockly.Msg.def = "⚙️ Declaration";
Blockly.Msg.def_tooltip = "all the blocks placed here will only be executed once, this is where the different sensors or actuators are configured";
Blockly.Msg.END = "🏁 END";
Blockly.Msg.END_tooltip = "Stop the program, blocks placed afterwards will be ignored";
Blockly.Msg.code_tooltip = "Type an instruction here that is not in blocks";
//matrix
Blockly.Msg.matriceLC = "LED X";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define the symbol";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "erase the matrix";
Blockly.Msg.matrice8x8_aff = "display the symbol";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice8x8_helpurl = "https://xantorohara.github.io/led-matrix-editor/";// do not translate
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "turn off the LEDs of the matrix";
Blockly.Msg.matrice16x8_aff = "display the symbol";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="time elapsed in";
Blockly.Msg.millis_start="start a timekeeping in";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "returns the duration in microseconds of a UP or DOWN pulse applied to a pin.If the parameter value is HIGH, the block waits for the pin to go HIGH, starts then the timing, waits for the pin to go back to the LOW level and then stop the timing ";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ wait";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Specify the wait time in seconds, milliseconds or microseconds. \nThe program does nothing else during this time";
Blockly.Msg.millis1 = "duration in";
Blockly.Msg.millis2 = "from the beginning";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in milliseconds, seconds or microseconds since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "state duration";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";// do not translate
Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "all";
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
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "the LED on the board";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Turn off or turn on the LED on the Arduino board";
Blockly.Msg.blink = "blink the board LED";
Blockly.Msg.blink_tooltip = "The board LED flashes 1 or 10 times per second";
Blockly.Msg.del = "the LED in pin";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 green, 1 yellow and 1 red), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (red, green, blue)";
Blockly.Msg.pixel1 = "NeoPixel";
Blockly.Msg.pixel2 = "show pixels";
Blockly.Msg.pixel3 = "color";
Blockly.Msg.pixel4 = "# of pixels";
Blockly.Msg.pixel5 = "set pixels brightness";
Blockly.Msg.pixel6 = "pixel #";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "put the DIGITAL pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
Blockly.Msg.toggle = "toggle the state of the pin";
Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "put the PWM pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "DIGITAL pin state";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "ANALOG pin value";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "play";
Blockly.Msg.play_tooltip = "play the note";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "beep on the pin";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emit a sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duration (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop the sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";// do not translate
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotate";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "angle [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possible rotation between 0 and 180 degrees";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "spin";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed [0-90] and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "serial port on";
Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "send to serial port";
Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "data read on the serial port";
Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "amount of data on the serial port";
Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "software port on Rx";
Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "data read on the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "send to the software port";
Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "amount of data on the software port";
Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////OTTO DIY Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.OTTO9_HOME_TEXT = "home";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto goes to home position straight.Reserved pins: 2-leftleg 3-rightleg 4-leftfoot 5-rightfoot 8-Trigger US 9-Echo US and 13-Passive buzzer";
Blockly.Msg.OTTO9H_HOME_TOOLTIP = "Otto goes to home position straight.Reserved pins: 2-leftleg 3-rightleg 4-leftfoot 5-rightfoot 6-leftArm 7-rightArm 8-Trigger US 9-Echo US A6-Microphone and 13-Passive buzzer";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";// do not translate
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";// do not translate
Blockly.Msg.OTTO9_CALIBRATION='calibrate ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='leg ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='foot ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='arm ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'save Trims on EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "move";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto basic movements";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"]]; 
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normal", "45"],["slow", "20"],["very slow", "10"] , ["fast", "60"], ["very fast", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dance";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["little", "10"], ["big", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "do";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesture";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 happy1", "OttoSuperHappy"],["🙂 happy2", "OttoHappy"], ["🙁 sad", "OttoSad"], ["😴 sleep", "OttoSleeping"], ["😕 confused", "OttoConfused"], ["😰 fretful", "OttoFretful"], ["😍 love", "OttoLove"], ["😡 angry", "OttoAngry"], ["🤩 magic", "OttoMagic"], ["😐 wave", "OttoWave"], [" 😎 victory", "OttoVictory"], ["😞 fail", "OttoFail"], ["💩 fart", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sound";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance [cm].Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TEXT2 = "Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstacle";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["close", "10"],["very close", "3"],["far", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise measured. Pin A6";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch. Pin A0";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "Read the accelerations and angular velocities";
Blockly.Msg.OTTO9_GETG_TEXT2 = "Value";
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 happy1", "happyOpen"],["🙂 happy2", "happyClosed"], ["😊 smile", "smile"], ["😦 sad1", "23"], ["🙁 sad2", "24"], ["😮 surprise", "smallSurprise"], ["😲 Surprise2", "bigSurprise"], ["😕 confused", "confused"],["😛 tongue", "tongueOut"],["🙃 silly", "culito"],  ["😑 serious", "lineMouth"], ["🙄 upset", "21"], ["💖 heart", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TEXT2 = "Pins: I2C";
Blockly.Msg.OTTO9_MOUTH_TEXT2 = "Pins: DIN A3, CS A2, CLK A1";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];

//CCS811

Blockly.Msg.CCS811="Init CO2(CCS811) sensor";
Blockly.Msg.CCS811_name="CO2(CCS811) sensor";
Blockly.Msg.CCS811_2="- SDA-SCL and connect WAK to GND";
Blockly.Msg.CCS811_available="Is the sensor available?";
Blockly.Msg.CCS811_readed = "Is the measure readed?";
Blockly.Msg.CCS811_values="value";

//LCD I2C
Blockly.Msg.LCD_I2C_setup = "Init LCD I2C Address";
Blockly.Msg.LCDP_Column = "Columns";
Blockly.Msg.LCDP_Row = "Rows";
Blockly.Msg.LCDP_Column2 = "column";
Blockly.Msg.LCDP_Row2 = "row";
Blockly.Msg.LCDP_Print = "and print";
Blockly.Msg.LCDP_Clear = "LCD I2C clear";
Blockly.Msg.LCDP_scrollDisplay = "LCD I2C scroll display ";
Blockly.Msg.LCDP_setBcklight = "LCD I2C set Backlight ";
Blockly.Msg.LCDP_showCursor = "LCD I2C show Cursor ";
Blockly.Msg.LCDP_blinkCursor = "LCD I2C blink Cursor ";
Blockly.Msg.LCDP_Home = "LCD I2C home";
Blockly.Msg.LCDP_SetCursor = "LCD I2C set cursor";
Blockly.Msg.LCDP_Display = "LCD I2C ";


//REMOTE CONTROL IR
Blockly.Msg.KEY="Key";
Blockly.Msg.GENERAL_IR="Remote Control IR";
Blockly.Msg.GENERAL_PRESSED="Read key";
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


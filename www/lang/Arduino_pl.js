'use strict';
goog.provide ( 'Blockly.Msg.pl');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "⚠️ Wybierz port USB.";
Blockly.Msg.com2 = "⚠️ Proszę wybierz port USB." ;
Blockly.Msg.check = "Sprawdź...";
Blockly.Msg.upload = "Wyślij...";
Blockly.Msg.error = "🛑 Błąd: Bloki nie są połączone.";
Blockly.Msg.verif = "⛔ Najpierw sprawdź kod. "
Blockly.Msg.save = "Zapisz jako...";
Blockly.Msg.update = "Zaktualizuj.";
Blockly.Msg.new_update = "Dostępna jest nowa wersja , czy chcesz ściągnąć i zaktualizować teraz ?" ;
Blockly.Msg.yes = "Tak";
Blockly.Msg.no = "Nie";
Blockly.Msg.uptodate = "💯 Ta wersja jest nieaktualna!" ;
Blockly.Msg.download = "Ściąganie zakończone, nastąpi instalacja i restart aplikacji ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://ottodiy.com"; // do not translate
Blockly.Msg.pin = "na pinie";
Blockly.Msg._AT = "na";
Blockly.Msg.AV = "do przodu";
Blockly.Msg.AR = "do tyłu";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "w prawo";
Blockly.Msg.left = "w lewo";
Blockly.Msg.LetR = "w prawo i w lewo";
Blockly.Msg.direction = "kierunek";
Blockly.Msg.vitesse = "prędkość ";
Blockly.Msg.values = "[0-90]";
Blockly.Msg.Name = "Name";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ Pamięć";
Blockly.Msg.CAT_numerique = "- Cyfrowe";
Blockly.Msg.CAT_analogique = "~ Analogowe";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Arrays";
Blockly.Msg.CAT_list = "▤ Lista";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Logiczne";
Blockly.Msg.CAT_MATH = "∑ Matematyczne";
Blockly.Msg.CAT_TEXT = "❝ Tekstowe";
Blockly.Msg.CAT_VARIABLES = "↝ Zmienne";
Blockly.Msg.CAT_FUNCTIONS = "∬ Funkcje";
Blockly.Msg.CAT_ARDUINO = "∞ Struktura";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Wejście/Wyjście";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Wyjdź";
Blockly.Msg.CAT_ARDUINO_TIME = "⏱ Czas";
Blockly.Msg.CAT_actionneur = "↻ Silnik";
Blockly.Msg.CAT_com = "☎ Komunikacja";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Port szeregowy";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Port Soft Serial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Silnik krokowy";
Blockly.Msg.CAT_ultrason = "⇣ Czujnik";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ Usta LED";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ Oczy LED";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ Wyświetlacz LCD";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "🤖 Otto";
Blockly.Msg.CAT_ESCORNABOT="🐞 Escornabot";
Blockly.Msg.CAT_TEMP = "🌡️ Temperature"
Blockly.Msg.CAT_LIGHT = "🌞 Light"
Blockly.Msg.CAT_WATER = "💧 Water"
Blockly.Msg.CAT_SOUND ="🎤 Noise"
Blockly.Msg.CAT_GAS = "⛽ Gas"
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ Neopixel";
Blockly.Msg.CAT_NEOMATRIX = "🌈 NeoMatrix";
Blockly.Msg.CAT_CCS811 = "Sensor CO2";
Blockly.Msg.CAT_Displays = "🖥 Displays";
Blockly.Msg.CAT_AUDIO = "♫ Audio";
Blockly.Msg.CAT_CAMERAS = "📷 Cameras";
Blockly.Msg.CAT_MUVISION = "MuVision";
Blockly.Msg.CAT_OTTO_DIY = "⊟ Otto DIY";
Blockly.Msg.CAT_SENSORS = "⇣ Sensors";
Blockly.Msg.CAT_SSENSORS = "Simple Sensors";
Blockly.Msg.CAT_LED = "Led";
Blockly.Msg.CAT_LEDRGB = "RGB Led";
Blockly.Msg.CAT_MAX7219 = "Matrix MAX7219";
Blockly.Msg.CAT_MAX1640 = "Matrix TM1640";
Blockly.Msg.CAT_BARGRAPH = "BarGraph";
Blockly.Msg.CAT_LCDI2C = "LCD I2C";
Blockly.Msg.CAT_RTC_DS3231 = "RTC DS3231";
Blockly.Msg.CAT_TIME_GENERAL = "General";
Blockly.Msg.CAT_BME280 = "BME280 Preassure";
Blockly.Msg.CAT_VL53L0X = "VL53L0X Laser";
Blockly.Msg.CAT_APDS9960 = "APDS9960 Gesture";
Blockly.Msg.CAT_TFT_ST7735 = "TFT ST7735";
Blockly.Msg.CAT_TCS34725="Color TCS34725";
Blockly.Msg.CAT_RADIO_TEA5767="Radio TEA5767";
Blockly.Msg.CAT_HMC5883="Compass HMC5883";
Blockly.Msg.CAT_RFID="RFID MFRC522";
Blockly.Msg.CAT_KEYBOARD="Keyboard & Mouse";
Blockly.Msg.CAT_GPS="GPS NEO6";
Blockly.Msg.CAT_MQTT = "🌐 MQTT";
Blockly.Msg.CAT_IFTTT = "🌐 IFTTT";
Blockly.Msg.CAT_NTP = "🌐 NTP";
Blockly.Msg.CAT_THINGSPEAK = "🌐 Thingspeak";
Blockly.Msg.CAT_TELEGRAM = "🌐 Telegram";
Blockly.Msg.CAT_OPENWEATHER="🌐 OpenWeather";
Blockly.Msg.CAT_WIFISERVER="🌐 WiFi server";
Blockly.Msg.CAT_TM1637="💡 DIGITS";
Blockly.Msg.CAT_FIREBASE = "🌐 Firebase";
Blockly.Msg.CAT_ESPNOW = "🌐 EspNow";
Blockly.Msg.CAT_ALEXA = "🌐 Alexa";
Blockly.Msg.CAT_RTC_INTERNAL = "⏲️ Internal Clock";

//DISPALY 7 SEGMENT TM1637
Blockly.Msg.TM1637_name = "TM1637 Display 7 segment.";
Blockly.Msg.TM1637_init = "Init TM1637 Display 7 segment";
Blockly.Msg.TM1637_PinCLK = "Pin CLK";
Blockly.Msg.TM1637_PinDIO = "Pin DIO";
Blockly.Msg.M1637_Brightness = "Set brightness(0-7)";
Blockly.Msg.M1637_turnOFF_ON = "Turn";
Blockly.Msg.M1637_Clear = "Clear";
Blockly.Msg.M1637_number="Set number";
Blockly.Msg.M1637_Digit = "Position(0-3)";
Blockly.Msg.M1637_Length = "Number of digits to set";
Blockly.Msg.M1637_fill = "Leading zeros";
Blockly.Msg.M1637_digitsegment="Set segment array digit(0-3)";
Blockly.Msg.M1637_value="Value";
Blockly.Msg.M1637_arraysegment="Display segment array.";
Blockly.Msg.M1637_points = "Points";

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

//INTERNAL RTC ESP32
Blockly.Msg.INTERNALRTC_NAME="Internal RTC";
Blockly.Msg.INTERNALRTC_RTC="⏲️ Set Date & Time ";
Blockly.Msg.INTERNALRTC_DAY="Day";
Blockly.Msg.INTERNALRTC_MONTH="Month";
Blockly.Msg.INTERNALRTC_YEAR="Year";
Blockly.Msg.INTERNALRTC_HOUR="Hour";
Blockly.Msg.INTERNALRTC_MINUTE="Minute";
Blockly.Msg.INTERNALRTC_SECOND="Second";
Blockly.Msg.INTERNALRTC_DOFWEEK="Day of week";
Blockly.Msg.INTERNALRTC_VALUES="value";
Blockly.Msg.INTERNALRTC_Name2="⏲️ RTC.";
Blockly.Msg.INTERNALRTC_GETTIME="Get Time";
Blockly.Msg.INTERNALRTC_GETDATE="Get Date";

//Wireless
Blockly.Msg.esp8266_init_tooltip = "inicjalizacja i połączenie  modułu wifi z wybranymi parametrami.";
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
Blockly.Msg.esp8266_recept_tooltip = "otrzymywanie";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "Wyślij stronę HTML.";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "Urucom serwer.";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "jeżeli w zapytaniu znajdziemy";
Blockly.Msg.esp8266_request_container = "znaleziono";
Blockly.Msg.esp8266_html_webpage = "Name of the HTML page:";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Przerwij: kiedy';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "Wyłącz przerwania na pinie.";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Opisuje działanie jakie ma nastąpić gdy zewnętrzne przerwanie (możliwe 4 tryby) nastąpi na  pinie 2 lub 3.";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Zablokuj poprzednio wprowadzone zewnętrzne przerwanie.";
Blockly.Msg.LKL_MODE = 'Wykryto na pinie.';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["wolno", "1000"], ["szybko", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["sekundy", "s"], ["milisekundy", "m"], ["mikrosekundy", "u"]];
Blockly.Msg.time = [["sekundy", "s"], ["milisekundy", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "Nr. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(stan wysoki)", Blockly.Msg.high], ["0(stan niski)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["włącz", Blockly.Msg.high], ["wyłącz", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "prawda"], ["0", "fałsz"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['krawędź wzrostu', 'RISING'], ['krawędź spadku', 'FALLING'], ['zmiana stanu', 'CHANGE'], ['stan niski', Blockly. Msg.low]];
Blockly.Msg.irq = [['krawędź wzrostu', 'Pin.IRQ_RISING'], ['krawędź spadku', 'Pin.IRQ_FALLING'], ['stan wysoki', 'Pin.IRQ_HIGH_LEVEL'], ["stan niski "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["wilgotność", "h"], ["temperatura", "t"]];
Blockly.Msg.couleur = [["niebieski", "niebieski"], ["żółty", "żółty"], ["czerwony", "czerwony"], ["zielony", "zielony"]];
Blockly.Msg.sens = [["do przodu", "a"], ["skręć w prawo", "d"], ["skręć w lewo", "g"]];
//sensor
Blockly.Msg.VL53L0X="Laserowy czujnik odległości.";
Blockly.Msg.VL53L0X_tooltip="Inicjalizuj czujnik.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="Odległość mierzona przez laser.";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nZwraca odległość mierzoną przez laser w mm.";
Blockly.Msg.bme280="Czujnik ciśnienia atmosferycznego.";
Blockly.Msg.bme280_tooltip="Inicjalizuj czujnik.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="Ciśnienie atmosferyczne.";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nZwraca ciśnienie atmosferyczne w hPa";
Blockly.Msg.inter="Wyłącznik gotowy.";
Blockly.Msg.inter_tooltip="Zwraca prawdę (fałsz) jeżeli wyłącznik jest (nie jest) na wskazanej pozycji.";
Blockly.Msg.mc005="Wykryto obecność na pinie.";
Blockly.Msg.mc005_tooltip="MC005:\nZwraca prawdę (fałsz) jeżeli wykryto (nie wykryto) obecności.";
Blockly.Msg.bp = "Naciśnięto przycisk na pinie.";
Blockly.Msg.bp_tooltip = "Zwraca prawdę (fałsz) jeżeli przycisk jest (nie jest) przyciśnięty.";
Blockly.Msg.dht11_tooltip="DHT11 :\nZwraca wilgotność powietrza (od 20 do 80%) lub \n  temperaturę (od 20 do 50�C).";
Blockly.Msg.dht22_tooltip = "DHT22: \nZwraca wilgotność powietrza (od 0 do 100%) lub \n temperaturę (od -40 do 80 � C).";
Blockly.Msg.suiveur_ligne = "Czarna linia wykryta na pinie.";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nZwraca prawdę (fałsz) jeżeli na pinie wykryto (nie wykryto) czarną linię.";
Blockly.Msg.light = "Jasność na pinie.";
Blockly.Msg.light_tooltip = "Zwraca wartość zależnie od jasności \n0: czerń \n255: pełna jasność.";
Blockly.Msg.hum = "Wilgotność gleby na pinie.";
Blockly.Msg.hum_tooltip = "CAP 615: \nZwraca wilgotność gleby od 0 do 100%.";
Blockly.Msg.light_tooltip = "Zwraca wartość zależnie od jasności \n0: czerń \n255: pełna jasność.";
Blockly.Msg.grove_ldr = "Jasność na pinie.";
Blockly.Msg.grove_ldr_tooltip = "Zwraca mierzoną jasność \n0: brak światła \n100: bardzo intensywne światło.";
Blockly.Msg.potar = "Pozycja kursora na pinie.";
Blockly.Msg.potar_tooltip = "Zwraca wartość zależnie od pozycji kursora \n0: kursor po lewej \n255: kursor po prawej.";
Blockly.Msg.lm35 = "Temperatura na pinie.";
Blockly.Msg.lm35_tooltip = "LM35: \nZwraca mierzoną temperaturę w stopniach Celsjusza (od 0 do 80 �.)";
Blockly.Msg.ultrason_1 = "dystans < limit";
Blockly.Msg.ultrason_2 = "Zwraca stan wysoki gdy zmierzony dystans (odległość) jest mniejszy niż limit.";
Blockly.Msg.ultrason_distance1 = "Odległość mierzona ultradźwiękami.";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \n Czujnik dźwiękowy który pozwala na pomiar odległości(od 3 cm do 4 m) \n podać piny w Arduino do których będą podłączone  TRIG i ECHO.";
Blockly.Msg.ultrason = "Piny ultradźwiękowe.";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nZwraca odległość zmierzoną przez czujnik w cm.";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "Wykryto ruch.";
Blockly.Msg.feu = "Wykryto płomień.";
Blockly.Msg.presence = "Wykryto przeszkodę.";////////////////////////////////////
Blockly.Msg.appui = "Dotknięcie ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nZwraca prawdę (fałsz) jeżeli wykryto (nie wykryto) obecności.";
Blockly.Msg.feu_tooltip = "CAP168: \nZwraca prawdę (fałsz) jeżeli wykryto (nie wykryto) płomień.";
Blockly.Msg.presence_tooltip = "CAP711: \nZwraca prawdę (fałsz) jeżeli wykryto (nie wykryto) przeszkodę.";
Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected.";
// bluetooth ///////////////////////////
Blockly.Msg.bluetooth1 = "Dane otrzymane przez bluetooth.";
Blockly.Msg.bluetooth1_tooltip = "Otrzymywanie danych przez bluetooth \npodłącz płytkę HC-06 do pinów 0 i 1 \n nie zamieniaj pinów  Rx i Tx .";
Blockly.Msg.bluetooth2 = "Dane wysłane przez bluetooth.";
Blockly.Msg.bluetooth2_tooltip = "Otrzymywanie danych przez bluetooth \npodłącz płytkę HC-06 do pinów 0 i 1 \n nie zamieniaj pinów  Rx i Tx .";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen  /////////////////////////////////////
Blockly.Msg.lcd_fond = "Dół";
Blockly.Msg.LCD = "Ekran LCD";
Blockly.Msg.LCDi2c_tooltip = "Inicjalizacja wyświetlacza LCD I2C 2-linie po 16-znaków , z podświetleniem RGB. \n Wyświetlacz <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "Inicjalizacja wyświetlacza LCD, 2 linie po 16 znaków, wskazując piny do podświetlenia.";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "Pokaż na wyświetlaczu.";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "Wyświetl tekst we wskazanym położeniu.";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "Napisz tekst(y) na wyświetlaczu LCD.";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "linia 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "linia 2";
Blockly.Msg.LCD_line = "linia";
Blockly.Msg.LCD_col = "kolumna";
Blockly.Msg.LCD_raz = "wyczyść / skazuj wyświetlacz LCD.";
Blockly.Msg.LCD_raz_tooltip = "Wyczyść wyświetlacz.";
Blockly.Msg.lcd_aff_symbole = "Wyświetl symbol.";
Blockly.Msg.lcd_aff_symbole_tooltip = "Pokaż znak (symbol), który był poprzednio zdefiniowany.";
Blockly.Msg.lcd_symbole = "Zdefiniuj znak";
Blockly.Msg.lcd_symbole_tooltip = "Utworzenie znaku na wyświetlaczu LCD: \n 0 wyłącza piksel \n 1 włącza piksel";
// structure  /////////////////////////
Blockly.Msg.loop = "∞ Pętla";
Blockly.Msg.init = "⚙️ Ustawienia";
Blockly.Msg.base_setup_loop = "Inicjalizacja: \nInicjalizacja zmiennych, przypisanie pinów ... \nFunkcja wykonywana jednokrotnie na początku programu \nFunkcja pętla: \nTo jest główna część programu , wszystkie umieszczone tu bloki będą wykonywane w nieskończoność (kilka tysięcy razy na sekundę) ";
Blockly.Msg.loop_tooltip = "Wszystkie umieszczone tu bloki będą wykonywane w nieskończoność (kilka tysięcy razy na sekundę)";
Blockly.Msg.begin_tooltip = "Tego bloku używamy w celu określenia kolejności w jakiej ma być wykonywany program";
Blockly.Msg.begin = "🏁 START";
Blockly.Msg.def = "⚙️ Deklaracja";
Blockly.Msg.def_tooltip = "Wszystkie bloki tutaj umieszczone będą wykonane tylko jeden raz , w tym miejscu umieszcza się konfigurację wszelkich czujników lub elementów wykonawczych ";
Blockly.Msg.END = "🏁 KONIEC";
Blockly.Msg.END_tooltip = "Koniec programu , bloki umieszczone poniżej będą ignorowane";
Blockly.Msg.code_tooltip = "Tutaj wpisz instrukcje, które nie są ujęte w blokach";
//matrix ////////////////////////////////
Blockly.Msg.matriceLC = "Wprowadź linię LED.";
Blockly.Msg.matrice_create_aff = "Utwórz blok 'wyświetl symbol %1'.";
Blockly.Msg.matrice_create_symbole = "Utwórz blok 'ustaw symbol %1'.";
Blockly.Msg.matrice = "Matryca";
Blockly.Msg.matrice8x8_tooltip = "Inicjalizacja matrycy 64 Led, trzeba wskazać piny w arduino, do których podłączone : DIN, CLK i CS.";
Blockly.Msg.matrice8x8_symbole = "Zdefiniuj symbol.";
Blockly.Msg.matrice8x8_symbole_tooltip = "Definicja symbolu dla matrycy: \n 0 wyłącza  LED \n 1 włącza LED.";
Blockly.Msg.matrice8x8_efface = "Skasuj / wymaż matrycę.";
Blockly.Msg.matrice8x8_aff = "Wyświetl symbol.";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 włącza diodę LED w matrycy a 0 ją wyłącza.";
Blockly.Msg.matrice8x8_del_tooltip = "Włącza (wyłącza) diodę LED w matrycy wskazując jej współrzędne \n Uwaga zliczanie rozpoczyna się od 0.";
Blockly.Msg.matrice8x8_aff_tooltip = "Wyświetla poprzednio zdefiniowany symbol.";
Blockly.Msg.matrice8x8_efface_tooltip = "Wyłącza wszystkie diody LED w matrycy.";
Blockly.Msg.matrice8x8_helpurl = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.matrice16x8_tooltip = "Inicjalizacja tablicy 128 Led. \nMatryca <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5.";
Blockly.Msg.matrice16x8_symbole = "Zdefiniuj symbol.";
Blockly.Msg.matrice16x8_symbole_tooltip = "Definicja symbolu dla matrycy: \n 0 wyłącza LED \n 1 włącza LED.";
Blockly.Msg.matrice16x8_efface = "Wyłącza wszystkie diody LED w matrycy.";
Blockly.Msg.matrice16x8_aff = "Wyświetl symbol.";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 włącza diodę LED w matrycy a 0 ją wyłącza.";
Blockly.Msg.matrice16x8_del_tooltip = "Włącza (wyłącza) diodę LED w matrycy wskazując jej współrzędne \n Uwaga zliczanie rozpoczyna się od 0.";
Blockly.Msg.matrice16x8_aff_tooltip = "Wyświetla poprzednio zdefiniowany symbol.";
Blockly.Msg.matrice16x8_efface_tooltip = "Wyłącza wszystkie diody LED w matrycy.";
Blockly.Msg.matrice16x8_helpurl = "https://wikifactory.com/+OttoDIY/humanoid";
//time ////////////////////
Blockly.Msg.millis ="Upływ czasu w ms.";
Blockly.Msg.millis_start="Rozpocznij bieg czasu .";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "Podaje / zwraca czas trwania  impulsu w mikrosekundach UP lub DOWN podanego na dany pin. Jeżeli wartość parametru jest HIGH, blok czeka aż pin przejdzie w stan HIGH, wtedy rozpoczyna odliczanie, i czeka aż pin przejdzie z powrotem w stam LOW i zatrzymuje odliczanie czasu.";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ Czekaj.";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Podaje czas czekania w sekundach, millisekundach lub  mikrosecundach. \nProgram w tym czasie nie wykonuje żadnych instrukcji.";
Blockly.Msg.millis1 = "Czas w";
Blockly.Msg.millis2 = "od początku.";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "Zwraca czas trwania w sekundach, millisekundach lub  mikrosekundach od momentu rozpoczęcia programu. ";
Blockly.Msg.ARDUINO_PULSEIN = "Czas trwania impulsu.";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "Ten blok sprawdza czy upłynąl wskazany czas, jeżeli tak jest wówczas wykonywane są bloki umieszczone wewnątrz." ;
Blockly.Msg.tempo1 = "Wszystko.";
//OLED //////////////////////////////
Blockly.Msg.lp2i_u8g_draw_string = "Wyświetlacz OLED I2C.";
Blockly.Msg.lp2i_u8g_draw_string_Text = "Tekst do wyświetlenia =";
Blockly.Msg.lp2i_u8g_draw_string_X = "rząd x (127 maks) = .";
Blockly.Msg.lp2i_u8g_draw_string_Y = "linia y (63 maks) = .";
Blockly.Msg.lp2i_u8g_draw_4strings = "Wyświetlacz OLED I2C.";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "Tekst do wyświetlenia :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "linia 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "linia 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "linia 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "linia 4 =";
Blockly.Msg.lp2i_u8g_print = "Wyświetlacz OLED I2C.";
Blockly.Msg.lp2i_u8g_print_N = "Numer do wyświetlenia ="
Blockly.Msg.lp2i_u8g_print_X = "rząd x (127 maks) = .";
Blockly.Msg.lp2i_u8g_print_Y = "linia y (63 maks) = .";
Blockly.Msg.lp2i_u8g_4draw_print = "Wyświetlacz OLED I2C.";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "Do wyświetlenia :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "linia 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Numer 1 (na końcu) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "linia 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Numer 2 (na końcu) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "linia 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Numer 3 (na końcu) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "linia 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Numer 4 (na końcu) ="
// LED ////////////////////////////////
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "Dioda na płytce (arduino).";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Wyłącza lub włącza diodę LED na płytce Arduino.";
Blockly.Msg.blink = "Światło pulsujące LED";
Blockly.Msg.blink_tooltip = "Dioda LED na płytce błyska/miga 1 lub 10 na sekundę.";
Blockly.Msg.del = "Dioda LED na pinie.";
Blockly.Msg.del_tooltip = "Włącza (wyłącza) diodę LED podłączoną do wskazanego pinu.";
Blockly.Msg.bargraphe = "Bargraf";
Blockly.Msg.bargraphe_allume="Włącz LEDy do";
Blockly.Msg.bargraphe_allume_tooltip="0 nie zapala żadnej diody LED \n2,5 zapala pierwsze 2 diody LED , 3 zapala połowę a \n10 zapala wszystkie diody LED.";
Blockly.Msg.bargraphe_tooltip = "Moduł (pasek) graficzny zbudowany z 10 diod LED (8 zielonych , 1 żółta i 1 czerwona), trzeba wskazać piny na płytce arduino do których będą podłączone DCKI i DI.";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="Wskazuje piny PWM na płytce arduino, do których podłączyć diodę RGB.";
Blockly.Msg.rvb_set="Pokaż kolor.";
Blockly.Msg.rvb_anode="common anode";
Blockly.Msg.rvb_cathode="common cathode";
Blockly.Msg.rvb_set_x="X Led on the board.Show color";
Blockly.Msg.rvb_set_tooltip="Wyświetla kolor wskazując wartości składowe kolorów (czerwony, zielony, niebieski).";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "uaktualnij piksele";
Blockly.Msg.pixel3 = "z kolorem ";
Blockly.Msg.pixel4 = "numer";
Blockly.Msg.pixel5 = "ustaw jasność piksela na";
Blockly.Msg.pixel6 = "ustaw piksel";
Blockly.Msg.pixel1_tooltip="moduł neopixel RGB , podaj do jakiego pina podłączyć oraz liczbę pikseli.";
Blockly.Msg.pixel2_tooltip="pozuje wprowadzone zmiany";
Blockly.Msg.pixel5_tooltip="Ustaw jasność pikseli na (od 0 do 255).";
Blockly.Msg.pixel3_tooltip="Wybierz piksel do zapalenia oraz jego kolor. \n Uwaga numerowanie rozpoczyna się od 0.";
// output  //////////////////////////////////////////
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "Ustaw pin cyfrowy DIGITAL.";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "Zapisz stan logiczny  0 lub 1 do wskazanego wyjścia.";
Blockly.Msg.toggle = "Przełącz stan pinu.";
Blockly.Msg.toggle_tooltip = "Przełącz: \n Zapisz stan logiczny 0 jeżeli poprzednio było 1 (i na odwrót) na wskazanym wyjściu.";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "Ustaw pin PWM.";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "Wprowadź wartość pomiędzy 0 i 255 na wskazane wyjście.";
// input /////////////////////////////
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "Stan pinu CYFROWEGO.";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "Zwraca stan logiczny (0 lub 1) wskazanego pinu \ndomyślnie zwraca 1 (stan wysoki) jeżeli pull-up jest włączone. ";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "Odczytuje stan logiczny  0 lub 1 na pinie cyfrowym. ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "Stan pinu ANALOGOWEGO.";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "Zwraca wartość pomiędzy 0 i 1023. ";
// audio ///////////////////////////
Blockly.Msg.play = "Zagraj.";
Blockly.Msg.play_tooltip = "Zagraj nutę.";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "'Pip' na pinie.";
Blockly.Msg.beep_TOOLTIP = "'Pip' ( 440Hz przez 1s) na wybranym pinie.";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "Emituje dźwięk na pinie.";
Blockly.Msg.ARDUINO_TONE_INPUT1_X = "🎼 Internal Buzzer";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "Częstotliwość (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "Czas trwania (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "Emituje dźwięk na wybranym pinie, dźwięk o wybranej (ustawionej )częstotliwości i przez ustawiony czas.";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "Zatrzymaj dźwięk na pinie.";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "Zatrzymuje dźwięk na wybranym pinie.n";
Blockly.Msg.ARDUINO_RTTTL_BLOCK = "Play blocking RTTTL ";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "Głośność [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay (autoodtwarzanie)";
Blockly.Msg.lp2i_mp3 = "Odtwarzacz MP3";  ////////////////////////////////
Blockly.Msg.lp2i_mp3_tooltip = "DF Player Mini mp3: \n inicjalizacja modułu, głośność i tryb pracy \n Moduł MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) . ";
Blockly.Msg.lp2i_mp3_play = "Odtwarzaj plik mp3.";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "Odtwarzaj (zagraj) wybraną piosenkę.";
Blockly.Msg.lp2i_mp3_play_tooltip = "Odtwarza bieżącą piosenkę.";
Blockly.Msg.lp2i_mp3_pause = "Zatrzymaj odtwarzanie pliku mp3.";
Blockly.Msg.lp2i_mp3_pause_tooltip = "Zatrzymaj bieżącą piosenkę.";
Blockly.Msg.lp2i_mp3_prev = "Odczytaj poprzedni plik mp3.";
Blockly.Msg.lp2i_mp3_prev_tooltip = "Odtwarzaj poprzednią piosenkę.";
Blockly.Msg.lp2i_mp3_vol = "Ustaw głośność na :";
Blockly.Msg.lp2i_mp3_vol_tooltip = "Ustaw głośność na wybraną wartość [0-48].";
Blockly.Msg.lp2i_mp3_next = "Odczytaj następny plik mp3.";
Blockly.Msg.lp2i_mp3_next_tooltip = "Odtwarza następną piosenkę.";
// servomotor /////////////////////////
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "Obróć o .";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "kąt [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "Możliwy obrót w zakresie 0 i 180 stopni.";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "Obracaj.";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Obróć serwo podłączone do podanego pinu, z podaną prędkością i w podanym kierunku.";
//engine //////////////////////////////////
Blockly.Msg.mot_tooltip = "Płytka rozszerzająca L293D , kontroler silniczków : \n uruchamia obydwa silniczki (M1 and M2) w celu jazdy lub skrętu, prędkość można ustawić w zakresie pomiędzy 0 i 90.";
Blockly.Msg.mot_stop = "Stop";
Blockly.Msg.mot_stop_tooltip = "Płytka rozszerzająca L293D \n zatrzymaj obydwa silniczki (M1 i M2).";
Blockly.Msg.moteur = "Uruchom silnik.";
Blockly.Msg.moteurstop = "Zatrzymaj silnik.";
Blockly.Msg.moteur_tooltip = "Uruchamia silnik (DC) podłączony do podanego pinu, z wybraną prędkością \nprędkość = 0 -> silnik wyłączony.";
Blockly.Msg.moteurdagu_tooltiprs040 = "Płytka RS 040 : \n uruchamia jeden z 2 silniczków podłączonych do wyjścia na tej płytce, prędkość można ustawić w zakresie pomiędzy 0 i 90.";
Blockly.Msg.moteurdagu_tooltiprs040stop = "Płytka RS 040: \nzatrzymuje jeden z 2 silniczków.";
Blockly.Msg.moteurdagu_tooltiprs027 = "Płytka RS 027: \n uruchamia jeden z 2 silniczków podłączonych do wyjścia na tej płytce, prędkość można ustawić w zakresie pomiędzy 0 i 90.";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - silnik DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - silnik DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "kierunek";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "do przodu";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "do tyłu";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "zatrzymaj";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - silnik krokowy";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - silnik krokowy";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "nie na obrót";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "prędkość (obr/min)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "liczba/ilość kroków";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "silnik DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "silnik DC 2";
Blockly.Msg.m_pap="silnik krokowy ";
Blockly.Msg.m_pap_step="krok";
Blockly.Msg.m_pap_step1="do przodu";
Blockly.Msg.m_pap_tooltip = "Inicjalizacja / uruchomienie silnika krokowego. \nWybierz ilość kroków, prędkość w obr/min speed in i pin do którego podłączyć.";
Blockly.Msg.m_pap_step_tooltip = "Uruchomienie silnika krokowego w podanej liczbie kroków, następne instrukcje będą wykonane dopiero po wykonaniu przez silnik obrotu.";
// serial ////////////////////////////////////////
Blockly.Msg.Serial_Init = "Włączenie portu szeregowego.";
Blockly.Msg.Serial_Init_tooltip = "Ustanawia prędkość komunikacji w ilości znaków na sekundę.";
Blockly.Msg.Serial_Write = "Wyślij do portu szeregowego.";
Blockly.Msg.Serial_write_tooltip = "Wysyła dane do portu szeregowego.";
Blockly.Msg.Serial_read = "Odczyt danych w porcie szeregowym.";
Blockly.Msg.Serial_read_tooltip = "Zwraca pierwsze dostępne dane w porcie szeregowym lub '-1' jeżeli nie ma danych.";
Blockly.Msg.Serial_available = "Ilość danych w porcie szeregowym.";
Blockly.Msg.Serial_available_tooltip = "Zwraca ilość/liczbę bajtów dostępnych w porcie szeregowym lub 0 gdy nie ma danych.";
Blockly.Msg.Serial_saut = "podział linii";
Blockly.Msg.Serial_saut_tooltip = "Zwraca podział linii w porcie szeregowym .";
Blockly.Msg.Serial_space = "Separator";
Blockly.Msg.Serial_space_tooltip = "Zwraca odstęp / spację w porcie szeregowym.";
Blockly.Msg.repl_read = "Użytkownik wprowadził komendę/polecenie.";
// software serial ///////////////////////////////
//Blockly.Msg.SSERIAL_Init = "Port programu na Rx.";
Blockly.Msg.SSERIAL_tooltip = "Utworzenie nowego portu komunikacji o podanej prędkości na podanym pinie.";
Blockly.Msg.SSERIAL_Read = "Odczyt danych na porcie programu.";
Blockly.Msg.SSERIAL_Read_tooltip = "Zwraca pierwsze dostępne dane w porcie programu lub '-1' jeżeli nie ma danych.";
Blockly.Msg.SSERIAL_Write = "Wyślij do portu programowego.";
Blockly.Msg.SSERIAL_Write_tooltip = "Wyślij dane do portu programowego.";
Blockly.Msg.SSERIAL_Read_tooltip = "Zwraca pierwsze dostępne dane w porcie programu lub '-1' jeżeli nie ma danych.";
Blockly.Msg.SSERIAL_Available = "Ilość danych w porcie programowym.";
Blockly.Msg.SSERIAL_Available_tooltip = "Zwraca ilość / liczbę bajtów dostępnych w porcie programowym lub 0 gdy nie ma danych.";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "Pozycja początkowa.";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto wraca do pozycji początkowej. Pozycja wyprostowana.";
Blockly.Msg.OTTO9H_HOME_TOOLTIP = "Otto goes to home position straight.Reserved pins: 2-leftleg 3-rightleg 4-leftfoot 5-rightfoot 6-leftArm 7-rightArm 8-Trigger US 9-Echo US and 13-Passive buzzer";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='Kalibruj.';
Blockly.Msg.OTTO9_CALIBRATION_LEG='noga ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='stopa ';
Blockly.Msg.OTTO_WHEELS_TEXT = "wheels ";
Blockly.Msg.OTTO_HEAD_TEXT = "head ";
Blockly.Msg.OTTO_FRONT_TEXT = "front ";
Blockly.Msg.OTTO_BACK_TEXT = "back ";
Blockly.Msg.OTTO_HIP_TEXT = "hip ";
Blockly.Msg.OTTO_HELLO_TEXT = "hello";
Blockly.Msg.OTTO_JUMP_TEXT = "jump";
Blockly.Msg.OTTO_SCARED_TEXT = "scared";
Blockly.Msg.OTTO_WALK_TEXT = "walk";
Blockly.Msg.OTTO_ROLL_TEXT = "roll";
Blockly.Msg.OTTO_MODE_TEXT = " mode";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms ";
Blockly.Msg.OTTO9_CALIBRATION_ARM='ramię ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='Stopniowo, po kolei wprowadzaj małe, dodatnie lub ujemne wartości , do momentu gdy jest całkowicie prosto (90º).';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'Zapisz obcięcia w pamięci EEPROM.';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= "Używać tylko po uzyskaniu całkowitego wyprostowania (90º) , następnie usunąć ten blok przed kolejnymi fazami programowania. ";
Blockly.Msg.OTTO9_MOVE_TEXT = "Ruch";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Podstwawowe ruchy Otto.";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ do przodu", "DO PRZODU"], ["↓ do tyłu", "DO TYŁU"], ["↺ skręć w lewo", "W LEWO"], ["↻ skręć w prawo", "W PRAWO"], ["przechyl się w lewo", "PRZECHYL W LEWO"], ["przechyl się w prawo", "PRZECHYL W PRAWO"], ["potrząsaj lewą nogą", "POTRZĄSAJ LEWĄ"], ["potrząsaj prawą nogą", "POTRZĄSAJ PRAWĄ"], ["w górę", "podskocz"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ do przodu", "DO PRZODU"], ["↓ do tyłu", "DO TYŁU"], ["↺ skręć w lewo", "W LEWO"], ["↻ skręć w prawo", "W PRAWO"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "prędkość";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normalnie", "1000"],["wolno", "2000"],["bardzo wolno", "3000"] , ["szybko", "750"], ["bardzo szybko", "500"], ["mega szybko", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normalnie", "45"],["wolno", "20"],["bardzo wolno", "10"] , ["szybko", "60"], ["bardzo szybko", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "Taniec";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto tańczy!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerWLEWO"],  ["moonwalk ⟶", "moonwalkerWPRAWO"],["krzyżowanie ⟵", "krzyżowanieWLEWO"],["krzyżowanie ⟶", "krzyżowanieWPRAWO"], ["flapping ↑", "flappingDOPRZODU"], ["flapping ↓", "flappingDOTYŁU"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "wielkość tańca";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normalna", "25"], ["mała", "10"], ["duża", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "wykonaj";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Skomplikowane ruchy Otto.";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesty";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emocje, dźwięki połączone  z ruchami.";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 szczęśliwy1", "OttoSuperHappy"],["🙂 szczęśliwy2", "OttoHappy"], ["🙁 smutny", "OttoSad"], ["😴 zaspany", "OttoSleeping"], ["😕 zagubiony", "OttoConfused"], ["😰 płaczliwy", "OttoFretful"], ["😍 kocha", "OttoLove"], ["😡 zły", "OttoAngry"], ["🤩 czaruje", "OttoMagic"], ["😐 fala", "OttoWave"], [" 😎 zwycięzca", "OttoVictory"], ["😞 zawiedziony", "OttoFail"], ["💩 farciarz", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "Dzwięki";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Dźwięki/odgłosy emocjonalne";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 szczęśliwy1", "S_superHappy"], ["🙂 szczęśliwy2", "S_happy"], ["😊 szczęśliwy3", "S_happy_short"], ["🙁 smutny", "S_sad"], ["😕 zagubiony", "S_confused"], ["🤗 milusi", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 zaskoczony", "S_surprise"],["🤖 podłączony", "S_connection"], [" 🤖 odłączony", "S_disconnection"], ["👇 naciśnięcie", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 spanie", "S_sleeping"], ["💩 farciarz1", "S_fart1"], ["💩 farciarz2", "S_fart2"], ["💩 farciarz3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "Odległość [cm].Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TEXT2 = "Pin Trigger 8 Pin Echo 9";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ustawianie zakresu pomiędzy  2cm do 400cm.";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "przeszkoda";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["blisko", "10"],["bardzo blisko", "3"],["daleko", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "Hałas. Pin A6";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 to cicho, 500 to głośno a ponad  1000 to bardzo głośno, ustaw też czułość sensora. ";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "Dotyk. Pin A0";///////////////////////////////////////////
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "Użyj instrukcji warunkowej 'if'.";
Blockly.Msg.OTTO9_GETG_TEXT = "Ruch.Read the accelerations and angular velocities.I2C pins";
Blockly.Msg.OTTO9_GETG_TEXT2 = "Value";
Blockly.Msg.OTTO9_MOUTH_TEXT = "Usta";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "Emocje na ustach dla matrycy LED 8x8 LED #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 szczęśliwy1", "happyOpen"],["🙂 szczęśliwy2", "happyClosed"], ["😊 uśmiech", "smile"], ["😦 smutny1", "23"], ["🙁 smutny2", "24"], ["😮 zaskoczony1", "smallSurprise"], ["😲 zaskoczony2", "bigSurprise"], ["😕 zagubiony", "confused"],["😛 pokazuje język", "tongueOut"],["🙃 głupi", "culito"],  ["😑 poważny", "lineMouth"], ["🙄 zmartwiony", "21"], ["💖 serce", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ nie", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ błyskawica", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "Oczy";
Blockly.Msg.OTTO9_EYES_TEXT2 = "Pins: I2C";
Blockly.Msg.OTTO9_MOUTH_TEXT2 = "Pins: DIN A3, CS A2, CLK A1";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "Emocje na oczach dla matrycy LED 16x8 i2C.";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 szczęśliwy1", "happy_bmp"],["🙂 szczęśliwy2", "eyes_bmp"], ["😦 smutny", "sad_bmp"], ["😡 zły1", "angry_bmp"], ["😡 zły2", "angry2_bmp"], ["😰 płaczliwy", "freetful_bmp"], ["😕 zagubiony", "confused_bmp"],["😴 zaspany", "sleep_bmp"],["😍 kocha", "love_bmp"],  ["😑 fala", "wave_bmp"], ["🤩 czarodziej", "magic_bmp"], ["😞 smutny", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ nie", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "Tekst na oczy";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " Wyczyść text na oczach";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "Ograniczenie do dużych liter i cyfr  0 do  9 : ; < >  = @, maks.9 znaków.";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "Tekst na usta";
Blockly.Msg.OTTO9_CLEAR_TEXT = " Wyczyść tekst na usta.";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Wyłącz wszystkie diody LED na matrycy LED usta 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "Ręce";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "Poruszaj rękami!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["ręce do góry", "HANDSUP"], ["machaj w lewo", "HANDWAVE1"], ["machaj w prawo", "HANDWAVE2"]];

/// ESP8266
Blockly.Msg.OTTO9_YL="Left leg";
Blockly.Msg.OTTO9_YR="Right leg";
Blockly.Msg.OTTO9_RL="Left foot";
Blockly.Msg.OTTO9_RR="Right foot";
Blockly.Msg.OTTO9_BUZZER="Buzzer";
Blockly.Msg.OTTO_HOME_TOOLTIP = "Otto goes to home position straight.";
Blockly.Msg.OTTO_HOME_TEXT = "Configuration";

////////////ESCORNABOT Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.ESCORNABOT_MODE_TEXT="Init Escornabot";
Blockly.Msg.ESCORNABOT_MODE_CHOICE= [["Weak", ""], ["Strong", "(2)"], ["Medium", "(3)"]];;
Blockly.Msg.ESCORNABOT_INIT_TOOLTIP="Mode choice: 1-> weaker but less electrical consumption, 2->Stronger, but needs more supply, 3->Intermediate mode ";
Blockly.Msg.ESCORNABOT_URL="https://escornabot.com/es/index";
Blockly.Msg.ESCORNABOT_SPIN="Spin: ";
Blockly.Msg.ESCORNABOT_SPIN_NUMBER="Nº: ";
Blockly.Msg.ESCORNABOT_SPIN_TOOLTIP="Indicate spin number(admits negative value if reverse is wanted) and velocity"
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT="Velocity: "
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY=[["Slow", "5"], ["Medium", "10"], ["Quick", "15"]];;
Blockly.Msg.ESCORNABOT_DISTANCE="Run distance: ";
Blockly.Msg.ESCORNABOT_DISTANCE_TEXT="cm: ";
Blockly.Msg.ESCORNABOT_DISTANCE_TOOLTIP="Indicate distance in cm (negative values will imply reverse mode) and velocity";
Blockly.Msg.ESCORNABOT_TURNSPIN_TEXT="Turn by X spins: ";
Blockly.Msg.ESCORNABOT_TURNSPIN_TOOLTIP="Turn clockwise/anticlockwise (depending on wether you introduce positive or negative values of spin number you desire)";
Blockly.Msg.ESCORNABOT_TURNANGLE_TEXT="Angle spin: ";
Blockly.Msg.ESCORNABOT_ANGLE_NUMBER="Angle: "
Blockly.Msg.ESCORNABOT_TURNANGLE_TOOLTIP="Spin by angle (sign value means clockwise/anticlockwise)";
Blockly.Msg.ESCORNABOT_STOP_TEXT="Stop";
Blockly.Msg.ESCORNABOT_STOP_TOOLTIP="What did you think?  ";
Blockly.Msg.ESCORNABOT_BEEP_TEXT="Beep";
Blockly.Msg.ESCORNABOT_TIME_TEXT="ms";
Blockly.Msg.ESCORNABOT_BEEP_TOOLTIP="Beeps as long as the time you specify";
Blockly.Msg.ESCORNABOT_LEDON_TEXT="LED ON: ";
Blockly.Msg.ESCORNABOT_LEDOFF_TEXT="LED OFF: ";
Blockly.Msg.ESCORNABOT_LED_CHOICE=[["Forward", "1"], ["Backward", "3"], ["Left", "2"],["Right", "4"]];;
Blockly.Msg.ESCORNABOT_LEDON_TOOLTIP="Lights on the selected LED diode";
Blockly.Msg.ESCORNABOT_LEDOFF_TOOLTIP="Lights off the selected LED diode";
Blockly.Msg.ESCORNABOT_GETBUTTON_TEXT="Button pushed: ";
Blockly.Msg.ESCORNABOT_GETBUTTON_TOOLTIP="Check if the selected button is being pushed.";
Blockly.Msg.ESCORNABOT_BUTTON_SELECTED=[["Forward", "1"], ["Backward", "3"], ["Left", "2"],["Right", "4"],["Center", "5"]];;
Blockly.Msg.ESCORNABOT_APP_TOOLTIP="Autonomous working";
Blockly.Msg.ESCORNABOT_APP_URL="www.escornabot.com";
Blockly.Msg.ESCORNABOT_USINIT_TEXT="Ultrasound inits";
Blockly.Msg.ESCORNABOT_TRIGGER_TEXT="Trigger pin";
Blockly.Msg.ESCORNABOT_ECHO_TEXT="Echo pin";
Blockly.Msg.ESCORNABOT_GETUS_TEXT="Distance";
Blockly.Msg.ESCORNABOT_GETUS_TOOLTIP="Distance";
Blockly.Msg.ESCORNABOT_IRINIT_TEXT="Inits ir";
Blockly.Msg.ESCORNABOT_IR_TOOLTIP="Initialize infrared sensors";
Blockly.Msg.ESCORNABOT_GETBLACKLEFT_TEXT="Black left detected";
Blockly.Msg.ESCORNABOT_GETBLACKLEFT_TOOLTIP=" TRUE if black detected at left side";
Blockly.Msg.ESCORNABOT_GETBLACKRIGHT_TEXT="Black right detected";
Blockly.Msg.ESCORNABOT_GETBLACKRIGHT_TOOLTIP="TRUE if black detected at right side";
Blockly.Msg.ESCORNABOT_GETWHITELEFT_TEXT="White left detected";
Blockly.Msg.ESCORNABOT_GETWHITELEFT_TOOLTIP="TRUE if white detected at left side";
Blockly.Msg.ESCORNABOT_GETWHITERIGHT_TEXT="White right detected";
Blockly.Msg.ESCORNABOT_GETWHITERIGHT_TOOLTIP="TRUE if white detected at right side";
Blockly.Msg.ESCORNABOT_IRLEFT_TEXT="Left";
Blockly.Msg.ESCORNABOT_IRRIGHT_TEXT="Right";

//SIMPLE SENSORS
Blockly.Msg.BUTTON_NAME="Button";
Blockly.Msg.INTERNAL_BUTTON_NAME="Start button MRTduino board";
Blockly.Msg.BUTTON_LOGIC="Logic inverse";
Blockly.Msg.BUTTON_PRESSED="pressed?";
Blockly.Msg.BUTTON_TOUCH_NAME="Capacity Touch";
Blockly.Msg.KNOCK_NAME="Knock";
Blockly.Msg.KNOCK_DETECTED="detected?";
Blockly.Msg.TILT_NAME="Digital Tilt";
Blockly.Msg.TILT_DETECTED="detected?";
Blockly.Msg.POTE_NAME="Potentiometer";
Blockly.Msg.PERCENT="percent(0-100)%";
Blockly.Msg.VALUE="Value(0-1023)";
Blockly.Msg.PHOTO_NAME="Photo Interrupter";
Blockly.Msg.PHOTO_DETECTED="detected?";
Blockly.Msg.VAR_LM35="LM35 Temperature (ºC)";
Blockly.Msg.LDR_NAME="Photocell (LDR or CDS) ";
Blockly.Msg.LDR_DETECTED="detected?";
Blockly.Msg.IR_NAME="Infrared";
Blockly.Msg.IR_DETECTED="sensed?";
Blockly.Msg.FLAME_NAME="Flame";
Blockly.Msg.FLAME_DETECTED="detected?";
Blockly.Msg.SOUND_NAME="Sound (MIC)";
Blockly.Msg.SOUND_AMP_NAME="MIC Amplifier";
Blockly.Msg.SOUND_WINDOWS="Sample Window";
Blockly.Msg.SOUND_DETECTED="detected?";
Blockly.Msg.DHT_NAME="DHT";
Blockly.Msg.DHT_Type="Type";
Blockly.Msg.DHT_Type11="DHT11";
Blockly.Msg.DHT_Type21="DHT21";
Blockly.Msg.DHT_Type22="DHT22";
Blockly.Msg.DHT_Temp="Temperature ºC";
Blockly.Msg.DHT_Humi="Humidity";
Blockly.Msg.DHT_Head="Heat Index ºC";
Blockly.Msg.GAS_NAME="Gas CO (MQ-7)";
Blockly.Msg.GAS_DETECTED="detected?";
Blockly.Msg.ALCOHOL_NAME="Alcohol (MQ-3)";
Blockly.Msg.AIR_NAME="Air quality (MQ-135)";
Blockly.Msg.ALCOHOL_DETECTED="detected?";
Blockly.Msg.VIBRATION_NAME="Vibration";
Blockly.Msg.VIBRATION_DETECTED="detected?";
Blockly.Msg.HALL_NAME="Hall Magnetic";
Blockly.Msg.HALL_DETECTED="detected?";
Blockly.Msg.PIR_NAME="PIR Motion";
Blockly.Msg.PIR_DETECTED="detected?";
Blockly.Msg.VAPOR_NAME="Vapor (Steam)";
Blockly.Msg.ALIGHT_NAME="Ambient Light (TEMT6000)";
Blockly.Msg.WATER_NAME="Water level";
Blockly.Msg.MOISTURE_NAME="Soil Moisture";
Blockly.Msg.JOYSTICK_NAME="Joystick axis";
Blockly.Msg.JOYSTICK_BUTTON="Joystick button";
Blockly.Msg.JOYSTICK_PRESSED="pressed?";
Blockly.Msg.ultrasonic_ranger="HC-SR04 Ultrasonic (cm)";
Blockly.Msg.unit="Unit";
Blockly.Msg.cm="cm";
Blockly.Msg.inch="inch";
Blockly.Msg.TRIG="TRIG Trigger";
Blockly.Msg.Echo="Echo";
Blockly.Msg.VAR_TemSens="Analog NTC Temperature (ºC)";
Blockly.Msg.MRTX_BUTTON="MRTNode start button pressed?";
Blockly.Msg.TOUCH="Touch";

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

//GESTURE SENSOR APDS9960
Blockly.Msg.APDS9960_name_gesture = "APDS9960 Gesture";
Blockly.Msg.APDS9960_name_color = "APDS9960 Color";
Blockly.Msg.APDS9960_detection = "detection";
Blockly.Msg.APDS9960_init = "Init APDS9960 gesture and color sensor.";
Blockly.Msg.APDS9960_init2 = "SDA-SCL";
Blockly.Msg.APDS9960_gesture_gain = "Config gesture gain";
Blockly.Msg.APDS9960_color_gain = "Config color gain";
Blockly.Msg.APDS9960_gesture_detected = "detected?";
Blockly.Msg.APDS9960_readgesture = ".Read gesture";
Blockly.Msg.APDS9960_readcolors = "Read color frecuencies";
Blockly.Msg.APDS9960_colors = "Frequency";


//REMOTE CONTROL IR
Blockly.Msg.KEY="Key";
Blockly.Msg.GENERAL_IR="Remote Control IR";
Blockly.Msg.GENERAL_PRESSED="Read key";
Blockly.Msg.PIN="PIN";

//REMOTE CONTROL MRT
Blockly.Msg.MRT_IR="Init Remote Control MRT";
Blockly.Msg.MRT_CHANNEL="Channel";
Blockly.Msg.MRT_KEY="Key MRT";
Blockly.Msg.MRT_PRESSED="Pressed?";
Blockly.Msg.PIN2="Interrupt PIN";
Blockly.Msg.ATTEND_MRT_IR="Attend Remote Control MRT";

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

//YK5300 MP3
Blockly.Msg.MP3YK_name = "Mp3 YX5300";
Blockly.Msg.MP3YK_init = "Init Mp3 YX5300.";
Blockly.Msg.MP3YK_TX="Pin TX#";
Blockly.Msg.MP3YK_RX="Pin RX#";
Blockly.Msg.MP3YK_equalizer = "Set equalizer";
Blockly.Msg.MP3YK_volumen = "Set volumen(0-30)";
Blockly.Msg.MP3YK_operation = "Operation:";
Blockly.Msg.MP3YK_check = "Check mp3.Need to be executed in main loop";
Blockly.Msg.MP3YK_playsong = "Play track number";
Blockly.Msg.MP3YK_playsongdirectory = "in folder number";
Blockly.Msg.MP3YK_folderrepeat = "Play Folder repeat number";
Blockly.Msg.MP3YK_songrepeat = "Play Track repeat number";
Blockly.Msg.MP3YK_foldershuffle = "Play all files (1-random 0-none)";

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

// SOFTWARE SERIAL FOR BT
Blockly.Msg.SSERIAL_BT_Init="Init Bluetooth - SoftwareSerial";
Blockly.Msg.ESP32Bluetooth = "Init Bluetooth - ESP32 Bluetooth Serial";
Blockly.Msg.SSERIAL_BT_TX="Pin TX#";
Blockly.Msg.SSERIAL_BT_RX="Pin RX#";
Blockly.Msg.SSERIAL_BT_BAUD="Bauds";
Blockly.Msg.SSERIAL_BT_Read="Serial BT Read byte";
Blockly.Msg.SSERIAL_BT_Println="Serial BT Print on new line";
Blockly.Msg.SSERIAL_BT_Print="Serial BT Print on same line";
Blockly.Msg.SSERIAL_BT_Write="Serial BT write"
Blockly.Msg.SSERIAL_BT_Avai="Serial BT Available?";
Blockly.Msg.SSerial_BT_Print_Format="Serial BT Print  Format";
Blockly.Msg.SSERIAL_BT_ReadNum="Serial BT Read as number";
Blockly.Msg.SSERIAL_BT_ReadString="Serial BT Read String";
Blockly.Msg.SSERIAL_BT_Readlf="until line feed";

// SOFTWARE SERIAL
Blockly.Msg.SSERIAL_Init="Init SoftwareSerial";
Blockly.Msg.SSERIAL_TX="Pin TX#";
Blockly.Msg.SSERIAL_RX="Pin RX#";
Blockly.Msg.SSERIAL_BAUD="Baudios";
Blockly.Msg.SSERIAL_Read="SoftwareSerial Read byte";
Blockly.Msg.SSERIAL_Println="SoftwareSerial Print on new line";
Blockly.Msg.SSERIAL_Print="SoftwareSerial Print on same line";
Blockly.Msg.SSERIAL_Write="SoftwareSerial write"
Blockly.Msg.SSERIAL_Avai="SoftwareSerial Available?";
Blockly.Msg.SSerial_Print_Format="SoftwareSerial Print  Format";
Blockly.Msg.SSERIAL_ReadNum="SoftwareSerial Read as number";
Blockly.Msg.SSERIAL_ReadString="SoftwareSerial Read String";
Blockly.Msg.SSERIAL_Readlf="until line feed";

// SERIAL
Blockly.Msg.SERIAL_Init="Init Serial ";
Blockly.Msg.SERIAL_TX="Pin TX#";
Blockly.Msg.SERIAL_RX="Pin RX#";
Blockly.Msg.SERIAL_BAUD="Baudios";
Blockly.Msg.SERIAL_Read="Serial  Read byte";
Blockly.Msg.SERIAL_Println="Serial Print on new line";
Blockly.Msg.SERIAL_Print="Serial Print on same line";
Blockly.Msg.SERIAL_Write="Serial write"
Blockly.Msg.SERIAL_Avai="Serial Available?";
Blockly.Msg.Serial_Print_Format="Serial Print  Format";
Blockly.Msg.SERIAL_ReadNum="Serial Read as number";
Blockly.Msg.SERIAL_ReadString="Serial Read String";
Blockly.Msg.SERIAL_Readlf="until line feed";

//DISPLAY TFT ST7735
Blockly.Msg.ST7735_name = "TFT";
Blockly.Msg.ST7735_init = "Init TFT ST7735 1.8\" or 0.96\".";
Blockly.Msg.ST7735_init2 = "Pins: SCL=SCK SDA=MOSI.";
Blockly.Msg.ST7735_PIN_SCL = "SCL=SCK";
Blockly.Msg.ST7735_PIN_SDA = "SDA=MOSI";
Blockly.Msg.ST7735_PIN_CS = "CS Pin";
Blockly.Msg.ST7735_PIN_RST = "RST or RES Pin";
Blockly.Msg.ST7735_PIN_DC = "A0 or DC Pin";
Blockly.Msg.ST7735_WRAP = "Tab color";
Blockly.Msg.ST7735_FILLBACKGROUND = "Fill backgroundColor";
Blockly.Msg.ST7735_Rotate = "Rotate display";
Blockly.Msg.ST7735_Invert = "Invert display";
Blockly.Msg.ST7735_SetCursor = "Set cursor";
Blockly.Msg.ST7735_X0 = "x0";
Blockly.Msg.ST7735_Y0 = "y0";
Blockly.Msg.ST7735_X1 = "x1";
Blockly.Msg.ST7735_Y1 = "y1";
Blockly.Msg.ST7735_X2 = "x2";
Blockly.Msg.ST7735_Y2 = "y2";
Blockly.Msg.ST7735_TEXTCOLOR = "Set text color";
Blockly.Msg.ST7735_TEXTCOLOR2 = "Set color";
Blockly.Msg.ST7735_TEXTsize = "Set text size";
Blockly.Msg.ST7735_TEXTwrap = "Set text wrap";
Blockly.Msg.ST7735_PrintTextLN = "Print the text/value";
Blockly.Msg.ST7735_PrintTextLN2 = "line feed";
Blockly.Msg.ST7735_DrawPixel = "Draw pixel";
Blockly.Msg.ST7735_Drawlinefrom = "Draw line from";
Blockly.Msg.ST7735_Drawlineto = "to";
Blockly.Msg.ST7735_Drawrectangle = "Draw rectangle";
Blockly.Msg.ST7735_Drawtriangle = "Draw triangle.Corner points";
Blockly.Msg.ST7735_Drawroundrectangle = "Draw round rectangle";
Blockly.Msg.ST7735_Drawroundrectangleradius = "rounding radius";
Blockly.Msg.ST7735_Drawrectanglewidth = "width";
Blockly.Msg.ST7735_Drawrectangleheight = "height";
Blockly.Msg.ST7735_Drawcircle = "Draw circle.Center in";
Blockly.Msg.ST7735_Drawcircleradius = "radius";
Blockly.Msg.ST7735_Drawfill = "Fill";
Blockly.Msg.ST7735_properties = "Return property:";
Blockly.Msg.ST7735_IconName = "Icon name(bmp):";
Blockly.Msg.ST7735_ValueList = "Values(hex array)";
Blockly.Msg.ST7735_DrawiconName = "Draw Icon(bmp) name";

Blockly.Msg.OLED_IconName = "Icon name(bmp):";
Blockly.Msg.OLED_ValueList = "Values(hex array)";
Blockly.Msg.OLED_DrawiconName = "Draw Icon(bmp) name";
Blockly.Msg.OLED_name = "OLED";
Blockly.Msg.OLED_X0 = "x0";
Blockly.Msg.OLED_Y0 = "y0";
Blockly.Msg.OLED_width = "width";
Blockly.Msg.OLED_height = "height";
Blockly.Msg.OLED_COLOR = "Set color";

//TCS34725 color sensor
Blockly.Msg.TCS34725_name_init="Init TCS34725 color sensor";
Blockly.Msg.TCS34725_name_init2="SDA - SCL Gain";
Blockly.Msg.TCS34725_name="TCS34725 color sensor.";
Blockly.Msg.TCS34725_read="Read all values";
Blockly.Msg.TCS34725_values="Value";
Blockly.Msg.TCS34725_color="Is";
Blockly.Msg.TCS34725_color2="color(No gain configured)?";

//HMC5883 compass sensor
Blockly.Msg.HMC5883="Init HMC5883 compass sensor";
Blockly.Msg.HMC5883_2="- SDA - SCL";
Blockly.Msg.HMC5883_read="HMC5883 compass sensor.Read values";
Blockly.Msg.HMC5883_values="value";

//RADIO TEA5767
Blockly.Msg.TEA5767_name = "Radio TEA5767.";
Blockly.Msg.TEA5767_init = "Init Radio TEA5767.SDA - SCL";
Blockly.Msg.TEA5767_turnOFF_ON = "Turn";
Blockly.Msg.TEA5767_muteOFF_ON = "Mute";
Blockly.Msg.TEA5767_Level = "Level of the signal";
Blockly.Msg.TEA5767_Stereo = "Is the signal stereo?";
Blockly.Msg.TEA5767_RadioStation = "Radio Station.";
Blockly.Msg.TEA5767_SetFrequency = "Frequency(Mhz)";
Blockly.Msg.TEA5767_MadridFrequency = "Madrid Radio Station:";

//RFID MFRC522
Blockly.Msg.RFID_name = "RFID MFRC522.";
Blockly.Msg.RFID_init = "Init RFID MFRC522.";
Blockly.Msg.RFID_init2 = "Pins:SCK, MOSI and MISO.";
Blockly.Msg.RFID_PIN_SDA = "SDA Pin";
Blockly.Msg.RFID_PIN_RST = "RST Pin";
Blockly.Msg.RFID_VALID_VAR = "Define Validation card name:";
Blockly.Msg.RFID_STOP = "Stop the current reading";
Blockly.Msg.RFID_C1 = "Value1";
Blockly.Msg.RFID_C2 = "Value2";
Blockly.Msg.RFID_C3 = "Value3";
Blockly.Msg.RFID_C4 = "Value4";
Blockly.Msg.RFID_DETECTED = "Is RFID card detected?";
Blockly.Msg.RFID_READED = "Is RFID card readed?";
Blockly.Msg.RFID_CARD_READED = "Value of the read card";
Blockly.Msg.RFID_CHECK_CARD = "Is RFID card read equal to the validation card";
Blockly.Msg.RFID_CHECK_CARD2 = "?";
Blockly.Msg.RFID_PIN_SCK = "SCK";
Blockly.Msg.RFID_PIN_MISO = "MISO";
Blockly.Msg.RFID_PIN_MOSI = "MOSI";

//NFC PN532
Blockly.Msg.NFC_name = "💳 NFC ";
Blockly.Msg.NFC_init = "NFC I2C ";
Blockly.Msg.NFC_VALID_VAR = "Validation card(4bytes):";
Blockly.Msg.NFC_VALID_VAR2 = "Validation card(7bytes):";
Blockly.Msg.NFC_C1 = "Value1";
Blockly.Msg.NFC_C2 = "Value2";
Blockly.Msg.NFC_C3 = "Value3";
Blockly.Msg.NFC_C4 = "Value4";
Blockly.Msg.NFC_C5 = "Value5";
Blockly.Msg.NFC_C6 = "Value6";
Blockly.Msg.NFC_C7 = "Value7";
Blockly.Msg.NFC_DETECTED = "card detected?";
Blockly.Msg.NFC_CARD_READED = "Read Value";
Blockly.Msg.NFC_CHECK_CARD = "Is card Read = Validation card";
Blockly.Msg.NFC_CHECK_CARD2 = "?";

//KEYBOARD AND MOUSE
Blockly.Msg.KeyboardFunction = "Keyboard";
Blockly.Msg.KeyPressed = "Key";
Blockly.Msg.WriteText= "Write text";
Blockly.Msg.LineFeed= "Line Feed";
Blockly.Msg.MouseFunction = "Mouse";
Blockly.Msg.MouseMoveX="X Pos";
Blockly.Msg.MouseMoveY="Y pos";
Blockly.Msg.MouseMoveW="Wheel";

//GPS
Blockly.Msg.GPS_name = "GPS NEO-6";
Blockly.Msg.GPS_init = "Init GPS using software serial";
Blockly.Msg.GPS_TX="TX#";
Blockly.Msg.GPS_RX="RX#";
Blockly.Msg.GPS_readvalues = "Read and save values using software serial";
Blockly.Msg.GPS_paramter = "Location Parameters:";
Blockly.Msg.GPS_paramter3 = "DateTime:";

//TM1640
Blockly.Msg.TM1640_init = "Init TM1640 Led matrix";
Blockly.Msg.TM1640_SCL="SCL Pin";
Blockly.Msg.TM1640_SDA="SDA Pin";

//MOTOR MRT
Blockly.Msg.MOTOR_Connector="Motor";
Blockly.Msg.MOTOR_MRTX_Connector="MRTX-Uno Motor";
Blockly.Msg.MOTOR_Direction="Direction";
Blockly.Msg.MOTOR_speed="Speed(0-255)";
Blockly.Msg.MOTOR_Stop="Stop";

//STEPPERS
Blockly.Msg.STEEPER_name="Init Stepper ID";
Blockly.Msg.STEEPER_name2="Init Stepper28BYJ ID";
Blockly.Msg.STEEPER2_name="Stepper ID";
Blockly.Msg.STEEPER2_name2="Stepper28BYJ ID";
Blockly.Msg.STEEPER_steprev="Steps/Rev.";
Blockly.Msg.STEEPER_step="Steps";
Blockly.Msg.STEEPER_speed="Speed (rpm)";
Blockly.Msg.STEEPER_pin1="PIN-A";
Blockly.Msg.STEEPER_pin2="PIN-B";
Blockly.Msg.STEEPER_pin3="PIN-C";
Blockly.Msg.STEEPER_pin4="PIN-D";
Blockly.Msg.STEEPER_Move="Move";
Blockly.Msg.STEEPER_MoveTo="Move to step(0-4096)";
Blockly.Msg.STEEPER_Degree="degrees";
Blockly.Msg.STEEPER_Steps="steps";
Blockly.Msg.STEEPER_DegreeTo="Move to degree";

//WiFi basic functions
Blockly.Msg.WIFI_sta_init = "WIFI.Connect as Station";
Blockly.Msg.WIFI_ap_init = "WIFI.Create an Access Point";
Blockly.Msg.WIFI_sta_ap_init = "WIFI. Station and create an Access Point";
Blockly.Msg.WIFI_password = "password:";
Blockly.Msg.WIFI_ssid = "Wifi ssid:";
Blockly.Msg.WIFI_password_ap = "and this password:";
Blockly.Msg.WIFI_ssid_ap = "Wifi ssid name:";
Blockly.Msg.WIFI_logs = "Enable logs";

//IFTTT
Blockly.Msg.IFTTT_init = "Configuration.Api key";
Blockly.Msg.IFTTT_send = "Send information";
Blockly.Msg.IFTTT_event = "Event as String";
Blockly.Msg.IFTTT_value1 = "Value 1 as String";
Blockly.Msg.IFTTT_value2 = "Value 2 as String";
Blockly.Msg.IFTTT_value3 = "Value 3 as String";

//MQTT
Blockly.Msg.MQTT_name_init = "Configuration MQTT protocol";
Blockly.Msg.MQTT_password = "password:";
Blockly.Msg.MQTT_ssid = "Wifi ssid:";
Blockly.Msg.MQTT_server = "Server (broker):";
Blockly.Msg.MQTT_port = "port:";
Blockly.Msg.MQTT_user = "User:";
Blockly.Msg.MQTT_APIkey = "API Key:";
Blockly.Msg.MQTT_client = "ID client:";
Blockly.Msg.MQTT_topicattend = "Loop MQTT";
Blockly.Msg.MQTT_topicsubscribe = "Subscribe to the topic";
Blockly.Msg.MQTT_topicsubscribe2 = "and save num value in the variable";
Blockly.Msg.MQTT_topicsubscribe3 = "and save text value in the variable";
Blockly.Msg.MQTT_topicpublish = "Publish in the topic";
Blockly.Msg.MQTT_topicvalue = "Value";
Blockly.Msg.MQTT_logs = "Enable logs";

//NTP
//RTC DS3231
Blockly.Msg.NTP_NAME="Init NTP Server.";
Blockly.Msg.NTP_NAME2="NTP Server.";
Blockly.Msg.NTP_READ_RTC="NTP Server.Read the date and time";
Blockly.Msg.NTP_GMT="GMT";
Blockly.Msg.NTP_VALUES="value";
Blockly.Msg.NTP_EPOCH="Epoch";
Blockly.Msg.NTP_DAY="Day";
Blockly.Msg.NTP_MONTH="Month";
Blockly.Msg.NTP_YEAR="Year";
Blockly.Msg.NTP_HOUR="Hour";
Blockly.Msg.NTP_MINUTE="Minute";
Blockly.Msg.NTP_SECOND="Second";
Blockly.Msg.NTP_DOFWEEK="Day of week";
Blockly.Msg.NTP_TEXT_DOFWEEK="Day of week in string";
Blockly.Msg.NTP_TEXT_MONTH="Month in string ";
Blockly.Msg.NTP_TEXT_TIME="Time in string ";

//MAX7219-Led Matrix panel
Blockly.Msg.MAX7219_LM_NAME="Init MAX7219 Led Matrix.";
Blockly.Msg.MAX7219_LM_CS="CS Pin";
Blockly.Msg.MAX7219_LM_CLK="CLK Pin";
Blockly.Msg.MAX7219_LM_DAT="DAT Pin";
Blockly.Msg.MAX7219_LM_Number="Number of matrix";
Blockly.Msg.MAX7219_LM_NAME2="MAX7219 Led matrix#";
Blockly.Msg.MAX7219_LM_Brightness="brightness (0-15)";
Blockly.Msg.MAX7219_LM_SHUTDOWN="Activate";
Blockly.Msg.MAX7219_LM_CLEAR="Clear";
Blockly.Msg.MAX7219_LM_PAINT="Draw this image";
Blockly.Msg.MAX7219_LM_Row="Row(0-7)";
Blockly.Msg.MAX7219_LM_value="Value (bin or hex or dec)";
Blockly.Msg.MAX7219_LM_Column="Column(0-7)";
Blockly.Msg.MAX7219_LM_Led="Set Led";

//Thingspeak
Blockly.Msg.Thingspeak_name_init = "Configuration Thingspeak.";
Blockly.Msg.Thingspeak_name = "Thingspeak.";
Blockly.Msg.Thingspeak_channel = "Channel";
Blockly.Msg.Thingspeak_apiread = "Api read key";
Blockly.Msg.Thingspeak_apiwrite = "Api write key";
Blockly.Msg.Thingspeak_Write= "Write value";
Blockly.Msg.Thingspeak_field = "in field";
Blockly.Msg.Thingspeak_ReadLong= "Read as long the field";
Blockly.Msg.Thingspeak_ReadFloat= "Read as float the field";

//Firebase
Blockly.Msg.Firebase_name_init = "Configuration Firebase.";
Blockly.Msg.firebase_name = "Firebase.";
Blockly.Msg.Firebase_url = "URL";
Blockly.Msg.Firebase_api = "Api key";
Blockly.Msg.Firebase_start = " Initialization in Setup";
Blockly.Msg.Firebase_type = " Store ";
Blockly.Msg.Firebase_read = " Read ";
Blockly.Msg.Firebase_Node = "in node"
Blockly.Msg.Firebase_Value= "value";
Blockly.Msg.Firebase_String_Node="Store a text in node";
Blockly.Msg.Firebase_Read_String_Node="Read the text in node";
Blockly.Msg.firebase_delete = "Delete node";

//Telegram
Blockly.Msg.Telegram_name_init = "Configuration Telegram chat.";
Blockly.Msg.Telegram_name = "Telegram.";
Blockly.Msg.Telegram_BotToken = "BOT token";
Blockly.Msg.Telegram_ChatID = "Chat ID";
Blockly.Msg.Telegram_Loop = "Telegram Loop.Update messages";
Blockly.Msg.Telegram_receive = "Telegram.When message is recived";
Blockly.Msg.TelegramSend= "Send message:";
Blockly.Msg.Telegram_message = "Telegram.Received message";
Blockly.Msg.Telegram_fromName= "Name of person sent the message";

//OpenWeather
Blockly.Msg.Openweather_init = "Configuration OpenWeather.";
Blockly.Msg.Api_key = "Api Key";
Blockly.Msg.ReadWeather = "OpenWeather.Read Weather.";
Blockly.Msg.City = "City";
Blockly.Msg.CountryCode = "Country Code";
Blockly.Msg.OW_Value = "OpenWeather. Value:";
Blockly.Msg.LocationOW = "Location";
Blockly.Msg.Country = "Country";
Blockly.Msg.Icon = "Icon";
Blockly.Msg.Weather = "Weather";
Blockly.Msg.Description = "Description";
Blockly.Msg.OW_Temperature = "Temperature ºC";
Blockly.Msg.Temp_max = "Temperature Max ºC";
Blockly.Msg.Temp_min = "Temperature Min ºC";
Blockly.Msg.Humidity = "Humedad";
Blockly.Msg.Preassure = "Preassure";
Blockly.Msg.Feels_like = "Feels like Temperature ºC";
Blockly.Msg.Cloud = "Cloud %";
Blockly.Msg.Visibility = "Visibility %";
Blockly.Msg.wind_speed = "Wind Speed";
Blockly.Msg.wind_angle = "Wind Angle";
Blockly.Msg.icon_id = "Icon Weather Id";
Blockly.Msg.sunrise = "Sunrise EPOC";
Blockly.Msg.sunset = "Sunset EPOC";

//ESP8266
Blockly.Msg.ESP_yield=" Yield function";
Blockly.Msg.ESP_deepsleep="DeepSleep ";
Blockly.Msg.ESP_timesleep="Seconds";
Blockly.Msg.ESP_restart="Restart ESP8266/ESP32";

//Wifi Server
Blockly.Msg.WifiServer_wait="Wait connections of clients"
Blockly.Msg.WifiServer_port="Wifi server begin in port"
Blockly.Msg.WifiServer_ESP8266webserver_port="Wifi AsynWebServer begin in port"
Blockly.Msg.WifiServer_answer="Wifi server answer:"
Blockly.Msg.WifiServer_stop="Stop the connected client to the our server"
Blockly.Msg.WifiServer_flush="Flush the connected client to the our server"
Blockly.Msg.WifiServer_ip="IP of the connected customer"
Blockly.Msg.WifiServer_request="Request of the connected customer"
Blockly.Msg.WifiServer_ESP8266webserver_parameter="AsynWebServer Read the parameter: "
Blockly.Msg.WifiServer_ESP8266webserver_parameter2="AsynWebServer Parameter: "
Blockly.Msg.WifiServer_esp8266_send_html_URL = "When a client with this URL (empty for root):";
Blockly.Msg.WifiServer_esp8266_send_html_HTML_page="is connected then show this HTML page: ";
Blockly.Msg.WifiServer_esp8266_send_html_execute="(optional) and do: ";
Blockly.Msg.WifiServer_esp8266_manage_requets="Manage client request";
Blockly.Msg.WifiServer_esp8266_send_text="is connected then show this text: ";
Blockly.Msg.WifiServer_ESP8266webserver_OTA="OTA is enabled";

Blockly.Msg.Wifi_ap_fixip="Access point mode.Static IP"
Blockly.Msg.Wifi_sta_fixip="Station mode.Static IP"
Blockly.Msg.Wifi_ip="IP"
Blockly.Msg.Wifi_Mask="Mask"
Blockly.Msg.Wifi_Gateway="Gateway"

//Text with more functions

Blockly.Msg.TEXT_APPEND_APPENDTEXT = "append text";
Blockly.Msg.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg.TEXT_APPEND_TO = "to";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
Blockly.Msg.TEXT_CHARAT_FIRST = "get first letter";
Blockly.Msg.TEXT_CHARAT_FROM_END = "get letter # from end";
Blockly.Msg.TEXT_CHARAT_FROM_START = "get letter #";
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "in text";
Blockly.Msg.TEXT_CHARAT_LAST = "get last letter";
Blockly.Msg.TEXT_CHARAT_RANDOM = "get random letter";
Blockly.Msg.TEXT_CHARAT_TAIL = "";
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "get substring from the first letter";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "in text";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
Blockly.Msg.TEXT_INDEXOF_TAIL = "";
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 is empty";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
Blockly.Msg.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg.TEXT_LENGTH_TITLE = "length of %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
Blockly.Msg.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
Blockly.Msg.TEXT_PRINT_TITLE = "print %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
Blockly.Msg.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
Blockly.Msg.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
Blockly.Msg.TEXT_TRIM = "trim spaces from ";
Blockly.Msg.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";

//Conversions
Blockly.Msg.CONV_tochar="Casting to char ";
Blockly.Msg.CONV_toString="Convert to String ";
Blockly.Msg.CONV_decimal="Number of decimals";
Blockly.Msg.CONV_tobyte="Casting to Byte ";
Blockly.Msg.CONV_toint="Casting to Int ";
Blockly.Msg.CONV_tounsigendint="Casting to unsigned Int ";
Blockly.Msg.CONV_tofloat="Casting to Float ";

//Encoder
Blockly.Msg.RotaryEncoderInit="Init Rotary Encoder";
Blockly.Msg.RotaryEncoderNumber="Rotary Encoder";
Blockly.Msg.RE_withoutInterrupt="without interrupts";
Blockly.Msg.RE_PINDT="Pin DT";
Blockly.Msg.RE_PINCLK="Pin CLK";
Blockly.Msg.RE_READ="Read Value";
Blockly.Msg.RE_WRITE="Write Value";
Blockly.Msg.RE_Button="Button";
Blockly.Msg.RE_Pressed="pressed?";

//ESP-NOW
Blockly.Msg.ESPNOW_init = "Init the protocol. Node";
Blockly.Msg.ESPNOW_msg_received = "When a message is received";
Blockly.Msg.ESPNOW_send_all = "Send the message to all nodes.";
Blockly.Msg.ESPNOW_send_mac = "Send the message to the mac: ";
Blockly.Msg.ESPNOW_fill_int = "Fill the Int param of the struct to:";
Blockly.Msg.ESPNOW_fill_float = "Fill the Float param of the struct to:";
Blockly.Msg.ESPNOW_fill_text = "Fill the Text param of the struct to:";
Blockly.Msg.ESPNOW_read_node = "Id node received";
Blockly.Msg.ESPNOW_read_param_int = "Param Int received";
Blockly.Msg.ESPNOW_read_param_float = "Param Float received";
Blockly.Msg.ESPNOW_read_param_text = "Param Text received";

//ALEXA
Blockly.Msg.Alexa_init = "Alexa.Device number:";
Blockly.Msg.Alexa_init2 = "Name:";
Blockly.Msg.Alexa_cb = "When a Alexa message is received from device:";
Blockly.Msg.Alexa_Loop = "Manage the Alexa connection.Loop";
Blockly.Msg.Alexa_Param = "Get parameter";

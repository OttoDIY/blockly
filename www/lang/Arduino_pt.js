'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Selecione a porta USB";
Blockly.Msg.com2 = "🔔 Selecione a porta USB" ;
Blockly.Msg.check = "Compilar...";
Blockly.Msg.upload = "Enviar...";
Blockly.Msg.error = "🔔 ERRO: Blocos não conectados";
Blockly.Msg.verif = "🔔 Confira o código primeiro "
Blockly.Msg.save = "Salvar como ...";
Blockly.Msg.update = "Atualizar";
Blockly.Msg.new_update = "Uma nova versã está disponível, você quer baixar e instalar agora?" ;
Blockly.Msg.yes = "sim";
Blockly.Msg.no = "não";
Blockly.Msg.uptodate = "💯 Versão atualizada!" ;
Blockly.Msg.download = "Download completo, a aplicação irá instalar e reiniciar ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "no pino";
Blockly.Msg._AT = "até";
Blockly.Msg.AV = "frente";
Blockly.Msg.AR = "para trás";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "direita";
Blockly.Msg.left = "esquerda";
Blockly.Msg.LetR = "direita & esquerda";
Blockly.Msg.direction = "direção";
Blockly.Msg.vitesse = "velocidade ";
Blockly.Msg.values = "[0-90]";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ Armazenamento";
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Analog";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Table";
Blockly.Msg.CAT_list = "▤ Lista";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Logic";
Blockly.Msg.CAT_MATH = "∑ Math";
Blockly.Msg.CAT_TEXT = "❝ Text";
Blockly.Msg.CAT_VARIABLES = "↝ Variável";
Blockly.Msg.CAT_FUNCTIONS = "∬ Função";
Blockly.Msg.CAT_ARDUINO = "∞ Estrutura";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Entrada/Saída";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Fechar";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ Time";
Blockly.Msg.CAT_actionneur = "↻ Motor";
Blockly.Msg.CAT_com = "☎ Comunicação";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Serial";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Soft Serial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motor DC";
Blockly.Msg.CAT_ultrason = "⇣ Sensor";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Mouth";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD Screen";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoide";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ Neopixel";
Blockly.Msg.CAT_CCS811 = "👃 Sensor CO2";
Blockly.Msg.CAT_Displays = "🖥 Displays";
Blockly.Msg.CAT_AUDIO = "♫ Audio";
Blockly.Msg.CAT_CAMERAS = "📷 Cameras";
Blockly.Msg.CAT_MUVISION = "MuVision";
//Wireless
Blockly.Msg.esp8266_init_tooltip = "Inicialização do módulo wifi e conexão com o indicador de parâmetros";
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
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "enviar página HTML";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "iniciar servidor";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "se na consulta contiver";
Blockly.Msg.esp8266_request_container = "nós encontramos";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interromper: quando um ';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "desabilitar interromper no pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Especificiar uma ação a ser tomada quando for interrompido externamente (4 possíveis modos) ocorre no pino 2 ou 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Desabilitar o interruptor externo anterior";
Blockly.Msg.LKL_MODE = 'é detectado no pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"],["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["segundos", "s"], ["millisegundos", "m"], ["microsegundos", "u"]];
Blockly.Msg.time = [["segundos", "s"], ["millisegundos", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["ligar", Blockly.Msg.high], ["desligar", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['borda ascendente', 'RISING'], ['borda de queda', 'FALLING'], ['estado de mudança', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['borda ascendente', 'Pin.IRQ_RISING'], ['borda de queda', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["umidade", "h"], ["temperatura", "t"]];
Blockly.Msg.couleur = [["azul", "blue"], ["amarelo", "yellow"], ["vermelho", "red"], ["verde", "green"]];
Blockly.Msg.sens = [["frente", "a"], ["vire a direita", "d"], ["vire a esquerda", "g"]];
//sensor
Blockly.Msg.VL53L0X="Sensor de distância laser";
Blockly.Msg.VL53L0X_tooltip="inicializar sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distância medida pelo laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nretornar distância medida pelo laser em mm";
Blockly.Msg.bme280="Sensor de pressão atmosférica";
Blockly.Msg.bme280_tooltip="inicializar sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="pressão atmosférica";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nretornar pressão atmosférica em hPa";
Blockly.Msg.inter="switch is";
Blockly.Msg.inter_tooltip="retorna true (false) se a seleção é (não é) na posição indicada";
Blockly.Msg.mc005="presença detectada no pin";
Blockly.Msg.mc005_tooltip="MC005:\nretorna true (false) se a presença é (não é) detectada";
Blockly.Msg.bp = "botão pressionado no pin";
Blockly.Msg.bp_tooltip = "retorna true (false) se um botão é (não é) pressionado";
Blockly.Msg.dht11_tooltip="DHT11 :\nretorna a umidade do ar (de 20 até 80%) ou \n a temperatura (de 2 até 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nretorna a umidade do ar (de 0 até 100%) ou \n a temperatura (de -40 até 80 � C)";
Blockly.Msg.suiveur_ligne = "linha preta detectada no pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brilho no0 pin";
Blockly.Msg.light_tooltip = "retorna o valor dependendo do brilho \n0: escuro \n255: claro";
Blockly.Msg.hum = "umidade do solo no pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nretorna umidade do solo de 0 até 100%";
Blockly.Msg.light_tooltip = "retorna o valor dependendo do brilho \n0: escuro \n255: claro";
Blockly.Msg.grove_ldr = "brilho no pin";
Blockly.Msg.grove_ldr_tooltip = "retorna a medida de brilho \n0: sem brilho \n100: brilho intenso";
Blockly.Msg.potar = "posição do cursor no pin";
Blockly.Msg.potar_tooltip = "retorna o valor baseado na posição do cursor \n0: cursor esquerdo \n255: cursor direito";
Blockly.Msg.lm35 = "temperatura no pin";
Blockly.Msg.lm35_tooltip = "LM35: \nretorna a medida de temperatura em graus celcius (de 0 até 80 �)";
Blockly.Msg.ultrason_1 = "distancia < limite";
Blockly.Msg.ultrason_2 = "retorna um estado Alto se a medida de distância for menor do que o limite";
Blockly.Msg.ultrason_distance1 = "distância medida por ultrasom";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSensor de som capaz de medir distância (de 3 cm e 4 m) \nindicando os pins do Arduino para ser conectado TRIG e ECHO";
Blockly.Msg.ultrason = "ultrasom pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nretorna a distância medida em cm pelo detector ultrasom";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "movimento detectado ";
Blockly.Msg.feu = "fogo detectado ";
Blockly.Msg.presence = "obstáculo detectado ";
Blockly.Msg.appui = "touch ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nretorna true (false) se a presença é (não é) detectada";
Blockly.Msg.feu_tooltip = "CAP168: \nretorna true (false) se fogo for (não for) detectado";
Blockly.Msg.presence_tooltip = "CAP711: \nretorna true (false) se um contato teve (não teve) tomado lugar";
Blockly.Msg.appui_tooltip = "CAP831: \nretorna true (false) se um suporte é (não é) detectado";
// bluetooth
Blockly.Msg.bluetooth1 = "se os dados recebidos por bluetooth";
Blockly.Msg.bluetooth1_tooltip = "recepção de dados por bluetooth\nconectando módulo HC-06 para pins 0 e 1 \net cross Rx e Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
Blockly.Msg.bluetooth2_tooltip = "envia dados via bluetooth \nconectando módulo HC-06 para pins 0 e 1 \net cross pins Rx e Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
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
Blockly.Msg.loop = "∞ Laço";
Blockly.Msg.init = "⚙️ Configuração";
Blockly.Msg.base_setup_loop = "A função de inicialização: \nIsso é usado para incializar as variaveis,a direção dos pins ... \nIsso é executado uma vez \nO laço da função: \nEsta é parte principal do programa, todos os blocos colocados aqui no laço irão rodar indefinidamente (várias vezes por segundo) ";
Blockly.Msg.loop_tooltip = "todos os blocos colocados aqui no laço irão rodar indefinidamente (várias vezes por segundo)";
Blockly.Msg.begin_tooltip = "esse bloco é usado para definir a ordem em que o programa pode ser executado";
Blockly.Msg.begin = "🏁 INICIO";
Blockly.Msg.def = "⚙️ Declaração";
Blockly.Msg.def_tooltip = "todos os blocos colocados aqui serão executados uma única vez, aqui é onde diferentes sensores e autuadores são configurados";
Blockly.Msg.END = "🏁 FIM";
Blockly.Msg.END_tooltip = "Pare o programa, blocos colocados depois serão ignorados";
Blockly.Msg.code_tooltip = "Digite aqui uma instrução que não esteja em blocos";
//matrix
Blockly.Msg.matriceLC = "coloca o LED, linha";
Blockly.Msg.matrice_create_aff = "Cria o bloco 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Cria o bloco 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Inicialização da matriz de 64 LEDs, é necessário indicar os pins do arduino para o qual será conectado DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define o simbolo";
Blockly.Msg.matrice8x8_symbole_tooltip = "definição de simbolo para a matriz: \n 0 desliga um LED \n 1 liga um LED";
Blockly.Msg.matrice8x8_efface = "limpar a matriz";
Blockly.Msg.matrice8x8_aff = "mostrar o simbolo";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 ligar um LED da matriz e 0 desliga-lo";
Blockly.Msg.matrice8x8_del_tooltip = "Ligar (desligar) um LED nas coordenadas indicadas do array \nAtenção, array inicia em 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Mostrar o simbolo anterior definido";
Blockly.Msg.matrice8x8_efface_tooltip = "Desligar todos os LEDs na matriz";
Blockly.Msg.matrice8x8_helpurl = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.matrice16x8_tooltip = "Inicialização do array para 128 LEDs. \nMatriz <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "definição do simbolo";
Blockly.Msg.matrice16x8_symbole_tooltip = "definição do simbolo para a matriz: \n 0 desligar um LED \n 1 ligar um LED";
Blockly.Msg.matrice16x8_efface = "desligar um LEDs da matriz";
Blockly.Msg.matrice16x8_aff = "mostrar o simbolo";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 liga um LED da matriz e 0 desliga ele";
Blockly.Msg.matrice16x8_del_tooltip = "Liga (desliga) um LED na indicação das coordenadas da matriz \nAtenção inicia em 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Mostrar o simbolo anterior definido";
Blockly.Msg.matrice16x8_efface_tooltip = "Desligar todos os LEDs na matriz";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="tempo decorrido em";
Blockly.Msg.millis_start="iniciar uma cronometragem em";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "retorna a duração em microsegundos de UP ou DOWN de pulso aplicado ao pin.Se o valor do parâmetro for HIGH, o bloco esperando pelo pin para ir para HIGH, começa então o tempo, espera pelo pin para voltar para LOW level e então para o tempo ";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ wait";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Especificar o tempo de espera em segundos, millisegundos ou microsegundos. \nO programa não fará nada enquanto isso";
Blockly.Msg.millis1 = "duração em";
Blockly.Msg.millis2 = "do inicio";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "retorna a duração em milisegundos, segundos ou microsegundos desde o inicio do programa";
Blockly.Msg.ARDUINO_PULSEIN = "duração do estado";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "Esse bloco checa se o tempo indicado já terminou, se for o caso então executa o bloco colocado dentro .. Ao contrário do bloco 'para esperar' este não bloqueia." ;
Blockly.Msg.tempo1 = "all";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "texto para mostrar =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "linha y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texto para mostrar :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "linha 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "linha 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "linha 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "linha 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Número para mostrar ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "linha y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "para mostrar :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "linha 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Número 1 (ao final) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "linha 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Número 2 (ao final) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "linha 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Número 3 (ao final) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "linha 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Número 4 (ao final) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "o LED na placa";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Liga ou desligar o LED na placa do Arduino";
Blockly.Msg.blink = "piscar o LED na placa";
Blockly.Msg.blink_tooltip = "O LED da placa flash de 1 ou 10 vezes por segundo";
Blockly.Msg.del = "o LED no pin";
Blockly.Msg.del_tooltip = "ligar (desligar) o LED conectado ao pin indicado";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="ligar LEDs para";
Blockly.Msg.bargraphe_allume_tooltip="0 não ascendo os LEDs \n2,5 ascende os 2 primeiros LEDs e o 3º meio aceso \n10 ascende todos os LEDs";
Blockly.Msg.bargraphe_tooltip = "modulo gráfico de barra é composto por 10 LEDs (8 verde, 1 amarelo e 1 vermelho), é necessário indicar os pins do arduino nos quais serão conectados o DCKI e DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indique os PWM pins para conectar ao RGB LED";
Blockly.Msg.rvb_set="mostrar cores";
Blockly.Msg.rvb_set_tooltip="exibir uma cor indicando um valor para os 3 componentes (vermelho, verde, azul)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "atualizar pixels";
Blockly.Msg.pixel3 = "com a cor";
Blockly.Msg.pixel4 = "número";
Blockly.Msg.pixel5 = "alterar o brilho do pixel para";
Blockly.Msg.pixel6 = "alterar o pixel";
Blockly.Msg.pixel1_tooltip="neopixel RGB módulo indicando o pin para conectar e o número de pixels";
Blockly.Msg.pixel2_tooltip="mostrar modificações feitas";
Blockly.Msg.pixel5_tooltip="adjustar brilho do pixel (de 0 até 255)";
Blockly.Msg.pixel3_tooltip="escolha o pixel para ascender e a sua cor \ nCuidado a numeração incia em 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "colocar o DIGITAL pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escreva 0 ou 1 estado lógico para uma saída específica";
Blockly.Msg.toggle = "alternar o estado do pin";
Blockly.Msg.toggle_tooltip = "Alternar: \n escreva o estado lógico 0 se antes houver um estado 1 (e vice versa) na saída específicada";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "colocar o PWM pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "enviar um valor entre 0 e 255 em um saída específica";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "estado DIGITAL do pin";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "retorna o estado lógico (0 ou 1) do pin indicado \nretorna 1 (alto) por padrão se pull-up estiver habilitado";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "lê um estado lógico 0 ou 1 de um pin digital";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "valor ANALOG do pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "retorna um valor entre 0 e 1023";
// audio
Blockly.Msg.play = "tocar";
Blockly.Msg.play_tooltip = "tocar a nota";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "bip no pin";
Blockly.Msg.beep_TOOLTIP = "bips (a 440Hz cada 1s) no pin selecionado";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emite um som no pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequência (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duração (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emita um som no pin selecionado, na frequência desejada e para a duração desejada";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "pare o som no pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "pare o som no pin selecionado";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninicialização do módulo, volume e operação modo \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "tocar o arquivo mp3";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "tocar o som específico";
Blockly.Msg.lp2i_mp3_play_tooltip = "tocar o som atual";
Blockly.Msg.lp2i_mp3_pause = "pausar o arquivo mp3";
Blockly.Msg.lp2i_mp3_pause_tooltip = "pare o som atual";
Blockly.Msg.lp2i_mp3_prev = "ler o arquivo mp3 anterior";
Blockly.Msg.lp2i_mp3_prev_tooltip = "tocar a faixa anterior";
Blockly.Msg.lp2i_mp3_vol = "mudar o volume para";
Blockly.Msg.lp2i_mp3_vol_tooltip = "mudar o volume para o valor específico [0-48]";
Blockly.Msg.lp2i_mp3_next = "ler o seguinte arquivo mp3";
Blockly.Msg.lp2i_mp3_next_tooltip = "tocar o próximo som";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotecionar para";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "ângulo [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possível rotação entre 0 e 180 graus";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "girar";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Girar o servio conectado ao pin específico, na velocidade indicada e na direção selecionada";
//engine
Blockly.Msg.mot_tooltip = "Placa do motor controlador L293D: \n ativa ambos os motores (M1 and M2) para avançar ou virar, a velocidade pode ser colocada entre 0 e 90";
Blockly.Msg.mot_stop = "pare";
Blockly.Msg.mot_stop_tooltip = "L293D Placa do motor controlador: \npara os dois motores (M1 and M2)";
Blockly.Msg.moteur = "ativar motor";
Blockly.Msg.moteurstop = "parar motor";
Blockly.Msg.moteur_tooltip = "iniciar o DC motor conectado ao pin especificado, na velocidade indicada \nvelocidade = 0 -> motor para";
Blockly.Msg.moteurdagu_tooltiprs040 = "placa RS 040: \n ativar uma de 2 saídas para o drive DC motors, a velocidade pode ser ajustada entre 0 e 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "placa RS 040: \npara um dos 2 motores";
Blockly.Msg.moteurdagu_tooltiprs027 = "placa RS 027: \n operar uma de 2 saídas para drive DC motors, a velocidade pode ser ajustada entre 0 e 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direção";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "pra frente";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "pra trás";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "pare";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Motor de passo";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - Motor de passo";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "velocidade (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "número de passos";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="motor passo-por-passo";
Blockly.Msg.m_pap_step="passo";
Blockly.Msg.m_pap_step1="mover para frente";
Blockly.Msg.m_pap_tooltip = "Inicialização de um motor de passo. \nInidicando o número de passos, velocidade em rpm e pins para conectar";
Blockly.Msg.m_pap_step_tooltip = "ativar o motor de passo com o número de passos indicados, as instruções seguintes só poderão ser executados uma vez por rotação concluida do motor";
// serial
Blockly.Msg.Serial_Init = "porta serial ligada";
Blockly.Msg.Serial_Init_tooltip = "Define a taxa de comunicação em caracteres por segundo para comunicação serial";
Blockly.Msg.Serial_Write = "enviar para a porta serial";
Blockly.Msg.Serial_write_tooltip = "Enviar dados para a porta serial";
Blockly.Msg.Serial_read = "leitura de dados na porta serial";
Blockly.Msg.Serial_read_tooltip = "retorna o primeiro byte de dados disponível na porta serial, ou -1 se nenhum dado estiver disponível";
Blockly.Msg.Serial_available = "grande quantidade de dados na porta serial";
Blockly.Msg.Serial_available_tooltip = "retorna o número de bytes disponíveis na fila da porta serial ou 0 se nada estiver disponível";
Blockly.Msg.Serial_saut = "uma quebra de linha";
Blockly.Msg.Serial_saut_tooltip = "retorna uma quebra de linha no monitor serial";
Blockly.Msg.Serial_space = "um separador";
Blockly.Msg.Serial_space_tooltip = "retorna um espaço no monitor serial";
Blockly.Msg.repl_read = "comando inserido pelo usuário";
// software serial
Blockly.Msg.SSERIAL_Init = "porta de software na Rx";
Blockly.Msg.SSERIAL_tooltip = "Criando nova porta de comunicação usando os pins especificos e velocidade";
Blockly.Msg.SSERIAL_Read = "dados lidos na porta de software";
Blockly.Msg.SSERIAL_Read_tooltip = "retorna o primeiro byte de dados recebidos disponíveis na porta de software ou -1 se nenhum dado estiver disponível";
Blockly.Msg.SSERIAL_Write = "enviar para a porta de software";
Blockly.Msg.SSERIAL_Write_tooltip = "Enviar dados para a porta de software";
Blockly.Msg.SSERIAL_Read_tooltip = "retorna o primeiro byte de dados recebidos disponíveis na porta de software ou -1 se nenhum dado estiver disponível";
Blockly.Msg.SSERIAL_Available = "quantidade de dados na porta de software";
Blockly.Msg.SSERIAL_Available_tooltip = "retorna o número de bytes disponíveis na fila da porta de software, ou 0 se nenhum estiver disponível";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "Inicial";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto vai para a posição inicial direita";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='calibrar ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='perna ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='pé ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='braço ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use pequenos valores positivos e negativos interativamente, mude gradualmente até ficar completamente reto (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'salvar Trims no EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use somente depois de uma vez completamente reto (90º) uma vez; apague este BLOCO depois para programação adicional';
Blockly.Msg.OTTO9_MOVE_TEXT = "mover";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto movimentos basicos";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ pra frente", "FORWARD"], ["↓ pra trás", "BACKWARD"], ["↺ virar a esquerda", "LEFT"], ["↻ virar a direita", "RIGHT"], ["dobrar a esquerda", "BENDLEFT"], ["dobrar a direita", "BENDRIGHT"], ["agitar a perna esquerda", "SHAKELEFT"], ["agitar a perna direita", "SHAKERIGHT"], ["pra cima", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ pra frente", "FORWARD"], ["↓ pra trás", "BACKWARD"], ["↺ virar a esquerda", "LEFT"], ["↻ virar a direita", "RIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "velocidade";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["lento", "2000"],["muito lento", "3000"] , ["rápido", "750"], ["muito rápido", "500"], ["muito mais rápido", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normal", "45"],["lento", "20"],["muito lento", "10"] , ["rápido", "60"], ["muito rápido", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dançar";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["cruzando ⟵", "crusaitoLEFT"],["cruzando ⟶", "crusaitoRIGHT"], ["agitando ↑", "flappingFRONT"], ["agitando ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "tamanho";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["pequeno", "10"], ["grande", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "faça";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto movimentos completos";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesto";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Sons emocionais combinados com movimentos";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 feliz1", "OttoSuperHappy"],["🙂 feliz2", "OttoHappy"], ["🙁 triste", "OttoSad"], ["😴 dormir", "OttoSleeping"], ["😕 confuso", "OttoConfused"], ["😰 irrítado", "OttoFretful"], ["😍 amor", "OttoLove"], ["😡 bravo", "OttoAngry"], ["🤩 magia", "OttoMagic"], ["😐 onda", "OttoWave"], [" 😎 vitóia", "OttoVictory"], ["😞 falha", "OttoFail"], ["💩 peido", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "som";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Sons emocionais";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 feliz1", "S_superHappy"], ["🙂 feliz2", "S_happy"], ["😊 feliz3", "S_happy_short"], ["🙁 triste", "S_sad"], ["😕 confuso", "S_confused"], ["🤗 fofo", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surpresa", "S_surprise"],["🤖 conectar", "S_connection"], [" 🤖 desconectar", "S_disconnection"], ["👇 empurrar", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 dormir", "S_sleeping"], ["💩 peido1", "S_fart1"], ["💩 peido2", "S_fart2"], ["💩 peido3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distância [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Distância entre 2cm e 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstáculo";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["perto", "10"],["muito perto", "3"],["longe", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "ruído medido";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 é quieto, 500 de barulho e mais do que 1000 é alto, também ajusta o sensor de trimpot";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "toque";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use se condicional";
Blockly.Msg.OTTO9_GETG_TEXT = "movimento";
Blockly.Msg.OTTO9_MOUTH_TEXT = "boca";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "emoção na boca para matiz de 8x8 LED #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 feliz1", "happyOpen"],["🙂 feliz2", "happyClosed"], ["😊 sorriso", "smile"], ["😦 triste1", "23"], ["🙁 triste2", "24"], ["😮 surpreso", "smallSurprise"], ["😲 Surpreso2", "bigSurprise"], ["😕 confuso", "confused"],["😛 língua", "tongueOut"],["🙃 boba", "culito"],  ["😑 sério", "lineMouth"], ["🙄 chateado", "21"], ["💖 coração", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ trovão", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "olhos";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "emoção nos olhos para matriz de 16x8 i2C LED ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 feliz1", "happy_bmp"],["🙂 feliz2", "eyes_bmp"], ["😦 triste", "sad_bmp"], ["😡 faminto1", "angry_bmp"], ["😡 faminto2", "angry2_bmp"], ["😰 livre", "freetful_bmp"], ["😕 confuso", "confused_bmp"],["😴 dormir", "sleep_bmp"],["😍 amor", "love_bmp"],  ["😑 onda", "wave_bmp"], ["🤩 magia", "magic_bmp"], ["😞 falhou", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "texto nos olhos";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " olhos limpos";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limitado a MAISCULOS A até Z NÚMEROS 0 até 9 : ; < >  = @, max.9 caracteres";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "texto na boca";
Blockly.Msg.OTTO9_CLEAR_TEXT = " limpar boca";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Desligar todos os LEDs da boca na matriz 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "braços";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "mova os braços!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["mãos ao alto", "HANDSUP"], ["onda manual esquerda", "HANDWAVE1"], ["onda manual direita", "HANDWAVE2"]];

//CCS811

Blockly.Msg.CCS811="Init CO2(CCS811) sensor";
Blockly.Msg.CCS811_name="CO2(CCS811) sensor";
Blockly.Msg.CCS811_2="- SDA-SCL and connect WAK to GND";
Blockly.Msg.CCS811_available="Is the sensor available?";
Blockly.Msg.CCS811_readed = "Is the measure readed?";
Blockly.Msg.CCS811_values="value";


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

// SOFTWARE SERIAL FOR BT
Blockly.Msg.SSERIAL_BT_Init="Init Bluetooth SoftwareSerial";
Blockly.Msg.SSERIAL_BT_TX="Pin TX#";
Blockly.Msg.SSERIAL_BT_RX="Pin RX#";
Blockly.Msg.SSERIAL_BT_BAUD="Baudios";
Blockly.Msg.SSERIAL_BT_Read="SoftwareSerial BT Read value";
Blockly.Msg.SSERIAL_BT_Println="SoftwareSerial BT Print on new line";
Blockly.Msg.SSERIAL_BT_Print="SoftwareSerial BT Print on same line";
Blockly.Msg.SSERIAL_BT_Write="SoftwareSerial BT write"
Blockly.Msg.SSERIAL_BT_Avai="SoftwareSerial BT Available?";
Blockly.Msg.SSerial_BT_Print_Format="SoftwareSerial BT Print  Format";
"use strict";
goog.provide("Blockly.Msg.fr");
goog.require("Blockly.Msg");

Blockly.Msg.INOUT_HIGH_LEVEL = "1 (HIGH Zustand)";
Blockly.Msg.INOUT_LOW_LEVEL = "0 (LOW Zustand)";
Blockly.Msg.ARD_TYPE_CHAR = "Zeichen";
Blockly.Msg.ARD_TYPE_TEXT = "Text";
Blockly.Msg.ARD_TYPE_BOOL = "Boolean";
Blockly.Msg.ARD_TYPE_SHORT = "Byte";
Blockly.Msg.ARD_TYPE_NUMBER = "Ganzzahl";
Blockly.Msg.ARD_TYPE_UNUMBER = "vorzeichenlose Ganzzahl";
Blockly.Msg.ARD_TYPE_LONG = "lange Ganzzahl";
Blockly.Msg.ARD_TYPE_DECIMAL = "Fließkommazahl";
Blockly.Msg.ARD_TYPE_ARRAY = "Feld";
Blockly.Msg.ARD_TYPE_NULL = "leer";
Blockly.Msg.ARD_TYPE_UNDEF = "nicht definiert";
Blockly.Msg.ARD_TYPE_VOLATILE = "flüchtige Ganzzahl";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "Eingabe fehlt in einem Block";
Blockly.Msg.ARDUINO_BETWEEN = "zufällige Nummer zwischen";
Blockly.Msg.ARDUINO_BETWEEN_AND = "und";
Blockly.Msg.ARDUINO_VAR_DECLARE = "Zustände";
Blockly.Msg.ARDUINO_VAR_AS = "als";
Blockly.Msg.ARDUINO_VAR_VAL = "von Wert";
Blockly.Msg.base_def_const = "setze";
Blockly.Msg.base_define_const = "welches gleich ist mit";
Blockly.Msg.base_define_const_tooltip =
  "erlaubt dem Programmiere jedem Wert einen Namen zu geben";
Blockly.Msg.type = "setze einen Wert als den ausgewählten Typ";
Blockly.Msg.ADD_COMMENT = "Füge einen Kommentar hinzu";
Blockly.Msg.CHANGE_VALUE_TITLE = "Ändere Wert:";
Blockly.Msg.CLEAN_UP = "Lösche Blöcke";
Blockly.Msg.COLLAPSE_ALL = "Reduziere Blöcke";
Blockly.Msg.COLLAPSE_BLOCK = "Reduziere Blöcke";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Während";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "standard";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "ist";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "falls die Variable gültig ist";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "mache";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 =
  "Falls ein Wert wahr ist, dann führe die folgenden Befehle aus";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, ansonsten führe den nächsten Block mit Befehlen aus";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, ansonsten führe den nächsten Block mit Befehlen aus, falls dieser Zustand wahr ist";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, ansonsten führe den nächsten Block mit Befehlen aus, falls dieser Zustand wahr ist. Falls keine Bedingung erfüllt ist, dann führe den Standardkommandoblock aus.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "verlasse die Schleife";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "wechsle zur nächsten Iteration";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Verlasse diese Schleife";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Überspringe den Rest dieser Schleife und fahre mit der nächsten Iteration fort";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warnung: Dieser Block muss in einer Schleife benutzt werden";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "für jedes Element %1 in der Liste %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP =
  "Weisen Sie für jedes Element in einer Liste den Wert des Elements der Variablen %1 zu und führe dann die Anweisungen aus";
Blockly.Msg.CONTROLS_FOR_TITLE = "für %1 im Bereich von %2 bis %3 in %4 er-Schritten";
Blockly.Msg.CONTROLS_FOR_TITLE2 =
  "für %1 im Bereich von %2 to %3 (>=) in %4 er-Schritten";
Blockly.Msg.CONTROLS_FOR_TOOLTIP =
  "Setze Variable %1 auf Werte von der Startnummer bis zur Endnummer, mit angegebener Schrittgröße, und führe die vorgegebenen Anweisungen aus";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Bedingung hinzufügen";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "eine letzte Bedingung hinzufügen";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Hinzufügen, löschen oder neuordnen";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "sonst";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "falls nicht";
Blockly.Msg.CONTROLS_IF_MSG_IF = "falls";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 =
  "Falls ein Wert wahr ist, dann führe die Befehle aus";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, andererseits führe den zweiten Block mit Befehlen aus";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, andererseits, falls der zweite Wert wahr ist, führe den zweiten Block mit Befehlen aus";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 =
  "Falls ein Wert wahr ist, dann führe den ersten Block mit Befehlen aus, andererseits, falls der zweite Wert wahr ist, führe den zweiten Block mit Befehlen aus. Falls keiner der Werte wahr ist, führe den letzten Block mit Befehlen aus";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "mache";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "🔁 wiederhole %1 mal";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Führe Befehle mehrfach aus";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "wiederhole";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "wiederhole so lange wie";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "So lange wie ein Wert falsch ist, führe die Anweisungen aus";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "So lange wie ein Wert wahr ist, führe die Anweisungen aus";
Blockly.Msg.DELETE_ALL_BLOCKS = "Lösche diese %1 Blöcke?";
Blockly.Msg.DELETE_BLOCK = "Lösche den Block";
Blockly.Msg.DELETE_VARIABLE = "Lösche die Variable %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "Lösche %1 Aufrufe von Variable %2?";
Blockly.Msg.DELETE_X_BLOCKS = "Lösche %1 Blöcke";
Blockly.Msg.DISABLE_BLOCK = "Deaktiviere Block";
Blockly.Msg.DUPLICATE_BLOCK = "Dupliiziere";
Blockly.Msg.ENABLE_BLOCK = "Aktiviere Block";
Blockly.Msg.EXPAND_ALL = "Erweitere Blöcke";
Blockly.Msg.EXPAND_BLOCK = "Erweitere Block";
Blockly.Msg.EXTERNAL_INPUTS = "Externe Eingaben";
Blockly.Msg.HELP = "Hilfe";
Blockly.Msg.INLINE_INPUTS = "Onlineeinträge";
Blockly.Msg.LISTS_CREATE1 = "erstelle eine Liste";
Blockly.Msg.LISTS_CREATE2 = "mit";
Blockly.Msg.LISTS_CREATE_TOOLTIP =
  "Erstelle eine Liste mit der gewünschten Anzahl von Elementen";
Blockly.Msg.LISTS_append = "füge %1 am Ende von %2 hinzu";
Blockly.Msg.LISTS_append_TOOLTIP = "füge ein Element am Ende der Liste hinzu";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "Liste";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Hinzufügen, löschen, oder neuordnen";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "erstelle eine Liste mit";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Füge ein Element hinzu";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP =
  "gibt ein Feld oder eine Liste mit jeder Anzahl von Elementen zurück";
Blockly.Msg.LISTS_GET = "das Element";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# seit dem Ende";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#"; // untranslated
Blockly.Msg.LISTS_GET_INDEX_GET = "Erhalte";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "erhalte und lösche";
Blockly.Msg.LISTS_GET_INDEX_LAST = "letztes";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "zufällig";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "lösche";
Blockly.Msg.LISTS_GET_INDEX_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST =
  "gibt erstes Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "gibt Element an bestimmter Stelle der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST =
  "gibt letztes Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM =
  "gibt zufälliges Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Löscht ung gibt erstes Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Löscht ung gibt Element an der ausgewählten Stelle der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Löscht ung gibt letztes Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Löscht ung gibt zufälliges Element der Liste zurück";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST =
  "Löscht erstes Element der Liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Löscht Element an der angegebenen Stelle aus der Liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST =
  "Löscht letztes Element der Liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Löscht zufälliges Element der Liste";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "bis # seit dem Ende";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "bis zu #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "bis zum Ende";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST =
  "erhalte die Teilliste ab Beginn";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END =
  "erhalte die Teilliste ab # seit dem Ende";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "erhalte die Teilliste ab #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP =
  "Erstellt eine Kopie des ausgewählten Teils einer Liste";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 ist das letzte Element";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 ist das erste Element";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "finde die erste Erscheinung des Elements";
Blockly.Msg.LISTS_INDEX_OF_LAST = "finde die letzte Erscheinung des Elements";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP =
  "gibt den Index der ersten/letzten Erscheinung eines Elemets in der Liste zurück,  gibt %1 zurück, falls das Element nicht gefunden wurde";
Blockly.Msg.LISTS_INLIST = "in der Liste";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 ist leer";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "gibt wahr zurück, wenn Liste leer ist";
Blockly.Msg.LISTS_LENGTH_TITLE = "Länge von%1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "gibt die Länge einer Liste zurück";
Blockly.Msg.LISTS_REPEAT_TITLE =
  "erstelle eine Liste mit dem Element %1, welches %2 mal vorkommen soll";
Blockly.Msg.LISTS_REPEAT_TOOLTIP =
  "erstelle eine Liste bestehend aus dem gelieferten Wert, der die angegebene Anzahl von Malen wiederholt wird";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "wie";
Blockly.Msg.LISTS_of = "von";
Blockly.Msg.LISTS_SET_INDEX_SET = "setze das Element";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "fügt das Element am Anfang einer Liste ein";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "fügt das Element an der angegebenen Stelle einer Liste ein";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "fügt das Element am Ende einer Liste ein";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "fügt das Element an einer zufälligen Stelle einer Liste ein";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "repariere das erste Element in einer Liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "aktualisiere das Element an der angegebenen Position in einer Liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "repariere das letzte Element in einer Liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "repariere ein zufälliges Element in einer Liste";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "falsch";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "gibt einen logischen 0 oder 1 Zustand zurück";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "wahr";
Blockly.Msg.compare = "gibt wahr zurück, falls ein Wert in einem Intervall vorkommt";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "gibt wahr zurück, falls beide Werte gleich sind";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT =
  "gibt wahr zurück, falls der erste Wert größer als der zweite Wert ist";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE =
  "gibt wahr zurück, falls der erste Wert größer oder gleich als der zweite Wert ist";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT =
  "gibt wahr zurück, falls der erste Wert kleiner als der zweite Wert ist";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE =
  "gibt wahr zurück, falls der erste Wert kleiner oder gleich als der zweite Wert ist";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ =
  "gibt wahr zurück, falls die beiden Werte ungleich sind";
Blockly.Msg.LOGIC_NEGATE_TITLE = "nicht %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP =
  "gibt wahr zurück, falls der Wert falsch ist, gibt falsch zurück, falls der Wert wahr ist";
Blockly.Msg.LOGIC_NULL = "null";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "gibt null zurück";
//TODO
Blockly.Msg.LOGIC_OPERATOR = [
  ["and", "and"],
  ["or", "or"],
  ["or exclusive", "xor"],
  ["left shift", "shiftL"],
  ["right shift", "shiftR"],
];
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND =
  "returns true if both entries are true";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR =
  "returns true if at least one of the entries is true";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor =
  "returns true if only one of the entries is true";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR = "shifts to the right  n";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL = "makes a left shift";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "test";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "if false";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "if true";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test' If it is true, return the value 'if true', else return the value 'if false'";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+"; // untranslated
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "returns the sum of the two numbers";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE =
  "returns the quotient of the two numbers";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS =
  "returns the difference of the two numbers";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY =
  "returns the product of the two numbers";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER =
  "returns the first number raised to the power of the second";
Blockly.Msg.MATH_CHANGE_TITLE = "increment variable %1 of %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Add a number to the variable %1";
Blockly.Msg.MATH_CONSTANT_TOOLTIP =
  "returns one of the current constants: π (3.141 ...), e (2.718 ...), φ (1.618 ...), sqrt (2) (1.414 ...), sqrt (½) (0.707 ...), or ∞ (infinite) ";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "force %1 between %2 and %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified (included) limits";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷"; // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "is divisible by";
Blockly.Msg.MATH_IS_EVEN = "is even";
Blockly.Msg.MATH_IS_NEGATIVE = "is negative";
Blockly.Msg.MATH_IS_ODD = "is odd";
Blockly.Msg.MATH_IS_POSITIVE = "is positive";
Blockly.Msg.MATH_IS_PRIME = "is prime";
Blockly.Msg.MATH_IS_TOOLTIP =
  "returns true or false if a number is even, odd, prime, integer, positive, negative, or if it is divisible by a number";
Blockly.Msg.MATH_IS_WHOLE = "is integer";
Blockly.Msg.MATH_MODULO_TITLE = "remainder %1 ÷%2";
Blockly.Msg.MATH_MODULO_TOOLTIP =
  "returns the rest of the Euclidean division of the two numbers";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×"; // untranslated
Blockly.Msg.MATH_NUMBER_TOOLTIP = "A number";
Blockly.Msg.MATH_ONLIST_HELPURL = ""; // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "list average";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "maximum of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "median of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "minimum of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "majority of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "random element of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of the list";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "sum of the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Returns the average (arithmetic) numeric values ​​in the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "returns the largest number in the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN =
  "returns the median number of the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "returns the smallest number in the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE =
  "returns a list of the most common element (s) in the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "returns an item in the random list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV =
  "returns the standard deviation of the list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM =
  "returns the sum of all the numbers in the list";
Blockly.Msg.MATH_POWER_SYMBOL = "^"; // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP =
  "returns a random fraction between 0.0 (inclusive) and 1.0 (excluded)";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "random integer%1 & %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP =
  "returns a random integer between the two specified, included limits";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "round";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Round a number above or below";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "absolute value";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "square root";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "returns the absolute value of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "returns e to the power of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN =
  "returns the natural logarithm of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 =
  "returns the base 10 logarithm of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "returns the opposite of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "returns 10 to the power of a number";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "returns the square root of a number";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-"; // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos"; // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin"; // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan"; // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos"; // untranslated
Blockly.Msg.MATH_TRIG_SIN = "sin"; // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan"; // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "returns the arccosinus of a number";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "returns the arcsine of a number";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "returns the arctangent of a number";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "returns the cosine of an angle in degrees";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "returns the sine of an angle in degrees";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN =
  "returns the tangent of an angle in degrees";
Blockly.Msg.NEW_VARIABLE = "Create a variable";
Blockly.Msg.NEW_VARIABLE_TITLE = "New name of the variable";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = ""; // untranslated
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Execute user-defined%1 function";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP =
  "Execute user-defined function%1 and use its result";
Blockly.Msg.PROCEDURES_CREATE_DO = "Create %1";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "mache";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP =
  "Create a procedure or function without data return";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "gebe zurück";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP =
  "Create a procedure or function with a data return";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING =
  "Warning: This function has duplicate settings";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Highlight the function definition";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "returns the specified value";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING =
  "Warning: This block must be used in a procedure or function definition";
Blockly.Msg.PROCEDURES_MUTATORARG_TYPE = "of type";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP =
  "Add an entry to the procedure or function";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "input arguments";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, delete, or rearrange";
Blockly.Msg.REDO = "Redo";
Blockly.Msg.REMOVE_COMMENT = "Lösche ein Kommentar";
Blockly.Msg.RENAME_VARIABLE = "Rename variable '%1'";
Blockly.Msg.RENAME_VARIABLE_TITLE = "Rename variables '%1'";
//Array
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = "leer!";
Blockly.Msg.tab_create = "Create block 'element of array %1'";
Blockly.Msg.tab_create_fix = "Create Block 'put an element from array %1 to '";
Blockly.Msg.ARRAY_CREATE_WITH = "made up of";
Blockly.Msg.ARRAY_taille = "Größe";
Blockly.Msg.ARRAY_contenu = "which contains";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "list or array";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "Add, Delete, or Reorder";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "elements";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "element";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "Returns a list with a number of items";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "the element of the array";
Blockly.Msg.ARRAY_GETINDEX_ITEM2 = "Array";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1 = "returns the value stored in the list";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2 = "created an array of the selected type";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3 =
  "fix an element of the list or array to the indicated value";
Blockly.Msg.ARRAY_create = "set array";
Blockly.Msg.ARRAY_fixe = "put the element of the array";
Blockly.Msg.ARRAY_dim = "Größe von";
Blockly.Msg.ARRAY_index = "Index";
Blockly.Msg.ARRAY_append_tooltip =
  "add an item at the end of the list or array";
Blockly.Msg.ARRAY_append_url = "";
Blockly.Msg.size = "Arraygröße";
Blockly.Msg.size_TOOLTIP = "returns the size of the list or array";
//text
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Füge ein Element hinzu";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "Text";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Add, Delete, or Reorder";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 is empty";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "returns true if the supplied text is empty";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "text created with";
Blockly.Msg.TEXT_JOIN_TOOLTIP =
  "returns a text aggregating any number of elements";
Blockly.Msg.TEXT_LENGTH_TITLE = "length of %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP =
  "returns the number of letters (including spaces) of the supplied text";
Blockly.Msg.TEXT_PRINT_TITLE = "show %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Show text, number or other specified value";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "A letter, a word or a phrase";
Blockly.Msg.TODAY = "Today";
Blockly.Msg.UNDO = "Cancel";
Blockly.Msg.VARIABLES_AS = "type";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "var";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Create block 'set variable %1 to '";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "returns the value of this variable";
Blockly.Msg.VARIABLES_SET = "put the variable";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Create block %1";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Set the variable to the specified value";
Blockly.Msg.var_set_init = "set variable";
Blockly.Msg.var_set_init_tooltip =
  "Declare and initialize the variable of the specified type and value";
Blockly.Msg.ARDUINO_VAR_CONST = "set constant";
Blockly.Msg.ARDUINO_VAR_CONST_tooltip =
  "Declares a constant of the specified type and value";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "A variable called %1 already exists";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "";
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = "then";
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE =
  Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF =
  Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM =
  Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT =
  Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;

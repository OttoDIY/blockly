"use strict";
goog.provide("Blockly.Msg.fr");
goog.require("Blockly.Msg");

Blockly.Msg.INOUT_HIGH_LEVEL = "1(high state)";
Blockly.Msg.INOUT_LOW_LEVEL = "0(low state)";
Blockly.Msg.ARD_TYPE_CHAR = "Zeichen";
Blockly.Msg.ARD_TYPE_TEXT = "Text";
Blockly.Msg.ARD_TYPE_BOOL = "boolean";
Blockly.Msg.ARD_TYPE_SHORT = "byte";
Blockly.Msg.ARD_TYPE_NUMBER = "integer";
Blockly.Msg.ARD_TYPE_UNUMBER = "unsigned integer";
Blockly.Msg.ARD_TYPE_LONG = "long integer";
Blockly.Msg.ARD_TYPE_DECIMAL = "floating point number";
Blockly.Msg.ARD_TYPE_ARRAY = "array";
Blockly.Msg.ARD_TYPE_NULL = "empty";
Blockly.Msg.ARD_TYPE_UNDEF = "nicht definiert";
Blockly.Msg.ARD_TYPE_VOLATILE = "volatile integer";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "typing missing on a block";
Blockly.Msg.ARDUINO_BETWEEN = "zufällige Nummer zwischen";
Blockly.Msg.ARDUINO_BETWEEN_AND = "und";
Blockly.Msg.ARDUINO_VAR_DECLARE = "states";
Blockly.Msg.ARDUINO_VAR_AS = "als";
Blockly.Msg.ARDUINO_VAR_VAL = "von Wert";
Blockly.Msg.base_def_const = "setze";
Blockly.Msg.base_define_const = "which is equivalent to";
Blockly.Msg.base_define_const_tooltip =
  "allows the programmer to give a name to any value";
Blockly.Msg.type = "set a value as the selected type";
Blockly.Msg.ADD_COMMENT = "Füge einen Kommentar hinzu";
Blockly.Msg.CHANGE_VALUE_TITLE = "Ändere Wert:";
Blockly.Msg.CLEAN_UP = "Clean Blocks";
Blockly.Msg.COLLAPSE_ALL = "Reduce Blocks";
Blockly.Msg.COLLAPSE_BLOCK = "Reduce Block";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Während";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "standard";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "ist";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "if the variable is valid";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "mache";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 =
  "If a value is true then execute the following commands";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 =
  "If a value is true then execute the first block of commands, otherwise execute the next block of commands";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 =
  "If a value is true then execute the first block of commands, otherwise execute the next block of commands if the condition is true";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 =
  "If a value is true then execute the first block of commands, else execute the next block of commands if the condition is true.If no condition is satisfied, then make the default command block.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "verlasse die Schleife";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "move to the next iteration";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Verlasse diese Schleife";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Skip the rest of this loop, and continue with the next iteration";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warning: This block must be used in a loop";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "für jedes Element %1 in der Liste %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, assign the value of the item to variable %1, and then execute statements";
Blockly.Msg.CONTROLS_FOR_TITLE = "for %1 ranging from %2 to %3 in steps of %4";
Blockly.Msg.CONTROLS_FOR_TITLE2 =
  "for %1 ranging from %2 to %3 (>=)in steps of %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP =
  "Set variable %1 to values ​​from start number to end number, incrementing by specified step, and execute the specified statements";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Add Condition";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Add a final condition";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Add, delete or reorder";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "sonst";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "falls nicht";
Blockly.Msg.CONTROLS_IF_MSG_IF = "falls";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 =
  "If a value is true, then execute some orders";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then execute the first block of orders, otherwise execute the second block of orders";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then execute the first block of orders, otherwise, if the second value is true, execute the second block of orders";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then execute the first block of orders, otherwise, if the second value is true, execute the second block of orders.If none of the values ​​are true, execute the last block of orders ";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "mache";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "🔁 wiederhole %1 mal";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Run statements multiple times";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat up";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "wiederhole so lange wie";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "As long as a value is false, then execute instructions";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "As long as a value is true, then execute instructions";
Blockly.Msg.DELETE_ALL_BLOCKS = "Delete these %1 blocks?";
Blockly.Msg.DELETE_BLOCK = "Lösche den Block";
Blockly.Msg.DELETE_VARIABLE = "Lösche die Variable %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "Remove %1 uses of variable%2?";
Blockly.Msg.DELETE_X_BLOCKS = "Delete%1 blocks";
Blockly.Msg.DISABLE_BLOCK = "Deaktiviere Block";
Blockly.Msg.DUPLICATE_BLOCK = "Dupliiziere";
Blockly.Msg.ENABLE_BLOCK = "Aktiviere Block";
Blockly.Msg.EXPAND_ALL = "Erweitere Blöcke";
Blockly.Msg.EXPAND_BLOCK = "Erweitere Block";
Blockly.Msg.EXTERNAL_INPUTS = "External Inputs";
Blockly.Msg.HELP = "Hilfe";
Blockly.Msg.INLINE_INPUTS = "Online Entries";
Blockly.Msg.LISTS_CREATE1 = "erstelle eine Liste";
Blockly.Msg.LISTS_CREATE2 = "mit";
Blockly.Msg.LISTS_CREATE_TOOLTIP =
  "Create a list with the desired number of items";
Blockly.Msg.LISTS_append = "add %1 at the end of %2";
Blockly.Msg.LISTS_append_TOOLTIP = "add an item at the end of the list";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, Delete, or Reorder";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "erstelle eine Liste mit";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Füge ein Element hinzu";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP =
  "returns an array or list with any number of elements";
Blockly.Msg.LISTS_GET = "das Element";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# since the end";
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
  "Deletes and returns the item at the specified position in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Deletes and returns the last item in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Deletes and returns a random item in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST =
  "Deletes the first item in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Deletes the item at the specified position in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST =
  "Deletes the last item in a list";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM =
  "Deletes a random item from a list";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "until # since the end";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "up to #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "bis zum Ende";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST =
  "get the sublist from the beginning";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END =
  "get the sublist from # since the end";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "get the sublist from #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP =
  "Creates a copy of the specified part of a list";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last element";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "find the first instance of the item";
Blockly.Msg.LISTS_INDEX_OF_LAST = "find the last instance of the item";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP =
  "returns the index of the first / last occurrence of the item in the list, returns%1 if the item is not found";
Blockly.Msg.LISTS_INLIST = "in der Liste";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 ist leer";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "gibt wahr zurück, wenn Liste leer ist";
Blockly.Msg.LISTS_LENGTH_TITLE = "Länge von%1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "returns the length of a list";
Blockly.Msg.LISTS_REPEAT_TITLE =
  "create a list with the item%1 repeated%2 times";
Blockly.Msg.LISTS_REPEAT_TOOLTIP =
  "Create a list consisting of the supplied value repeated the specified number of times";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "wie";
Blockly.Msg.LISTS_of = "von";
Blockly.Msg.LISTS_SET_INDEX_SET = "put the element";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserts the item at the beginning of a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserts the item at the position specified in a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Add item at the end of a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserts the item at random into a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Fix the first item in a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Update the item to the specified position in a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Fix the last item in a list";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM =
  "Fix a random element in a list";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "false";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "returns a 0 or 1 logical state";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "true";
Blockly.Msg.compare = "returns true if a value is in an interval";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "returns true if both entries are equal";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT =
  "returns true if the first entry is greater than the second";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE =
  "returns true if the first entry is greater than or equal to the second";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT =
  "returns true if the first entry is smaller than the second";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE =
  "returns true if the first entry is smaller or equal to the second";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ =
  "returns true if the two entries are different";
Blockly.Msg.LOGIC_NEGATE_TITLE = "not %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP =
  "returns true if the entry is false, returns false if the entry is true";
Blockly.Msg.LOGIC_NULL = "null";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "returns null";
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

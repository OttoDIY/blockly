'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');

Blockly.Msg.INOUT_HIGH_LEVEL = "1(مستوى عال)";
Blockly.Msg.INOUT_LOW_LEVEL = "0(مستوى منخفض)";
Blockly.Msg.ARD_TYPE_CHAR = "حرف";
Blockly.Msg.ARD_TYPE_TEXT = "نص";
Blockly.Msg.ARD_TYPE_BOOL = "قيمة منطقية";
Blockly.Msg.ARD_TYPE_SHORT = "byte";
Blockly.Msg.ARD_TYPE_NUMBER = "عدد";
Blockly.Msg.ARD_TYPE_UNUMBER = "رقم موجب، عدد إيجابي";
Blockly.Msg.ARD_TYPE_LONG = "رقم طويل";
Blockly.Msg.ARD_TYPE_DECIMAL = "floating point number";
Blockly.Msg.ARD_TYPE_ARRAY = "مجموعه";
Blockly.Msg.ARD_TYPE_NULL = "فارغ";
Blockly.Msg.ARD_TYPE_UNDEF = "غير معرف";
Blockly.Msg.ARD_TYPE_VOLATILE = "متغير حساس";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "الكتابة في عداد المفقودين على كتلة";
Blockly.Msg.ARDUINO_BETWEEN = "رقم عشوائي بين";
Blockly.Msg.ARDUINO_BETWEEN_AND = "و";
Blockly.Msg.ARDUINO_VAR_DECLARE="مواقف";
Blockly.Msg.ARDUINO_VAR_AS = "كما";
Blockly.Msg.ARDUINO_VAR_VAL = "ذات قيمة";
Blockly.Msg.base_def_const = "عرف";
Blockly.Msg.base_define_const = "وهو ما يعادل";
Blockly.Msg.base_define_const_tooltip = "يسمح للمبرمج بإعطاء اسم لأي قيمة";
Blockly.Msg.type = "قم بتعيين قيمة كنوع محدد";
Blockly.Msg.ADD_COMMENT = "💬تعليق";
Blockly.Msg.CHANGE_VALUE_TITLE = "تغيير القيمة:";
Blockly.Msg.CLEAN_UP = "🛁كتل واضحة";
Blockly.Msg.COLLAPSE_ALL = "🗜تقليل الكتل";
Blockly.Msg.COLLAPSE_BLOCK = "🗜كتلة واضحة";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "يحل محل";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "تقصير";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "يكون";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "إذا كان المتغير صالحًا";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "فعل";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "إذا كانت القيمة صحيحة ، فقم بتنفيذ الأوامر التالية";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "إذا كانت القيمة صحيحة ، فقم بتنفيذ المجموعة الأولى من الأوامر ، وإلا فقم بتنفيذ المجموعة التالية من الأوامر";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "إذا كانت القيمة صحيحة ، فقم بتنفيذ المجموعة الأولى من الأوامر ، وإلا فقم بتنفيذ المجموعة التالية من الأوامر إذا كان الشرط صحيحًا";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "إذا كانت القيمة صحيحة ، فقم بتنفيذ الكتلة الأولى من الأوامر ، وإلا قم بتنفيذ الكتلة التالية من الأوامر إذا كان الشرط صحيحًا إذا لم يتم استيفاء أي شرط ، فقم بإجراء كتلة الأوامر الافتراضية." ;
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "اخرج من الحلقة";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "استمر ابتداءا من التكرار التالي من الحلقة";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "اخرج من الحلقة الحالية.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "تخط ما تبقى من هذه الحلقة، واستمر ابتداءا من التكرار التالي.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "تحذير: يمكن استخدام هذه القطعة فقط داخل حلقة.";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "لكل عنصر %1 في قائمة %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "لكل عنصر في قائمة ما، عين المتغير '%1' لهذا الغنصر، ومن ثم نفذ بعض الأوامر.";
Blockly.Msg.CONTROLS_FOR_TITLE = "عد بـ %1 من %2 إلى %3 بمعدل %4";
Blockly.Msg.CONTROLS_FOR_TITLE2 = "عد بـ %1 من %2 إلى %3 بمعدل %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "اجعل المتغير  %1 يأخذ القيم من رقم البداية الى رقم النهاية، وقم بالعد داخل المجال المحدد، وطبق أوامر القطع المحددة.";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "إضف شرطا إلى القطعة الشرطية \"إذا\".";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "أضف شرط \"نهاية، إجمع\" إلى القطعة الشرطية \"إذا\".";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "أضف, إزل, أو أعد ترتيب المقاطع لإعادة تكوين القطعة الشرطية \"إذا\".";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "والا";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "وإﻻ إذا";
Blockly.Msg.CONTROLS_IF_MSG_IF = "إذا";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "إذا كانت قيمة ما تساوي صحيح, إذن قم بتنفيذ أمر ما.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "إذا كانت قيمة ما تساوي \"صحيح\"، إذن قم بتنفيذ أول قطعة من الأوامر. والا ،قم بتنفيذ القطعة الثانية من الأوامر.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "إذا كانت القيمة الأولى تساوي \"صحيح\"; إذن قم بتنفيذ القطعة الأولى من الأوامر. والا, إذا كانت القيمة الثانية تساوي \"صحيح\"; قم بتنفيذ القطعة الثانية من الأوامر.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "إذا كانت القيمة الأولى تساوي \"صحيح\"; إذن قم بتنفيذ القطعة الأولى من الأوامر. والا , إذا كانت القيمة الثانية تساوي \"صحيح\"; قم بتنفيذ القطعة الثانية من الأوامر. إذا لم تكن هناك أي قيمة تساوي صحيح, قم بتنفيذ آخر قطعة من الأوامر.";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "نفّذ";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "🔁 كرر  %1 مرات";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "نفّذ بعض الأوامر عدة مرات.";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "اكرّر حتى";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "اكرّر طالما";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "بما ان القيمة خاطئة, نفّذ بعض الأوامر.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "بما ان القيمة صحيحة, نفّذ بعض الأوامر.";
Blockly.Msg.DELETE_ALL_BLOCKS = "🗑️احذف هذه %1 كتل?";
Blockly.Msg.DELETE_BLOCK = "🗑️حذف الكتلة";
Blockly.Msg.DELETE_VARIABLE = "🗑️حذف المتغير %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "إزالة %1 استخدامات متغيرة%2?";
Blockly.Msg.DELETE_X_BLOCKS = "حذف %1 كتل";
Blockly.Msg.DISABLE_BLOCK = "🔒تعطيل الحظر";
Blockly.Msg.DUPLICATE_BLOCK = "📑ينسخ";
Blockly.Msg.ENABLE_BLOCK = "🔑تنشيط الكتلة";
Blockly.Msg.EXPAND_ALL = "📖قم بتوسيع الكتل";
Blockly.Msg.EXPAND_BLOCK = "📖قم بتوسيع الكتلة";
Blockly.Msg.EXTERNAL_INPUTS = "↘️المدخلات الخارجية";
Blockly.Msg.HELP = "ℹ️ يساعد?";
Blockly.Msg.INLINE_INPUTS = "➡️المدخلات المضمنة";
Blockly.Msg.LISTS_CREATE1 = "انشئ قائمة";
Blockly.Msg.LISTS_CREATE2 = "مع";
Blockly.Msg.LISTS_CREATE_TOOLTIP = "قم بإنشاء قائمة بالعدد المطلوب من العناصر";
Blockly.Msg.LISTS_append = 'يضيف %1 في نهاية %2';
Blockly.Msg.LISTS_append_TOOLTIP = 'إضافة عنصر في نهاية القائمة';
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "قائمة";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "إضافة أو حذف أو إعادة ترتيب";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "إنشاء قائمة مع";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "أضف عنصرًا";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "إرجاع مصفوفة أو قائمة بأي عدد من العناصر";
Blockly.Msg.LISTS_GET = "العنصر";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "منذ النهاية #";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#"; // untranslated
Blockly.Msg.LISTS_GET_INDEX_GET = "احصل على";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "الحصول عليها وحذفها";
Blockly.Msg.LISTS_GET_INDEX_LAST = "الاخير";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "عشوائي";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "حذف";
Blockly.Msg.LISTS_GET_INDEX_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "يرجع العنصر الأول في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "يقوم بإرجاع العنصر في الموضع المحدد في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "يرجع العنصر الأخير في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "يرجع عنصرا عشوائيا في قائمة.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "يزيل ويرجع العنصر الأول في قائمة.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "يزيل ويقوم بإرجاع العنصر في الموضع المحدد في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "يزيل ويرجع العنصر الأخير في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "يزيل و يرجع عنصرا عشوائيا في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "يزيل العنصر الأول في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "يزيل العنصر الموجود في الموضع المحدد في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "يزيل العنصر الأخير في قائمة ما.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "يزيل عنصرا عشوائيا في قائمة ما.";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "إلى # من نهاية";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "إلى #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "إلى الأخير";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "احصل على قائمة فرعية من الأول";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "احصل  على قائمة فرعية من # من نهاية";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "احصل على قائمة فرعية من #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "يقوم بإنشاء نسخة من الجزء المحدد من قائمة ما.";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 هو العنصر الأخير.";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 هو العنصر الأول.";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "ابحث على على التواجد الأول للعنصر";
Blockly.Msg.LISTS_INDEX_OF_LAST = "ابحث على التواجد الأخير للعنصر";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "تقوم بإرجاع مؤشر التواجد  الأول/الأخير في القائمة.  تقوم بإرجاع %1 إذا لم يتم العثور على النص.";
Blockly.Msg.LISTS_INLIST = "في قائمة";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 فارغ";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "يرجع صحيح إذا كانت القائمة فارغة.";
Blockly.Msg.LISTS_LENGTH_TITLE = "الطول من %1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "تقوم بإرجاع طول قائمة.";
Blockly.Msg.LISTS_REPEAT_TITLE = "إنشئ قائمة مع العنصر  %1 %2 مرات";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "انشئ قائمة تتألف من القيمة المعطاة متكررة لعدد محدد من المرات.";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "مثل";
Blockly.Msg.LISTS_of = "of";
Blockly.Msg.LISTS_SET_INDEX_SET = "تعيين";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "يقوم بإدراج هذا العنصر في بداية قائمة.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "يقوم بإدخال العنصر في الموضع المحدد في قائمة ما.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "ألصق هذا العنصر بنهاية قائمة.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "ادخل العنصر عشوائياً في القائمة.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "يحدد العنصر الأول في قائمة.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "يحدد العنصر في الموضع المحدد في قائمة ما.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "يحدد العنصر الأخير في قائمة.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "يحدد عنصرا عشوائيا في قائمة.";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "خاطئ";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "يرجع صحيح أو خاطئ.";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "صحيح";
Blockly.Msg.compare = "إرجاع صحيح إذا كانت القيمة في فترة";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "يرجع صحيح إذا كان كلا المدخلات مساوية بعضها البعض.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "يرجع صحيح إذا كان الإدخال الأول أكبر من الإدخال الثاني.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "يرجع صحيح إذا كان الإدخال الأول أكبر من أو يساوي الإدخال الثاني.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "يرجع صحيح إذا كان الإدخال الأول أصغر من الإدخال الثاني.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "يرجع صحيح إذا كان الإدخال الأول أصغر من أو يساوي الإدخال الثاني.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "يرجع صحيح إذا كانت كلا المدخلات غير مساوية لبعضها البعض.";
Blockly.Msg.LOGIC_NEGATE_TITLE = "ليس %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "يرجع صحيح إذا كان الإدخال خاطئ .  يرجع خاطئ إذا كان الإدخال صحيح.";
Blockly.Msg.LOGIC_NULL = "فارغ";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "ترجع ملغى.";
Blockly.Msg.LOGIC_OPERATOR = [["and", "and"], ["or", "or"], ["or exclusive", "xor"], ["left shift", "shiftL"], ["right shift", "shiftR"]];
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "ترجع صحيح إذا كان كلا المٌدخلات صحيح.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "ترجع صحيح إذا كان واحد على الأقل من المدخلات صحيح.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor = "يعود صحيحًا إذا كان أحد الإدخالات صحيحًا";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR = "التحولات إلى اليمين \ n";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL = "التحولات إلى اليسار";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "اختبار";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "إذا كانت العبارة خاطئة";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "إذا كانت العبارة صحيحة";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "تحقق الشرط في 'الاختبار'. إذا كان الشرط صحيح، يقوم بإرجاع قيمة 'اذا كانت العبارة صحيحة'؛ خلاف ذلك يرجع قيمة 'اذا كانت العبارة خاطئة'.";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "يرجع مجموع الرقمين.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "يرجع حاصل قسمة الرقمين.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "يرجع الفرق بين الرقمين.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "يرجع حاصل ضرب الرقمين.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "يرجع الرقم الأول مرفوع إلى تربيع الرقم الثاني.";
Blockly.Msg.MATH_CHANGE_TITLE = "غير %1 بـ %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "إضف رقم إلى متغير '%1'.";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "ير جع واحد من الثوابت الشائعة : π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "تقيد %1 منخفض %2 مرتفع %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "تقييد العددليكون بين الحدود المحددة (ضمناً).";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "قابل للقسمة";
Blockly.Msg.MATH_IS_EVEN = "هو زوجي";
Blockly.Msg.MATH_IS_NEGATIVE = "هو سالب";
Blockly.Msg.MATH_IS_ODD = "هو فرذي";
Blockly.Msg.MATH_IS_POSITIVE = "هو موجب";
Blockly.Msg.MATH_IS_PRIME = "هو أولي";
Blockly.Msg.MATH_IS_TOOLTIP = "تحقق إذا كان عدد ما زوجيا، فرذيا, أوليا، صحيحا،موجبا أو سالبا، أو إذا كان قابلا للقسمة على عدد معين.  يرجع صحيح أو خاطئ.";
Blockly.Msg.MATH_IS_WHOLE = "هو صحيح";
Blockly.Msg.MATH_MODULO_TITLE = "باقي %1 ÷ %2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "يرجع الباقي من قسمة الرقمين.";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";
Blockly.Msg.MATH_NUMBER_TOOLTIP = "عدد ما.";
Blockly.Msg.MATH_ONLIST_HELPURL = ""; // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "متوسط القائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "الحد الأقصى لقائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "متوسط القائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "الحد الأدنى من قائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "منوال القائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "عنصر عشوائي من القائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "الانحراف المعياري للقائمة";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "مجموع القائمة";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "يرجع المعدل (الوسط الحسابي) للقيم الرقمية في القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "يرجع أكبر عدد في القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "يرجع وسيط العدد في القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "يرجع أصغر رقم في القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "يرجع قائمة من العنصر أو العناصر الأكثر شيوعاً في القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "يرجع عنصر عشوائي من القائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "يرجع الانحراف المعياري للقائمة.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "يرجع مجموع كافة الأرقام الموجودة في القائمة.";
Blockly.Msg.MATH_POWER_SYMBOL = "^"; // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "كسر عشوائي";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "يرجع جزء عشوائي بين 0.0 (ضمنياً) و 1.0 (خارجيا).";
Blockly.Msg.MATH_RANDOM_INT_TITLE = " عدد صحيح عشوائي من %1 إلى %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "يرجع عدد صحيح عشوائي بين حدين محددين, ضمنيا.";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "تقريب";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "تقريب إلى اصغر عدد صحيح";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "تقريب الى اكبر عدد صحيح";
Blockly.Msg.MATH_ROUND_TOOLTIP = "تقريب الى اكبر عدد صحيح أو الى اصغر عدد صحيح.";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "absolute value";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "square root";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "مطلق";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "الجذر التربيعي";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "يرجع القيمة المطلقة لرقم.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "يرجع ه‍ (e) مرفوعا لأس بقيمة الرقم المدخل.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "يرجع اللوغاريتم الطبيعي لرقم.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "يرجع لوغاريتم عدد معين للاساس 10.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "يرجع عدد سالب.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "يرجع مضروب الرقم 10 في نفسه .";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "يرجع الجذر التربيعي للرقم.";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";
Blockly.Msg.MATH_TRIG_ACOS = "acos";
Blockly.Msg.MATH_TRIG_ASIN = "asin";
Blockly.Msg.MATH_TRIG_ATAN = "atan";
Blockly.Msg.MATH_TRIG_COS = "جيب تمام";
Blockly.Msg.MATH_TRIG_SIN = "جيب";
Blockly.Msg.MATH_TRIG_TAN = "ظل";
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "يرجع قوس جيب التمام لرقم.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "يرجع قوس الجيب للرقم.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "يرجع قوس الظل للرقم.";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "يرجع جيب التمام لدرجة (لا زواية نصف قطرية).";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "يرجع جيب التمام لدرجة (لا زواية نصف قطرية).";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "يرجع الظل لدرجة (لا دائرة نصف قطرية).";
Blockly.Msg.NEW_VARIABLE = "إنشاء متغير...";
Blockly.Msg.NEW_VARIABLE_TITLE = "اسم المتغير الجديد:";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = ""; // untranslated
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "تشغيل الدالة المعرفة من قبل المستخدم '%1'.";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "تشغيل الدالة المعرفة من قبل المستخدم %1 واستخدام  مخرجاتها.";
Blockly.Msg.PROCEDURES_CREATE_DO = "إنشئ '%1'";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "صف هذه الوظيفة...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "القيام بشيء ما";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "انشئ دالة بدون مخرجات .";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "يرجع";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "انشئ دالة مع المخرجات.";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "تحذير: هذه الدالة تحتوي على معلمات مكررة.";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "تسليط الضوء على تعريف الدالة";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "إذا كانت القيمة صحيحة ، اذان قم بارجاع القيمة الثانية.";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "تحذير:هذه القطعة تستخدم فقط داخل تعريف دالة.";
Blockly.Msg.PROCEDURES_MUTATORARG_TYPE = "اسم الإدخال:";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "أضف مدخلا إلى الوظيفة.";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "المدخلات";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "إضافة أو إزالة أو إعادة ترتيب المدخلات لهذه المهمة.";
Blockly.Msg.REDO = "إعادة";
Blockly.Msg.REMOVE_COMMENT = "🗑️أزل التعليق";
Blockly.Msg.RENAME_VARIABLE = "✏️إعادة تسمية المتغير... '%1'";
Blockly.Msg.RENAME_VARIABLE_TITLE = "✏️إعادة تسمية كافة المتغيرات '%1' إلى:";
//Array
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'فارغة!';
Blockly.Msg.tab_create = "Create block 'element of array %1'";
Blockly.Msg.tab_create_fix = "Create Block 'put an element from array %1 to '";
Blockly.Msg.ARRAY_CREATE_WITH = "صنع من";
Blockly.Msg.ARRAY_taille = "بحجم";
Blockly.Msg.ARRAY_contenu = "الذي يحتوي على";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "قائمة أو مجموعة";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "إضافة أو حذف أو إعادة ترتيب";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "عناصر";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "جزء";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "إرجاع قائمة بعدد من العناصر";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "عنصر المصفوفة";
Blockly.Msg.ARRAY_GETINDEX_ITEM2 = "مجموعة مصفوفة";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1 = "ترجع القيمة المخزنة في القائمة";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2 = "إنشاء مصفوفة من النوع المحدد";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3 = "إصلاح عنصر من القائمة أو المصفوفة بالقيمة المشار إليها";
Blockly.Msg.ARRAY_create = "مجموعة مجموعة";
Blockly.Msg.ARRAY_fixe = "ضع عنصر المصفوفة";
Blockly.Msg.ARRAY_dim = "حجم";
Blockly.Msg.ARRAY_index = "فهرس";
Blockly.Msg.ARRAY_append_tooltip = "إضافة عنصر في نهاية القائمة أو المصفوفة";
Blockly.Msg.ARRAY_append_url = "";
Blockly.Msg.size = "حجم المصفوفة";
Blockly.Msg.size_TOOLTIP = "إرجاع حجم القائمة أو الصفيف";
//text
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "إضف عنصر إلى النص.";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "الانضمام إلى";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "أضف, إحذف, أو أعد ترتيب المقاطع لإعادة تكوين النص من القطع التالية.";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 فارغ";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "يرجع صحيح إذا كان النص المقدم فارغ.";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "انشئ نص مع";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "أنشئ جزء من النص بالصاق أي عدد من العناصر ببعضها البعض.";
Blockly.Msg.TEXT_LENGTH_TITLE = "طول %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "تقوم بإرجاع عدد الاحرف (بما في ذلك الفراغات) في النص المقدم.";
Blockly.Msg.TEXT_PRINT_TITLE = "اطبع %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "اطبع النص المحدد أو العدد أو قيمة أخرى.";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "حرف أو كلمة أو سطر من النص.";
Blockly.Msg.TODAY = "اليوم";
Blockly.Msg.UNDO = "رجوع";
Blockly.Msg.VARIABLES_AS = "type";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "var";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "انشئ 'التعيين %1'";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "يرجع قيمة هذا المتغير.";
Blockly.Msg.VARIABLES_SET = "تعيين %1 إلى %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "انشئ 'احصل على %1'";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "تعيين هذا المتغير لتكون مساوية للقيمة المدخلة.";
Blockly.Msg.var_set_init = "Declare variable";
Blockly.Msg.var_set_init_tooltip = "Declare and initialize the variable of the specified type and value";
Blockly.Msg.ARDUINO_VAR_CONST = "Declare constant";
Blockly.Msg.ARDUINO_VAR_CONST_tooltip = "Declares a constant of the specified type and value";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "المتغير '%1' موجود بالفعل";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "";
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = "then";
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
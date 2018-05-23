(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *(?:\, *[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]* *)*(?:\=|in(?![a-zA-Z¡-￿_0-9_])))/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [7, "stillIndented"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=)/, [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], /^(?:\*|\*\*)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 8, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[21], -1,
     3, "atom", e[24], -1,
     3, "atom", e[25], -1,
     3, "keyword", e[30], -1,
     3, "builtin", e[28], -1,
     3, "operator", e[29], -1,
     3, "operator", e[20], -1,
     3, "number", e[23], -1,
     2, 50, -1, {"name":"string","token":"string"},
     3, "variable", e[9], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     "\\\n", 6,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 7,
     0, -1],
    ["\n", 6],
    [3, "keyword", e[0], 9,
     3, "keyword", e[1], 9,
     3, "keyword", e[2], 15,
     3, "keyword", e[3], 15,
     3, "keyword", e[4], 19,
     3, "keyword", e[5], 29,
     3, "keyword", e[6], 39,
     1, 52, -1,
     2, 65, 41, {"name":"Annotation","token":"meta"},
     1, 73, 45],
    [1, 6, 10],
    [1, 103, 11],
    [1, 6, 12],
    [":", 13],
    [1, 6, 14],
    [1, 110, -1],
    [1, 6, 16],
    [":", 17],
    [1, 6, 18],
    [1, 110, -1],
    [1, 6, 20],
    [1, 116, 21],
    [1, 6, 22],
    [3, "keyword", e[7], 23],
    [1, 6, 24],
    [1, 122, 25],
    [1, 6, 26],
    [":", 27],
    [1, 6, 28],
    [1, 110, -1],
    [1, 6, 30],
    [1, 103, 31],
    [1, 6, 32],
    [3, "keyword", e[8], 33,
     0, 34],
    [1, 6, 35],
    [1, 6, 36],
    [3, "def", e[9], 34],
    [":", 37],
    [1, 6, 38],
    [1, 110, -1],
    [1, 6, 40],
    [1, 52, -1],
    [1, 6, 42],
    [2, 128, 43, {"name":"ArgList"},
     0, 43],
    [1, 6, 44],
    ["\n", -1],
    [1, 6, 46],
    [";", 47,
     "\n", -1],
    [1, 6, 48],
    [1, 73, 49,
     0, 49],
    [1, 6, 46],
    [/^[uUrRfFbB]+(?=[\'\"])/, 51,
     1, 133, -1],
    [1, 133, -1],
    [3, "keyword", e[10], 53,
     3, "keyword", e[11], 59,
     3, "keyword", e[12], 63],
    [1, 6, 54],
    [1, 138, 55],
    [1, 6, 56],
    [":", 57],
    [1, 6, 58],
    [1, 110, -1],
    [1, 6, 60],
    [3, "def", e[9], 61],
    [1, 6, 62],
    [2, 152, -1, {"name":"FuncDef"}],
    [1, 6, 64],
    [2, 161, -1, {"name":"ClassDef"}],
    ["@", 66],
    [1, 6, 67],
    [e[9], 68],
    [1, 6, 69],
    [".", 70,
     0, -1],
    [1, 6, 71],
    [e[9], 72],
    [1, 6, 69],
    [3, "keyword", e[13], -1,
     3, "keyword", e[14], 74,
     3, "keyword", e[15], 76,
     3, "keyword", e[16], 78,
     3, "keyword", e[17], 84,
     3, "keyword", e[18], 86,
     3, "keyword", e[19], 97,
     1, 168, 99,
     1, 122, -1],
    [1, 6, 75],
    [1, 122, -1],
    [1, 6, 77],
    [1, 122, -1,
     0, -1],
    [1, 6, 79],
    [1, 122, 80],
    [1, 6, 81],
    [3, "keyword", e[18], 82,
     0, -1],
    [1, 6, 83],
    [1, 103, -1],
    [1, 6, 85],
    [1, 138, -1],
    [1, 6, 87],
    [".", 88,
     1, 103, 89,
     0, 89],
    [1, 6, 87],
    [1, 6, 90],
    [3, "keyword", e[17], 91],
    [1, 6, 92],
    ["*", -1,
     "(", 93,
     1, 174, -1],
    [1, 6, 94],
    [1, 188, 95,
     0, 95],
    [1, 6, 96],
    [")", -1],
    [1, 6, 98],
    [1, 202, -1],
    [1, 6, 100],
    [3, "operator", "=", 101],
    [1, 6, 102],
    [1, 103, -1],
    [3, "operator", e[20], 104,
     3, "keyword", e[21], 104,
     1, 208, 105],
    [1, 6, 103],
    [1, 6, 106],
    [1, 218, 107,
     3, "keyword", e[7], 108,
     0, -1],
    [1, 6, 106],
    [1, 6, 109],
    [1, 103, 107],
    [1, 73, 111,
     2, 229, -1, {"name":"indentedBody"}],
    [1, 6, 112],
    [";", 113,
     "\n", -1],
    [1, 6, 114],
    [1, 73, 115,
     0, 115],
    [1, 6, 112],
    [3, "def", e[22], 117,
     1, 235, 117],
    [1, 6, 118],
    [",", 119,
     0, -1],
    [1, 6, 120],
    [3, "def", e[22], 121,
     1, 235, 121,
     0, 121],
    [1, 6, 118],
    [1, 103, 123],
    [1, 6, 124],
    [",", 125,
     0, -1],
    [1, 6, 126],
    [1, 103, 127,
     0, 127],
    [1, 6, 124],
    ["(", 129],
    [1, 6, 130],
    [1, 240, 131,
     0, 131],
    [1, 6, 132],
    [")", -1],
    ["'''", 134,
     "\"\"\"", 136,
     /^(?:\'(?:\\.|(?!\').)*\'|\"(?:\\.|(?!\").)*\")/, -1],
    ["\\", 135,
     [0, /^(?!\'\'\')/, /^[^]/], 134,
     "'''", -1],
    [/^[^]/, 134],
    ["\\", 137,
     [0, /^(?!\"\"\")/, /^[^]/], 136,
     "\"\"\"", -1],
    [/^[^]/, 136],
    [1, 103, 139],
    [1, 6, 140],
    [3, "keyword", e[8], 141,
     0, 143],
    [1, 6, 142],
    [3, "def", e[9], 143],
    [1, 6, 144],
    [",", 145,
     0, -1],
    [1, 6, 146],
    [1, 103, 147,
     0, 148],
    [1, 6, 149],
    [1, 6, 144],
    [3, "keyword", e[8], 150,
     0, 148],
    [1, 6, 151],
    [3, "def", e[9], 148],
    [2, 254, 153, {"name":"ParamList"}],
    [1, 6, 154],
    ["->", 155,
     0, 157],
    [1, 6, 156],
    [1, 103, 157],
    [1, 6, 158],
    [":", 159],
    [1, 6, 160],
    [1, 110, -1],
    [3, "type def", e[9], 162],
    [1, 6, 163],
    [2, 128, 164, {"name":"ArgList"},
     0, 164],
    [1, 6, 165],
    [":", 166],
    [1, 6, 167],
    [1, 110, -1],
    [3, "def", e[22], 169],
    [1, 6, 170],
    [",", 171,
     0, -1],
    [1, 6, 172],
    [3, "def", e[22], 173,
     0, 173],
    [1, 6, 170],
    [e[9], 175],
    [1, 6, 176],
    [3, "keyword", e[8], 177,
     0, 179],
    [1, 6, 178],
    [3, "def", e[9], 179],
    [1, 6, 180],
    [",", 181,
     0, -1],
    [1, 6, 182],
    [e[9], 183,
     0, 184],
    [1, 6, 185],
    [1, 6, 180],
    [3, "keyword", e[8], 186,
     0, 184],
    [1, 6, 187],
    [3, "def", e[9], 184],
    [e[9], 189],
    [1, 6, 190],
    [3, "keyword", e[8], 191],
    [1, 6, 192],
    [3, "def", e[9], 193,
     0, 193],
    [1, 6, 194],
    [",", 195,
     0, -1],
    [1, 6, 196],
    [e[9], 197,
     0, 198],
    [1, 6, 199],
    [1, 6, 194],
    [3, "keyword", e[8], 200],
    [1, 6, 201],
    [3, "def", e[9], 198,
     0, 198],
    [3, "variable", e[9], 203],
    [1, 6, 204],
    [",", 205,
     0, -1],
    [1, 6, 206],
    [3, "variable", e[9], 207,
     0, 207],
    [1, 6, 204],
    [2, 259, -1, {"name":"ParenExpr"},
     2, 268, -1, {"name":"ArrayLiteral"},
     2, 277, -1, {"name":"ObjectLiteral"},
     3, "number", e[23], -1,
     0, 209,
     3, "operator", "...", -1,
     3, "atom", e[24], -1,
     3, "atom", e[25], -1,
     3, "keyword", e[26], 212,
     3, "keyword", e[27], 216,
     3, "builtin", e[28], -1,
     3, "variable callee", e[31], -1,
     3, "variable", e[9], -1],
    [2, 50, 210, {"name":"string","token":"string"}],
    [1, 6, 211],
    [0, 209,
     0, -1],
    [1, 6, 213],
    [3, "keyword", e[18], 214,
     1, 122, -1,
     0, -1],
    [1, 6, 215],
    [1, 103, -1],
    [1, 6, 217],
    [2, 284, -1, {"name":"LambdaDef"}],
    [3, "operator", e[29], 219,
     3, "keyword", e[30], 219,
     2, 128, -1, {"name":"ArgList"},
     2, 289, -1, {"name":"Subscript"},
     ".", 221,
     3, "keyword", e[0], 223],
    [1, 6, 220],
    [1, 103, -1],
    [1, 6, 222],
    [3, "property callee", e[31], -1,
     3, "property", e[9], -1],
    [1, 6, 224],
    [1, 103, 225],
    [1, 6, 226],
    [3, "keyword", e[2], 227,
     0, -1],
    [1, 6, 228],
    [1, 103, -1],
    ["\n", 230],
    [/^[ \t]/, 230,
     3, "comment", /^\#.*/, 230,
     "\n", 230,
     e[32], 231],
    [2, 8, 232, {"name":"Statement"}],
    [/^[ \t]/, 232,
     3, "comment", /^\#.*/, 232,
     "\n", 232,
     0, 233],
    [0, 234,
     0, -1],
    [e[32], 231],
    [3, "operator", e[20], 236,
     3, "keyword", e[21], 236,
     1, 208, 237],
    [1, 6, 235],
    [1, 6, 238],
    [1, 294, 239,
     0, -1],
    [1, 6, 238],
    [3, "operator", "**", 241,
     3, "meta", e[33], 242,
     0, 241],
    [1, 6, 243],
    [1, 6, 244],
    [1, 103, 245],
    ["=", 241],
    [1, 6, 246],
    [",", 247,
     0, -1],
    [1, 6, 248],
    [3, "operator", "**", 249,
     3, "meta", e[33], 250,
     0, 249,
     0, 251],
    [1, 6, 252],
    [1, 6, 253],
    [1, 6, 246],
    [1, 103, 251],
    ["=", 249],
    ["(", 255],
    [1, 6, 256],
    [1, 305, 257,
     0, 257],
    [1, 6, 258],
    [")", -1],
    ["(", 260],
    [1, 6, 261],
    [3, "variable-2", e[34], 262,
     1, 103, 262,
     0, 266],
    [1, 6, 263],
    [",", 264,
     1, 331, 266,
     0, 266],
    [1, 6, 265],
    [1, 122, 266,
     0, 266],
    [1, 6, 267],
    [")", -1],
    ["[", 269],
    [1, 6, 270],
    [3, "variable-2", e[34], 271,
     1, 103, 271,
     0, 275],
    [1, 6, 272],
    [",", 273,
     1, 331, 275,
     0, 275],
    [1, 6, 274],
    [1, 122, 275,
     0, 275],
    [1, 6, 276],
    ["]", -1],
    ["{", 278],
    [1, 6, 279],
    [1, 342, 280,
     0, 282],
    [1, 6, 281],
    [1, 331, 282,
     0, 282],
    [1, 6, 283],
    ["}", -1],
    [1, 348, 285,
     0, 285],
    [1, 6, 286],
    [":", 287],
    [1, 6, 288],
    [1, 103, -1],
    ["[", 290],
    [1, 6, 291],
    [1, 366, 292],
    [1, 6, 293],
    ["]", -1],
    [3, "operator", e[29], 295,
     3, "keyword", e[30], 295,
     2, 128, -1, {"name":"ArgList"},
     2, 289, -1, {"name":"Subscript"},
     ".", 297,
     3, "keyword", e[0], 299],
    [1, 6, 296],
    [1, 235, -1],
    [1, 6, 298],
    [3, "property callee", e[31], -1,
     3, "property", e[9], -1],
    [1, 6, 300],
    [1, 235, 301],
    [1, 6, 302],
    [3, "keyword", e[2], 303,
     0, -1],
    [1, 6, 304],
    [1, 235, -1],
    [2, 392, 306, {"name":"op","token":"operator"},
     0, 306],
    [1, 6, 307],
    [3, "atom", e[25], 308,
     3, "def", e[9], 308],
    [1, 6, 309],
    [":", 310,
     0, 311],
    [1, 6, 312],
    [1, 6, 313],
    [1, 103, 311],
    [3, "operator", "=", 314,
     0, 316],
    [1, 6, 315],
    [1, 103, 316],
    [1, 6, 317],
    [",", 318,
     0, -1],
    [1, 6, 319],
    [2, 392, 320, {"name":"op","token":"operator"},
     0, 320,
     0, 321],
    [1, 6, 322],
    [1, 6, 317],
    [3, "atom", e[25], 323,
     3, "def", e[9], 323],
    [1, 6, 324],
    [":", 325,
     0, 326],
    [1, 6, 327],
    [1, 6, 328],
    [1, 103, 326],
    [3, "operator", "=", 329,
     0, 321],
    [1, 6, 330],
    [1, 103, 321],
    [3, "keyword", e[6], 332,
     0, 332],
    [1, 6, 333],
    [3, "keyword", e[4], 334],
    [1, 6, 335],
    [1, 116, 336],
    [1, 6, 337],
    [3, "keyword", e[7], 338],
    [1, 6, 339],
    [1, 103, 340],
    [1, 6, 341],
    [1, 331, -1,
     1, 395, -1,
     0, -1],
    [2, 400, 343, {"name":"DictProp"}],
    [1, 6, 344],
    [",", 345,
     0, -1],
    [1, 6, 346],
    [2, 400, 347, {"name":"DictProp"},
     0, 347],
    [1, 6, 344],
    [3, "operator", e[35], 349,
     0, 349],
    [1, 6, 350],
    [3, "def", e[9], 351],
    [1, 6, 352],
    [3, "operator", "=", 353,
     0, 355],
    [1, 6, 354],
    [1, 103, 355],
    [1, 6, 356],
    [",", 357,
     0, -1],
    [1, 6, 358],
    [3, "operator", e[35], 359,
     0, 359,
     0, 360],
    [1, 6, 361],
    [1, 6, 356],
    [3, "def", e[9], 362],
    [1, 6, 363],
    [3, "operator", "=", 364,
     0, 360],
    [1, 6, 365],
    [1, 103, 360],
    [1, 103, 367,
     ":", 368],
    [1, 6, 369],
    [1, 6, 370],
    [":", 371,
     0, 377],
    [1, 103, 372,
     0, 372],
    [1, 6, 373],
    [1, 6, 374],
    [1, 103, 377,
     0, 377],
    [":", 375,
     0, 377],
    [1, 6, 376],
    [1, 103, 377,
     0, 377],
    [1, 6, 378],
    [",", 379,
     0, -1],
    [1, 6, 380],
    [1, 103, 381,
     ":", 382,
     0, 383],
    [1, 6, 384],
    [1, 6, 385],
    [1, 6, 378],
    [":", 386,
     0, 383],
    [1, 103, 387,
     0, 387],
    [1, 6, 388],
    [1, 6, 389],
    [1, 103, 383,
     0, 383],
    [":", 390,
     0, 383],
    [1, 6, 391],
    [1, 103, 383,
     0, 383],
    ["*", 393],
    [1, 6, 394],
    [/^\*?/, -1],
    [3, "keyword", e[0], 396],
    [1, 6, 397],
    [1, 103, 398],
    [1, 6, 399],
    [1, 331, -1,
     1, 395, -1,
     0, -1],
    [3, "operator", "**", 401,
     1, 103, 403],
    [1, 6, 402],
    [1, 103, -1],
    [1, 6, 404],
    [":", 405,
     0, -1],
    [1, 6, 406],
    [1, 103, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state, testDef) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (testDef && !testDef(scope, name, stream)) { return "variable-2" }
        scope.locals.push(name);
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "SubScript", "DictProp"];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s*for\s*(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack == "}" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function testDef(scope, name, stream) {
    if (!stream.lineOracle) { return scope.locals.indexOf(name) == -1 }
    var info = scope.firstDefs || (scope.firstDefs = {});
    if (info[name] != null && info[name] < stream.lineOracle.line) { return false }
    info[name] = stream.lineOracle.line;
    return true
  }

  function pythonMarkLocals(token$$1, stream, state) {
    var marked = markLocals(token$$1, scopes, stream, state, testDef);
    if (token$$1 == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
    }
    return marked
  }  

  var PythonMode = (function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token$$1 (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  PythonMode.prototype.closeBrackets = {triples: "'\""};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror.defineMode("google-python", function (conf) { return new PythonMode(conf); });

})));

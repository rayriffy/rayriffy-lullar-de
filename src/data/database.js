const keys = [
  {
    id: 1,
    key: '`',
    lang: 'en',
    related: 2
  },
  {
    id: 2,
    key: '-',
    lang: 'th',
    related: 1
  },
  {
    id: 3,
    key: '~',
    lang: 'en',
    related: 4
  },
  {
    id: 4,
    key: '%',
    lang: 'th',
    related: 3
  },
  {
    id: 5,
    key: '1',
    lang: 'en',
    related: 6
  },
  {
    id: 6,
    key: 'ๅ',
    lang: 'th',
    related: 5
  },
  {
    id: 7,
    key: '!',
    lang: 'en',
    related: 8
  },
  {
    id: 8,
    key: '+',
    lang: 'th',
    related: 7
  },
  {
    id: 9,
    key: '2',
    lang: 'en',
    related: 10
  },
  {
    id: 10,
    key: '/',
    lang: 'th',
    related: 9
  },
  {
    id: 11,
    key: '@',
    lang: 'en',
    related: 12
  },
  {
    id: 12,
    key: '๑',
    lang: 'th',
    related: 11
  },
  {
    id: 13,
    key: '3',
    lang: 'en',
    related: 14
  },
  {
    id: 14,
    key: '_',
    lang: 'th',
    related: 13
  },
  {
    id: 15,
    key: '#',
    lang: 'en',
    related: 16
  },
  {
    id: 16,
    key: '๒',
    lang: 'th',
    related: 15
  },
  {
    id: 17,
    key: '4',
    lang: 'en',
    related: 18
  },
  {
    id: 18,
    key: 'ภ',
    lang: 'th',
    related: 17
  },
  {
    id: 19,
    key: '$',
    lang: 'en',
    related: 20
  },
  {
    id: 20,
    key: '๓',
    lang: 'th',
    related: 19
  },
  {
    id: 21,
    key: '5',
    lang: 'en',
    related: 22
  },
  {
    id: 22,
    key: 'ถ',
    lang: 'th',
    related: 21
  },
  {
    id: 23,
    key: '%',
    lang: 'en',
    related: 24
  },
  {
    id: 24,
    key: '๔',
    lang: 'th',
    related: 23
  },
  {
    id: 25,
    key: '6',
    lang: 'en',
    related: 26
  },
  {
    id: 26,
    key: 'ุ',
    lang: 'th',
    related: 25
  },
  {
    id: 27,
    key: '^',
    lang: 'en',
    related: 28
  },
  {
    id: 28,
    key: 'ู',
    lang: 'th',
    related: 27
  },
  {
    id: 29,
    key: '7',
    lang: 'en',
    related: 30
  },
  {
    id: 30,
    key: 'ึ',
    lang: 'th',
    related: 29
  },
  {
    id: 21,
    key: '&',
    lang: 'en',
    related: 32
  },
  {
    id: 32,
    key: '฿',
    lang: 'th',
    related: 21
  },
  {
    id: 33,
    key: '8',
    lang: 'en',
    related: 34
  },
  {
    id: 34,
    key: 'ค',
    lang: 'th',
    related: 33
  },
  {
    id: 35,
    key: '*',
    lang: 'en',
    related: 36
  },
  {
    id: 36,
    key: '๕',
    lang: 'th',
    related:35
  },
  {
    id: 37,
    key: '9',
    lang: 'en',
    related: 38
  },
  {
    id: 38,
    key: 'ต',
    lang: 'th',
    related:37
  },
  {
    id: 39,
    key: '(',
    lang: 'en',
    related: 40
  },
  {
    id: 40,
    key: '๖',
    lang: 'th',
    related:39
  },
  {
    id: 41,
    key: '0',
    lang: 'en',
    related: 42
  },
  {
    id: 42,
    key: 'จ',
    lang: 'th',
    related:41
  },
  {
    id: 43,
    key: ')',
    lang: 'en',
    related: 44
  },
  {
    id: 44,
    key: '๗',
    lang: 'th',
    related:43
  },
  {
    id: 45,
    key: '-',
    lang: 'en',
    related: 46
  },
  {
    id: 46,
    key: 'ข',
    lang: 'th',
    related:45
  },
  {
    id: 47,
    key: '_',
    lang: 'en',
    related: 48
  },
  {
    id: 48,
    key: '๘',
    lang: 'th',
    related:47
  },
  {
    id: 49,
    key: '=',
    lang: 'en',
    related: 50
  },
  {
    id: 50,
    key: 'ช',
    lang: 'th',
    related:49
  },
  {
    id: 51,
    key: '+',
    lang: 'en',
    related: 52
  },
  {
    id: 52,
    key: '๙',
    lang: 'th',
    related:51
  },
  {
    id: 53,
    key: 'q',
    lang: 'en',
    related: 54
  },
  {
    id: 54,
    key: 'ๆ',
    lang: 'th',
    related:53
  },
  {
    id: 55,
    key: 'Q',
    lang: 'en',
    related: 56
  },
  {
    id: 56,
    key: '๐',
    lang: 'th',
    related:55
  },
  {
    id: 57,
    key: 'w',
    lang: 'en',
    related: 58
  },
  {
    id: 58,
    key: 'ไ',
    lang: 'th',
    related:57
  },
  {
    id: 59,
    key: 'W',
    lang: 'en',
    related: 60
  },
  {
    id: 60,
    key: '"',
    lang: 'th',
    related:59
  },
  {
    id: 61,
    key: 'e',
    lang: 'en',
    related: 62
  },
  {
    id: 62
,
    key: 'ำ',
    lang: 'th',
    related: 61

  },
  {
    id: 63,
    key: 'E',
    lang: 'en',
    related: 64
  },
  {
    id: 64
,
    key: 'ฎ',
    lang: 'th',
    related:63

  },
  {
    id: 65,
    key: 'r',
    lang: 'en',
    related: 66
  },
  {
    id: 66
,
    key: 'พ',
    lang: 'th',
    related:65

  },
  {
    id: 67,
    key: 'R',
    lang: 'en',
    related: 68
  },
  {
    id: 68
,
    key: 'ฑ',
    lang: 'th',
    related:67

  },
  {
    id: 69,
    key: 't',
    lang: 'en',
    related: 70
  },
  {
    id: 70
,
    key: 'ะ',
    lang: 'th',
    related:69

  },
  {
    id: 71,
    key: 'T',
    lang: 'en',
    related: 72
  },
  {
    id: 72
,
    key: 'ธ',
    lang: 'th',
    related:71

  },
  {
    id: 73,
    key: 'y',
    lang: 'en',
    related: 74
  },
  {
    id: 74
,
    key: 'ั',
    lang: 'th',
    related:73

  },
  {
    id: 75,
    key: 'Y',
    lang: 'en',
    related: 76
  },
  {
    id: 76
,
    key: 'ํ',
    lang: 'th',
    related:75

  },
  {
    id: 77,
    key: 'u',
    lang: 'en',
    related: 78
  },
  {
    id: 78
,
    key: 'ี',
    lang: 'th',
    related:77

  },
  {
    id: 79,
    key: 'U',
    lang: 'en',
    related: 80
  },
  {
    id: 80
,
    key: '๊',
    lang: 'th',
    related:79

  },
  {
    id: 81,
    key: 'i',
    lang: 'en',
    related: 82
  },
  {
    id: 82
,
    key: 'ร',
    lang: 'th',
    related:81

  },
  {
    id: 83,
    key: 'I',
    lang: 'en',
    related: 84
  },
  {
    id: 84
,
    key: 'ณ',
    lang: 'th',
    related:83

  },
  {
    id: 85,
    key: 'o',
    lang: 'en',
    related: 86
  },
  {
    id: 86
,
    key: 'น',
    lang: 'th',
    related:85

  },
  {
    id: 87,
    key: 'O',
    lang: 'en',
    related: 88
  },
  {
    id: 88
,
    key: 'ฯ',
    lang: 'th',
    related:87

  },
  {
    id: 89,
    key: 'p',
    lang: 'en',
    related: 90
  },
  {
    id: 90
,
    key: 'ย',
    lang: 'th',
    related:89

  },
  {
    id: 91,
    key: 'P',
    lang: 'en',
    related: 92
  },
  {
    id: 92
,
    key: 'ญ',
    lang: 'th',
    related:91

  },
  {
    id: 93,
    key: '[',
    lang: 'en',
    related: 94
  },
  {
    id: 94
,
    key: 'บ',
    lang: 'th',
    related:93

  },
  {
    id: 95,
    key: '{',
    lang: 'en',
    related: 96
  },
  {
    id: 96
,
    key: 'ฐ',
    lang: 'th',
    related:95

  },
  {
    id: 97,
    key: ']',
    lang: 'en',
    related: 98
  },
  {
    id: 98
,
    key: 'ล',
    lang: 'th',
    related:97

  },
  {
    id: 99,
    key: '}',
    lang: 'en',
    related: 100
  },
  {
    id: 100,
    key: ',',
    lang: 'th',
    related:99

  },
  {
    id: 101,
    key: '\\',
    lang: 'en',
    related: 102
  },
  {
    id: 102,
    key: 'ฃ',
    lang: 'th',
    related:101
  },
  {
    id: 103,
    key: '|',
    lang: 'en',
    related: 104
  },
  {
    id: 104,
    key: 'ฅ',
    lang: 'th',
    related:103
  },
  {
    id: 105,
    key: 'a',
    lang: 'en',
    related: 106
  },
  {
    id: 106,
    key: 'ฟ',
    lang: 'th',
    related:105
  },
  {
    id: 107,
    key: 'A',
    lang: 'en',
    related: 108
  },
  {
    id: 108,
    key: 'ฤ',
    lang: 'th',
    related:107
  },
  {
    id: 109,
    key: 's',
    lang: 'en',
    related: 110
  },
  {
    id: 110,
    key: 'ห',
    lang: 'th',
    related:109
  },
  {
    id: 111,
    key: 'S',
    lang: 'en',
    related: 112
  },
  {
    id: 112,
    key: 'ฆ',
    lang: 'th',
    related:111
  },
  {
    id: 113,
    key: 'd',
    lang: 'en',
    related: 114
  },
  {
    id: 114,
    key: 'ก',
    lang: 'th',
    related:113
  },
  {
    id: 115,
    key: 'D',
    lang: 'en',
    related: 116
  },
  {
    id: 116,
    key: 'ฏ',
    lang: 'th',
    related:115
  },
  {
    id: 117,
    key: 'f',
    lang: 'en',
    related: 118
  },
  {
    id: 118,
    key: 'ด',
    lang: 'th',
    related:117
  },
  {
    id: 119,
    key: 'F',
    lang: 'en',
    related: 120
  },
  {
    id: 120,
    key: 'โ',
    lang: 'th',
    related:119
  },
  {
    id: 121,
    key: 'g',
    lang: 'en',
    related: 122
  },
  {
    id: 122,
    key: 'เ',
    lang: 'th',
    related:121
  },
  {
    id: 123,
    key: 'G',
    lang: 'en',
    related: 124
  },
  {
    id: 124,
    key: 'ฌ',
    lang: 'th',
    related:123
  },
  {
    id: 125,
    key: 'h',
    lang: 'en',
    related: 126
  },
  {
    id: 126,
    key: '้',
    lang: 'th',
    related:125
  },
  {
    id: 127,
    key: 'H',
    lang: 'en',
    related: 128
  },
  {
    id: 128,
    key: '็',
    lang: 'th',
    related:127
  },
  {
    id: 129,
    key: 'j',
    lang: 'en',
    related: 130
  },
  {
    id: 130,
    key: '่',
    lang: 'th',
    related:129
  },
  {
    id: 131,
    key: 'J',
    lang: 'en',
    related: 132
  },
  {
    id: 132,
    key: '๋',
    lang: 'th',
    related:131
  },
  {
    id: 133,
    key: 'k',
    lang: 'en',
    related: 134
  },
  {
    id: 134,
    key: 'า',
    lang: 'th',
    related:133
  },
  {
    id: 135,
    key: 'K',
    lang: 'en',
    related: 136
  },
  {
    id: 136,
    key: 'ษ',
    lang: 'th',
    related:135
  },
  {
    id: 137,
    key: 'l',
    lang: 'en',
    related: 138
  },
  {
    id: 138,
    key: 'ส',
    lang: 'th',
    related:137
  },
  {
    id: 139,
    key: 'L',
    lang: 'en',
    related: 140
  },
  {
    id: 140,
    key: 'ศ',
    lang: 'th',
    related:139
  },
  {
    id: 141,
    key: ';',
    lang: 'en',
    related: 142
  },
  {
    id: 142,
    key: 'ว',
    lang: 'th',
    related:141
  },
  {
    id: 143,
    key: ':',
    lang: 'en',
    related: 144
  },
  {
    id: 144,
    key: 'ซ',
    lang: 'th',
    related:143
  },
  {
    id: 145,
    key: '\'',
    lang: 'en',
    related: 146
  },
  {
    id: 146,
    key: 'ง',
    lang: 'th',
    related:145
  },
  {
    id: 147,
    key: '"',
    lang: 'en',
    related: 148
  },
  {
    id: 148,
    key: '.',
    lang: 'th',
    related:147
  },
  {
    id: 149,
    key: 'z',
    lang: 'en',
    related: 150
  },
  {
    id: 150,
    key: 'ผ',
    lang: 'th',
    related:149
  },
  {
    id: 151,
    key: 'Z',
    lang: 'en',
    related: 152
  },
  {
    id: 152,
    key: '(',
    lang: 'th',
    related:151
  },
  {
    id: 153,
    key: 'x',
    lang: 'en',
    related: 154
  },
  {
    id: 154,
    key: 'ป',
    lang: 'th',
    related:153
  },
  {
    id: 155,
    key: 'X',
    lang: 'en',
    related: 156
  },
  {
    id: 156,
    key: ')',
    lang: 'th',
    related:155
  },
  {
    id: 157,
    key: 'c',
    lang: 'en',
    related: 158
  },
  {
    id: 158,
    key: 'แ',
    lang: 'th',
    related:157
  },
  {
    id: 159,
    key: 'C',
    lang: 'en',
    related: 160
  },
  {
    id: 160,
    key: 'ฉ',
    lang: 'th',
    related:159
  },
  {
    id: 161,
    key: 'v',
    lang: 'en',
    related: 162
  },
  {
    id: 162,
    key: 'อ',
    lang: 'th',
    related:161
  },
  {
    id: 163,
    key: 'V',
    lang: 'en',
    related: 164
  },
  {
    id: 164,
    key: 'ฮ',
    lang: 'th',
    related:163
  },
  {
    id: 165,
    key: 'b',
    lang: 'en',
    related: 166
  },
  {
    id: 166,
    key: 'ิ',
    lang: 'th',
    related:165
  },
  {
    id: 167,
    key: 'B',
    lang: 'en',
    related: 168
  },
  {
    id: 168,
    key: 'ฺ',
    lang: 'th',
    related:167
  },
  {
    id: 169,
    key: 'n',
    lang: 'en',
    related: 170
  },
  {
    id: 170,
    key: 'ื',
    lang: 'th',
    related:169
  },
  {
    id: 171,
    key: 'N',
    lang: 'en',
    related: 172
  },
  {
    id: 172,
    key: '์',
    lang: 'th',
    related:171
  },
  {
    id: 173,
    key: 'm',
    lang: 'en',
    related: 174
  },
  {
    id: 174,
    key: 'ท',
    lang: 'th',
    related:173
  },
  {
    id: 175,
    key: 'M',
    lang: 'en',
    related: 176
  },
  {
    id: 176,
    key: '?',
    lang: 'th',
    related:175
  },
  {
    id: 177,
    key: ',',
    lang: 'en',
    related: 178
  },
  {
    id: 178,
    key: 'ม',
    lang: 'th',
    related:177
  },
  {
    id: 179,
    key: '<',
    lang: 'en',
    related: 180
  },
  {
    id: 180,
    key: 'ฒ',
    lang: 'th',
    related:179
  },
  {
    id: 181,
    key: '.',
    lang: 'en',
    related: 182
  },
  {
    id: 182,
    key: 'ใ',
    lang: 'th',
    related:181
  },
  {
    id: 183,
    key: '>',
    lang: 'en',
    related: 184
  },
  {
    id: 184,
    key: 'ฬ',
    lang: 'th',
    related:183
  },
  {
    id: 185,
    key: '/',
    lang: 'en',
    related: 186
  },
  {
    id: 186,
    key: 'ฝ',
    lang: 'th',
    related:185
  },
  {
    id: 187,
    key: '?',
    lang: 'en',
    related: 188
  },
  {
    id: 188,
    key: 'ฦ',
    lang: 'th',
    related: 187
  },
]

export { keys }

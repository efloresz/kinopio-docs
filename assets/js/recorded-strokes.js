// ⏺
// Recording strokes
// in macic-paint, set isRecording and recordingSide
// draw strokes for each side in top left of page
// expand console logs, save, reformat, and copy to array, add { side }

let recordedStrokes = {
  intro: [
    // top
    [
      {x: 23, y: 24, scrollX: 0, scrollY: 0, elapsedTime: 1, side: 'top'},
      {x: 23, y: 23.5, scrollX: 0, scrollY: 0, elapsedTime: 24, side: 'top'},
      {x: 24, y: 22.5, scrollX: 0, scrollY: 0, elapsedTime: 37, side: 'top'},
      {x: 24.5, y: 22, scrollX: 0, scrollY: 0, elapsedTime: 53, side: 'top'},
      {x: 24.5, y: 21.5, scrollX: 0, scrollY: 0, elapsedTime: 69, side: 'top'},
      {x: 24.5, y: 21, scrollX: 0, scrollY: 0, elapsedTime: 85, side: 'top'},
      {x: 25, y: 20.5, scrollX: 0, scrollY: 0, elapsedTime: 101, side: 'top'},
      {x: 25, y: 20, scrollX: 0, scrollY: 0, elapsedTime: 117, side: 'top'},
      {x: 25.5, y: 19.5, scrollX: 0, scrollY: 0, elapsedTime: 133, side: 'top'},
      {x: 25.5, y: 19, scrollX: 0, scrollY: 0, elapsedTime: 149, side: 'top'},
      {x: 26, y: 18, scrollX: 0, scrollY: 0, elapsedTime: 165, side: 'top'},
      {x: 26, y: 17.5, scrollX: 0, scrollY: 0, elapsedTime: 176, side: 'top'},
      {x: 26, y: 17, scrollX: 0, scrollY: 0, elapsedTime: 192, side: 'top'},
      {x: 26.5, y: 16, scrollX: 0, scrollY: 0, elapsedTime: 208, side: 'top'},
      {x: 26.5, y: 15.5, scrollX: 0, scrollY: 0, elapsedTime: 221, side: 'top'},
      {x: 27, y: 15, scrollX: 0, scrollY: 0, elapsedTime: 238, side: 'top'},
      {x: 27, y: 14, scrollX: 0, scrollY: 0, elapsedTime: 254, side: 'top'},
      {x: 27.5, y: 13, scrollX: 0, scrollY: 0, elapsedTime: 270, side: 'top'},
      {x: 27.5, y: 12.5, scrollX: 0, scrollY: 0, elapsedTime: 285, side: 'top'},
      {x: 28, y: 12, scrollX: 0, scrollY: 0, elapsedTime: 302, side: 'top'},
      {x: 28.5, y: 11, scrollX: 0, scrollY: 0, elapsedTime: 326, side: 'top'},
      {x: 28.5, y: 10.5, scrollX: 0, scrollY: 0, elapsedTime: 342, side: 'top'},
      {x: 29, y: 10, scrollX: 0, scrollY: 0, elapsedTime: 359, side: 'top'},
      {x: 29.5, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 377, side: 'top'},
      {x: 29.5, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 406, side: 'top'},
      {x: 30, y: 8, scrollX: 0, scrollY: 0, elapsedTime: 421, side: 'top'},
      {x: 30, y: 8, scrollX: 0, scrollY: 0, elapsedTime: 437, side: 'top'},
    ],
    [
      {x: 96, y: 23.5, scrollX: 0, scrollY: 0, elapsedTime: 1196, side: 'top'},
      {x: 96, y: 23, scrollX: 0, scrollY: 0, elapsedTime: 1220, side: 'top'},
      {x: 97.5, y: 21.5, scrollX: 0, scrollY: 0, elapsedTime: 1237, side: 'top'},
      {x: 98.5, y: 21, scrollX: 0, scrollY: 0, elapsedTime: 1253, side: 'top'},
      {x: 99, y: 20, scrollX: 0, scrollY: 0, elapsedTime: 1269, side: 'top'},
      {x: 100, y: 19, scrollX: 0, scrollY: 0, elapsedTime: 1285, side: 'top'},
      {x: 100.5, y: 18, scrollX: 0, scrollY: 0, elapsedTime: 1301, side: 'top'},
      {x: 101.5, y: 17, scrollX: 0, scrollY: 0, elapsedTime: 1318, side: 'top'},
      {x: 102.5, y: 16, scrollX: 0, scrollY: 0, elapsedTime: 1334, side: 'top'},
      {x: 103.5, y: 15, scrollX: 0, scrollY: 0, elapsedTime: 1350, side: 'top'},
      {x: 104, y: 14.5, scrollX: 0, scrollY: 0, elapsedTime: 1366, side: 'top'},
      {x: 104.5, y: 14, scrollX: 0, scrollY: 0, elapsedTime: 1382, side: 'top'},
      {x: 105, y: 13, scrollX: 0, scrollY: 0, elapsedTime: 1398, side: 'top'},
      {x: 105.5, y: 12.5, scrollX: 0, scrollY: 0, elapsedTime: 1413, side: 'top'},
      {x: 106.5, y: 11, scrollX: 0, scrollY: 0, elapsedTime: 1429, side: 'top'},
      {x: 107.5, y: 10, scrollX: 0, scrollY: 0, elapsedTime: 1446, side: 'top'},
      {x: 108, y: 9, scrollX: 0, scrollY: 0, elapsedTime: 1462, side: 'top'},
      {x: 109, y: 8, scrollX: 0, scrollY: 0, elapsedTime: 1478, side: 'top'},
      {x: 109.5, y: 7.5, scrollX: 0, scrollY: 0, elapsedTime: 1493, side: 'top'},
      {x: 109.5, y: 7, scrollX: 0, scrollY: 0, elapsedTime: 1510, side: 'top'},
      {x: 110, y: 7, scrollX: 0, scrollY: 0, elapsedTime: 1526, side: 'top'},
      {x: 110, y: 7, scrollX: 0, scrollY: 0, elapsedTime: 1543, side: 'top'},
      {x: 110, y: 6.5, scrollX: 0, scrollY: 0, elapsedTime: 1560, side: 'top'},
      {x: 110.5, y: 6.5, scrollX: 0, scrollY: 0, elapsedTime: 1577, side: 'top'},
      {x: 110.5, y: 6, scrollX: 0, scrollY: 0, elapsedTime: 1599, side: 'top'},
      {x: 111, y: 5.5, scrollX: 0, scrollY: 0, elapsedTime: 1614, side: 'top'},
      {x: 111, y: 5.5, scrollX: 0, scrollY: 0, elapsedTime: 1630, side: 'top'},
      {x: 111.5, y: 5, scrollX: 0, scrollY: 0, elapsedTime: 1646, side: 'top'},
    ],
    [
      {x: 195.5, y: 24.5, scrollX: 0, scrollY: 0, elapsedTime: 2331, side: 'top'},
      {x: 198, y: 24, scrollX: 0, scrollY: 0, elapsedTime: 2344, side: 'top'},
      {x: 201.5, y: 22.5, scrollX: 0, scrollY: 0, elapsedTime: 2357, side: 'top'},
      {x: 204.5, y: 20.5, scrollX: 0, scrollY: 0, elapsedTime: 2375, side: 'top'},
      {x: 207, y: 19, scrollX: 0, scrollY: 0, elapsedTime: 2391, side: 'top'},
      {x: 209, y: 17.5, scrollX: 0, scrollY: 0, elapsedTime: 2405, side: 'top'},
      {x: 211, y: 16, scrollX: 0, scrollY: 0, elapsedTime: 2421, side: 'top'},
      {x: 212, y: 15, scrollX: 0, scrollY: 0, elapsedTime: 2437, side: 'top'},
      {x: 213, y: 13.5, scrollX: 0, scrollY: 0, elapsedTime: 2454, side: 'top'},
      {x: 213.5, y: 13, scrollX: 0, scrollY: 0, elapsedTime: 2469, side: 'top'},
      {x: 214, y: 12.5, scrollX: 0, scrollY: 0, elapsedTime: 2486, side: 'top'},
      {x: 215, y: 12, scrollX: 0, scrollY: 0, elapsedTime: 2501, side: 'top'},
      {x: 215.5, y: 11, scrollX: 0, scrollY: 0, elapsedTime: 2517, side: 'top'},
      {x: 216, y: 10, scrollX: 0, scrollY: 0, elapsedTime: 2533, side: 'top'},
      {x: 216, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 2550, side: 'top'},
      {x: 216.5, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 2581, side: 'top'},
      {x: 216.5, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 2601, side: 'top'},
    ],
    [
      {x: 283.5, y: 21.5, scrollX: 0, scrollY: 0, elapsedTime: 3487, side: 'top'},
      {x: 283.5, y: 21.5, scrollX: 0, scrollY: 0, elapsedTime: 3507, side: 'top'},
      {x: 286, y: 18.5, scrollX: 0, scrollY: 0, elapsedTime: 3526, side: 'top'},
      {x: 288, y: 16.5, scrollX: 0, scrollY: 0, elapsedTime: 3541, side: 'top'},
      {x: 290, y: 15, scrollX: 0, scrollY: 0, elapsedTime: 3559, side: 'top'},
      {x: 292, y: 13.5, scrollX: 0, scrollY: 0, elapsedTime: 3576, side: 'top'},
      {x: 294.5, y: 12, scrollX: 0, scrollY: 0, elapsedTime: 3592, side: 'top'},
      {x: 297, y: 10.5, scrollX: 0, scrollY: 0, elapsedTime: 3608, side: 'top'},
      {x: 299, y: 9.5, scrollX: 0, scrollY: 0, elapsedTime: 3621, side: 'top'},
      {x: 300.5, y: 8.5, scrollX: 0, scrollY: 0, elapsedTime: 3642, side: 'top'},
      {x: 302.5, y: 7.5, scrollX: 0, scrollY: 0, elapsedTime: 3654, side: 'top'},
      {x: 303, y: 7.5, scrollX: 0, scrollY: 0, elapsedTime: 3669, side: 'top'},
      {x: 303.5, y: 7, scrollX: 0, scrollY: 0, elapsedTime: 3693, side: 'top'},
      {x: 304, y: 6.5, scrollX: 0, scrollY: 0, elapsedTime: 3717, side: 'top'},
      {x: 304.5, y: 6.5, scrollX: 0, scrollY: 0, elapsedTime: 3733, side: 'top'},
      {x: 305, y: 6, scrollX: 0, scrollY: 0, elapsedTime: 3749, side: 'top'},
    ],
    // right
    [
      {x: 10.5, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 15, side: 'right'},
      {x: 10.5, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 31, side: 'right'},
      {x: 11, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 47, side: 'right'},
      {x: 12, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 63, side: 'right'},
      {x: 14, y: 45.5, scrollX: 0, scrollY: 0, elapsedTime: 79, side: 'right'},
      {x: 15, y: 45, scrollX: 0, scrollY: 0, elapsedTime: 91, side: 'right'},
      {x: 17.5, y: 44.5, scrollX: 0, scrollY: 0, elapsedTime: 106, side: 'right'},
      {x: 20, y: 44, scrollX: 0, scrollY: 0, elapsedTime: 122, side: 'right'},
      {x: 22.5, y: 43.5, scrollX: 0, scrollY: 0, elapsedTime: 135, side: 'right'},
      {x: 24.5, y: 43.5, scrollX: 0, scrollY: 0, elapsedTime: 151, side: 'right'},
      {x: 27.5, y: 43, scrollX: 0, scrollY: 0, elapsedTime: 167, side: 'right'},
      {x: 28.5, y: 42.5, scrollX: 0, scrollY: 0, elapsedTime: 181, side: 'right'},
      {x: 31, y: 42, scrollX: 0, scrollY: 0, elapsedTime: 198, side: 'right'},
      {x: 32, y: 42, scrollX: 0, scrollY: 0, elapsedTime: 215, side: 'right'},
      {x: 33, y: 42, scrollX: 0, scrollY: 0, elapsedTime: 231, side: 'right'},
    ],
    [
      {x: 12, y: 101, scrollX: 0, scrollY: 0, elapsedTime: 991, side: 'right'},
      {x: 13.5, y: 101, scrollX: 0, scrollY: 0, elapsedTime: 1007, side: 'right'},
      {x: 15.5, y: 102.5, scrollX: 0, scrollY: 0, elapsedTime: 1023, side: 'right'},
      {x: 18, y: 103, scrollX: 0, scrollY: 0, elapsedTime: 1039, side: 'right'},
      {x: 21, y: 104.5, scrollX: 0, scrollY: 0, elapsedTime: 1055, side: 'right'},
      {x: 25, y: 106, scrollX: 0, scrollY: 0, elapsedTime: 1072, side: 'right'},
      {x: 29, y: 107, scrollX: 0, scrollY: 0, elapsedTime: 1091, side: 'right'},
      {x: 31.5, y: 107.5, scrollX: 0, scrollY: 0, elapsedTime: 1107, side: 'right'},
      {x: 32.5, y: 108, scrollX: 0, scrollY: 0, elapsedTime: 1122, side: 'right'},
      {x: 33, y: 108, scrollX: 0, scrollY: 0, elapsedTime: 1135, side: 'right'},
      {x: 33.5, y: 108.5, scrollX: 0, scrollY: 0, elapsedTime: 1151, side: 'right'},
      {x: 34, y: 109, scrollX: 0, scrollY: 0, elapsedTime: 1167, side: 'right'},
      {x: 34.5, y: 109, scrollX: 0, scrollY: 0, elapsedTime: 1207, side: 'right'},
    ],
  ],
  collaboration: [
    [
      {x: 7.5, y: 22, scrollX: 0, scrollY: 0, elapsedTime: 31},
      {x: 8.5, y: 23, scrollX: 0, scrollY: 0, elapsedTime: 48},
      {x: 10.5, y: 24.5, scrollX: 0, scrollY: 0, elapsedTime: 65},
      {x: 11.5, y: 25.5, scrollX: 0, scrollY: 0, elapsedTime: 80},
      {x: 13.5, y: 26, scrollX: 0, scrollY: 0, elapsedTime: 93},
      {x: 15, y: 27, scrollX: 0, scrollY: 0, elapsedTime: 109},
      {x: 16.5, y: 28, scrollX: 0, scrollY: 0, elapsedTime: 125},
      {x: 18, y: 29, scrollX: 0, scrollY: 0, elapsedTime: 141},
      {x: 20, y: 30, scrollX: 0, scrollY: 0, elapsedTime: 157},
      {x: 21.5, y: 30.5, scrollX: 0, scrollY: 0, elapsedTime: 174},
      {x: 22.5, y: 31, scrollX: 0, scrollY: 0, elapsedTime: 190},
      {x: 23, y: 31.5, scrollX: 0, scrollY: 0, elapsedTime: 205},
      {x: 23.5, y: 32, scrollX: 0, scrollY: 0, elapsedTime: 221},
      {x: 25, y: 32.5, scrollX: 0, scrollY: 0, elapsedTime: 237},
      {x: 27, y: 34, scrollX: 0, scrollY: 0, elapsedTime: 254},
      {x: 28, y: 34.5, scrollX: 0, scrollY: 0, elapsedTime: 270},
      {x: 29, y: 35, scrollX: 0, scrollY: 0, elapsedTime: 285},
      {x: 29.5, y: 35.5, scrollX: 0, scrollY: 0, elapsedTime: 301},
      {x: 30.5, y: 35.5, scrollX: 0, scrollY: 0, elapsedTime: 317},
      {x: 31, y: 36, scrollX: 0, scrollY: 0, elapsedTime: 334},
      {x: 31.5, y: 36, scrollX: 0, scrollY: 0, elapsedTime: 350},
      {x: 32, y: 36.5, scrollX: 0, scrollY: 0, elapsedTime: 390},
    ],
    [
      {x: 29, y: 22, scrollX: 0, scrollY: 0, elapsedTime: 734},
      {x: 30, y: 24.5, scrollX: 0, scrollY: 0, elapsedTime: 750},
      {x: 31.5, y: 26.5, scrollX: 0, scrollY: 0, elapsedTime: 765},
      {x: 32.5, y: 28, scrollX: 0, scrollY: 0, elapsedTime: 782},
      {x: 33.5, y: 29.5, scrollX: 0, scrollY: 0, elapsedTime: 798},
      {x: 35, y: 31.5, scrollX: 0, scrollY: 0, elapsedTime: 815},
      {x: 36, y: 33, scrollX: 0, scrollY: 0, elapsedTime: 831},
      {x: 37, y: 34, scrollX: 0, scrollY: 0, elapsedTime: 849},
      {x: 38, y: 34.5, scrollX: 0, scrollY: 0, elapsedTime: 864},
      {x: 39, y: 35.5, scrollX: 0, scrollY: 0, elapsedTime: 880},
      {x: 39, y: 36, scrollX: 0, scrollY: 0, elapsedTime: 894},
      {x: 39.5, y: 36.5, scrollX: 0, scrollY: 0, elapsedTime: 909},
      {x: 39.5, y: 37, scrollX: 0, scrollY: 0, elapsedTime: 925},
      {x: 39.5, y: 37.5, scrollX: 0, scrollY: 0, elapsedTime: 942},
      {x: 40, y: 37.5, scrollX: 0, scrollY: 0, elapsedTime: 974},
      {x: 40, y: 38, scrollX: 0, scrollY: 0, elapsedTime: 1006},
      {x: 40, y: 38, scrollX: 0, scrollY: 0, elapsedTime: 1031},
      {x: 40, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 1065},
      {x: 39.5, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 1080},
      {x: 39, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 1093},
      {x: 38.5, y: 39, scrollX: 0, scrollY: 0, elapsedTime: 1109},
      {x: 38, y: 39, scrollX: 0, scrollY: 0, elapsedTime: 1125},
      {x: 36, y: 39.5, scrollX: 0, scrollY: 0, elapsedTime: 1142},
      {x: 34, y: 39.5, scrollX: 0, scrollY: 0, elapsedTime: 1158},
      {x: 32, y: 40, scrollX: 0, scrollY: 0, elapsedTime: 1174},
      {x: 31, y: 40, scrollX: 0, scrollY: 0, elapsedTime: 1190},
      {x: 30.5, y: 40, scrollX: 0, scrollY: 0, elapsedTime: 1205},
      {x: 30.5, y: 40, scrollX: 0, scrollY: 0, elapsedTime: 1221},
      {x: 30, y: 40, scrollX: 0, scrollY: 0, elapsedTime: 1296},
      {x: 29.5, y: 40.5, scrollX: 0, scrollY: 0, elapsedTime: 1310},
      {x: 29.5, y: 40.5, scrollX: 0, scrollY: 0, elapsedTime: 1326},
      {x: 29, y: 40.5, scrollX: 0, scrollY: 0, elapsedTime: 1341},
      {x: 28.5, y: 41, scrollX: 0, scrollY: 0, elapsedTime: 1357},
      {x: 27.5, y: 41.5, scrollX: 0, scrollY: 0, elapsedTime: 1373},
      {x: 26.5, y: 42, scrollX: 0, scrollY: 0, elapsedTime: 1389},
      {x: 25.5, y: 42.5, scrollX: 0, scrollY: 0, elapsedTime: 1405},
      {x: 25, y: 42.5, scrollX: 0, scrollY: 0, elapsedTime: 1421},
      {x: 24.5, y: 43, scrollX: 0, scrollY: 0, elapsedTime: 1437},
      {x: 24.5, y: 43, scrollX: 0, scrollY: 0, elapsedTime: 1448},
    ]
  ],
  images: [
    [
      {x: 45, y: 109, scrollX: 0, scrollY: 0, elapsedTime: 43},
      {x: 45, y: 107, scrollX: 0, scrollY: 0, elapsedTime: 60},
      {x: 44.5, y: 105.5, scrollX: 0, scrollY: 0, elapsedTime: 75},
      {x: 44, y: 104, scrollX: 0, scrollY: 0, elapsedTime: 91},
      {x: 43, y: 102, scrollX: 0, scrollY: 0, elapsedTime: 107},
      {x: 42, y: 99.5, scrollX: 0, scrollY: 0, elapsedTime: 124},
      {x: 40.5, y: 97.5, scrollX: 0, scrollY: 0, elapsedTime: 139},
      {x: 39, y: 95.5, scrollX: 0, scrollY: 0, elapsedTime: 157},
      {x: 38, y: 94.5, scrollX: 0, scrollY: 0, elapsedTime: 174},
      {x: 36.5, y: 92.5, scrollX: 0, scrollY: 0, elapsedTime: 187},
      {x: 35.5, y: 91, scrollX: 0, scrollY: 0, elapsedTime: 203},
      {x: 34.5, y: 90, scrollX: 0, scrollY: 0, elapsedTime: 219},
      {x: 33, y: 89, scrollX: 0, scrollY: 0, elapsedTime: 235},
      {x: 32, y: 87.5, scrollX: 0, scrollY: 0, elapsedTime: 251},
      {x: 30, y: 86, scrollX: 0, scrollY: 0, elapsedTime: 267},
      {x: 29.5, y: 85, scrollX: 0, scrollY: 0, elapsedTime: 283},
      {x: 28, y: 84.5, scrollX: 0, scrollY: 0, elapsedTime: 299},
      {x: 27, y: 83.5, scrollX: 0, scrollY: 0, elapsedTime: 316},
      {x: 25.5, y: 82.5, scrollX: 0, scrollY: 0, elapsedTime: 333},
      {x: 24.5, y: 81.5, scrollX: 0, scrollY: 0, elapsedTime: 350},
      {x: 22.5, y: 80.5, scrollX: 0, scrollY: 0, elapsedTime: 367},
      {x: 21, y: 79.5, scrollX: 0, scrollY: 0, elapsedTime: 379},
      {x: 19.5, y: 78.5, scrollX: 0, scrollY: 0, elapsedTime: 395},
      {x: 18.5, y: 78, scrollX: 0, scrollY: 0, elapsedTime: 411},
      {x: 17.5, y: 77.5, scrollX: 0, scrollY: 0, elapsedTime: 427},
      {x: 16.5, y: 77, scrollX: 0, scrollY: 0, elapsedTime: 443},
      {x: 16, y: 77, scrollX: 0, scrollY: 0, elapsedTime: 459},
      {x: 15.5, y: 76.5, scrollX: 0, scrollY: 0, elapsedTime: 475},
      {x: 15.5, y: 76.5, scrollX: 0, scrollY: 0, elapsedTime: 596},
      {x: 15, y: 76.5, scrollX: 0, scrollY: 0, elapsedTime: 611},
    ],

    [
      {x: 11, y: 75, scrollX: 0, scrollY: 0, elapsedTime: 846},
      {x: 11, y: 75.5, scrollX: 0, scrollY: 0, elapsedTime: 859},
      {x: 11, y: 76.5, scrollX: 0, scrollY: 0, elapsedTime: 875},
      {x: 11, y: 77.5, scrollX: 0, scrollY: 0, elapsedTime: 891},
      {x: 11, y: 79, scrollX: 0, scrollY: 0, elapsedTime: 908},
      {x: 11, y: 81, scrollX: 0, scrollY: 0, elapsedTime: 923},
      {x: 11.5, y: 83, scrollX: 0, scrollY: 0, elapsedTime: 939},
      {x: 12, y: 84, scrollX: 0, scrollY: 0, elapsedTime: 950},
      {x: 12, y: 85.5, scrollX: 0, scrollY: 0, elapsedTime: 966},
      {x: 12.5, y: 87, scrollX: 0, scrollY: 0, elapsedTime: 979},
      {x: 13, y: 88, scrollX: 0, scrollY: 0, elapsedTime: 995},
      {x: 13, y: 89.5, scrollX: 0, scrollY: 0, elapsedTime: 1011},
      {x: 13.5, y: 90, scrollX: 0, scrollY: 0, elapsedTime: 1027},
    ],
    [
      {x: 12.5, y: 74, scrollX: 0, scrollY: 0, elapsedTime: 1460},
      {x: 13.5, y: 73.5, scrollX: 0, scrollY: 0, elapsedTime: 1475},
      {x: 15.5, y: 73, scrollX: 0, scrollY: 0, elapsedTime: 1491},
      {x: 17.5, y: 73, scrollX: 0, scrollY: 0, elapsedTime: 1507},
      {x: 19, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1523},
      {x: 19.5, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1539},
      {x: 20, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1550},
      {x: 20, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1566},
      {x: 20, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1668},
      {x: 21, y: 72.5, scrollX: 0, scrollY: 0, elapsedTime: 1683},
      {x: 21.5, y: 72, scrollX: 0, scrollY: 0, elapsedTime: 1699},
      {x: 22, y: 72, scrollX: 0, scrollY: 0, elapsedTime: 1716},
      {x: 22.5, y: 72, scrollX: 0, scrollY: 0, elapsedTime: 1733},
      {x: 23, y: 72, scrollX: 0, scrollY: 0, elapsedTime: 1755},
      {x: 23.5, y: 72, scrollX: 0, scrollY: 0, elapsedTime: 1766},
    ]
  ],
  tags: [
    [
      {x: 11.5, y: 60.5, scrollX: 0, scrollY: 0, elapsedTime: 2},
      {x: 13.5, y: 60, scrollX: 0, scrollY: 0, elapsedTime: 18},
      {x: 15, y: 59, scrollX: 0, scrollY: 0, elapsedTime: 34},
      {x: 16, y: 59, scrollX: 0, scrollY: 0, elapsedTime: 50},
      {x: 17.5, y: 58.5, scrollX: 0, scrollY: 0, elapsedTime: 65},
      {x: 19.5, y: 58, scrollX: 0, scrollY: 0, elapsedTime: 81},
      {x: 20.5, y: 57, scrollX: 0, scrollY: 0, elapsedTime: 99},
      {x: 22.5, y: 56, scrollX: 0, scrollY: 0, elapsedTime: 113},
      {x: 24, y: 55, scrollX: 0, scrollY: 0, elapsedTime: 129},
      {x: 26.5, y: 54, scrollX: 0, scrollY: 0, elapsedTime: 149},
      {x: 28, y: 52.5, scrollX: 0, scrollY: 0, elapsedTime: 161},
      {x: 30, y: 51.5, scrollX: 0, scrollY: 0, elapsedTime: 177},
      {x: 32, y: 50.5, scrollX: 0, scrollY: 0, elapsedTime: 198},
      {x: 34, y: 49, scrollX: 0, scrollY: 0, elapsedTime: 209},
      {x: 36.5, y: 47.5, scrollX: 0, scrollY: 0, elapsedTime: 234},
      {x: 38, y: 47, scrollX: 0, scrollY: 0, elapsedTime: 249},
      {x: 38.5, y: 46.5, scrollX: 0, scrollY: 0, elapsedTime: 265},
      {x: 39, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 298},
      {x: 39, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 313},
      {x: 40, y: 45, scrollX: 0, scrollY: 0, elapsedTime: 329},
    ],
    [
      {x: 34.5, y: 35.5, scrollX: 0, scrollY: 0, elapsedTime: 699},
      {x: 37.5, y: 36, scrollX: 0, scrollY: 0, elapsedTime: 713},
      {x: 40.5, y: 37, scrollX: 0, scrollY: 0, elapsedTime: 729},
      {x: 43.5, y: 38, scrollX: 0, scrollY: 0, elapsedTime: 748},
      {x: 46.5, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 761},
      {x: 49, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 777},
      {x: 51, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 798},
      {x: 52.5, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 809},
      {x: 53, y: 38.5, scrollX: 0, scrollY: 0, elapsedTime: 834},
      {x: 52.5, y: 39.5, scrollX: 0, scrollY: 0, elapsedTime: 930},
      {x: 51.5, y: 40.5, scrollX: 0, scrollY: 0, elapsedTime: 946},
      {x: 50, y: 41.5, scrollX: 0, scrollY: 0, elapsedTime: 961},
      {x: 48, y: 44, scrollX: 0, scrollY: 0, elapsedTime: 977},
      {x: 46, y: 46, scrollX: 0, scrollY: 0, elapsedTime: 997},
      {x: 44.5, y: 48, scrollX: 0, scrollY: 0, elapsedTime: 1010},
      {x: 43.5, y: 48.5, scrollX: 0, scrollY: 0, elapsedTime: 1025},
      {x: 43, y: 49.5, scrollX: 0, scrollY: 0, elapsedTime: 1048},
      {x: 42, y: 51, scrollX: 0, scrollY: 0, elapsedTime: 1065},
      {x: 41.5, y: 52, scrollX: 0, scrollY: 0, elapsedTime: 1081},
      {x: 41.5, y: 53, scrollX: 0, scrollY: 0, elapsedTime: 1099},
      {x: 41, y: 53.5, scrollX: 0, scrollY: 0, elapsedTime: 1113},
      {x: 41, y: 54, scrollX: 0, scrollY: 0, elapsedTime: 1129},
      {x: 41, y: 54.5, scrollX: 0, scrollY: 0, elapsedTime: 1148},
      {x: 40.5, y: 54.5, scrollX: 0, scrollY: 0, elapsedTime: 1161},
      {x: 40.5, y: 55, scrollX: 0, scrollY: 0, elapsedTime: 1177},
      {x: 40.5, y: 55.5, scrollX: 0, scrollY: 0, elapsedTime: 1204},
      {x: 40.5, y: 56, scrollX: 0, scrollY: 0, elapsedTime: 1217},
      {x: 40.5, y: 56.5, scrollX: 0, scrollY: 0, elapsedTime: 1234},
      {x: 40.5, y: 56.5, scrollX: 0, scrollY: 0, elapsedTime: 1248},
    ]
  ]
}

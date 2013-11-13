function oval(context, x, y, w, h)
{
    context.save();
    context.beginPath();
    context.translate(x, y);
    context.scale(w/2, h/2);
    context.arc(1, 1, 1, 0, 2*Math.PI, false);
    context.closePath();
    context.restore();
}

function drawPeterGriffin(canvasId)
{
    //// General Declarations
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');


    //// Color Declarations
    var blackColor = 'rgba(0, 0, 0, 1)';
    var whiteColor = 'rgba(255, 255, 255, 1)';
    var grayColor = 'rgba(128, 128, 128, 1)';
    var color4 = 'rgba(0, 0, 0, 0)';
    var skin = 'rgba(243, 166, 147, 1)';
    var color5 = 'rgba(0, 0, 0, 1)';
    var hairColor = 'rgba(103, 38, 19, 1)';
    var tongue = 'rgba(251, 0, 7, 1)';

    //// Head
    //// headshape Drawing
    context.beginPath();
    context.moveTo(188.5, 26.5);
    context.bezierCurveTo(156.16, 5.68, 115.15, 10.65, 89.5, 26.5);
    context.bezierCurveTo(78.09, 33.55, 73.76, 48.72, 66.5, 58.5);
    context.bezierCurveTo(61.85, 64.76, 55.1, 65.4, 47.5, 71.5);
    context.bezierCurveTo(32.89, 83.23, 32.21, 101.6, 31.93, 121.41);
    context.bezierCurveTo(31.38, 160.71, 47.08, 205.65, 61.5, 215.5);
    context.bezierCurveTo(67.07, 219.3, 102.61, 259.03, 126.5, 251.5);
    context.bezierCurveTo(143.04, 246.29, 170.11, 230.94, 188.5, 209.5);
    context.bezierCurveTo(208.65, 186, 219.42, 156.49, 219.5, 156.5);
    context.bezierCurveTo(220.18, 156.55, 219.5, 156.5, 219.5, 156.5);
    context.bezierCurveTo(219.5, 156.5, 218.56, 45.86, 188.5, 26.5);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// Oval Drawing
    oval(context, 291.5, 59.5, 0, 0);
    context.fillStyle = whiteColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();




    //// Eyes
    //// bridge Drawing
    context.beginPath();
    context.moveTo(171, 52);
    context.lineTo(92, 52);
    context.lineTo(171, 52);
    context.closePath();
    context.fillStyle = grayColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// left eye Drawing
    oval(context, 65.5, 34.5, 38, 38);
    context.fillStyle = whiteColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1.5;
    context.stroke();


    //// right eye Drawing
    oval(context, 118.5, 34.5, 38, 38);
    context.fillStyle = whiteColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1.5;
    context.stroke();


    //// left pupil Drawing
    oval(context, 78.5, 52.5, 3, 3);
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();


    //// right pupil Drawing
    oval(context, 130.5, 52.5, 3, 3);
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();




    //// Mouth
    //// Bezier Drawing
    context.beginPath();
    context.moveTo(77, 89);
    context.bezierCurveTo(77.25, 88.51, 75.76, 89.02, 73.5, 91.5);
    context.bezierCurveTo(72.45, 92.65, 72.08, 92.68, 72.24, 93.58);
    context.bezierCurveTo(73.46, 100.45, 105.5, 100.5, 105.5, 100.5);
    context.lineTo(85.5, 90.5);
    context.bezierCurveTo(85.5, 90.5, 76, 90.94, 77, 89);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// Rectangle Drawing
    context.beginPath();
    context.rect(77, 87, 30, 8);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 0.5;
    context.stroke();


    //// Rectangle 2 Drawing
    context.beginPath();
    context.rect(92, 91, 14.5, 8);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 0.5;
    context.stroke();


    //// Bezier 2 Drawing
    context.beginPath();
    context.moveTo(131, 166);
    context.bezierCurveTo(131, 166, 134.46, 174.66, 133.5, 180);
    context.bezierCurveTo(132.54, 185.34, 129.96, 187.27, 126, 189);
    context.bezierCurveTo(122.04, 190.73, 111.81, 191.56, 109.5, 190);
    context.bezierCurveTo(107.19, 188.44, 100.85, 183.05, 100.5, 182);
    context.bezierCurveTo(100.15, 180.95, 99, 182.5, 99, 182.5);
    context.bezierCurveTo(99, 182.5, 88.99, 189.03, 85, 189);
    context.bezierCurveTo(81.01, 188.97, 76.61, 190.71, 71.5, 181);
    context.bezierCurveTo(66.39, 171.29, 70.59, 163.32, 72, 162);
    context.bezierCurveTo(73.41, 160.68, 79.9, 157.38, 83, 158.5);
    context.bezierCurveTo(86.1, 159.62, 70, 138.77, 69, 138);
    context.bezierCurveTo(68, 137.23, 76.23, 134.2, 79, 134);
    context.bezierCurveTo(81.77, 133.8, 109.85, 133.31, 110, 133.5);
    context.bezierCurveTo(110.15, 133.69, 131, 166, 131, 166);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// opening Drawing
    context.beginPath();
    context.moveTo(104.5, 100.5);
    context.lineTo(104.5, 133.5);
    context.bezierCurveTo(104.5, 133.5, 107.73, 138.8, 120.5, 138.5);
    context.bezierCurveTo(133.27, 138.2, 157.7, 130.57, 158.5, 106.5);
    context.bezierCurveTo(158.67, 101.32, 159.12, 96.02, 158.08, 93.96);
    context.bezierCurveTo(154.29, 86.43, 135.5, 81.5, 135.5, 81.5);
    context.bezierCurveTo(135.5, 81.5, 138.82, 82.05, 138.5, 84.5);
    context.bezierCurveTo(138.18, 86.95, 126.55, 94.64, 121.5, 96.5);
    context.bezierCurveTo(116.45, 98.36, 104.5, 100.5, 104.5, 100.5);
    context.closePath();
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();


    //// Rectangle 3 Drawing
    context.beginPath();
    context.rect(173.5, 149, 0, 0);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// Rectangle 4 Drawing
    context.beginPath();
    context.rect(177, 150.5, 0, 0);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// Rectangle 5 Drawing
    context.beginPath();
    context.rect(106.5, 139.5, 36, 32);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 1;
    context.stroke();


    //// Bezier 3 Drawing
    context.beginPath();
    context.moveTo(143.5, 129.5);
    context.bezierCurveTo(143.5, 129.03, 138.23, 129.47, 133.85, 131.17);
    context.bezierCurveTo(129.24, 132.96, 125.5, 136.04, 125.5, 136.5);
    context.bezierCurveTo(125.5, 137.39, 134.88, 136.04, 136.5, 135.5);
    context.bezierCurveTo(138.12, 134.96, 143.51, 130.46, 143.5, 129.5);
    context.closePath();
    context.fillStyle = tongue;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();




    //// Nose
    //// NoseShape Drawing
    context.beginPath();
    context.moveTo(112.5, 62.5);
    context.lineTo(106.5, 59.5);
    context.bezierCurveTo(106.5, 59.5, 96.69, 57.52, 91.5, 59.5);
    context.bezierCurveTo(86.31, 61.48, 84.14, 67.03, 83.5, 71.5);
    context.bezierCurveTo(82.86, 75.97, 85.88, 88.66, 93.5, 88.5);
    context.bezierCurveTo(101.12, 88.34, 113.5, 84.5, 113.5, 84.5);
    context.lineTo(112.5, 62.5);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// blockclosingnose Drawing
    context.beginPath();
    context.rect(109.5, 62.5, 5, 21);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 1;
    context.stroke();




    //// hair
    //// hairshape Drawing
    context.beginPath();
    context.moveTo(83.95, 24.71);
    context.bezierCurveTo(78.86, 25.79, 73.5, 28.5, 73.5, 28.5);
    context.bezierCurveTo(73.5, 28.5, 83.88, 20.86, 86.5, 19.5);
    context.bezierCurveTo(89.12, 18.14, 100.3, 11.79, 103.5, 10.5);
    context.bezierCurveTo(105.05, 9.87, 108.57, 7.68, 112.81, 6.61);
    context.bezierCurveTo(117.31, 5.48, 120.5, 5.5, 120.5, 5.5);
    context.bezierCurveTo(120.5, 5.5, 128.24, 4.21, 133.84, 4.14);
    context.bezierCurveTo(137.87, 4.09, 144.83, 5.15, 146.5, 5.5);
    context.bezierCurveTo(150.5, 6.35, 153.93, 7.55, 156.5, 8.5);
    context.bezierCurveTo(158.78, 9.34, 177.48, 15.63, 184.67, 22.72);
    context.bezierCurveTo(186.47, 24.49, 191.14, 29.97, 191.5, 30.5);
    context.bezierCurveTo(194.64, 35.12, 198.66, 40.46, 198.5, 41.5);
    context.bezierCurveTo(198.46, 41.78, 197.92, 41.15, 195.5, 41.5);
    context.bezierCurveTo(192.54, 41.92, 190.95, 44.94, 187.58, 47.91);
    context.bezierCurveTo(185.47, 49.77, 181.21, 52.34, 179.76, 52.77);
    context.bezierCurveTo(178.24, 53.22, 173.42, 53.49, 172.5, 52.5);
    context.bezierCurveTo(169.96, 49.79, 169.58, 48.94, 169.7, 47.04);
    context.bezierCurveTo(169.8, 45.67, 170.55, 43.69, 171.5, 41.5);
    context.bezierCurveTo(172.88, 38.33, 174.8, 36.89, 176.26, 34.11);
    context.bezierCurveTo(176.79, 33.11, 177.28, 31.71, 178.19, 30.19);
    context.bezierCurveTo(178.91, 28.99, 178.47, 27.58, 178.5, 27.5);
    context.bezierCurveTo(178.54, 27.39, 177.22, 27.31, 175.5, 27.5);
    context.bezierCurveTo(172.42, 27.84, 167.37, 28.33, 162.88, 29.18);
    context.bezierCurveTo(159.9, 29.74, 149.15, 31.01, 145.51, 31.14);
    context.bezierCurveTo(142.81, 31.24, 132.07, 29.04, 130.5, 28.5);
    context.bezierCurveTo(126.82, 27.23, 116.63, 24.41, 109.5, 23.5);
    context.bezierCurveTo(102.37, 22.59, 90.68, 23.37, 90.5, 23.5);
    context.bezierCurveTo(90.43, 23.55, 86.94, 24.08, 83.95, 24.71);
    context.closePath();
    context.fillStyle = hairColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();




    //// ear
    //// Oval 2 Drawing
    oval(context, 193.5, 47.5, 9, 13);
    context.fillStyle = color4;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// Rectangle 6 Drawing
    context.beginPath();
    context.rect(190.5, 55.5, 6, 6);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color4;
    context.lineWidth = 1;
    context.stroke();
}

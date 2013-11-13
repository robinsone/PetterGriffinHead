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

function drawCanvas(canvasId)
{
    //// General Declarations
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');


    //// Color Declarations
    var blackColor = 'rgba(0, 0, 0, 1)';
    var whiteColor = 'rgba(255, 255, 255, 1)';
    var grayColor = 'rgba(128, 128, 128, 1)';
    var skin = 'rgba(243, 166, 147, 1)';
    var color5 = 'rgba(0, 0, 0, 1)';
    var tongue = 'rgba(251, 0, 7, 1)';

    //// Eyes
    //// bridge Drawing
    context.beginPath();
    context.moveTo(122, 36);
    context.lineTo(43, 36);
    context.lineTo(122, 36);
    context.closePath();
    context.fillStyle = grayColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// left eye Drawing
    oval(context, 16.5, 18.5, 38, 38);
    context.fillStyle = whiteColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1.5;
    context.stroke();


    //// right eye Drawing
    oval(context, 69.5, 18.5, 38, 38);
    context.fillStyle = whiteColor;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1.5;
    context.stroke();


    //// left pupil Drawing
    oval(context, 29.5, 36.5, 3, 3);
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();


    //// right pupil Drawing
    oval(context, 81.5, 36.5, 3, 3);
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();




    //// Mouth
    //// Bezier Drawing
    context.beginPath();
    context.moveTo(28, 73);
    context.bezierCurveTo(28.25, 72.51, 26.76, 73.02, 24.5, 75.5);
    context.bezierCurveTo(23.45, 76.65, 23.08, 76.68, 23.24, 77.58);
    context.bezierCurveTo(24.46, 84.45, 56.5, 84.5, 56.5, 84.5);
    context.lineTo(36.5, 74.5);
    context.bezierCurveTo(36.5, 74.5, 27, 74.94, 28, 73);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// Rectangle Drawing
    context.beginPath();
    context.rect(28, 71, 30, 8);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 0.5;
    context.stroke();


    //// Rectangle 2 Drawing
    context.beginPath();
    context.rect(43, 75, 14.5, 8);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 0.5;
    context.stroke();


    //// Bezier 2 Drawing
    context.beginPath();
    context.moveTo(82, 150);
    context.bezierCurveTo(82, 150, 85.46, 158.66, 84.5, 164);
    context.bezierCurveTo(83.54, 169.34, 80.96, 171.27, 77, 173);
    context.bezierCurveTo(73.04, 174.73, 62.81, 175.56, 60.5, 174);
    context.bezierCurveTo(58.19, 172.44, 51.85, 167.05, 51.5, 166);
    context.bezierCurveTo(51.15, 164.95, 50, 166.5, 50, 166.5);
    context.bezierCurveTo(50, 166.5, 39.99, 173.03, 36, 173);
    context.bezierCurveTo(32.01, 172.97, 27.61, 174.71, 22.5, 165);
    context.bezierCurveTo(17.39, 155.29, 21.59, 147.32, 23, 146);
    context.bezierCurveTo(24.41, 144.68, 30.9, 141.38, 34, 142.5);
    context.bezierCurveTo(37.1, 143.62, 21, 122.77, 20, 122);
    context.bezierCurveTo(19, 121.23, 27.23, 118.2, 30, 118);
    context.bezierCurveTo(32.77, 117.8, 60.85, 117.31, 61, 117.5);
    context.bezierCurveTo(61.15, 117.69, 82, 150, 82, 150);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// opening Drawing
    context.beginPath();
    context.moveTo(55.5, 84.5);
    context.lineTo(55.5, 117.5);
    context.bezierCurveTo(55.5, 117.5, 58.73, 122.8, 71.5, 122.5);
    context.bezierCurveTo(84.27, 122.2, 108.7, 114.57, 109.5, 90.5);
    context.bezierCurveTo(109.67, 85.32, 110.12, 80.02, 109.08, 77.96);
    context.bezierCurveTo(105.29, 70.43, 86.5, 65.5, 86.5, 65.5);
    context.bezierCurveTo(86.5, 65.5, 89.82, 66.05, 89.5, 68.5);
    context.bezierCurveTo(89.18, 70.95, 77.55, 78.64, 72.5, 80.5);
    context.bezierCurveTo(67.45, 82.36, 55.5, 84.5, 55.5, 84.5);
    context.closePath();
    context.fillStyle = color5;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();


    //// Rectangle 3 Drawing
    context.beginPath();
    context.rect(124.5, 133, 0, 0);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// Rectangle 4 Drawing
    context.beginPath();
    context.rect(128, 134.5, 0, 0);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = color5;
    context.lineWidth = 2.5;
    context.stroke();


    //// Rectangle 5 Drawing
    context.beginPath();
    context.rect(57.5, 123.5, 36, 32);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 1;
    context.stroke();


    //// Bezier 3 Drawing
    context.beginPath();
    context.moveTo(94.5, 113.5);
    context.bezierCurveTo(94.5, 113.03, 89.23, 113.47, 84.85, 115.17);
    context.bezierCurveTo(80.24, 116.96, 76.5, 120.04, 76.5, 120.5);
    context.bezierCurveTo(76.5, 121.39, 85.88, 120.04, 87.5, 119.5);
    context.bezierCurveTo(89.12, 118.96, 94.51, 114.46, 94.5, 113.5);
    context.closePath();
    context.fillStyle = tongue;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 1;
    context.stroke();




    //// Nose
    //// NoseShape Drawing
    context.beginPath();
    context.moveTo(63.5, 46.5);
    context.lineTo(57.5, 43.5);
    context.bezierCurveTo(57.5, 43.5, 47.69, 41.52, 42.5, 43.5);
    context.bezierCurveTo(37.31, 45.48, 35.14, 51.03, 34.5, 55.5);
    context.bezierCurveTo(33.86, 59.97, 36.88, 72.66, 44.5, 72.5);
    context.bezierCurveTo(52.12, 72.34, 64.5, 68.5, 64.5, 68.5);
    context.lineTo(63.5, 46.5);
    context.closePath();
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = blackColor;
    context.lineWidth = 2;
    context.stroke();


    //// blockclosingnose Drawing
    context.beginPath();
    context.rect(60.5, 46.5, 5, 21);
    context.fillStyle = skin;
    context.fill();
    context.strokeStyle = skin;
    context.lineWidth = 1;
    context.stroke();
}

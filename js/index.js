window.onload = function initCanvas() {
    var canvas = document.getElementById("simplonlogo");
    var context = canvas.getContext("2d");



    context.beginPath();
    context.moveTo("130", "150");
    context.lineTo("140", "100");
    context.moveTo("140", "100");
    context.lineTo("310", "60");
    context.moveTo("310", "60");
    context.lineTo("380", "140");
    context.moveTo("380", "240");
    context.lineTo("350", "290");
    context.moveTo("350", "290");
    context.lineTo("130", "220");
    context.closePath();
    context.strokeStyle = "#F89406";
    context.stroke();

    context.beginPath();
    context.moveTo("130", "150");
    context.lineTo("130", "110");
    context.moveTo("130", "110");
    context.lineTo("300", "57");
    context.moveTo("300", "57");
    context.lineTo("380", "135");
    context.moveTo("380", "235");
    context.lineTo("357", "285");
    context.moveTo("357", "285");
    context.lineTo("130", "230");
    context.closePath();
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.font = "50px Sans serif";
    context.fillText("SIMPL   N", "140", "180");

    context.beginPath();
    context.font = "30px Sans Serif";
    context.fillStyle = "red";
    context.fillText("Occitanie", "230", "215");

    context.beginPath();
    context.arc(313, 160, 19, 0, Math.PI * 2, true);
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.stroke();

    context.beginPath();
    context.fillStyle = "#F89406";
    context.fillRect(308, 162, 10, 10);

    context.beginPath();
    context.fillStyle = "#F89406";
    context.fillRect(308, 148, 10, 10);

}
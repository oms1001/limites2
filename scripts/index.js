jQuery(document).ready(function ($) {
  console.log(Math.floor(Math.random() * 50 + 1));

  $("#uno").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#dos").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#tres").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#cuatro").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#cinco").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#seis").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#siete").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#ocho").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#nueve").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#diez").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#once").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#doce").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#trece").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#catorce").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#quince").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#dieciseis").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#dieciocho").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#diecinueve").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veinte").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veintiuno").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veintidos").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veintitres").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veinticuatro").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });
  $("#veinticinco").css({
    top: Math.floor(Math.random() * 1000 + 1),
    left: Math.floor(Math.random() * 1000 + 1),
  });

  $("#target").mousemove(function (event) {
    var msg;
    msg = event.pageX;
    if (msg % 3 == 0) {
      $("#target").mousemove(function (event) {
        $("#veinticuatro").fadeIn(2000).delay(2000).fadeOut(2500);

        $("#tres").fadeIn(3000).delay(2000).fadeOut(2500);
        $("#cuatro").fadeIn(4000).delay(2000).fadeOut(2500);
        $("#cinco").fadeIn(5000).delay(2000).fadeOut(2500);
        $("#seis").fadeIn(6000).delay(2000).fadeOut(2500);
        $("#siete").fadeIn(8000).delay(2000).fadeOut(2500);
        $("#ocho").fadeIn(500).delay(2000).fadeOut(2500);
        $("#nueve").fadeIn(300).delay(2000).fadeOut(2500);
        $("#diez").fadeIn(450).delay(2000).fadeOut(2500);
        $("#once").fadeIn(950).delay(2000).fadeOut(2500);
        $("#doce").fadeIn(1200).delay(2000).fadeOut(2500);
        $("#trece").fadeIn(1500).delay(2000).fadeOut(2500);
        $("#catorce").fadeIn(1600).delay(2000).fadeOut(2500);
        $("#quince").fadeIn(1700).delay(2000).fadeOut(2500);
        $("#dieciseis").fadeIn(6600).delay(2000).fadeOut(2500);
        $("#dieciocho").fadeIn(666).delay(2000).fadeOut(2500);
        $("#diecinueve").fadeIn(1313).delay(2000).fadeOut(2500);
        $("#veinte").fadeIn(2323).delay(2000).fadeOut(2500);
        $("#veintiuno").fadeIn(4587).delay(2000).fadeOut(2500);
        $("#veintidos").fadeIn(200).delay(2000).fadeOut(2500);
        $("#veintitres").fadeIn(1800).delay(2000).fadeOut(2500);
        $("#veinticinco").fadeIn(7000).delay(2000).fadeOut(2500);
      });
    } else if (msg % 5 == 0) {
      $("#target").mousemove(function (event) {});
    } else if (msg % 7 == 0) {
      $("#target").mousemove(function (event) {
        $("#dos").fadeIn(3000).delay(2000).fadeOut(2500);
      });
    } else if (msg % 73 == 0) {
      $("#target").mousemove(function (event) {
        console.log("que sabroso");
        $("#veinticinco").fadeIn(3000).delay(2000).fadeOut(2500);
      });
    }
  });
});

$("#start").on("click", function () {
    var you_number = $('[name=select]:checked').val();
    console.log(you_number);
    if (you_number == 0) {
        $("#img_you").html('<img src="img/rock.jpg">');
    } else if (you_number == 1) {
        $("#img_you").html('<img src="img/scissors.jpg">');
    } else if (you_number == 2) {
        $("#img_you").html('<img src="img/paper.jpg">');
    }
    var cpu_number = Math.floor(Math.random() * 3);
    if (cpu_number === 0) {
        $("#img_cpu").html('<img src="img/rock.jpg">');
    } else if (cpu_number === 1) {
        $("#img_cpu").html('<img src="img/scissors.jpg">');
    } else if (cpu_number === 2) {
        $("#img_cpu").html('<img src="img/paper.jpg">');
    }

    if (cpu_number - you_number === -2) {
        $("#title").html("あなたの勝ちです");
    } else if (cpu_number - you_number === -1) {
        $("#title").html("あなたの負けです");
    } else if (cpu_number - you_number === 0) {
        $("#title").html("あいこです");
    } else if (cpu_number - you_number === 1) {
        $("#title").html("あなたの勝ちです");
    } else if (cpu_number - you_number === 2) {
        $("#title").html("あなたの負けです");
    }
});

$("#reset").on("click", function () {
    $("input").prop("checked", false);
    $("#img_cpu").html('<img src="img/cpu.png">');
    $("#img_you").html('<img src="img/you.png">');
    $("#title").html("じゃんけんぽんっ！！！")
});


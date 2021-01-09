$(document).ready(function () {
    $("#firstBut").click(function () {
        $(".img").toggle(1000);
    })

    $(".img").hover(function () {
        $("img").css("opacity", "1")
    }, function () {
        $("img").css("opacity", ".5")
    })

    $("#secondBut").click(function () {
        $("#Внешность").fadeToggle("slow")
    })

    $("#thirdBut").click(function () {
        $("#Личность").slideToggle(1000)
    })

    $("#Личность span").dblclick(function () {
        $("#Личность span").addClass("span")
    })

    $("form").mouseenter(function () {
        $("<label for=\"description\"><span class=\"ltext\">О вас</span></label>\n" +
            "<input id=\"description\" name=\"description\">").appendTo(".description")
        $("#description").prop('required', true)
    })
    $(".input").on('click', function () {
        alert("Ваше фамилия: " + $("#surname").val() +
            "\nВаше имя: " + $("#name").val() +
            "\nВаш телефон: " + $("#phone").val() +
            "\nВаш E-Mail: " + $("#email").val())
    })
    $("#addNew").click(function () {
        let elem = $("h3")
        elem.addClass("shodka")
    })
    $("#replaceAll").click(function () {
        $("h3").replaceAll("h1")
    })
    $("#hideShow").click(function () {
        $(".field").hide(1000).show(1000)
    })
    $(".accordion").accordion()
    $("#name").autocomplete({source:["Дмитрий", "Максим", "Илья", "София", "Анастасия", "Елизавета"]})
    $("#circle").draggable({
        // axis: "x"
    })
    $("#drag1").droppable({
        drop:function () {
            $("#drag1").animate({
                height: "300px",
                width: "300px"
            }, {
                duration: 1000,
                easing: "linear"
            })
            $("#drag1").css("background","#ed1c24");
            $("#drag2").css("background","#2e7db2");
            $("#drag3").css("background","#2e7db2");
        }
    })
    $("#drag2").droppable({
        drop:function () {
            $("#drag2").animate({
                height: "300px",
                width: "300px"
            }, {
                duration: 1000,
                easing: "linear"
            })
            $("#drag1").css("background","#2e7db2");
            $("#drag2").css("background","#ed1c24");
            $("#drag3").css("background","#2e7db2");
        }
    })
    $("#drag3").droppable({
        drop:function () {
            $("#drag3").animate({
                height: "300px",
                width: "300px"
            },
            {
                duration: 1000,
                easing: "linear"
            })
            $("#drag1").css("background","#2e7db2");
            $("#drag2").css("background","#2e7db2");
            $("#drag3").css("background","#ed1c24");
        }
    })
});

$(function() {

    // Кнопки добавления доп. времени работы
    if ($(this).width() < 768) {
        $('#add-time-desktop span').css("display", "none");
    } else {
        $('#add-time-mobile span').css("display", "none");
    }

    // Ширина input time на мобильных устройствах
    if ($(this).width() < 768) {
        var wdth = $('.accommodation select').outerWidth();
        $(".accommodation input[type='time']").css("width", wdth);
    }

    // Занятость
    employmentGetInput();

    // Личный кабинет
    if ($(this).width() >= 992) {
        $('.user-right').css("height", $('.user-left').height());
    }

    // График раб./вых.
    $('#graph-work').mask('9/9');

    // Вывод кнопки добавления время работы
    $('#work-time-start, #work-time-end').on("change", function () {
        var startTime = $('#work-time-start').val();
        var endTime = $('#work-time-end').val();
        if (startTime && endTime) {
            if ($(window).width() >= 768) {
                $('#add-time-desktop span').css("display", "block");
            } else {
                $('#add-time-mobile span').css("display", "inline-block");
            }
        }
    });

    // Добавление время работы
    $('#add-time-desktop span, #add-time-mobile span').on("click", function () {
        $('#work-time-start, #work-time-end').removeClass("col-sm-6").addClass("col-sm-3").addClass("split");
        $('#work-time-start_add, #work-time-end_add').css("display", "block");
    });

    // password remember helper
    $('#input-email span').on("click", function () {
       setTimeout(function () {
           $('.password-remember-helper').css("display", "none").fadeOut(1000);
       }, 5000);
    });

    // Блок подсказка для страницы вспомнить пароль
    $('#input-email span').on('mouseover', function () {
        $('#input-email div').css("display", "block").fadeIn(300);
    });

    $('#input-email span').on('mouseout', function () {
        $('#input-email div').css("display", "none").fadeOut(300);
    });

    // Выбор занятости для страницы Заказчику
    $('#employment-div select').on('change', function () {
        employmentGetInput($('#employment-div select').val());
    });

    $('#ham8').on("click", function () {
        $(".hamburger-menu").toggleClass('active');
        $(".main").toggle("overflow");
        $(".footer").toggle("overflow");
    });

    // Mobile city popup
    $('#city').on("click", function () {
       $('.cities').toggleClass('active');
    });
    $('#close').on("click", function () {
        $('.cities').removeClass('active');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
        if ($('.cities').hasClass('active')) {
            var div = $(".cities"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('active'); // скрываем его
            }
        }
    });

    // Мобильная таблица
    $('.vacancy-more').on("click", function () {
        var nextBlock = $(this).next();
        $(this).toggleClass('text');
        if ($(this).hasClass('text')) {
            $(this).text('Свернуть');
        } else {
            $(this).text('Узнать больше');
        }
        nextBlock.slideToggle();
        $(this).toggleClass('active');
    });
});

function employmentGetInput() {
    var employment = (arguments.length) ? arguments[0] : "Постоянная";

    if (employment === "Постоянная") {
        $('#graph-div').css("display", "block").fadeIn(300);
        $('#date-div').css("display", "none").fadeOut(300);
    } else if (employment === "Разовая") {
        $('#date-div').css("display", "block").fadeIn(300);
        $('#graph-div').css("display", "none").fadeOut(300);

        // Установим ширину на весь экран
        var wdth = $('.accommodation select').outerWidth();
        $(".accommodation input[type='date']").css("width", wdth);
    }
}
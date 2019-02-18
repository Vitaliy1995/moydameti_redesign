$(function() {

    employmentGetInput();

    $('.user-right').css("height", $('.user-left').height());

    $('#graph-work').mask('99/99');

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
    }
}
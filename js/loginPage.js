/**
 * Created by ngleungtsan on 7/15/16.
 */


$(function () {
    var $button = $(".open");
    var $backgound = $(".popUp");
    var $form = $(".popUp-inner");

    $button.click(function () {
        $backgound.fadeIn(350);
        $form.fadeIn(350);
    })

    $backgound.click(function () {
        $backgound.fadeOut(350);
        $form.fadeOut(350);
    })

    function moveout() {
        $backgound.fadeOut(350);
        $form.fadeOut(350);
    }

    function movein() {
        $backgound.fadeIn(350);
        $form.fadeIn(350);
    }

    //fadein();
});

function clearFrontPage()
{
    var background = document.getElementsByClassName("popUp");
    var form = document.getElementsByClassName("popUp-inner");
    var main = document.getElementsByClassName("main");

    background[0].style.display = 'none';
    form[0].style.display = 'none';
    main[0].style.display = 'none';
}
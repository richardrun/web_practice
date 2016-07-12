/**
 * Created by ngleungtsan on 7/7/16.
 */


var numOfImg;
var container = [];
var iForOpacity = 1;
//var oldimg = document.getElementsByClassName("pic2");
var img = document.getElementsByClassName("pic");
var turn = false;
//var slowApper;
var bright = 1;

//store pic url to array
for (var i = 0;i < 11; i++)
{
    container[i] = "src/test" + (i+1)+".jpg";
}
//img.style.opacity = 0;


//////////////////////////////
function slideSwitch() {
    var $active = $("#midPicdiv img.active");
    if ($active.length == 0) $active = $('#midPicdiv img:last');

    var $next = $active.next().length ? $active.next() : $("#midPicdiv img:first");

    $active.addClass('nextActive');
    $next.css({opacity: 0})
        .addClass('active')
        .animate({opacity: 1}, 1000, function () {
            $active.removeClass('active nextActive');
        });
}

$(function() {
    setInterval( "slideSwitch()", 2000 );
});


/////////////////////////////////////


//autoRun();
// first disapper the pic
//var slowDisapper = setInterval(disapper,20);
//setTimeout(slowDisapper,2000);

//auto switch photo
//var flash = setInterval(randomMove,2000);

//setInterval(switcher,2000);

//setInterval(appear2disappear, 20);

function changePic(){
    //img.opacity = 0;

}


function randomMove() {

    var ran = (Math.random() * 10);
    ran = (Math.floor(ran)) % 12;

    // document.getElementById("midPic").style.display = 'none';

    img = document.getElementById("pic");

    img.src = container[ran];
    //img.opacity = iForOpacity;
}

function switcher() {
    if(turn==true)
    {
        clearInterval(slowApper);
        slowDisapper = setInterval(disapper, 20);
        turn = false;

    }else if (turn==false)
    {
        clearInterval(slowDisapper);
        slowApper = setInterval(appear, 20);
        turn = true;
    }
}


function stopMove() {
    //clearInterval(flash);
}

function flashing() {
    flash = setInterval(randomMove,2000);
}

function disapper() {
    if(iForOpacity>0.01)
    {
        iForOpacity = iForOpacity - 0.01;
        oldimg.style.opacity = iForOpacity;
    }
}

function stopDisapper() {
    clearInterval(slowDisapper);
}

function appear2disappear(){
    //var img = document.getElementById("pic");
    if(img.style.opacity<1 && bright==1){
        img.style.opacity = parseFloat(img.style.opacity) + 0.01;
    }
    if(img.style.opacity>0 && bright==0){
        img.style.opacity = parseFloat(img.style.opacity) - 0.01;
    }
    if(parseFloat(img.style.opacity) >= 1 && bright == 1){
        bright=0;
    }
    if(parseFloat(img.style.opacity) <= 0 && bright == 0){
        bright=1;
        var ran = (Math.random() * 10);
        ran = (Math.floor(ran)) % 11;
        // document.getElementById("midPic").style.display = 'none';
        //img = document.getElementById("pic");
        document.getElementById("pic").src = container[ran];
    }
}

function appear() {
    if(iForOpacity<0.93)
    {
        iForOpacity = iForOpacity + 0.05;
        img.style.opacity = iForOpacity+0.05;
    }
}

function testAlert() {
    alert("test alert");
}
/**
 * Created by ngleungtsan on 7/7/16.
 */


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


/////////////-- Slide Show -- /////////////////

var numOfImg = 11;
var imgArray = new Array();
var imgIndex = 3;
//Store image into a array

for(var i=0;i<numOfImg;i++)
{
    imgArray[i] = new Image();
    imgArray[i].src = "src/test"+ (i+1) + ".jpg";
    imgArray[i].className += "pic";
}


function slideSwitch() {

    var $active = $("#midPicdiv img.active");
    if ($active.length == 0) $active = $('#midPicdiv img:last');

    var $next = $active.next().length ? $active.next() : $("#midPicdiv img:first");

    $active.addClass('nextActive');
    $active.attr("id", "p1");

    $next.css({opacity: 0})
        .addClass('active')
        .animate({opacity: 1}, 1000, "swing", function () {
            $active.removeClass('active nextActive');
        });

   // $next.animate({left:-200, opacity: 0.3, width: "70%" },500);
    //$next.animate({left:0, opacity: 1, width: "100%"},800);


    var idTemp = document.getElementById("p1");
    document.getElementById("midPicdiv").removeChild(idTemp);

    var imgParent = document.getElementById("midPicdiv");

    if(imgIndex<11)
    {
        var nextPic = imgParent.appendChild(imgArray[imgIndex]);
        imgParent.lastChild.style.opacity=0;
        imgIndex++;
    }else {
        imgIndex =0
        imgParent.appendChild(imgArray[imgIndex]);
        imgParent.lastChild.style.opacity=0;
        imgIndex++;
    }

}


$(function() {
    //setInterval( "slideSwitch()", 3000 );
});


//////////////-- End of slide show --///////////////////////


//   -- red box how -- //
var redboxclass = document.getElementsByClassName("redbox");
var boxtop = 20;
var boxleft = 35;
var count = 1;

function boxCreate()
{
    var box = new Image();
    box.id= "redbox";
}

function buildLeftHeart() {
    var tempBoxtop =boxtop;
    var tempBoxLeft = boxleft;
    var tempCount = count;

    for(var i=14; i>=1;i-=2)
    {
        for(var j =i; j>=1;j--)
        {
            var box = new Image();
            box.className= "redbox";
            box.style.top = tempBoxtop+"%";
            box.style.left = tempBoxLeft+"%";
            tempBoxtop += 5;
            document.getElementById("main").appendChild(box);
        }
        tempBoxLeft -= 5;
        tempBoxtop = boxtop + 5*tempCount;
        tempCount ++;
    }
}

function buildRightHeart() {
    var tempBoxtop =boxtop;
    var tempBoxLeft = boxleft +20;
    var tempCount = count;

    for(var i=14; i>=1;i-=2)
    {
        for(var j =i; j>=1;j--)
        {
            var box = new Image();
            box.className= "redbox";
            box.style.top = tempBoxtop+"%";
            box.style.left = tempBoxLeft+"%";
            tempBoxtop += 5;
            document.getElementById("main").appendChild(box);
        }
        tempBoxLeft += 5;
        tempBoxtop = boxtop + 5*tempCount;
        tempCount ++;
    }
}

function buildMidHeart() {
    var tempBoxtop =boxtop + 10;
    var tempBoxLeft = boxleft +5;

    for(var i =1; i<=2; i++)
    {
        for(var j =1; j<=13;j++)
        {
            var box = new Image();
            box.className= "redbox";
            box.style.top = tempBoxtop +"%";
            box.style.left = tempBoxLeft+"%";
            tempBoxtop += 5;
            document.getElementById("main").appendChild(box);
        }
        tempBoxLeft += 10;
        tempBoxtop =boxtop + 10;
    }


    tempBoxtop =boxtop + 15;
    tempBoxLeft = boxtop + 25;

    for(var j =1; j<=13;j++)
    {
        var box = new Image();
        box.className= "redbox";
        box.style.top = tempBoxtop +"%";
        box.style.left = tempBoxLeft+"%";
        tempBoxtop += 5;
        document.getElementById("main").appendChild(box);
    }
}

function buildHeart() {
    buildLeftHeart();
    buildRightHeart();
    buildMidHeart();
}

buildHeart();

var $movingHeart = $("img.redbox");

function animateHeart() {
    $movingHeart.animate({opacity: 1, width:"5%", height: "5%", backgroundColor:"red"}, 500);
    $movingHeart.animate({opacity: 0.6, width:"5.5%", height: "5.5%"
    , boxShadow: "0px 0px 50px 50px red inset"}, 500);
    $movingHeart.animate({opacity: 1, width:"5%", height: "5%"
        , boxShadow: "0px 0px 10px 10px red inset"}, 500);
}


var heartStart = setInterval(animateHeart, 3000);



//  -- end of red box -- //

var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=800 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#main')
    ;

//
$(window).on('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity1=0
        ,$px = $("#num");
    if( offset<=fadeStart ){
        opacity1=1;
    }else if( offset<=fadeUntil ){
        opacity1=1-offset/fadeUntil;
    }
    fading.css({opacity: opacity1})
    $px.html(offset);
});
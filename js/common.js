$(document).ready(function(){
    rolling();
    scroll_init();
    cursor();
    main();
    move($("main .tit"));
    move($("main .img_box"));
    click();
});

function rolling(){  
    var $slide_clone = $(".rolling_wrap ul").clone();
    $(".rolling_wrap ul").after($slide_clone);
    var $width = ($(".rolling_wrap ul").width()*2);
    $(".rolling_wrap ul").parent().css("width",$width);
}

function scroll_init(){
    for(var i = 1; i < 19; i++){
        scroll(".practice li:nth-child("+ i +")");
    }    
    scroll(".cause .cause_01 .left");
    scroll(".cause .cause_02 .left");
    scroll(".cause .cause_03 .left");
    scroll(".cause .cause_01 .right");
    scroll(".cause .cause_02 .right");
    scroll(".cause .cause_03 .right");
}

function cursor(){
    $("nav .inner > ul span").mousemove(function(e){
        var $posX = e.pageX;
        var $posY = e.pageY;
        var $nav_name = $(this).attr("class");
        $("nav .cursor ul li").removeClass("active");
        $("#" + $nav_name).addClass("active");
        $("#" + $nav_name).css({left:($posX-160) + "px" , top:($posY-1450) + "px"});
        $("nav .inner > ul span").mouseleave(function(e){
            $("#" + $nav_name).removeClass("active");            
        })
    })
}

function scroll($target){ 
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top > 0){
            $("header img").attr("src","images/logo_w.png");
            $("header").css("mix-blend-mode","difference");
        }else{
            $("header img").attr("src","images/logo_bk.png");
            $("header").css("mix-blend-mode","");
        }

        var $nav_offsetTop = ($("nav").offset().top)*0.5;
        if($nav_offsetTop < $top){
            $("nav").addClass("active");
        }
        var $practice_offsetTop = ($($target).offset().top)*0.9;
        if($practice_offsetTop < $top){
            $($target).addClass("active");
        }

        var $result_offsetTop = $(".result").offset().top;
        var $height = $(".result").innerHeight();
        var $start = $result_offsetTop*0.7;
        var $end = ($result_offsetTop + $height)*0.9;
        if($top < $end & $top > $start){
            $(".result").css("background-color","#141414");
        }else{
            $(".result").css("background-color","#fff");
        }
    });
}

function main(){   
    var $index = parseInt(Math.random()*4)+1;
    $("main .img_box img").attr("src","images/main_0" + $index + ".jpg");

    var $video = $("video").get(0);
    $("main .tit").click(function(){
        $(".video_wrap").addClass("active");
        setTimeout(function(){
            $video.play();
        },1800)
    });
    $(".video_wrap .video").click(function(){
        $(".video_wrap").removeClass("active");
        $video.pause();
    });
}

function move($target){
    $($target).addClass("active");
}

function click(){
    $(".result .swiper-slide").click(function(){
        var $slide_id = $(this).attr("id");
        $("body").css("overflow-y","hidden"); 
        $(".result .slide_view ul").addClass("active");
        $("." + $slide_id).addClass("active");

        $("." + $slide_id).click(function(){
            $("body").css("overflow-y","scroll"); 
            $(".result .slide_view ul").removeClass("active");
            $("." + $slide_id).removeClass("active");
            
        }); 
    }); 
}
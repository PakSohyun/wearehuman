$(document).ready(function(){
    rolling();
    scroll_init();
    cursor();
    main();
    move($("main .tit"));
    move($("main .img_box"));
    swiper();
    slideClick();
});

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

function scroll_init(){
    for(var i = 1; i < 10; i++){
        mouseScroll(".practice .first_ul li:nth-child("+ i +")");
        mouseScroll(".practice .last_ul li:nth-child("+ i +")");
    }    
    mouseScroll("nav",0.4);
    mouseScroll(".cause .cause_01 .left");
    mouseScroll(".cause .cause_02 .left");
    mouseScroll(".cause .cause_03 .left");
    mouseScroll(".cause .cause_01 .right");
    mouseScroll(".cause .cause_02 .right");
    mouseScroll(".cause .cause_03 .right");
    mouseScroll(".practice p");
}

function mouseScroll($target){ 
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        if($top > 0){
            $("header img").attr("src","images/logo_w.png");
            $("header").css("mix-blend-mode","difference");
        }else{
            $("header img").attr("src","images/logo_bk.png");
            $("header").css("mix-blend-mode","");
        };
        
        var offsetTop = ($($target).offset().top)-500;
        if(offsetTop < $top){
            $($target).addClass("active");
        }else{
            $($target).removeClass("active");
        };
        
        if(($(".cause .cause_01 .left").offset().top)-500 < $top && ($(".practice").offset().top)-500 > $top){
            $("header").css("opacity",0);
        }else{
            $("header").css("opacity",1);
        };

        var $result_offsetTop = $(".result").offset().top;
        var $height = $(".result").innerHeight();
        var $start = $result_offsetTop-500;
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
        $("html").animate({scrollTop:0},300);
        $(".video_wrap").addClass("active");
        $("body").css("overflow-y","hidden");
        setTimeout(function(){
            $video.play();
        },1200)
    });
    $(".video_wrap .video").click(function(){
        $("body").css("overflow-y","scroll"); 
        $(".video_wrap").removeClass("active");
        $video.pause();
    });
}

function move($target){
    $($target).addClass("active");
}

function swiper(){
    var swiper = new Swiper(".result_slide", {
        slidesPerView: 3,
        spaceBetween: 352,
        speed: 1500,
        loop: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});  
}

function slideClick(){
    $(".result .swiper-slide").click(function(){
        var $slide_id = $(this).attr("id")
        console.log($slide_id);
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

function rolling(){  
    var $width = ($(".rolling_wrap ul").width()*2);
    var $slide_clone = $(".rolling_wrap ul").clone();
    $(".rolling_wrap ul").after($slide_clone);
    $(".rolling_wrap ul").parent().css("width",$width);
}
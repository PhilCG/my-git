$(function(){

    var width = $(window).width();
    if(width>990){
        width=990;
    };

    var v_width = 0.8 * width,
        v_height = 0.5617 * v_width,
        v1 = document.getElementById("p3_3_v"),
        v2 = document.getElementById("p4_3_v");
    console.log(v_height);

    $('#p3_3').css('height',v_height);
    $('#p3_3_v').css('height',v_height);
    $('#p3_3_v').css('v_width',v_width);
    $('#p3_3_p').css('height',v_height);
    $('#p3_3_p').css('v_width',v_width);

    $('#p4_3').css('height',v_height);
    $('#p4_3_v').css('height',v_height);
    $('#p4_3_v').css('v_width',v_width);
    $('#p4_3_p').css('height',v_height);
    $('#p4_3_p').css('v_width',v_width);

    if(width>768){

        $('#p1 img').css('width','auto');
        $('#p1_1p').css('display','block');

        $('#p1_1p2').css('display','none');
    };
    if(width<768){

        $('#p1 img').css('width','100%');
        $('#p1_1p2').css('display','block');

        $('#p1_1p').css('display','none');

    };

    $(window).resize(function() {

        width = $(window).width();

        if(width>990){
            width=990;
        };

        var v_width = 0.8 * width,
            v_height = 0.5617 * v_width,
            v1 = document.getElementById("p3_3_v"),
            v2 = document.getElementById("p4_3_v");
        console.log(v_height);

        $('#p3_3').css('height',v_height);
        $('#p3_3_v').css('height',v_height);
        $('#p3_3_v').css('v_width',v_width);
        $('#p3_3_p').css('height',v_height);
        $('#p3_3_p').css('v_width',v_width);

        $('#p4_3').css('height',v_height);
        $('#p4_3_v').css('height',v_height);
        $('#p4_3_v').css('v_width',v_width);
        $('#p4_3_p').css('height',v_height);
        $('#p4_3_p').css('v_width',v_width);
    if(width>768){

        $('#p1 img').css('width','auto');
        $('#p1_1p').css('display','block');

        $('#p1_1p2').css('display','none');
    };
    if(width<768){

        $('#p1 img').css('width','100%');
        $('#p1_1p2').css('display','block');

        $('#p1_1p').css('display','none');

    };

    });

    $("#p3_3_p").click(function() {
        v1.play();
        $("#p3_3_v").css({"z-index":"1","opacity":'1'});
        $("#p3_3_p").css({"z-index":"0","opacity":'0'});
    });

    $("#p3_3_v").click(function() {
        v1.pause();
        $("#p3_3_v").css({"z-index":"0","opacity":'0'});
        $("#p3_3_p").css({"z-index":"1","opacity":'1'});
    });

    $("#p4_3_p").click(function() {
        v2.play();
        $("#p4_3_v").css({"z-index":"1","opacity":'1'});
        $("#p4_3_p").css({"z-index":"0","opacity":'0'});
    });

    $("#p4_3_v").click(function() {
        v2.pause();
        $("#p4_3_v").css({"z-index":"0","opacity":'0'});
        $("#p4_3_p").css({"z-index":"1","opacity":'1'});
    });

})
/*
var img = $('#main img');
console.log(img);

function img_resize(img){
    var that = this;

    var w = that.width(),
        wp = that.parent().width,
        m = (wp-w)/2;
    if(w<wp){
        that.css({'width':w,'margin-left':m});
        console.log('img_resized');
    };
};

$(window).resize(img_resize(img));


*/


/*
$(document).ready(function() {
    h = $(window).height();
    hedsize = $("header").height();
    $("section#top").css("height", (hsize - hedsize) + "px")
});
$(window).resize(function() {
    hsize = $(window).height();
    $("section#top").css("height", (hsize - hedsize) + "px")
});


$("#playvideo").fadeIn(800);

$(function() {
    $("#playvideo").click(function() {
        video.play();
        $(video).css("opacity", 1);
        $(this).fadeOut(400)
    });
    $("#video").click(function() {
        video.pause();
        $(video).css("opacity", 0);
        $("#playvideo").fadeIn(400)
    })
});


$(function() {
    var a = new BigVideo({ container: $("#top") });
    a.init();
    a.show([{ type: "video/mp4", src: "img/video.mp4" },
     { type: "video/webm", src: "img/video.webm" },
      { type: "video/ogg", src: "img/video.ogv" }], { doLoop: true });
    a.getPlayer().volume(0);
    $(".volumed_on").click(function() {
        a.getPlayer().volume(1);
        $(this).css("display", "none");
        $(".volumed_off").css("display", "block")
    });
    $(".volumed_off").click(function() {
        a.getPlayer().volume(0);
        $(this).css("display", "none");
        $(".volumed_on").css("display", "block")
    })
});
*/
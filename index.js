
$(function(){
    //点击欢迎字体显示你好呀
    $('#h1').click(function(){
        alert('你好呀！');
    });

    //点击灰色爱心照片切换成红色爱心照片
    $('#lo').click(function(){
        $('#lo').attr('src','image/爱心2.png');
    });

    //鼠标移入移出的字体显示
    $('#h1').mouseover(function(){
        $('.introduce').fadeIn(500);
    });
    $('#h1').mouseout(function(){
        $('.introduce').fadeOut(500);
    });
    
})


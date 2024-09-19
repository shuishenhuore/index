window.onload = function(){
    var h1 = document.getElementById('h1');
    var oLo = document.getElementById('lo')
    h1.onclick = function(){
        alert('你好呀！');
    }
    lo.onclick = function(){
        lo.src = 'image/爱心2.png';
    }

    $(function(){
        $('#h1').mouseover(function(){
            $('.introduce').fadeIn(1000);
        })
        $('#h1').mouseout(function(){
            $('.introduce').fadeOut(1000);
        })
    })

}

ScrollReveal().reveal('.fuwa',{
  delay: 200,
  viewFactor: 0.2,
  // origin:bottom,
});
ScrollReveal().reveal('.fuwa2',{
  delay: 600,
  viewFactor: 0.3,
  // origin:bottom,
});
ScrollReveal().reveal('.fuwa3',{
  delay: 800,
  viewFactor: 0.3,
  // origin:bottom,
});
ScrollReveal().reveal('.fuwa4',{
  delay: 1000,
  viewFactor: 0.3,
  // origin:bottom,
});
ScrollReveal().reveal('.fuwa5',{
  duration: 2000,
  scale: 0.5,
  delay: 200,
});
ScrollReveal().reveal('.fuwa6',{
  duration: 4000,
  scale: 0.5,
  delay: 600,
});

ScrollReveal().reveal('.center ', {
  duration: 1600,
  scale: 0.3,
  mobile: 'false'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
});
ScrollReveal().reveal('.right', {
  duration: 2000,
  origin: 'right',
  distance: '300px',
});

// スクロール量取得



$(function() {
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    console.log(scroll);
  });
 });
 console.log = function (log) {
  document.getElementById('console_log').innerHTML =Math.floor(log * 0.01);
  }

  $(function () {
    setTimeout('rect()'); //アニメーションを実行
});

function rect() {
    $('#rect').animate({
        marginTop: '-=20px'
    }, 800).animate({
        marginTop: '+=20px'
    }, 800);
    setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}

$(function() {
  // 変数にクラスを入れる
  var btn = $('.suisin');

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 200) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});
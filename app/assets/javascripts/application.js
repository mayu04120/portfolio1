// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
// = require jquery
// = require jquery_ujs
// = require jquery.turbolinks


// loading画面
$(function() {
var h = $(window).height(); //ブラウザウィンドウの高さを取得
$('#main-contents').css('display','none'); //初期状態ではメインコンテンツを非表示
$('#loader-bg ,#loader').height(h).css('display','block'); //ウィンドウの高さに合わせでローディング画面を表示
});
$(window).load(function () {
$('#loader-bg').delay(900).fadeOut(800); //$('#loader-bg').fadeOut(800);でも可
$('#loader').delay(600).fadeOut(300); //$('#loader').fadeOut(300);でも可
$('#main-contents').css('display', 'block'); // ページ読み込みが終わったらメインコンテンツを表示する
});

// sidemenu
$(function(){
var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#button'), // メニューボタンを指定
    body = $(document.body),     
    menuWidth = menu.outerWidth();                
     
    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function(){
    // body に open クラスを付与する
    body.toggleClass('open');
        if(body.hasClass('open')){
            // open クラスが body についていたらメニューをスライドインする
            body.animate({'left' : menuWidth }, 300);            
            menu.animate({'left' : 0 }, 300);                    
        } else {
            // open クラスが body についていなかったらスライドアウトする
            menu.animate({'left' : -menuWidth }, 300);
            body.animate({'left' : 0 }, 300);            
        }             
    });
});    



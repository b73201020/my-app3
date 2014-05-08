// JavaScript Document
//========================================================
// world.yam.com @ 2012/10/05
//========================================================

$('.wrap').live('pagecreate',function(){
	$('.menuList').hide();
	$('.mainNav').addClass('on');
});

$('.wrap').live('pageinit',function(){
	$('.menuList').hide();
	$('.menuSwitch').removeClass('on');
	if( $.cookie('mYamNewsArticleFontSize') ){
		$('.articleWrap *').css({'fontSize':$.cookie('mYamNewsArticleFontSize')*1});
	}
});

$('#album').live('pageinit',function(){
	/* 圖輯
	------------------------------------------------------------- */
	var options = {};
	if($("#albumBox").length >= 1)
		$("#albumBox a").photoSwipe(options);	
});



$(function(){

	$('.menuSwitch').live('click', function(e){
		e.preventDefault();
		var $menu = $(this).next().next('.menuList');
		$(this).toggleClass('on');
		$menu.stop().slideToggle(550);
	});
		
	$('.fontEnlarge').live('click', function(e){
		e.preventDefault();
		var fs = $('.articleWrap p').css('fontSize').replace('px', '')*1;
		if(fs <= 28){
			$('.articleWrap *').css({'fontSize':fs+4});
			$.cookie('mYamNewsArticleFontSize', fs+4);
			}
	});
	
	$('.fontNarrow').live('click', function(e){
		e.preventDefault();
		var fs = $('.articleWrap p').css('fontSize').replace('px', '')*1;
		if(fs >= 12){
			$('.articleWrap *').css({'fontSize':fs-4});
			$.cookie('mYamNewsArticleFontSize', fs-4);
			}
	});
	

});/* -------------------------ready fin--------------------------- */






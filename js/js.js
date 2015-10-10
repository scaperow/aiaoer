function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
	$('#wechat').hover(function(){
			$(this).attr('id','wechat_hover');
			$('#wechat_img').show();
		},function(){
			$(this).attr('id','wechat');
			$('#wechat_img').hide();
	})
	
});

$(window).scroll(function(e){
	b();		
})

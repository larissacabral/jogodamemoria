$(function(){
	new JogoDaMemoria(3, 4);
	$(".carta").on('click', function(){
		var $this = $(this);
		$this.addClass('virada');
		setTimeout(function(){
			$this.css("background-color", $this.attr("data-cor"));
		}, 650);
	});

});
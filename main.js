window.JogoDaMemoria = function(linhas, colunas, $root){

	var $matriz = $('<div class="matriz"></div>');

	var construtor = function(ln, cl, $root){
		if (!$root) { $root = $('body'); }
		$matriz.appendTo($root);

		for (var i = 0; i < ln; i++) {
			var $ultimaLinha = $('<div class="linha"></div>');
			$ultimaLinha.appendTo($matriz);

			for (var j = 0; j < cl; j++) {
				(new JogoDaMemoria.Carta('red')).getDom().appendTo($ultimaLinha);
			}
		}
	};

	var executarUmaJogada = function(carta1, carta2){

	};

	construtor(linhas, colunas, $root);
};

window.JogoDaMemoria.Carta = function(c){
	var cor		= null;
	var virado	= false;
	var $carta	= $('<div class="carta"></div>');

	var construtor = function(){
		cor = c;
	};

	this.getCor = function(){
		return cor;
	};

	this.isVirado = function(){
		return virado;
	};

	this.getDom = function(){
		return $carta;
	};

	construtor();
};



$(function(){
	// new JogoDaMemoria(10, 5);
	// $(".carta[data-cor]").on('click', function(){
	// 	var $this = $(this);
	// 	$this.addClass('virada');
	// 	setTimeout(function(){
	// 		$this.css("background-color", $this.attr("data-cor"));
	// 	}, 650);
	// });

});


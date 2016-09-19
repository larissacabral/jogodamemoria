window.JogoDaMemoria = function(linhas, colunas, $root){

	var me		= this;
	var $matriz = $('<div class="matriz"></div>');

	var construtor = function(ln, cl, $root){
		if (Number.isNaN(ln) || ln <= 0 || typeof ln != 'number' || !Number.isFinite(ln)) { throw "O argumento 'linhas' precisa ser um valor numerico positivo finito"; }
		if (Number.isNaN(cl) || cl <= 0 || typeof cl != 'number' || !Number.isFinite(cl)) { throw "O argumento 'colunas' precisa ser um valor numerico positivo finito"; }

		var guardarCores = me.gerarCores(ln, cl); // foi criado uma variavel para guardar o array do metodo de geração de cores.

		if (!$root) { $root = $('body'); }
		$matriz.appendTo($root);

		for (var i = 0; i < ln; i++) {
			var $ultimaLinha = $('<div class="linha"></div>');
			$ultimaLinha.appendTo($matriz);

			for (var j = 0; j < cl; j++) {
				(new JogoDaMemoria.Carta(guardarCores.pop())).bindOnMatriz(me); //adicionando o nome do array com pop.
			}
		}
	};

	me.getDom = function(){
		return $matriz;
	};

	// foi criado um metodo no prototipo do jogo da memoria "gerarCores"
	// recebendo linhas e colonas como argumento.
	me.gerarCores = function(ln, cl){
		if (Number.isNaN(ln) || ln <= 0 || typeof ln != 'number' || !Number.isFinite(ln)) { throw "O argumento 'ln' precisa ser um valor numerico positivo finito"; }
		if (Number.isNaN(cl) || cl <= 0 || typeof cl != 'number' || !Number.isFinite(cl)) { throw "O argumento 'cl' precisa ser um valor numerico positivo finito"; }

		var tamanhoJogo		= (ln * cl) / 2; //está sendo calculado o tamanho do jogo e sendo guardado em uma variavel.
		var coresGeradas	= JogoDaMemoria.Cor.gerarCoresAleatorias(tamanhoJogo);//o resultado do jogoestá sendo usado no metodo estatico de geração de cores aleatorias 
		var novoConjuntoDeCores = new Array();//foi criado um novo array vazio e guardado numa variavel pois é necessario que o prototipo de cores seja duplicado. 

		for (var i = 0; i < coresGeradas.length; i++) { //criado um loop adicionando no array anterior as cores que existem nele.
			novoConjuntoDeCores.push(coresGeradas[i])
			novoConjuntoDeCores.push(coresGeradas[i]);
		}

		function shuffle(arr) { 
			var j, x, i;
			for (i = arr.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = arr[i - 1];
				arr[i - 1] = arr[j];
				arr[j] = x;
	        }
	   }

	   shuffle(novoConjuntoDeCores);
	   return novoConjuntoDeCores;
	};


	construtor(linhas, colunas, $root);
};

JogoDaMemoria.Cor = function(r, g, b){ //prototipo Criar o prototipo chamado Cor vinculado ao objeto principal
	 var red 	= null;
	 var green	= null;
	 var blue 	= null;

	var construtor = function(r, g, b){
		if (isNaN(r)!==false) { throw "argumento 'red' inválido"; } //< (sinal de menor) >(sinal de maior)
		if (0 > r || r > 255) { throw "argumento 'red' inválido"; }
		
		if (isNaN(g)!==false) { throw "argumento 'green' inválido"; }
		if (0 > g || g > 255) { throw "argumento 'green' inválido"; } //(!(0 >= b || b >= 255))

		if (isNaN(b)!==false) { throw "argumento 'blue' inválido"; }
		if (0 > b || b > 255) { throw "argumento 'blue' inválido"; }

		red 	= Number(r);
		green	= Number(g);
		blue 	= Number(b);
	};
	
	this.getRed = function(){
		return red;
	};

	this.getGreen = function(){
		return green;
	};

	this.getBlue = function(){
		return blue;
	};

	//	metodo publicos
	this.toHex = function(){   // metodo
		
		var strRed 		= red.toString(16);
		var strGreen 	= green.toString(16);
		var strBlue 	= blue.toString(16);

		strRed 		= strRed.length 	== 1? ("0" + strRed) : strRed;
		strGreen 	= strGreen.length 	== 1? ("0" + strGreen) : strGreen;
		strBlue		= strBlue.length 	== 1? ("0" + strBlue) : strBlue;
		
		var hexa 		= strRed  + strGreen  + strBlue;

		return hexa.toUpperCase();
	};

	this.toString = function(){ //Criar método toString que chama o método que converte ele para hexadecimal e retorna o valor
		return this.toHex();
	};

	this.isEquivalente = function(cor){
		return JogoDaMemoria.Cor.estasCoresSaoEquivalentes(this, cor);
	};

	construtor(r, g, b);
};

JogoDaMemoria.Cor.estasCoresSaoEquivalentes = function(cor1, cor2){ //metodo estático vinculado ao protótipo
 	if (!(cor1 instanceof JogoDaMemoria.Cor)) { throw "argumentos recebidos nao sao instancia do objeto cor"; }
 	if (!(cor2 instanceof JogoDaMemoria.Cor)) { throw "argumentos recebidos nao sao instancia do objeto cor"; }

 	var toleranciaRed = cor1.getRed()-cor2.getRed();
 	torelanciaRed = Math.sqrt(Math.pow( toleranciaRed, 2));

 	var toleranciaGreen = cor1.getGreen()-cor2.getGreen();
 	torelanciaGreen = Math.sqrt(Math.pow(toleranciaGreen, 2));

 	var toleranciaBlue = cor1.getBlue()-cor2.getBlue();
 	toleranciaBlue = Math.sqrt(Math.pow(toleranciaBlue,2));

 	return (toleranciaRed <= 10 && toleranciaGreen <= 10 && toleranciaBlue <= 10);

};

JogoDaMemoria.Cor.gerarCorAleatoria = function(){ //um método estatico no protótipo de cor que gera uma cor aleatória
	var red 	= null;
	var green	= null;
	var blue 	= null;

	red 	= Math.floor(Math.random()*255);
	green 	= Math.floor(Math.random()*255);
	blue 	= Math.floor(Math.random()*255);

	return new JogoDaMemoria.Cor(red, green, blue);
};


JogoDaMemoria.Cor.gerarCoresAleatorias = function(quantasCores){ //quantas cores é um argumento
	if (isNaN(quantasCores)!==false) { throw "não é um numero válido"; }
	if (0 > quantasCores) { throw "não pode ser um numero negativo"; }
	if (quantasCores > 150) { throw "valor máximo de cores solicitado excede o tamanho limite"; }

	var conjuntoDeCores = new Array();

	while (conjuntoDeCores.length != quantasCores) {
		
		var minhaCor	= JogoDaMemoria.Cor.gerarCorAleatoria();
		var jaExiste	= false;

		for (var i = 0; i < conjuntoDeCores.length; i++) {
			if (conjuntoDeCores[i].isEquivalente(minhaCor)) {
				jaExiste = true;
				break; //quebra o for 
			}
		}

		if(!jaExiste){
			conjuntoDeCores.push(minhaCor);
		}
	}

	return conjuntoDeCores;
};

JogoDaMemoria.Carta = function(Cor){ //vinculando o objeto cor ao objeto carta ...recebendo por argumento 
	var cor		= null;
	var virado	= false;
	var $carta	= $('<div class="carta" style="background-color: #' + Cor + ';"></div>'); //adicionando um background para as cartas

	var construtor = function(Cor){
		if (!(Cor instanceof JogoDaMemoria.Cor)) { throw "argumento recebido nao é uma instancia do protótipo 'JogoDaMemoria.Cor'"; }
		cor = Cor;
	};

	this.getCor = function(){
		return Cor.toString(); //metodo esta retornado a cor como uma String e nao mais como uma referencia 
	};

	this.isVirado = function(){
		return virado;
	};

	this.bindOnMatriz = function(Matriz){
		var $matriz			= Matriz.getDom();
		var $ultimaLinha	= $(".linha:last", $matriz);

		$carta.appendTo($ultimaLinha);
	};

	construtor(Cor);
};

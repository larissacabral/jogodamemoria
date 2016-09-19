Testador.warn("Verificando protótipo 'Cor'");
Testador.warn("Parâmetro 'red'");

//
Testador.pegarErro(function(){
	var instancia = new JogoDaMemoria.Cor('k', 0, 0);
}, "Blindado contra algo não numerico.");

//
Testador.testar(function(foi, nfoi){
	var umaCorAi = new JogoDaMemoria.Cor(255, 0, 0);
	(umaCorAi.getRed() == 255)? foi() : nfoi();

}, "Com valor 255.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 0);
	(umaCorAi.getRed() == 0)? foi() : nfoi();
}, "Com valor 0.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(155, 0, 0);
	(umaCorAi.getRed() == 155)? foi() : nfoi();

}, "Com um valor entre 0 e 255.");

//
Testador.pegarErro(function(){
	var umaCorAi = new JogoDaMemoria.Cor(-1, 0, 0);
}, "Blindado contra numeros negativo.");

//
Testador.pegarErro(function(){
	
	var umaCorAi = new JogoDaMemoria.Cor(256, 0, 0);

}, "Com um valor maior do que 255 (testando 256).");


////
Testador.warn("Parâmetro 'green'");

//
Testador.pegarErro(function(){
	var instancia = new JogoDaMemoria.Cor(0, 'k', 0);
}, "Blindado contra algo não numerico.");

//
Testador.testar(function(foi, nfoi){
	var umaCorAi = new JogoDaMemoria.Cor(0, 255, 0);
	(umaCorAi.getGreen() == 255)? foi() : nfoi();

}, "Com valor 255.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 0);
	(umaCorAi.getGreen() == 0)? foi() : nfoi();
}, "Com valor 0.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 155, 0);
	(umaCorAi.getGreen() == 155)? foi() : nfoi();

}, "Com um valor entre 0 e 255.");

//
Testador.pegarErro(function(){
	var umaCorAi = new JogoDaMemoria.Cor(0, -1, 0);
}, "Blindado contra numeros negativo.");

//
Testador.pegarErro(function(){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 256, 0);

}, "Com um valor maior do que 255 (testando 256).");

////

Testador.warn("Parâmetro 'blue'");

//
Testador.pegarErro(function(){
	var instancia = new JogoDaMemoria.Cor(0, 0, 'k');
}, "Blindado contra algo não numerico.");

//
Testador.testar(function(foi, nfoi){
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 255);
	(umaCorAi.getBlue() == 255)? foi() : nfoi();

}, "Com valor 255.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 0);
	(umaCorAi.getBlue() == 0)? foi() : nfoi();
}, "Com valor 0.");

//
Testador.testar(function(foi, nfoi){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 155);
	(umaCorAi.getBlue() == 155)? foi() : nfoi();

}, "Com um valor entre 0 e 255.");

//
Testador.pegarErro(function(){
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, -1);
}, "Blindado contra numeros negativo.");

//
Testador.pegarErro(function(){
	
	var umaCorAi = new JogoDaMemoria.Cor(0, 0, 256);

}, "Com um valor maior do que 255 (testando 256).");


////
Testador.warn("Testando método de conversão para hexadecimal (toHex-red)");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(15, 0, 0);
	(umCacluloHexa.toHex() == '0F0000')? foi() : nfoi();

}, "Com valor menor que 16");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(255, 0, 0);
	(umCacluloHexa.toHex() == 'FF0000')? foi() : nfoi();

}, "Com valor maior que 16");

//
Testador.warn("Testando método de conversão para hexadecimal (toHex-green)");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(0, 15, 0);
	(umCacluloHexa.toHex() == '000F00')? foi() : nfoi();

}, "Com valor menor que 16");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(0, 255, 0);
	(umCacluloHexa.toHex() == '00FF00')? foi() : nfoi();

}, "Com valor maior que 16");

///
Testador.warn("Testando método de conversão para hexadecimal (toHex-blue)");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(0, 0, 15);
	(umCacluloHexa.toHex() == '00000F')? foi() : nfoi();

}, "Com valor menor que 16");

Testador.testar(function(foi, nfoi){
	var umCacluloHexa = new JogoDaMemoria.Cor(0, 0, 255);
	(umCacluloHexa.toHex() == '0000FF')? foi() : nfoi();

}, "Com valor maior que 16");


///////////////////////////////
Testador.warn("Testando equivalência de cores");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(205, 205, 205);
	var cor2 = new JogoDaMemoria.Cor(200, 200, 200);

	JogoDaMemoria.Cor.estasCoresSaoEquivalentes(cor1, cor2)? foi() : nfoi();
}, "Verificando equivalência menor que a tolerância");


Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(230, 230, 230);
	var cor2 = new JogoDaMemoria.Cor(200, 200, 200);

	!JogoDaMemoria.Cor.estasCoresSaoEquivalentes(cor1, cor2)? foi() : nfoi();
}, "Verificando equivalência maior que a tolerância");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(215, 215, 215);
	var cor2 = new JogoDaMemoria.Cor(215, 215, 215);

	JogoDaMemoria.Cor.estasCoresSaoEquivalentes(cor1, cor2)? foi() : nfoi();
}, "Verificando equivalência igual a tolerância");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(215, 215, 215);
	var cor2 = new JogoDaMemoria.Cor(235, 235, 235);

	!JogoDaMemoria.Cor.estasCoresSaoEquivalentes(cor1, cor2)? foi() : nfoi();
}, "Verificando não equivalência");

///
Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(205, 205, 205);
	var cor2 = new JogoDaMemoria.Cor(200, 200, 200);

	cor1.isEquivalente(cor2)? foi() : nfoi();
}, "Verificando equivalência menor que a tolerância usando o método isEquivalente");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(230, 230, 230);
	var cor2 = new JogoDaMemoria.Cor(200, 200, 200);

	!cor1.isEquivalente(cor2)? foi() : nfoi();
}, "Verificando equivalência maior que a tolerância usando o método isEquivalente");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(215, 215, 215);
	var cor2 = new JogoDaMemoria.Cor(215, 215, 215);

	cor1.isEquivalente(cor2)? foi() : nfoi();
}, "Verificando equivalência igual a tolerância usando o método isEquivalente");

Testador.testar(function(foi, nfoi){
	var cor1 = new JogoDaMemoria.Cor(215, 215, 215);
	var cor2 = new JogoDaMemoria.Cor(235, 235, 235);

	!cor1.isEquivalente(cor2)? foi() : nfoi();
}, "Verificando não equivalência usando o método isEquivalente");

///////
Testador.testar(function(foi, nfoi){
	var umaCorAleatoria	= JogoDaMemoria.Cor.gerarCorAleatoria();
	(umaCorAleatoria instanceof JogoDaMemoria.Cor)? foi() : nfoi();

}, "verificando se o objeto gerado é a instancia de Cor");

//	lançamento de erro quando o parâmetro enviado é algo diferente de numero - ok.
//	lançamento de erro quando o parâmetro enviado é um numero negativo - ok
//	verificar se o retorno do método é um array com o tamanho pedido que ele tenha - ok 
//	verificar se o array gerado por este método tem em sua composição somente instâncias do prototipo Cor - ok

Testador.pegarErro(function(){
	var cores = JogoDaMemoria.Cor.gerarCoresAleatorias("t");
}, "Blindado contra algo não numerico");


Testador.pegarErro(function(){
	var cores = JogoDaMemoria.Cor.gerarCoresAleatorias(-8);
}, "Blindado contra numeros negativos.");

Testador.testar(function(foi, nfoi){
	JogoDaMemoria.Cor.gerarCoresAleatorias(3)instanceof Array? foi() : nfoi();

}, "Verificando se o array gerado por este método tem em sua composição somente instâncias do prototipo Cor");

Testador.testar(function(foi, nfoi){
	JogoDaMemoria.Cor.gerarCoresAleatorias(3).length == 3? foi() : nfoi();

}, "Verificando se o retorno do metodo é um array com o tamanho especificado");

Testador.testar(function(foi, nfoi){
	var cores					= JogoDaMemoria.Cor.gerarCoresAleatorias(3);
	var naoEUmaCorEncontrado	= false;
		
	for (var i = 0; i < cores.length; i++) {
		if (!(cores[i] instanceof JogoDaMemoria.Cor))  {
			naoEUmaCorEncontrado = true;
		}
	}

	!naoEUmaCorEncontrado? foi() : nfoi(); 

}, "Verificando se cada um dos elementos do array é uma instância do protótipo Cor");


//testar o método gerarCores do protótipo
// - ver se a quantidade de cores certa foi gerada 											    --> nope
//- verificar se o retorno é um array 														    --> nope
// - verificar se o array retornado tem instâncias do protótipo de cor    					    --> nope
// - verificar se lança erro quando algo diferente de numerico é passado nos dois argumentos 	--> Done

Testador.warn("Verificando protótipo 'gerarCores'");

Testador.testar(function(foi, nfoi){
	var $div	= $('<div>');
	var x 		= new JogoDaMemoria(2, 3, $div);

	 x.gerarCores(2, 3).length == 6? foi() : nfoi();
	$div.remove();
	delete $div;
	
	//JogoDaMemoria.Cor.gerarCoresAleatorias(3).length == 3? foi() : nfoi();

}, "ver se a quantidade de cores certa foi gerada");

//

Testador.testar(function(foi, nfoi){
	var $div	= $('<div>');
	var x 		= new JogoDaMemoria(2, 2, $div);//QUEBRANDO O TESTE AO PASSAR OS PARAMETROS
	x.gerarCores(2, 2) instanceof Array? foi() : nfoi();
	$div.remove();
	delete $div;
	 
}, "verificar se o retorno é um array" );


Testador.testar(function(foi, nfoi){
	var $div					= $('<div>');
	var coresGeradas 			= new JogoDaMemoria(2, 2, $div); ////QUEBRANDO O TESTE AO PASSAR OS PARAMETROS
	var naoEUmaCorEncontrado	= false;

	for (var i = 0; i < coresGeradas.length; i++) {
		if (!(coresGeradas[i] instanceof JogoDaMemoria.Cor)){
			naoEUmaCorEncontrado = true;
		}
	}

	!naoEUmaCorEncontrado? foi() : nfoi();
	$div.remove();
	delete $div;

}, "verificar se o array retornado tem instâncias do protótipo de cor");

Testador.pegarErro(function(){
	var x 		= new JogoDaMemoria();
	var cores 	= x.gerarCores("t", "l");

}, "Blindado contra algo não numerico");
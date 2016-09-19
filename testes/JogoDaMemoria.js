Testador.warn("Verificando protótipo 'JogoDaMemória'");

Testador.testar(function(foi, nfoi){
	var $div		= $('<div>'); //$ -> esta criando e chamando uma div atraves de um jquery
	var joguinho	= new JogoDaMemoria(4, 6, $div);
	$div.find(' > .matriz').length == 1? foi() : nfoi();

}, "verificando se o elemento matriz é criado dentro do root estabelecido");

//
Testador.testar(function(foi, nfoi){
	var $div		= $('<div>'); 
	var joguinho 	= new JogoDaMemoria(4, 6, $div);
	
	$div.find('.linha').length == 4? foi () : nfoi ();

}, "verificando se a quantidade de linhas foi criada");

////

Testador.testar(function(foi, nfoi){
	var $div 		= $('<div>'); 
	var joguinho 	= new JogoDaMemoria(4, 6, $div);
	
	$div.find('.carta').length == 4*6? foi () : nfoi (); //ou24 

}, "verificando se a quantidade de colunas foi criada");
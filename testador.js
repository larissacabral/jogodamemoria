window.Testador = {
	testar: function(calle, msg){
		if (!(Object(calle) instanceof Function)) { throw "o primeiro argumento do método 'testar' deve ser uma função"; }
		if (!msg) { throw "o segundo argumento que representa uma mensagem é obrigatório."; }

		var me = this;
		try {
			calle.apply(null, [
				function(){ me.criarRespostaDeTeste('certo', msg); },
				function(){ me.criarRespostaDeTeste('errado', msg); }
			]);
		} catch (e) {
			me.criarRespostaDeTeste('errado', msg);
			console.error(msg, '->', e);
		}
	},

	pegarErro: function(calle, msg){
		if (!(Object(calle) instanceof Function)) { throw "o primeiro argumento do método 'testar' deve ser uma função"; }
		if (!msg) { throw "o segundo argumento que representa uma mensagem é obrigatório."; }

		try {
			calle();
			this.criarRespostaDeTeste('errado', msg);
		} catch (e) {
			this.criarRespostaDeTeste('certo', msg);
		}
	},

	warn: function(msg){
		this.criarRespostaDeTeste('warn', msg);
	},

	criarRespostaDeTeste: function(classe, msg){
		document.write('<div class="log deu'+ classe +'">' + msg + '</div>');
	}
};
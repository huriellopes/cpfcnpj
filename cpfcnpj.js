(function( $ ){
    $.fn.cpfcnpj = function(options) {


        return this.each (function() {        	


        	if (options == 'cpfcnpj') {
        		$(this).attr('maxlength',18);
		    	$(this).keyup(function(event) {
		        	if ($(this).val().length <= 14) {
		        		elem = $(this);
		        		novoValor = elem.val().replace(/\D/g, '');
						novoValor = novoValor.replace(/(\d{3})(\d)/,"$1.$2");
						novoValor = novoValor.replace(/(\d{3})(\d)/,"$1.$2");
						novoValor = novoValor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
						$(this).val(novoValor);
		        	} else {
		        		elem = $(this);
		        		novoValor = elem.val().replace(/\D/g, '');
						novoValor = novoValor.replace(/^(\d{2})(\d)/,"$1.$2");
						novoValor = novoValor.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
						novoValor = novoValor.replace(/\.(\d{3})(\d)/,".$1/$2");
						novoValor = novoValor.replace(/(\d{4})(\d)/,"$1-$2");
						$(this).val(novoValor);
		        	}
		    	});
        	}



        	if (options == 'cpf') {
        		$(this).keyup(function(event) {
	        		$(this).attr('maxlength',14);
	        		elem = $(this);
	        		novoValor = elem.val().replace(/\D/g, '');
					novoValor = novoValor.replace(/(\d{3})(\d)/,"$1.$2");
					novoValor = novoValor.replace(/(\d{3})(\d)/,"$1.$2");
					novoValor = novoValor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
					$(this).val(novoValor);
				});
        	}



        	if (options == 'cnpj') {
        		$(this).keyup(function(event) {
	        		$(this).attr('maxlength',18);
	        		elem = $(this);
	        		novoValor = elem.val().replace(/\D/g, '');
					novoValor = novoValor.replace(/^(\d{2})(\d)/,"$1.$2");
					novoValor = novoValor.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
					novoValor = novoValor.replace(/\.(\d{3})(\d)/,".$1/$2");
					novoValor = novoValor.replace(/(\d{4})(\d)/,"$1-$2");
					$(this).val(novoValor);
				});
        	}

        });
    }; 
})( jQuery );
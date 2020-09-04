$(function(){



    //Menu animado
  
    $(window).scroll(function(){ //Toda vez que ocorrer o scroll 

		
		var windowOffY = $(window).scrollTop(); //Posição atual da scroll Bar
        var windowHeight = $(window).height(); //Pega a altura da Janela
        
        var elemento = $('this').attr('target');

        $('section').each(function(){ //each é um loop(laço de repetição) que está loopando as classes .sessao 
            
			var elOffY = $(this).offset().top; //Distância do topo do nosso elemento até o topo da nossa janela
			if(elOffY+(500) < (windowOffY + windowHeight) && elOffY+(500)+$(this).height() > windowOffY){
				//Se o nosso elemento estiver visivel na página aplique: 

					$('a').css('border-bottom','0'); //retira o risco do atual
					var target = $(this).attr('target');//elemento novo
					$('.'+target).css('border-bottom','2px solid #333');//Coloca o elemento novo
					return;
			}
        });
        
        /*Adicione o atributo target="nomeX" nas sections e coloque o mesmo nome no <nav ul li a> 
        
        Exemplo: 

            <section target="servicosNav" id="servicos" class="section-columns">

            <li><a class="servicosNav" href="#servicos">Serviços</a></li>

        */

    })

    //Menu clique
    
    $('nav a ').click(function(){ //Toda vez que clicar no link dentro do nav


        var href = $(this).attr('href'); //pegue o atributo href 

        var offSetTop = $(href).offSet().top; //O método permite recuperar a posição atual de um elemento
        
        $('html,body').animate({'scrollTop':offSetTop}); //Anime a página até offSetTop

        return false;

        /*Adicione href no ul li do menu, coloque o atributo href com o id da sessão 
    
    
        Exemplo:  

        <li><a class="servicosNav" href="#servicos">Serviços</a></li>

        <section target="servicosNav" id="servicos" class="section-columns">
    
        */
    })

});
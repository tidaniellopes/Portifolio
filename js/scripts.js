$(function(){


    clickNav();
    
    function clickNav(){
        
        $('#sobre').click(function(){
            $('.nav').css('display','none');
            $('.sobre').css('display','block')

        })

        $('#projetos').click(function(){
            $('.nav').css('display','none');
            $('.projetos').css('display','block')

        })

        $('#tecnologias').click(function(){
            $('.nav').css('display','none');
            $('.tecnologias').css('display','block')

        })

        $('#contato').click(function(){
            $('.nav').css('display','none');
            $('.contato').css('display','block')

        })

    }


    



})
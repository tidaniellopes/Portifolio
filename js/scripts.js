$(function(){

    //Clique menu
    clickNav();
    clickMenu();
    
    function clickNav(){
        
        $('#sobre').click(function(){
            $('.nav').css('display','none');
            $('.sobre').css('display','block');
            
        })

        $('#projetos').click(function(){
            $('.nav').css('display','none');
            $('.projetos').css('display','block');
            $('.wraper').css('transition','0.8s');
            $('.wraper').css('opacity','1');
            
        })

        $('#tecnologias').click(function(){
            $('.nav').css('display','none');
            $('.tecnologias').css('display','block');
            

        })

        $('#contato').click(function(){
            $('.nav').css('display','none');
            $('.contato').css('display','block');
            

        })

    }


    function clickMenu(){

        var clickCheck = false;

        if(clickCheck == false){

            $('.menu-mobile').click(function(){
                $('.menu').slideToggle();


            })
            
        }



    }


    



})
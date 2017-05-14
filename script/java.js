// JavaScript Document


//-------VARIAVEIS PARA O SET INTERVAL------------
var intervalolivro;
var intervaloescritor;
var intervaloilustrador;


//------------------------------------ANIMAR OS SLIDES DO LIVRO--------------------------
 function rotate_slidelivro(){
       
        var livroi_actual = $('.livrobotoes .botao_active_slide2').index();
        var livroi_proximo = livroi_actual + 1;
     
        if( livroi_proximo >= 5 ){
            livroi_proximo = 0;
        }
     
        $('.livrobotoes .botao_slide2').removeClass('botao_active_slide2');
        $('.livrobotoes .botao_slide2').eq(livroi_proximo).addClass('botao_active_slide2');

        $('.livroslide').eq(livroi_actual).fadeOut(0);
        $('.livroslide').eq(livroi_proximo).fadeIn(0);
     
    };


//------------------------------------ANIMAR OS SLIDES DO ESCRITOR--------------------------
function rotate_slideescritor(){
       
        var escritori_actual = $('.escritorbotoes .botao_active_slide2').index();
        var escritori_proximo = escritori_actual + 1;
     
        if( escritori_proximo >= 5 ){
            escritori_proximo = 0;
        }
     
        $('.escritorbotoes .botao_slide2').removeClass('botao_active_slide2');
        $('.escritorbotoes .botao_slide2').eq(escritori_proximo).addClass('botao_active_slide2');

        $('.escritorslide').eq(escritori_actual).fadeOut(0);
        $('.escritorslide').eq(escritori_proximo).fadeIn(0);
     
    };



//------------------------------------ANIMAR OS SLIDES DO ILUSTRADOR--------------------------
function rotate_slideilustrador(){
       
        var ilustradori_actual = $('.ilustradorbotoes .botao_active_slide2').index();
        var ilustradori_proximo = ilustradori_actual + 1;
     
        if( ilustradori_proximo >= 5 ){
            ilustradori_proximo = 0;
        }
     
        $('.ilustradorbotoes .botao_slide2').removeClass('botao_active_slide2');
        $('.ilustradorbotoes .botao_slide2').eq(ilustradori_proximo).addClass('botao_active_slide2');

        $('.ilustradorslide').eq(ilustradori_actual).fadeOut(0);
        $('.ilustradorslide').eq(ilustradori_proximo).fadeIn(0);
     
    };

$(document).ready(function(){
    
    //----------ANIMAR OS SLIDES DE 5 EM 5 SEGUNDOS-------------
    intervalolivro =  window.setInterval('rotate_slidelivro()',5000);
    intervaloescritor = window.setInterval('rotate_slideescritor()',5000);
    intervaloilustrador =  window.setInterval('rotate_slideilustrador()',5000);
    
    
    
    //------------inserir animação de acordo com o tipo de ecrã---------------
    
    var altura_janela = $(window).outerHeight();
    var largura_janela = $(window).outerWidth();
    
    if( altura_janela > largura_janela ){
        $('#EdgeID').css('display','none');
        $('#EdgeID2').css('display','block');
    }
    
    $('#bot_fechar_anime').click(function(){
        $('#anime_inicio').fadeOut();
    })
    
    
    
    
    //-------------------navegação----------------------
    $('#menu_content a, .sobre_nav a, .destaques_nav a, .menuescondido_mobile a, #navbottom_mobile a').click(function(evento){
		        
		evento.preventDefault(); //prevenir conportamento predefinido
        
		var id_seccao = $(this).attr('href'); //guardar atributo href do link clicado
		var top_distancia = $(id_seccao).offset().top; //guardar distancia ao topo da secção
        var top_aoclick = top_distancia - 85; //calcular a distancia para onde irá
		
		$('html, body').animate({scrollTop:top_aoclick},800); //animar scroll do body
		
	});
    
    
    
    
    //---------------------menu mobile-----------------------
    
    $('.mobile_menu').click(function(){
        $('.menuescondido_mobile').slideDown();
    })
    
    $('.menuescondido_mobile .close_bot').click(function(){
        $('.menuescondido_mobile').slideUp();
    })
    
    
    //--------------------fim menu mobile--------------------
    
    
    $('#ceta_cima').fadeOut(0); //para tirar a ceta paracima quando a pagina carrega
    
    
    
    $(window).scroll(function(){
        
        var scroll_actual = $(window).scrollTop(); //guardar scroll actual
		var altura_site = $('#body_content').height(); //guardar altura do site
		var top_limite = $('#slideshow_content').offset().top; //guardar a distancia do top do slideshow_content
                
        var altura_menu = $('.menu_fixo').outerHeight(); //guardar altura do menu quando fixo
        var topdist_sobrelivro = $('#sobre_livro').offset().top; //guardar distancia ao topo de sobre livro
        var topdist_sobreescritor = $('#sobre_escritor').offset().top; //guardar distancia ao topo de sobre escritor
        var topdist_sobreilustrador = $('#sobre_ilustrador').offset().top; //guardar distancia ao topo de sobre ilustrador
        var dist_livroslide2sobre = $('#sobre_livro .slideshow2').offset().top - topdist_sobrelivro; //guardar distancia entre slideshow do livro e sobre
        var dist_ilustrador2sobre = $('#sobre_ilustrador .slideshow2').offset().top - topdist_sobrelivro; //guardar distancia entre slideshow do ilustrador e sobre
        
        var topdist_passatempo = $('#passatempo').offset().top; //guardar distancia ao topo de passatempo
        var topdist_eventos = $('#eventos').offset().top; //guardar distancia ao topo de eventos
        var topdist_imprensa = $('#imprensa').offset().top; //guardar distancia ao topo de imprensa
        var dist_passatemposlide2destaques = $('#passatempo .slideshow2').offset().top - topdist_passatempo; //guardar distancia entre slideshow de passatempo e destaques
        var dist_imprensacontent2destaques = $('#imprensa .slideshow2').offset().top - topdist_passatempo; //guardar distancia entre content de imprensa e destaques
        
        var topdist_sobre = $('#sobre_content').offset().top; //guardar distancia ao topo de sobre
        var topdist_destaques = $('#destaques_content').offset().top; //guardar distancia ao topo de destaques
        var topdist_mencaoespecial = $('#mencaoespecial_content').offset().top; //guardar distancia ao topo de mencaoespecial
        var topdist_comprar = $('#comprar_content').offset().top; //guardar distancia ao topo de comprar
        
        var topdist_footer = $('#foot_content').offset().top; //guardar distancia ao topo de footer
        
        
        
        
        //----------------tornar menu fixo----------------
		if(scroll_actual > top_limite){
            $('#logolivro img').attr('src','imagens/TituloLivro.svg');
            $('#body_content').addClass('mudanca_body');
			$('.menu_inicio').addClass('menu_fixo');
            $('.menu_fixo').stop().animate({'top':'0'},300);
		}else{
            $('.menu_fixo').stop().animate({'top':'-85px'},100,function(){
                $('#logolivro img').attr('src','imagens/LogoLivro.svg');
                $('#body_content').removeClass('mudanca_body');
                $('.menu_inicio').removeClass('menu_fixo');
            });
		}
        
        
        
        
        //----------------assinalar no menu a seccao visivel---------------
        $('.menu_inicio nav li').removeClass('menu_activo');
        
        if( scroll_actual < 100 ){
            $('.menu_fixo nav li').removeClass('menu_activo');
        }else if( scroll_actual + 250 > topdist_comprar ){
            $('.menu_fixo nav li').eq(3).addClass('menu_activo');
        }else if( scroll_actual + 250 > topdist_mencaoespecial ){
            $('.menu_fixo nav li').eq(2).addClass('menu_activo');
        }else if( scroll_actual + 250 > topdist_destaques ){
            $('.menu_fixo nav li').eq(1).addClass('menu_activo');
        }else if( scroll_actual + 250 > topdist_sobre ){
            $('.menu_fixo nav li').eq(0).addClass('menu_activo');
        }else{
            $('.menu_fixo nav li').removeClass('menu_activo');
        }
        
        
        
        
        
        //----------------------nav no rodapé mobile---------------------
        
        if( scroll_actual +200 > topdist_footer ){
            $('#ceta_baixo').attr('href','');
            $('#ceta_baixo').fadeOut();
            $('#ceta_cima').attr('href','#comprar_content');
        }else if( scroll_actual + 200 > topdist_comprar ){
            $('#ceta_baixo').attr('href','#foot_content');
            $('#ceta_baixo').fadeIn();
            $('#ceta_cima').attr('href','#mencaoespecial_content');            
        }else if( scroll_actual + 200 > topdist_mencaoespecial ){
            $('#ceta_baixo').attr('href','#comprar_content');
            $('#ceta_cima').attr('href','#imprensa');
        }else if( scroll_actual + 200 > topdist_imprensa ){
            $('#ceta_baixo').attr('href','#mencaoespecial_content');
            $('#ceta_cima').attr('href','#eventos');
        }else if( scroll_actual + 200 > topdist_eventos ){
            $('#ceta_baixo').attr('href','#imprensa');
            $('#ceta_cima').attr('href','#passatempo');
        }else if( scroll_actual + 200 > topdist_passatempo ){
            $('#ceta_baixo').attr('href','#eventos');
            $('#ceta_cima').attr('href','#sobre_ilustrador');
        }else if( scroll_actual + 200 > topdist_sobreilustrador ){
            $('#ceta_baixo').attr('href','#passatempo');
            $('#ceta_cima').attr('href','#sobre_escritor');
        }else if( scroll_actual + 200 > topdist_sobreescritor ){
            $('#ceta_baixo').attr('href','#sobre_ilustrador');
            $('#ceta_cima').attr('href','#sobre_livro');
        }else if( scroll_actual + 200 > topdist_sobrelivro ){
            $('#ceta_baixo').attr('href','#sobre_escritor');
            $('#ceta_cima').attr('href','#body_content');
            $('#ceta_cima').fadeIn();
        }else{
            $('#ceta_baixo').attr('href','#sobre_livro');
            $('#ceta_cima').attr('href','');
            $('#ceta_cima').fadeOut();
        }
        
        //-----------------------------------------------------------------
        
        
        
        
        //-----assinalar na barra lateral de navegação do sobre a subseccao visivel-----        
        if( scroll_actual + 300 > topdist_sobreilustrador ){
            $('.sobre_nav img').eq(2).attr('src','imagens/SeccaoIlustradorActivo.png');
            $('.sobre_nav img').eq(1).attr('src','imagens/SeccaoEscritor.png');
            $('.sobre_nav img').eq(0).attr('src','imagens/SeccaoLivro.png');
        }else if( scroll_actual + 300 > topdist_sobreescritor ){
            $('.sobre_nav img').eq(1).attr('src','imagens/SeccaoEscritorActivo.png');
            $('.sobre_nav img').eq(0).attr('src','imagens/SeccaoLivro.png');
            $('.sobre_nav img').eq(2).attr('src','imagens/SeccaoIlustrador.png');
        }else{
            $('.sobre_nav img').eq(0).attr('src','imagens/SeccaoLivroActivo.png');
            $('.sobre_nav img').eq(2).attr('src','imagens/SeccaoIlustrador.png');
            $('.sobre_nav img').eq(1).attr('src','imagens/SeccaoEscritor.png');
        }
        
        
        //-----assinalar na barra lateral de navegação do destaque a subseccao visivel-----
        if( scroll_actual + 300 > topdist_imprensa ){
            $('.destaques_nav img').eq(2).attr('src','imagens/SeccaoImprensaActivo.png');
            $('.destaques_nav img').eq(1).attr('src','imagens/SeccaoEvento.png');
            $('.destaques_nav img').eq(0).attr('src','imagens/SeccaoPassatempo.png');
        }else if( scroll_actual + 300 > topdist_eventos ){
            $('.destaques_nav img').eq(1).attr('src','imagens/SeccaoEventoActivo.png');
            $('.destaques_nav img').eq(0).attr('src','imagens/SeccaoPassatempo.png');
            $('.destaques_nav img').eq(2).attr('src','imagens/SeccaoImprensa.png');
        }else{
            $('.destaques_nav img').eq(0).attr('src','imagens/SeccaoPassatempoActivo.png');
            $('.destaques_nav img').eq(2).attr('src','imagens/SeccaoImprensa.png');
            $('.destaques_nav img').eq(1).attr('src','imagens/SeccaoEvento.png');
        }
        
        
        
        //------------------mover a barra lateral de navegação do sobre------------------
        if( scroll_actual + altura_menu > topdist_sobreilustrador ){
            $('.sobre_nav').css('top', dist_ilustrador2sobre );
        }else if(  scroll_actual + altura_menu > topdist_sobrelivro ){
            $('.sobre_nav').css('top', scroll_actual - (topdist_sobrelivro - dist_livroslide2sobre - altura_menu) );
        }else{
            $('.sobre_nav').css('top',/*'110px'*/'6.875em');
        }
        
        
        //------------------mover a barra lateral de navegação do destaques------------------
        if( scroll_actual + altura_menu > topdist_imprensa ){
            $('.destaques_nav').css('top', dist_imprensacontent2destaques );
        }else if(  scroll_actual + altura_menu > topdist_passatempo ){
            $('.destaques_nav').css('top', scroll_actual - (topdist_passatempo - dist_passatemposlide2destaques - altura_menu) );
        }else{
            $('.destaques_nav').css('top',/*'110px'*/'6.875em');
        }
        
        
        
        
        //------------------------fexar menu mobile--------------------
        $('.menuescondido_mobile').slideUp();
        
        
        
        
        //--------------------efeito de paralax no background-------------------
        $('#background_content').css('top',-scroll_actual*0.27);

        
        
        //---------------------fechar o footer com o scroll------------------------
        if(largura_janela > 805 ){
            $('#foot_content').slideUp(400);
            $('.botaoindic1').removeClass('botaoindic1click_anim');
            $('.botaoindic2').removeClass('botaoindic2click_anim');
        }
        
    });
    //-----------------fim navegação--------------------
    
    
    
    
    
    //------------------------slideshows do sobre------------------------------
    
    
    
    
    //-----------------slideshow livro---------------
    
    $('.livrobotoes .botao_slide2').click(function (){
        clearInterval(intervalolivro);
        
        var livroi_actual = $('.livrobotoes .botao_active_slide2').index();
        var livroi_proximo = $(this).index();
  
        $('.livrobotoes .botao_slide2').removeClass('botao_active_slide2');
        $(this).addClass('botao_active_slide2');

        $('.livroslide').eq(livroi_actual).fadeOut(0);
        $('.livroslide').eq(livroi_proximo).fadeIn(0);   
    });      
        
    $('.livroslide .slide2_img').click(function (){     
        clearInterval(intervalolivro);
        rotate_slidelivro();
    });
    
    //--------------fim slideshow livro---------------
    
    
    
    
    //-----------------slideshow escritor---------------
    $('.escritorbotoes .botao_slide2').click(function(){
        clearInterval(intervaloescritor);
        
        var escritori_actual = $('.escritorbotoes .botao_active_slide2').index();
        var escritori_proximo = $(this).index();
        
        $('.escritorbotoes .botao_slide2').removeClass('botao_active_slide2');
        $(this).addClass('botao_active_slide2');
        
        $('.escritorslide').eq(escritori_actual).fadeOut(0);
        $('.escritorslide').eq(escritori_proximo).fadeIn(0);
    });
    
    $('.escritorslide .slide2_img').click(function (){     
        clearInterval(intervaloescritor);
        rotate_slideescritor();
    });
    
    //--------------fim slideshow escritor---------------
    
    
    
    
    //-----------------slideshow ilustrador---------------
    
    $('.ilustradorbotoes .botao_slide2').click(function(){
        clearInterval(intervaloilustrador);
        
        var ilustradori_actual = $('.ilustradorbotoes .botao_active_slide2').index();
        var ilustradori_proximo = $(this).index();
        
        $('.ilustradorbotoes .botao_slide2').removeClass('botao_active_slide2');
        $(this).addClass('botao_active_slide2');
        
        $('.ilustradorslide').eq(ilustradori_actual).fadeOut(0);
        $('.ilustradorslide').eq(ilustradori_proximo).fadeIn(0);
    });
    
    $('.ilustradorslide .slide2_img').click(function (){     
        clearInterval(intervaloilustrador);
        rotate_slideilustrador();
    });
    
    //--------------fim slideshow ilustrador---------------
    
    
    
    
    
    //----esconder menu mobile quando aumenta-se o tamanho da janela------
    $(window).resize(function(){
        if(largura_janela > 805 ){
            $('.menuescondido_mobile').css('display','none');
        }
    })
    
    
    
    
    //--------mostrar e esconder video do youtube-----------
    $('#artigo_youtube').click(function(){
        $('#youtube_video').fadeIn();
    })
    $('#youtube_video, #fexar_video').click(function(){
        $('#youtube_video').css('display','none');
    })
    
    
    
    
    //-------------------footer--------------------

    $('#footbotao').click(function(){
        $('#foot_content').slideToggle(400);
        $('.botaoindic1').toggleClass('botaoindic1click_anim');
        $('.botaoindic2').toggleClass('botaoindic2click_anim');
    });
    //------------------fim footer------------------
    
});
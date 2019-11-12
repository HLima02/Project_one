// Função para entrar menu
$(function(){
	$('#botao-menu').bind('click', function(){
		$('#nav-menu').fadeIn();
	})
})

// Fnção para fechar menu
$(function(){
	$('#fechar-nav').bind('click', function(){
		$('#nav-menu').fadeOut();
	})
})

// Fnção para elemetos scrool
$(function(){
	AOS.init({
		disable: window.innerWidth < 600
	});
})
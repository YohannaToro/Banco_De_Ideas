//Votos
$(document).on("click", ".votos", function () {
     var lik = $(this).data('id');
     
     $(".modal-body #lik").val( lik );

});

$("#ModalVoto").on('shown.bs.modal', function(){
	$("#votos_form\\:lik").val($("#lik").val());

});

$('td').click(function(){

    var colIndex = $(this).parent().children().index($(this));
    var rowIndex = $(this).parent().parent().children().index($(this).parent());
    if(colIndex == 6){
    	var voto = $("#TablaIni tr:eq("+(rowIndex+1)+") td:last .g").data('id');
    	if(voto==true){
    		$(".ntb").attr('style','background-color: #900; color:white;');
    	}else{
    		$(".ntb").attr('style','background-color: white; color:black;');
    	}
    }
});

$(".ntb").click(function(){
	var estilo = $(".ntb").attr('style');
	var estiloSplit = estilo.split(" ");
	//["background-color:", "#900;", "color:white"]
	if(estiloSplit[1]=='#900;'){
		$(".ntb").attr('style','background-color: white; color:black;');
	}else{
		$(".ntb").attr('style','background-color: #900; color:white;');
	}
	$(".oculto").click();
});

//Mias

$(document).on("click", ".propias", function () {
     var lik = $(this).data('id');     
     $(".modal-body #mias").val( lik );
});

$("#ModalVotoMias").on('shown.bs.modal', function(){
	$("#votosMias_form\\:mias").val($("#mias").val());

});

$('td').click(function(){

    var colIndex = $(this).parent().children().index($(this));
    var rowIndex = $(this).parent().parent().children().index($(this).parent());
    if(colIndex == 6){
    	var voto = $("#TablaIniP tr:eq("+(rowIndex+1)+") td:last .p").data('id');
    	if(voto==true){
    		$(".mias").attr('style','background-color: #900; color:white;');
    	}else{
    		$(".mias").attr('style','background-color: white; color:black;');
    	}
    }
});

$(".mias").click(function(){
	var estilo = $(".mias").attr('style');
	var estiloSplit = estilo.split(" ");
	//["background-color:", "#900;", "color:white"]
	if(estiloSplit[1]=='#900;'){
		$(".mias").attr('style','background-color: white; color:black;');
	}else{
		$(".mias").attr('style','background-color: #900; color:white;');
	}
	$(".escondido").click();
});

//claves

$(document).on("click", ".Palabras", function () {
     var lik = $(this).data('id');     
     $(".modal-body #claves").val( lik );
});

$("#ModalClaves").on('shown.bs.modal', function(){
	$("#votosClaves_form\\:claves").val($("#claves").val());

});

$('td').click(function(){

    var colIndex = $(this).parent().children().index($(this));
    var rowIndex = $(this).parent().parent().children().index($(this).parent());
    if(colIndex == 6){
    	var voto = $("#TablaIniP tr:eq("+(rowIndex+1)+") td:last .c").data('id');
    	if(voto==true){
    		$(".claves").attr('style','background-color: #900; color:white;');
    	}else{
    		$(".claves").attr('style','background-color: white; color:black;');
    	}
    }
});

$(".mias").click(function(){
	var estilo = $(".claves").attr('style');
	var estiloSplit = estilo.split(" ");
	//["background-color:", "#900;", "color:white"]
	if(estiloSplit[1]=='#900;'){
		$(".claves").attr('style','background-color: white; color:black;');
	}else{
		$(".claves").attr('style','background-color: #900; color:white;');
	}
	$(".ocultado").click();
});

//estado

$(document).on("click", ".estados", function () {
     var lik = $(this).data('id');
     
     $(".modal-body #est").val( lik );

});

$("#ModalEstado").on('shown.bs.modal', function(){
	$("#estados_form\\:est").val($("#est").val());

});

$('td').click(function(){

    var colIndex = $(this).parent().children().index($(this));
    var rowIndex = $(this).parent().parent().children().index($(this).parent());
    if(colIndex == 7){
    	var voto = $("#TablaIniE tr:eq("+(rowIndex+1)+") td:last .es").data('id');
    	if(voto==true){
    		$(".etb").attr('style','background-color: #900; color:white;');
    	}else{
    		$(".etb").attr('style','background-color: white; color:black;');
    	}
    }
});

$(".etb").click(function(){	
	var estilo = $(".etb").attr('style');
	var estiloSplit = estilo.split(" ");
	//["background-color:", "#900;", "color:white"]
	if(estiloSplit[1]=='#900;'){
		$(".etb").attr('style','background-color: white; color:black;');
	}else{
		$(".etb").attr('style','background-color: #900; color:white;');
	}
	$(".ocultoe").click();
});

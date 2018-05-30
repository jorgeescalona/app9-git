// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready", function() { //Escuchador de eventos
		$('#izquierda').on("swipeleft", function() { //deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la izquierda", function(){"aplicacion 7", "Ok"}); //aparece mensaje alert
		}); //cierra swipe izquierda
		$('#derecha').on("swiperight", function() { //deslizar derecha
			navigator.notification.confirm("¿Qué quieres hacer?", function(op){ //aparece mensaje para confirmar
				switch(op) //variable op para las acciones
				{
				  case 1:
				  navigator.notification.beep(1);// suena dispositivo
				  break;
				  
				  case 2:
				  navigator.notification.vibrate(3000); //vibra el dispositivo
				  break;
				}
			}, "áplicacion7", "Beepear", "vibrar", "Cancelar");
			});
		},false);
});
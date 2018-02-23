//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo = document.getElementById("largo").value;
	var ancho = document.getElementById("ancho").value;
	var alambre;
	alambre = (largo * 2 + ancho * 2) * 6;
	alert ("La cantidad de alambre que necesita es " +alambre);



	alert("Funciona 3-EntradaSalida");
	
}


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe, iva;
	importe = parseInt (prompt("Ingrese un importe"));
	iva = importe * 1.21;
	document.getElementById("importe").value = iva;

	//alert("Funciona 2-EntradaSalida");
	
}


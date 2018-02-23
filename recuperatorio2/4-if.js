//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var a, b, resultado;
	a = parseInt (prompt ("Ingrese el primer numero: "));
	b = parseInt (prompt("Ingrese el segundo numero: "));

	if (a==b)
	{
		resultado = a * b;
	}
	else
	{
		if (a > b)
		{
			resultado = a - b;
		}
		else
		{
			resultado = a + b;
		}
	}
	document.write ("El resultado es: " +resultado);
	//alert("Funciona 4-if");
	
}


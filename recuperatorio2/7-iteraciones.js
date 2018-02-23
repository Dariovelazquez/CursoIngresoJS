//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota, sexo;
	var i;
	var acum, max, min, cantVarones;
	for (i = 0, i < 6, i ++)
	{
		nota = parseInt(prompt ("Ingrese: "));
		while (nota < 0 || nota > 10)
		{
			nota = parseInt(prompt ("Ingrese: "));
		}
		sexo = prompt("Ingrese: ");
		while (sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M" )
		{
			sexo = prompt("Ingrese: ");
		}
		acum = acum + nota;
		if (i== 0 || nota < min)
		{
			min = nota;
		}
		if(sexo == "m" && nota >= 6)
		{
			cantVarones++;
		}
	}
	alert("Funciona 7-iteraciones");
	
}


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var max, min, importe, i;
	for(i = 0, i < 7, i++)
	{
		importe = parseInt(prompt ("Ingrese el importe: "));
		while(importe <= 0)
		{
			importe = parseInt(prompt ("Ingrese el importe: "));
		}
		if (i== 0)
		{
			max = importe;
			min = importe;
		}
		if (importe > max)
		{
			max = importe;
		}
		if (importe < min)
		{
			min = importe;
		}
	} 
	document.write("El maximo es: "+max +"El minimo es: "+min);

	alert("Funciona 6-iteraciones");
	
}


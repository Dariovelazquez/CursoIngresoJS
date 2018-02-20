function Mostrar()
{

	var numero, flag = 0;
	var min;
	var max;
	var resp = true;
	// declarar variables

	while (resp ==true)
	{
		numero = parseInt (prompt ("Ingrese "));
		if (flag == 0)
		{	
			min = numero;	//Ingresa una sola vez aca, despues flag siempre vale 1
			max = numero;
			flag =1;
		}
		if (numero > max)
		{
			max = numero;
		}
		if (numero < min)
		{
			min = numero;
		}
		resp = confirm("¿Desea Continuar? ");
	}	
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
	


}//FIN DE LA FUNCIÓN
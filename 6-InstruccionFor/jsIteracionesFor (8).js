function Mostrar()
{
	var cantidad = 0;
	var numero = parseInt (prompt ("Ingrese numero "));
	var i;
	for(i = 1; i <= numero ;i++)
	{
		if (numero % i == 0) //Si el resto del numero ingresado da cero
		cantidad++;
	}
		{
			if (cantidad == 2)
			{
				alert ("Es un numero primo");
			}
			else
			{
				alert("No es un numero primo");
			}

		}

}//FIN DE LA FUNCIÓN
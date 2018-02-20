function Mostrar()
{
	var flag = 0;
	var cantNumPar = 0;
	var mensaje = "";
	var valor = parseInt (prompt ("Ingrese numero "));
	var i;
	for(i = 1; i <= valor ;i++)
	{
		if (i % 2 == 0)
		{
			if(flag == 0)
			{
				mensaje = mensaje + i;
				flag = 1;
			}
			else
			{
				mensaje = mensaje + "-" +i; //para hacer los pares
			}
			cantNumPar++;
		} 
	}
	document.write ("Numeros Pares " +mensaje +"</br> La cantidad es "+cantNumPar);


}//FIN DE LA FUNCIÓN
function Mostrar()
{

	var cantDivisores = 0;
	var mensaje = "";
	var valor = parseInt (prompt ("Ingrese numero "));
	var i;
	for(i = 1; i <= valor ;i++)
	{
		if (valor % i == 0) //Si el resto del numero ingresado da cero
		{
			if(i== 1) 				
			{
				mensaje = mensaje + i; // Esto es para quitar el guion delante del primer numero
			}
			else
			{
				mensaje = mensaje + "-" +i; 
			}
			cantDivisores++; //Contador
		} 
	}
	document.write ("Numeros Divisores " +mensaje +"</br> La cantidad es "+	cantDivisores);

}//FIN DE LA FUNCIÓN
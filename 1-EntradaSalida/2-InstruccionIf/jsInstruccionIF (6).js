function Mostrar()
{
	//------VERSION SIMPLE (LA OTRA ES SIN ELSE)----------------//
	var edad;
	edad = document.getElementById ("edad").value; //tomo la edad
	edad = parseInt(edad);
	if (edad >= 18)
	document.write ("Sos mayor de edad. ¡Bienvenido a la legalidad!"); 
	else
	{
		if (edad <=12)
			document.write ("Eres un niño");
		else
			document.write("Sos Adolescente");

	}


}//FIN DE LA FUNCIÓN
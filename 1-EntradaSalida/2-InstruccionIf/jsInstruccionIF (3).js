function Mostrar()
{
	var edad;
	edad = document.getElementById ("edad").value;//tomo la edad
	edad = parseInt(edad);
	if (edad >= 18)
	document.write ("Sos mayor de edad. ¡Bienvenido a la legalidad!");
	else
	document.write("Menor de Edad"); 

}//FIN DE LA FUNCIÓN
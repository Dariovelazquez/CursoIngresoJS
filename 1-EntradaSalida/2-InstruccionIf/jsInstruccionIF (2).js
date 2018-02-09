function Mostrar()
{
	var edad;
	edad = document.getElementById ("edad").value;//tomo la edad
	edad = parseInt(edad);
	if (edad >= 18)
	alert ("Sos mayor de edad. ¡Bienvenido a la legalidad!");  
}//FIN DE LA FUNCIÓN
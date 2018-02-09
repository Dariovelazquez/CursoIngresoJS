function Mostrar()
{ 
	var edad;
	edad = document.getElementById ("edad").value; //tomo la edad
	edad = parseInt(edad);
	if (edad < 13 || edad > 17 )
		document.write ("No sos Adolescente papu");


}//FIN DE LA FUNCIÓN
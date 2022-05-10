function Registrarse (){
    
    let Usuario= document.getElementById("Usuario").value;
    if( Usuario == "")
    {
        alert("Nombre usuario no ingresado");
        hasError = true;
        return false;
    }
    let Nombre= document.getElementById("Nombre").value;
    if( Nombre == "")
    {
        alert("Nombre no ingresado");
        hasError = true;
        return false;
    }
    
    let Apellido = document.getElementById("Apellido").value;
    if( Apellido == "")
    {
        alert("Apellido no ingresado");
        hasError = true;
        return false;
    }
    let Telefono = document.getElementById("Telefono").value;
    if( Telefono == "")
    {
        alert("Telefono no ingresado");
        hasError = true;
        return false;
    }
    let Contraseña1 = document.getElementById("Contraseña1").value;
    let Contraseña2 = document.getElementById("Contraseña2").value;
    if (Contraseña1 != Contraseña2)
    {
        alert("Las claves son distintas");
        hasError = true;
        return false;
    }
    let Correo = document.getElementById("Correo").value;
   {
    var expReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var esValido = expReg.test(Correo); 

    document.location.href="suscribrise.html";


   }}


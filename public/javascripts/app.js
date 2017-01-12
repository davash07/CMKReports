/**
 * Created by devios on 12/01/17.
 */
var attempt = 2; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
    var name = document.getElementById("name").value;
    var encrypted_password = document.getElementById("encrypted_password").value;

    if ( name == "Admin" && encrypted_password == "Admin"){
        alert ("Bienvenido "+ name);
        window.localStorage.setItem('', document.getElementById('name').value);
        window.location = ""; //redirecting to other page
        return false;
    }
    else{
        attempt --;//Decrementing by one
        alert("Tiene  "+attempt+" Intentos Restantes...");

        //Disabling fields after 3 attempts
        if( attempt == 0){
            document.getElementById("name").disabled = true;
            document.getElementById("encrypted_password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
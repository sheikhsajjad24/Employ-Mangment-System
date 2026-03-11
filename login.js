const logform = document.getElementById("loginform");

logform.addEventListener("submit",function(e){

 e.preventDefault();

 const Uname = document.getElementById("userName").value;
 const Upass = document.getElementById("userPasword").value;
 const errorBox = document.getElementById("error");

 if(Uname.length >= 8 && Upass.length >= 6){

    errorBox.textContent = "";
    window.location.href = "loginform.html";

 }else{

    errorBox.textContent = "Username must be 8 characters and password 6 characters";

 }

});
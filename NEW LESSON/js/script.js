// form section hide/show
function register() {
    var x = document.getElementById("form");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// register info section
var ms=[];
 var login={
     email:null,
     password:null
 }
var user = {
    __proto__:login,
    name: null,
    surname:null
}
function registerme(){
    user.name=name.value;
    user.email=email_inp_singup.value;
    user.password=password_inp_singin.value;
    ms.push(user);
}
function login(){
    var email = email_inp_singin.value;
    var pass = password_inp_singin.value;
    let isFinded=false;
    if(email==user.email && pass==user.password.value){
     isFinded=true;
    }else
        {}
if(isFinded)
     alert("user finded");
     else
     alert("user not finded")
}
var _w_ = window
var _d_ = document
var _l_ = location

function ShowPasswordLogin(){
    const PasswordLogin = _d_.getElementById("password");
    const icon = _d_.getElementById("icon");

    if (PasswordLogin.type == "password"){

        PasswordLogin.setAttribute("type","text");
        icon.classList.add("close")

    }else{

        PasswordLogin.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function ShowPasswordRegister(){
    const PasswordRegister = _d_.getElementById("password");
    const icon = _d_.getElementById("icon");

    if (PasswordRegister.type == "password"){

        PasswordRegister.setAttribute("type","text");
        icon.classList.add("close")

    }else{

        PasswordRegister.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function register(){

    const email = _d_.getElementById("email").value;
    const username = _d_.getElementById("username").value;
    const password = _d_.getElementById("password").value;

    const usuario = _d_.getElementById("email").value.substring(0, _d_.getElementById("email").value.indexOf("@"));
    const dominio = _d_.getElementById("email").value.substring(_d_.getElementById("email").value.indexOf("@")+ 1, _d_.getElementById("email").value.length);

    if(password.length < 6){
        _d_.getElementById("invalid").innerHTML="A senha precisa ter pelo menos 6 (seis) caracteres.";
    }else if(password == username){
        _d_.getElementById("invalid").innerHTML="A senha não pode ser igual ao nome de usúario.";
    }else if(username.length < 4){
        _d_.getElementById("invalid").innerHTML="O nome de usuário precisa ter pelo menos 4 (quatro) caracteres.";
    }else if(usuario.length >=1 && dominio.length >=3 && usuario.search("@")==-1 && dominio.search("@")==-1 && usuario.search(" ")==-1 && dominio.search(" ")==-1 && dominio.search(".")!=-1 && dominio.indexOf(".") >=1 && dominio.lastIndexOf(".") < dominio.length - 1){
        const setemail = localStorage.setItem("email", _d_.getElementById("email").value);
        const setpassword = localStorage.setItem("password", _d_.getElementById("password").value);
        const setusername = localStorage.setItem("username", _d_.getElementById("username").value);
        
        alert("Cadastro efetuado com sucesso.")

        _w_._l_.href = "../index.html"


    }else{
        _d_.getElementById("invalid").innerHTML="Email inválido. O email deve conter (@ e .).";
    }

}

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username")
    
    const emailget = _d_.getElementById("email").value;
    const passwordget = _d_.getElementById("password").value;
    
    if(emailget == email || emailget == username && passwordget == password){
        _w_._l_.href = "sucesslogin/index.html"
    }else{
        _d_.getElementById("invalid").innerHTML="Usúario ou senha inválido.";
    }

}

function Admin(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    _w_._l_.href = "Admin/index.html"

}

function AdminRegister(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    _w_._l_.href = "../Admin/index.html"

}

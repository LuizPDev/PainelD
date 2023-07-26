let __ = document
let ___ = getElementById
let ____ = if
let _____ = else

function ShowPasswordLogin(){
    const PasswordLogin = __.___("password");
    const icon = __.___("icon");

    ____ (PasswordLogin.type == "password"){

        PasswordLogin.setAttribute("type","text");
        icon.classList.add("close")

    }_____{

        PasswordLogin.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function ShowPasswordRegister(){
    const PasswordRegister = __.___("password");
    const icon = __.___("icon");

    ____ (PasswordRegister.type == "password"){

        PasswordRegister.setAttribute("type","text");
        icon.classList.add("close")

    }_____{

        PasswordRegister.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function register(){

    const email = __.___("email").value;
    const username = __.___("username").value;
    const password = __.___("password").value;

    const usuario = __.___("email").value.substring(0, __.___("email").value.indexOf("@"));
    const dominio = __.___("email").value.substring(__.___("email").value.indexOf("@")+ 1, __.___("email").value.length);

    ____(password.length < 6){
        __.___("invalid").innerHTML="A senha precisa ter pelo menos 6 (seis) caracteres.";
    }_____ ____(password == username){
        __.___("invalid").innerHTML="A senha não pode ser igual ao nome de usúario.";
    }_____ ____(username.length < 4){
        __.___("invalid").innerHTML="O nome de usuário precisa ter pelo menos 4 (quatro) caracteres.";
    }_____ ____(usuario.length >=1 && dominio.length >=3 && usuario.search("@")==-1 && dominio.search("@")==-1 && usuario.search(" ")==-1 && dominio.search(" ")==-1 && dominio.search(".")!=-1 && dominio.indexOf(".") >=1 && dominio.lastIndexOf(".") < dominio.length - 1){
        const setemail = localStorage.setItem("email", __.___("email").value);
        const setpassword = localStorage.setItem("password", __.___("password").value);
        const setusername = localStorage.setItem("username", __.___("username").value);
        
        alert("Cadastro efetuado com sucesso.")

        window.location.href = "../index.html"


    }_____{
        __.___("invalid").innerHTML="Email inválido. O email deve conter (@ e .).";
    }

}

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username")
    
    const emailget = __.___("email").value;
    const passwordget = __.___("password").value;
    
    ____(emailget == email || emailget == username && passwordget == password){
        window.location.href = "sucesslogin/home.html"
    }_____{
        __.___("invalid").innerHTML="Usúario ou senha inválido.";
    }

}

function Admin(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    window.location.href = "Admin/index.html"

}

function AdminRegister(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    window.location.href = "../Admin/index.html"

}

function ShowPasswordLogin(){
    const PasswordLogin = document.getElementById("password");
    const icon = document.getElementById("icon");

    if (PasswordLogin.type == "password"){

        PasswordLogin.setAttribute("type","text");
        icon.classList.add("close")

    }else{

        PasswordLogin.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function ShowPasswordRegister(){
    const PasswordRegister = document.getElementById("password");
    const icon = document.getElementById("icon");

    if (PasswordRegister.type == "password"){

        PasswordRegister.setAttribute("type","text");
        icon.classList.add("close")

    }else{

        PasswordRegister.setAttribute("type","password");
        icon.classList.remove("close")

    }

}

function register(){

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuario = document.getElementById("email").value.substring(0, document.getElementById("email").value.indexOf("@"));
    const dominio = document.getElementById("email").value.substring(document.getElementById("email").value.indexOf("@")+ 1, document.getElementById("email").value.length);

    if(password.length < 6){
        document.getElementById("invalid").innerHTML="A senha precisa ter pelo menos 6 (seis) caracteres.";
    }else if(password == username){
        document.getElementById("invalid").innerHTML="A senha não pode ser igual ao nome de usúario.";
    }else if(username.length < 4){
        document.getElementById("invalid").innerHTML="O nome de usuário precisa ter pelo menos 4 (quatro) caracteres.";
    }else if(usuario.length >=1 && dominio.length >=3 && usuario.search("@")==-1 && dominio.search("@")==-1 && usuario.search(" ")==-1 && dominio.search(" ")==-1 && dominio.search(".")!=-1 && dominio.indexOf(".") >=1 && dominio.lastIndexOf(".") < dominio.length - 1){
        const setemail = localStorage.setItem("email", document.getElementById("email").value);
        const setpassword = localStorage.setItem("password", document.getElementById("password").value);
        const setusername = localStorage.setItem("username", document.getElementById("username").value);
        
        alert("Cadastro efetuado com sucesso.")

        window.location.href = "../main.html"


    }else{
        document.getElementById("invalid").innerHTML="Email inválido. O email deve conter (@ e .).";
    }

}

function login(){
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username")
    
    const emailget = document.getElementById("email").value;
    const passwordget = document.getElementById("password").value;
    
    if(emailget == email || emailget == username && passwordget == password){
        window.location.href = "sucesslogin/home.html"
    }else{
        document.getElementById("invalid").innerHTML="Usúario ou senha inválido.";
    }

}

function Admin(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    window.location.href = "admin/admin.html"

}

function AdminRegister(){

    alert("ATENÇÃO!! Você está sendo redirecionado a uma pagina restrita para COO / CEO.\n\nATTENTION!! You are being directed to a COO / CEO restricted page.\n\n¡¡ATENCIÓN!! Está siendo dirigido a una página restringida de COO/CEO.\n\nATTENTION!! Vous êtes dirigé vers une page restreinte COO / CEO.\n\n注意力！！您將被引導至 COO / CEO 受限頁面。")

    window.location.href = "../admin/admin.html"

}

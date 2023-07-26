function SignUp(){

    window.location.href = "../register/index.html"

}

function LoginIn(){

    window.location.href = "../index.html"

}

function InsertCode(){

    code = prompt("!DOKK! INSERT CODE: ")

    if (code === "DokkCd2023!DOKK!-3,353116721993093e-5" || code === "rafaelégayevotounolula1313"){

        window.location.href="../sucesslogin/index.html"

    }else{

        window.location.href="userblocked.html"

    }

}
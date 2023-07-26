function sucess() {

    if (document.getElementById("Stats").value == "liberar" || document.getElementById("Stats").value == "LIBERAR" || document.getElementById("Stats").value == "Liberar") {
        
        document.getElementById("tdIp").innerHTML = document.getElementById("AttackIp").value;

        if (document.getElementById('PortCheck').checked) { 

            document.getElementById("tdPort").innerHTML = "80";   
            
        } else {

            document.getElementById("tdPort").innerHTML = document.getElementById("AttackPort").value;   

        }
        
        if (document.getElementById('TypeCheck').checked) { 

            document.getElementById("tdType").innerHTML = "Dokk - Dns";   
            
        } else {

            document.getElementById("tdType").innerHTML = "Dokk - " + document.getElementById("AttackType").value;    

        }

        
        document.getElementById("tdSt").innerHTML = "Liberado por CONSOLE"

        if (document.getElementById("Seconds").value == "CODE=LZADMIN") { 

            document.getElementById("tdSec").innerHTML = "INFINITY > ADMIN";   

        }else if (document.getElementById('SecondsCheck').checked) { 

            document.getElementById("tdSec").innerHTML = "120";   
            
        } else {

            document.getElementById("tdSec").innerHTML = "" + document.getElementById("Seconds").value;   

        }



        alert("Attack Liberado inicie seu CMD!")

    } else { 

        alert("Attack recusado por favor insira o Stats!")

    }


}



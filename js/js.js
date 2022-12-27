


     function required(){
        var email = document.getElementById("Email").value;
        var password = document.getElementById("password").value;
    
        if(email == ""){
            document.getElementById("required1").innerHTML = "Field is required";
            document.getElementById("Email").style.borderColor = "red";
        }
        else
        {
            document.getElementById("required1").innerHTML = "";
            document.getElementById("Email").style.borderColor = "black";
        }
        if(password == "")
        {
            document.getElementById("required2").innerHTML = "Field is required";
            document.getElementById("password").style.borderColor = "red";
        }
        else
        {
            document.getElementById("required2").innerHTML = "";
            document.getElementById("password").style.borderColor = "black";
        }
    
        if(password != "" && email != ""){
            window.location = '../task-main/Contact Information.html';
        }
        
    }
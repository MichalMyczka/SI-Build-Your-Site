function success() {
	 if(document.getElementById("text").value==="" || document.getElementById("name").value==="" || document.getElementById("email").value==="") { 
            document.getElementById('button').disabled = true; 
        } else { 
            document.getElementById('button').disabled = false;
        }
    }
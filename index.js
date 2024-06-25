
    function validateEmail(input) {

    let emailInput = document.getElementById("email-input");
    let errorMsg = document.getElementById("error-msg");
    let errImg = document.getElementById("err-img")

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

        if (emailInput.value.match(validRegex)) {
        emailform.submit();
        return true;        
    } else {
        errorMsg.textContent = "Please provide a valid email";
        emailInput.style.border= "2px solid red";
        errImg.style.display = "block";
        return false;
    }
     }

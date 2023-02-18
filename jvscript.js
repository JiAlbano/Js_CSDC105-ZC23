function button() {
    resetMessages();

    var validPassword = validatePassword();
    var validAge = validateBirthday();

    if (validPassword && validAge) {
        document.getElementById('successmsg').innerHTML = "Hooray! Your account has been successfully created.";
    }
}

function validatePassword() {
    var password = document.myform.password.value;

    if (password.length < 8) {
        document.getElementById('errormsg1').innerHTML = "Password must be at least 8 characters.";
        return false;
    }

    return true;
}

function validateBirthday() {
    var bdayVal = document.myform.bday.value;
    var bdayDate = new Date(bdayVal);

    if (isNaN(bdayDate)) {
        document.getElementById('errormsg2').innerHTML = "Please enter your date of birth.";
        return false;
    }
    
    if (getAge(bdayDate) < 21) {
        document.getElementById('errormsg2').innerHTML = "Minors are not allowed!";
        return false;
    }

    return true;
}

function getAge(bday) {
    today = new Date();
    todayYear = today.getFullYear();
    bdayYear = bday.getFullYear();

    return todayYear - bdayYear;
}

function resetMessages() {
    document.getElementById('errormsg1').innerHTML = "";
    document.getElementById('errormsg2').innerHTML = "";
    document.getElementById('successmsg').innerHTML = "";
}

function red(){
    document.getElementById('errormsg2').style.color="red";
}
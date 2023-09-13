function confirmPassword(){
    var password = document.querySelector('#password');
    var confirmPassword = document.querySelector('#passwordConfirm');

    console.log(password.value)
    console.log(confirmPassword.value)

    if(password.value === ""){
        password.setCustomValidity("Please enter password before confirming!");
        return;
    }
    if(password.value !== confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords do not match!");
        return;
    }
}
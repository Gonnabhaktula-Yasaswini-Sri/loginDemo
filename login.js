//to perform action
//we need to write one function
function validateForm()
{
    //request data gathering logic
    var uname = document.loginform.username.value;
    var pwd = document.loginform.password.value;
    // document.write(uname+" "+pwd);
    //form validation logic
    if(uname == "admin")
    {
        alert("Please enter username");
        return false;
    }
    if(pwd == "admin")
    {
        alert("Please enter password");
        return false;
    }
    return true;
}

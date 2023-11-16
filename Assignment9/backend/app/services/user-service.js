//validations
const validateEmail = (mail)  =>
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }

  return (false)
}

const validatePassword = (password) => { 
  var regexPassword=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if(password.match(regexPassword)) 
  { 
    return true;
  } else { 
    return false;
  }
}
const validateFullName = (fullname)  =>
{

  if (/^[a-zA-Z]+( [a-zA-Z]+)*$/i.test(fullname)) {
    return (true)
  }

  return (false)
}


module.exports = { validateEmail, validatePassword, validateFullName };
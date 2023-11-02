$(document).ready(function() {

    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^([\w\.]+)@northeastern\.edu$/;
    const regexPass = /^[a-zA-Z0-9\s]+$/;

    let isUserNameInValid = true,  isEmailInValid = true, isPasswordInValid = true, isConfirmPasswordInValid = true;
    // enableSubmitButton();
    
    $('#emailId').on('input', function () {
        const value = $(this).val();
        if(value === '' || value.length < 18 ||  !regExEmail.test(value))  {
            console.log(value);
            display('emailId', true);
            isEmailInValid = true;
        } else {
            display('emailId', false);
            isEmailInValid = false;
        }
        console.log(isUserNameInValid);
        enableSubmitButton();
    });

    $('#userName').on('input', function () {
        const value = $(this).val();
        if(value === '' || value.length < 1 || !regExName.test(value)) {
            console.log(value);
            display('userName', true);
            isUserNameInValid = true;
        } else {
            display('userName', false);
            isUserNameInValid = false;
        }
        console.log(isUserNameInValid);
        enableSubmitButton();
    });

    $('#password').on('input', function () {
        const value = $(this).val();
        if(value === '' ||  value.length < 5 || value.length>20 || !value.trim().match(regexPass)) {
            display('password', true);
            isPasswordInValid = true;
        } else {
            display('password', false);
            isPasswordInValid = false;
        }
        
    });

    $('#confirmPassword').on('input', function () {
        const value = $(this).val();
        const password = $('#password').val();
        if( value === '' || value != $('#password').val()){
            display('confirmPassword', true);
            isConfirmPasswordInValid = true;
        } else{
            display('confirmPassword', false);
            isConfirmPasswordInValid = false;
        }
        enableSubmitButton();
    });
    

    const display = (elementName, isInValid) => {
        if (isInValid) {
            console.log("inside Display");
          $(`#error_${elementName}`).show();
          $(`input[name="${elementName}"]`).css("border", "2px solid red");
        } else {
          $(`#error_${elementName}`).hide();
          $(`input[name="${elementName}"]`).css("border", "");
        }
        // enableSubmitButton();
    };

    function enableSubmitButton() {
        console.log("inside enable");
        console.log(isUserNameInValid || isEmailInValid || isPasswordInValid || isConfirmPasswordInValid);
        if (isUserNameInValid || isEmailInValid || isPasswordInValid || isConfirmPasswordInValid) {
            $('input[name="submit"]').prop('disabled', true);
        } else {
            $('input[name="submit"]').prop('disabled', false);
        }
    };
    
    $("#myForm").on("submit", function(e) {
        e.preventDefault(); // Prevent the default form submission
    });

    
});


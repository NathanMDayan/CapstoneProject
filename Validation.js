"use strict";

const  $ = selector => document.querySelector(selector);

const processEntries = () => {

    // getting the form control in order to check for validity
    const email = $("#email1");
    const password = $("#password1");
    

    // creating a validation, in order to make sure the user is inputting the information and to validate that everything is ok
    let isValid = true;

    if (email.value == ""){

        email.nextElementSibling.textContent = "This field is required.";
        isValid = false;

    }
    else{
        email.nextElementSibling.textContent = "";

        if(IsValidEmail(email.value) == false){

            email.nextElementSibling.textContent = "Invalid Email";
            isValid = false;
        }
        else{
    
            email.nextElementSibling.textContent = "";
        }
    }

    

    if (password.value == ""){

        password.nextElementSibling.textContent = "This field is required.";
        isValid = false;
        

    }
    else{
        password.nextElementSibling.textContent = "";
    }

   


    // once everything was validated and all is good, this allows the user to go on and get the form submitted to be brought to the next page.
    if (isValid == true){

        $("form").submit();
    }
    else{

        $("form").preventDefault();
    }
};

document.addEventListener("DOMContentLoaded", () =>{

    $("#Sign-in").addEventListener("click", processEntries);
    $("#email1").focus()

});
import React from "react";

export default function validation(input) {
    const emailRegExp = /\S+@\S+\.\S+/;
    const regexNum = /\d+/;
    const errors= {}
    if(!input.email.length) errors.email = 'Enter an email'
    if(input.email.length>35) errors.email ='The email cannot be longer than 35 characters'
    if(!emailRegExp.test(input.email)) errors.email ='Invalid email'
    if(input.password.length <6 || input.password.length > 10 ) errors.password = 'Password must be between 6 and 10 numbers'
    if(!regexNum.test(input.password)) errors.password = 'Password must have at least 1 number'
    return errors
}



import React from "react";

export default function validation(input) {
    const emailRegExp = /\S+@\S+\.\S+/;
    const regexNum = /\d+/;
    const errors= {}
    if(!input.email.length) errors.email = 'Ingrese un email'
    if(input.email.length>35) errors.email ='El mail no puede tener más de 35 carácteres'
    if(!emailRegExp.test(input.email)) errors.email ='Email inválido'
    if(input.password.length <6 || input.password.length > 10 ) errors.password = 'El password debe ser entre 6 y 10 números'
    if(!regexNum.test(input.password)) errors.password = 'El password debe tener al menos 1 número'
    return errors
}

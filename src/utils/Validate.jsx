import React from 'react'

export const CheckValidData = (name,email,password,number) => {
 
const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);   
const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
const isNumberValid = /^\d{10}$/.test(number);

if(!isNameValid) return "Name is Invalid";
if(!isEmailValid) return "Email is Invalid";
if(!isPasswordValid) return "Password is Invalid";
if(!isNumberValid) return "Phone Number is Invalid";



return null;
}


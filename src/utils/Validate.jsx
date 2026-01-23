import React from 'react'

export const CheckValidData = (email,password) => {
 
const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

if(!isEmailValid) return "Email is Invalid";
if(!isPasswordValid) return "Password is Invalid";

return null;
}


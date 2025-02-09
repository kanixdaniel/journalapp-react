export const regExp = {
    fullName: /^(?:[A-Za-z]+)(?:\s[A-Za-z]+){1,2}(?:\s(?:[A-Za-z]+(?:[-'\s][A-Za-z]+)*))?$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
}

export const errorMessages = {
    fullName: 'Ingrese un nombre válido',
    email: 'Ingrese un email válido',
    password: 'La contraseña debe ser de al menos 8 caracteres con una mayúscula, una minúscula, un número y un carácter especial'
}
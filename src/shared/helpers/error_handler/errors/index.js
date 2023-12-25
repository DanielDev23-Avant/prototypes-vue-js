/**
 * @constant {object} Catálogo de mensajes de error.
 */
export const repositoryErrors = {
    boolean        : `F01: El campo debe ser falso o verdadero`,
    email          : `F02: El correo electrónico no cumple el formato válido`,
    empty          : `F03: El campo es requerido`,
    number         : `F04: El campo no cumple el formato válido`,
    string         : `F05: El campo no cumple el formato válido`,
    maxLength      : `F06: El campo excede los caracteres permitidos`,
    minLength      : `F07: El campo es demasiado corto`,
    rangeDates     : `F08: La 'fecha final' no puede ser anterior a la 'fecha inicial'`,
    password       : `F09: La contraseña no cumple el formato válido`,
    confirmPassword: `F10: La confirmación no coincide con la contraseña inicial`,
};
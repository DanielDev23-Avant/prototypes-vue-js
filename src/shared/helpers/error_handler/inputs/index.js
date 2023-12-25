//* --> Importaciones
import { repositoryErrors as error } from '../errors';
import { repositoryRules as rule } from '@/shared/utils';

/**
 * Verifica las reglas de validación del campo "ConfirmPassword".
 * 
 * @param {string} confirmPassword - Confirmación de Contraseña a validar.
 */
const inputConfirmPassword = ( confirmPassword, password ) => {
    if ( rule.isEmpty(confirmPassword) ) return error.empty;
    if ( rule.isString(confirmPassword) ) return error.string;
    if ( rule.isConfirmPassword(confirmPassword, password) ) return error.confirmPassword;
}

/**
 * Verifica las reglas de validación del campo "ConfirmPassword".
 * 
 * @param {string} confirmPassword - Confirmación de Contraseña a validar.
 */
const inputCreatePassword = ( password ) => {
    if ( rule.isEmpty(password) ) return error.empty;
    if ( rule.isString(password) ) return error.string;
    if ( rule.isPassword(password) ) return error.password;
    if ( rule.minLength(password, 8) ) return error.minLength;
}

/**
 * Verifica las reglas de validación del campo "Email".
 * 
 * @param {string} email - Correo electrónico a validar.
 */
const inputEmail = ( email ) => {
    if ( rule.isEmpty(email) ) return error.empty;
    if ( rule.isString(email) ) return error.string;
    if ( rule.isEmail(email) ) return error.email;
}

/**
 * Verifica las reglas de validación del campo "Password".
 * 
 * @param {string} password - Contraseña a validar.
 */
const inputPassword = ( password ) => {
    if ( rule.isEmpty(password) ) return error.empty;
    if ( rule.isString(password) ) return error.string;
}

/**
 * Verifica las reglas de validación del campo "Nombre de Usuario".
 * 
 * @param {string} username Nombre de Usuario a validar.
 */
const inputUsername = ( username ) => {
    if ( rule.isEmpty(username) ) return error.empty;
    if ( rule.isString(username) ) return error.string;
    if ( rule.maxLength(username, 30) ) return error.maxLength;
    if ( rule.minLength(username, 3) ) return error.minLength;
}

export {
    inputConfirmPassword,
    inputCreatePassword,
    inputEmail,
    inputPassword,
    inputUsername,
}
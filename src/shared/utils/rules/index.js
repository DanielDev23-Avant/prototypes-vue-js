//* --> Importación de utilidades
import * as regex from '../regex';
import { rangeDatesRule } from './custom';

//? --> Desestructuración de expresiones regulares
const { repositoryRegex, repositoryRegexDates } = regex;
const { REGEX_EMAIL, REGEX_PASSWORD } = repositoryRegex;

/**
 * Verifica si un valor es falso o verdadero.
 * 
 * @param {boolean} value - Valor a verificar.
 * 
 * @returns 'true' si el valor es diferente, 'false' todo lo contrario.
 */
const isBoolean = ( value ) => typeof value !== 'boolean';

/**
 * Verifica si la confirmación de contraseña coincide con la contraseña inicial.
 * 
 * @param {string} confirmPassword - Confirmación de Contraseña a verificar.
 * @param {string} password - Contraseña a verificar.
 * 
 * @returns 'true' si el valor es diferente, 'false' todo lo contrario.
 */
const isConfirmPassword = ( confirmPassword, password ) => confirmPassword !== password;

/**
 * Formato de Fecha.
 * @typedef {'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYYY-MM-DD'} FormatDate
 */

/**
 * Verifica si el valor es una fecha válida.
 * 
 * @param {string} date - Fecha a verificar.
 * @param {FormatDate} format - Formato a comparar.
 * 
 * @returns 'false' sino cumple con el formato de fecha, 'true' todo lo contrario.
 */
const isDate = ( date, format ) => !repositoryRegexDates[format].test( date );

/**
 * Verifica si cumple con el formato de correo electrónico.
 * 
 * @param {string} email - Correo Electrónico a verificar.
 * 
 * @returns 'false' sino cumple con el formato, 'true' todo lo contrario.
 */
const isEmail = ( email ) => !REGEX_EMAIL.test( email );

/**
 * Verifica si el valor es vacío.
 * 
 * @param {string} value - Valor a verificar.
 * 
 * @returns 'true' si es vacío, 'false' todo lo contrario.
 */
const isEmpty = ( value ) => value === '';

/**
 * Verifica si el valor es numérico.
 * 
 * @param {number} value - Valor a verificar.
 * 
 * @returns 'true' sino es un valor númerico, 'false' todo lo contrario.
 */
const isNumber = ( value ) => typeof value !== 'number';

/**
 * Verifica si cumple con el formato de una contraseña.
 * 
 * @param {string} password - Contraseña a verificar.
 * 
 * @returns 'false' sino cumple con el formato, 'true' todo lo contrario.
 */
const isPassword = ( password ) => !REGEX_PASSWORD.test( password );

/**
 * Verifica si el valor es cadena de texto.
 * 
 * @param {string} value - Valor a verificar.
 * 
 * @returns 'true' sino es un valor cadena de texto, 'false' todo lo contrario.
 */
const isString = ( value ) => typeof value !== 'string';

/**
 * Verifica si el valor cumple con la longitud máxima permitida.
 * 
 * @param {string|number} value - Valor a verificar.
 * @param {*} limit - Limite a comparar.
 * 
 * @returns 'true', si excede el máximo de caracteres, 'flase' todo lo contrario.
 */
const maxLength = ( value, limit ) => String(value).length > limit;

/**
 * Verifica si el valor cumple con la longitud mínima permitida.
 * 
 * @param {string|number} value - Valor a verificar.
 * @param {*} limit - Limite a comparar.
 * 
 * @returns 'true', si excede el máximo de caracteres, 'flase' todo lo contrario.
 */
const minLength = ( value, limit ) => String(value).length < limit;

/**
 * Verifica si la Fecha Final es anterior a la Fecha Inicial.
 * 
 * @param {string} startDate - Fecha inicial a evaluar.
 * @param {*} endDate - Fecha final a evaluar.
 * 
 * @returns 'false' si la fecha final es anterior a la fecha inicial, 'true' todo lo contrario.
 */
const rangeDates = ( startDate, endDate ) => rangeDatesRule( startDate, endDate );

export {
    isBoolean,
    isConfirmPassword,
    isDate,
    isEmail,
    isEmpty,
    isNumber,
    isPassword,
    isString,
    maxLength,
    minLength,
    rangeDates,
}
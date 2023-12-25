/**
 * @constant {object} Catálogo de expresiones regulares.
 */
export const repositoryRegex = {
    'REGEX_EMAIL': /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    'REGEX_INT': /^[0-9]+$/,
    'REGEX_PASSWORD': /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\-\!\@\#\$\%\^\&\*\(\)\_\+\=])){8,}/
};

/**
 * @constant {object} Catálogo de expresiones regulares para validar fechas.
 */
export const repositoryRegexDates = {
    'DD-MM-YYYY': /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    'MM-DD-YYYY': /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/,
    'YYYY-MM-DD': /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
}
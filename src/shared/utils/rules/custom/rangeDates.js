/**
 * Verifica si existe un rango de fechas a ejecutar.
 * 
 * @param {string} startDate - Fecha inicial a evalúar.
 * @param {string} endDate - Fecha final a evalúar.
 * 
 * @returns 'false' si la fecha final es anterior a la fecha inicial, 'true' todo lo contrario.
 */
export const rangeDatesRule = ( startDate, endDate ) => {

    /**
     * @type {number} Representación de fecha inicial en milisegundos.
     */
    const startDateMilliseconds = Date.parse( startDate );

    /**
     * @type {number} Representación de fecha final en milisegundos. 
     */
    const endDateMilliseconds = Date.parse( endDate );

    if ( endDateMilliseconds < startDateMilliseconds ) return false;

    return true;

}
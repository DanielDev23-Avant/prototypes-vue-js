/**
 * Personaliza el nombre de la pestaña según la sección correspondiente.
 * 
 * @param {object} router - Router de la aplicación.
 */
export const setTitlePage = ( router ) => {

    router.beforeEach(( to, from, next ) => {
        document.title = to.meta.title;
        next();
    });

}
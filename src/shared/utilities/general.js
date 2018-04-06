/**
 *
 * Toggle the current value in the array
 *
 * @param Array
 * @param Object { id: {required | number}}
 *
 * @returns Array
 */
export const toggleValueFromArray = ( _Object , payload ) => {

    // Check if object.id exist on array
    const itemIndex = _Object.findIndex( item => item.id === payload.id );

    if ( itemIndex >= 0 ) {
        // Item Found, remove from array
        _Object.splice( itemIndex, 1 );
    } else {
        // Item not found, push to array
        _Object.push( payload );
    }

    return _Object;
};
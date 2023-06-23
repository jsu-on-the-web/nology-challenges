// Given two valid numbers, return the the area of a rectangle with the values
/** 
 * What could go wrong?
 * 1. Invalid parameters
 *    Make sure that the values are positive, n < 0 -> throw an error
 * 2. Parameters are not numbers
 *    Make sure that the values are numbers, typeof n !== 'number'  -> throw an error
 * 3. User doesn't pass all the parameters
 *    The user should pass both a width and height. If only one parameter is passed -> throw an error
*/

//Non TDD approach
export const rectangleArea = (width, height) => {

    if (height === undefined || width === undefined) {
        throw new Error("One or more parameters are missing");
    }

    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error("Width and height must be numbers");
    }

    if (height < 0 || width < 0) {
        throw new Error("Height and width must be greater than zero");
    }

    return height * width;
}
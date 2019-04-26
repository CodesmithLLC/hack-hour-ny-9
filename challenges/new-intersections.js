/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y) {
    // helper function to create a new array from the minimum and maximum values of an existing array
    function min_max(array) {
        if (!array.length) return array;
        let min = array[0];
        let max = array[0];
        for (let i = 1; i < array.length; i += 1) {
            if (array[i] < min) min = array[i];
            if (array[i] > max) max = array[i];
        }
        return [min, max];
    }

    const x_coords = {};
    const y_coords = {};

    let intersections = 0;

    // Iterate through the array and for each X coordinate, collect its Y coordinate in an array
    // IF an X coordinate is seen again, push its Y coordinate to the array
    for (let i = 0; i < x_array.length; i += 1) {
        const x = x_array[i];
        if (x in x_coords) x_coords[x].push(y_array[i]);
        else x_coords[x] = [y_array[i]];
    }

    // Iterate through the array and for each Y coordinate, collect its X coordinate in an array
    // IF a Y coordinate is seen again, push its X coordinate to the array
    for (let i = 0; i < y_array.length; i += 1) {
        const y = y_array[i];
        if (y in y_coords) y_coords[y].push(x_array[i]);
        else y_coords[y] = [x_array[i]];
    }

    // IF an X coordinate has only ONE Y coordinate, it can't make a line, delete it.
    // ELSE, create a new array from the X coordinates min and max Y coordinates.
    //    This is now the X coordinate's YRANGE.
    for (let x in x_coords) {
        if (x_coords[x].length < 2) delete x_coords[x];
        else x_coords[x] = min_max(x_coords[x]);
    }

    // IF a Y coordinate has only ONE X coordinate, it can't make a line, delete it.
    // ELSE, create a new array from the Y coordinate's min and max X coordinates. 
    //    This is now the Y coordinate's XRANGE.
    for (let y in y_coords) {
        if (y_coords[y].length < 2) delete y_coords[y];
        else y_coords[y] = min_max(y_coords[y]);
    }

    //  IF a X coordinate is within a Y coordinate's XRANGE and the Y coordinate is in the X coordinates YRANGE there is an intersection!
    for (let x in x_coords) {
        const [x_min, x_max] = x_coords[x]; // array destructuring to get the first and second elements from an array
        for (let y in y_coords) {
            const [y_min, y_max] = y_coords[y];
            if (x > y_min
                && x < y_max
                && y > x_min
                && y < x_max
            ) intersections += 1;
        }
    }

    return intersections;
}

module.exports = newIntersections;

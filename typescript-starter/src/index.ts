console.log( 'interfaces are not transpiled directly from Typescript to JS' );

interface IGeopoint {
    xCoordinate: number;
    yCoordinate: number;
    magicPlaceholderNumber?: number;  // Trying the 'optional' feature.
}

/**
* Implements the above interface but doesn't implement 
* its optional attribute 'magicPlaceholderNumber'.
*/
class GeopointWithDate implements IGeopoint {
    xCoordinate: number;
    yCoordinate: number;
    date?: string;  // Optional parameter of this class

    constructor ( xCoordinate: number, yCoordinate: number, date?: string ) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
    }

    get coordinates () {
        return ( `Description of Coordinates for this point:\
                \nX coordinate: ${this.xCoordinate}.\
                \nY coordinate: ${this.yCoordinate}.` );
    }
}

const geoWithDate = new GeopointWithDate ( 5, 7 );
console.log ( geoWithDate.coordinates );

console.log( 'Did you see that? o.O' );

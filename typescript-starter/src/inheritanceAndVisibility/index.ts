class Point {
    x: number;  // Instance Variables
    y: number;

    constructor ( x: number, y: number ) {  // Constructor
        this.x = x;  
        this.y = y;
    }
    
    add ( point: Point ): Point {  // Method
        return new Point( this.x + point.x, this.y + point.y );
    }
}

const p1 = new Point (10, 5);
const p2 = new Point (1, 7);
const p3 = p1.add(p2);

console.log( p3 );


class Point3D extends Point {
    private z: number;

    constructor ( x: number, y: number, z: number ) {
        super( x, y );
        this.z = z;
    }

    add ( point: Point3D ): Point3D {
        const sumPoint2D = super.add( point );
        return new Point3D ( sumPoint2D.x, sumPoint2D.y, this.z + point.z );
    }

    static get fooga(): string {
        return 'Foooogaaaa!!!';
    }

    get fooga(): string {
        return 'Foooogaaaa!!!';
    }
}


const point3D_One = new Point3D ( 1, 2, 3 );
const point3D_Two = new Point3D ( 3, 5, 1 );

console.log( point3D_One.add( point3D_Two ) );

console.log( Point3D.fooga );
console.log( point3D_One.fooga );


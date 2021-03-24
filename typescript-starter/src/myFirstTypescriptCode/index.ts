const fooModule = require( './foo' );
fooModule.sayHello()
console.log("Hi World!", )


class B {
    at1 : number;
    at2 : string;
    constructor (at1 : number, at2: string) {
        this.at1 = at1;
        this.at2 = at2;
    }   

    public get fullAtts () {
        return `${this.at2}___${this.at1}`
    }
}

class Bchild extends B {
    boolAt : boolean;

    constructor (at1: number, at2: string, boolAt: boolean) {
       super(at1, at2); 
       this.boolAt = boolAt;

       
    }

    get fullFull() {
        return `${ this.fullAtts } +++ ${this.boolAt}`
    }
}

//const a = new B(20, 'jaja')
//console.log( a.at1 )
//console.log( a.fullAtts )

const b = new Bchild( 1, 'foo', true );
console.log( b.fullFull )

//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// @ts-check

/**
 * Transpose an array
 * 
 * @param {Readonly<any[][]>} rows
 * @returns any[][]
 */

function transpose( rows ) {

    return rows[ 0 ].map( ( _, i ) => {

        return rows.map( ( row ) => {

            return row[ i ]

        })

    })

}

export class Matrix {

    constructor( input ) {

        this.data = input.split( '\n' ).map( ( row ) => row.split( ' ' ).map( Number ) )

    }

    get rows() {

        return this.data;

    }

    get columns() {

        return transpose( this.rows );

    }

}
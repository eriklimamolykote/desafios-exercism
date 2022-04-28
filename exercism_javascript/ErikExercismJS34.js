//
// This is only a SKELETON file for the 'Linked List' exercise. 
// It's been provided as a convenience to get you started writing code faster.
//

const Factory = () => {

    const o = {};
    let head, tail;

    o.push = v => {

        if ( !head ) {

            head = { v };
            tail = head;

        }

        else {

            tail.next = { v, previous : tail };
            tail = tail.next;

        }

    };

    o.pop = () => {

        const v = tail.v;

        if ( tail.previous ) tail.previous.next = undefined;

        tail = tail.previous ;
        
        if ( !tail ) head = undefined;

        return v;

    };

    o.unshift = v => {

        if ( !head ) {

            head = { v };
            tail = head;

        } else {

            head.previous = { v, next : head };
            head = head.previous;

        }

    };

    o.shift = () => {

        const v = head.v;

        if ( head.next ) head.next.previous = undefined;

        head = head.next;

        if ( !head ) tail = undefined;

        return v;

    };

    o.count = () => {

        let count = 0;
        let current = head;

        while ( current ) {

            count++;
            current = current.next;

        }

        return count;

    }

    o.delete = v => {

        let current = head;

        while ( current ) {

            if ( current.v === v ) {

                if ( current === head ) head = current.next;

                if ( current === tail ) tail = current.previous;

                if ( current.previous ) current.previous.next = current.next;

                if ( current.next ) current.next.previous = current.previous;

                break;

            }

            current = current.next;

        }

    }

    return o;

}

export class LinkedList {

    constructor() { return Factory(); }

}
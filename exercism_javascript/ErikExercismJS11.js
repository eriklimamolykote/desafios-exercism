// @ts-check

export function createVisitor(name, age, ticketId ) {

    return {

        name,
        age,
        ticketId,

    };

}

export function revokeTicket( visitor ) {

    visitor.ticketId = null;

    return visitor;

}

export function ticketStatus( tickets, ticketId ) {

    const user = tickets[ ticketId ];

    if ( user === undefined ) return 'unknown ticket id';
    else if ( user === null ) return 'not sold';
    else return `sold to ${ user }`;

}

export function simpleTicketStatus( tickets, ticketId ) {

    const user = tickets[ ticketId ];

    if ( user === undefined || user === null ) return 'invalid ticket !!!';
    else return user;

}

export function gtcVersion( visitor ) {

    return visitor?.gtc?.version;
    
}
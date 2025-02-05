function foo(data, crit) {
    
    class Ticket{
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }

    return data.slice()
    .map(x => x.split('|'))
    .map(([d,p,s]) => new Ticket(d, Number(p), s))
    .sort ((a, b) => {
        return typeof a[crit] === 'number' ? a[crit] - b[crit] : a[crit].localeCompare(b[crit]);
    });
}


console.log(foo(['Philadelphia|94.20|available',

    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'],
    
    'destination'));












// Tickets

// Write a program that manages a database of tickets. A ticket has a destination, a price, and a status. 
// Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, representing a sorting criterion. 
// The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, 
// price, or status, depending on the second parameter that your program received. Always sort in ascending order (the default behavior for alphabetical sort). 
// If two tickets compare the same, use order of appearance. See the examples for more information.

// Input
// Your program will receive two parameters - an array of strings and a single string.

// Output
// Return a sorted array of all the tickets that were registered.
 
// Input ['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination' 

// Output [ Ticket { destination: 'Boston', price: 126.20, status: 'departed' }, Ticket { destination: 'New York City', price: 95.99, status: 'available' }, Ticket { destination: 'New York City', price: 95.99, status: 'sold' }, Ticket { destination: 'Philadelphia',

// price: 94.20, status: 'available' } ]

// Input ['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status' 

// Output [ Ticket { destination: 'Philadelphia', price: 94.20, status: 'available' }, Ticket { destination: 'New York City', price: 95.99, status: 'available' }, Ticket { destination: 'Boston', price: 126.20, status: 'departed' }, Ticket { destination: 'New York City', price: 95.99, status: 'sold' } ]
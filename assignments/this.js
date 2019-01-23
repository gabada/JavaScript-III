/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. binding to objects in window or global
* 2. implicit or automatic binding inside a function in an object
* 3. explicit binding which we can control inside a function, need to use call() or apply()
* 4. New bindings when you have constructor functions and this is referng to specific instances or the object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const sudent = {
    name: 'Gill',
    language: 'JavaScript',
    learn: function () {
        return `${this.name} is currently learning ${this.language}`;
    }
}
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
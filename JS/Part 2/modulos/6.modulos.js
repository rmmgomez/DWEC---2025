import * as User  from "./person.class.js";

let p = new User.Person("Peter", 42);
console.log(p.name); // Imprime "Peter"
console.log(User.GUEST_NAME);
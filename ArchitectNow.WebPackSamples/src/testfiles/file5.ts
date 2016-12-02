import { Person } from "./Person";

var p: Person;

p = new Person();

p.nameFirst = "Kevin";
p.nameLast = "Grossnicklaus";

document.write(p.getDisplayName());
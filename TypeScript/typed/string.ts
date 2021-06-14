let Name: string = "Douglas";
let surName: string = "Narváez";

let concatNameOldSchool: string = Name + ' ' + surName;
let concatNameLiteral: string = `${Name} ${surName}`;

console.log(concatNameOldSchool);
console.log(concatNameLiteral.toUpperCase());


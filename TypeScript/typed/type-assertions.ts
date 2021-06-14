let value: any = "it is a string";
let result: number = (<string>value).length;
let result2: number = (value as string).length;
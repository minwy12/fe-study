// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types


interface test {
  (a: number, b: number): number;
  name: string;
}

const tFunction: test = (a, b) => {
  return a + b;
}
tFunction.name = "test";

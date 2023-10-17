// const person: {
//   name: string; // Put key, type pair inside the Ts type notation
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Manually assign a tuple type
// } = {
//   // const person = {
//   // '{}' is a Ts notation for object type
//   name: "Lien",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "  author"], // This is a tuple
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Build out custom enum type
// In the emun `{}`, the fist object will be assign to index 0, and so on.
enum Role {
  ADMIN = 5, // We can set the start number as we want and the rest will auto follow.
  READ_ONLY = 100, // Or we can set specific number for all items
  AUTHOR,
}

const person = {
  name: "Lien",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// Manually assign array type
let favoriteActivities: string[];
favoriteActivities = ["Sport"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// Use the enum to perform identifier check
if (person.role === Role.AUTHOR) {
  console.log("is admin");
}

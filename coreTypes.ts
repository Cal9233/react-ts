enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Cal",
  age: 24,
  hobbies: ["coding", "working out"],
  role: Role.ADMIN,
};

let favoriteActivites: string[];
favoriteActivites = ["Guitar"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

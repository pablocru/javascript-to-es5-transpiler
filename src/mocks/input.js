const person = {
  firstName: "Pablo",
  lastName: "Cru",
  greet() {
    return `Hi, my name is ${this.firstName} ${this.lastName}!`;
  },
};

const { greet } = person;

console.log(greet.call(person));

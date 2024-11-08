
class Animal {
  constructor(species) {
    this._species = species
  }

  get getSpecies() {
    return this._species
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species) // Call the superclass (Animal) constructor
  }

  // Method to log "purr" for Cat
  purr() {
    console.log('purr')
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species) // Call the superclass (Animal) constructor
  }

  // Method to log "woof" for Dog
  bark() {
    console.log('woof')
  }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const pets = [
  { animal: 'Dog', age: 3 },
  { animal: 'Cat', age: 15 },
  { animal: 'Parrot', age: 72 },
  { animal: 'Parrot', age: 20 },
  { animal: 'Fish', age: 4 / 12 },
  { animal: 'Parrot', age: 40 }
]

const allAnimalsAreOlderThanOneMonth = pets.every(pet => pet.age > 1 / 12)
console.log({ allAnimalsAreOlderThanOneMonth })

const allAnimalsAreOlderThanOneYear = pets.every(pet => pet.age > 1)
console.log({ allAnimalsAreOlderThanOneYear })

const allAnimalsAreYoungerThanHundredYears = pets.every(pet => pet.age < 100)
console.log({ allAnimalsAreYoungerThanHundredYears })

const someAnimalsAreOlderThan70Years = pets.some(pet => pet.age > 70)
console.log({ someAnimalsAreOlderThan70Years })

const someAnimalsAreOlderThan80Years = pets.some(pet => pet.age > 80)
console.log({ someAnimalsAreOlderThan80Years })

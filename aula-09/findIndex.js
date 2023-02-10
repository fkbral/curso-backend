const pets = [
  { animal: 'Dog', age: 3 },
  { animal: 'Cat', age: 15 },
  { animal: 'Parrot', age: 72 },
  { animal: 'Parrot', age: 20 },
  { animal: 'Fish', age: 0.2 },
  { animal: 'Parrot', age: 40 }
]

const petIndex = pets.findIndex(pet => pet.animal === 'Parrot')
const findPet = pets.find(pet => pet.animal === 'Parrot')

const lastPetIndex = pets.findLastIndex(pet => pet.animal === 'Parrot')
const findLastPet = pets.findLast(pet => pet.animal === 'Parrot')

console.log({ petIndex })
console.log({ findPet })
console.log({ lastPetIndex })
console.log({ findLastPet })

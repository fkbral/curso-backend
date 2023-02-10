const pets = ['Dog', 'Cat']

// const pluralPets = pets.map(pet => `${pet}s`)
const pluralPets = []
pets.forEach(pet => {
  pluralPets.push(`${pet}s`)
})

console.log(pluralPets)

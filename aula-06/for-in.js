const user = {
  name: 'JoSÉ mARIa SOUSA santos',
  email: 'JOSE.M1@gmail.com',
  age: 23,
  address: 'X Street'
}

// Quando devo usar for...of? Quando for manipular arrays
// Quando devo usar for...in? Quando for manipular objetos

const numeros = [11, 352, 14125]
numeros[200] = 321

// Má prática, evitem ao máximo de utilizar for in com arrays
for (const key in numeros) {
  console.log(numeros[key])
}

for (const key in user) {
  if (key === 'name') {
    const names = user[key].split(' ')
    user[key] = ''

    for (const name of names) {
      const normalizedName = name.toLowerCase()
      const [primeiraLetra, ...restoDoNome] = normalizedName

      user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
      user[key] = user[key].trim()
    }
  }

  if (key === 'email') {
    user[key] = user[key].toLowerCase()
  }
}

console.log(user)

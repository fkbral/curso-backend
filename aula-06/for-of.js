const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56]
const usuarios = ['José', 'Antônia']

// código imperativo
// for (let contador = 0; contador < listaDeNumeros.length; contador += 1) {
//   console.log(listaDeNumeros[contador])
// }

console.log('Print via While \n')
let indiceDoNumero = 0
while (indiceDoNumero < listaDeNumeros.length) {
  console.log(listaDeNumeros[indiceDoNumero])
  indiceDoNumero += 1
}

// código declarativo
console.log('Print via For \n')
for (const numero of listaDeNumeros) {
  console.log(numero)
}

for (const usuario of usuarios) {
  console.log(usuario)
}

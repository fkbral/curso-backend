const deuCerto = !!Math.round(Math.random())
console.log({ deuCerto })

const resultado = new Promise((resolve, reject) => {
  if (deuCerto) {
    resolve(2 + 1)
  }
  reject(new Error('Não foi possível calcular a operação'))
}).then(retorno => {
  console.log(`o cálculo deu ${retorno}`)
})
  .catch(error => console.log('ocorreu um erro'))

console.log(resultado)
console.log('segui o fluxo do programa sem quebrar')

// console.log(resultado)

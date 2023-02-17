new Promise((resolve, reject) => resolve(1))
  .then(result => result + 1)
  .then(result => result + 1)
  .then(result => new Promise((resolve, reject) => resolve(result + 1)))
  .then(result => result + 1)
  .then(result => result + 1)
  .then(result => {
    console.log(`Resultado até o momento é ${result}`)
    return result
  })
  .catch(err => {})
//   .then(result => new Promise((resolve, reject) => reject('deu erro')))
  .then(result => result + 1)
  .then(result => result + 1)
  .then(result => console.log(`Resultado é ${result}`))
  .finally(() => console.log('Sempre executo'))

console.log('código síncrono')

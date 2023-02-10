const cargos = ['Professor', 'Diretor', 'Aluno']
console.log(cargos)

const indiceDoDiretor = cargos.indexOf('Diretor')

cargos.splice(indiceDoDiretor, 1)
// cargos.splice(indiceDoDiretor, 1, 'Diretora')
console.log(cargos)

cargos.push('Membro da Secretaria')

console.log(cargos)

cargos.pop()
console.log(cargos)

cargos.shift()
console.log(cargos)

cargos.unshift('Professor Auxiliar')
console.log(cargos)

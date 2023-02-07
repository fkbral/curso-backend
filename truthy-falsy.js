// true
// truthy: [], {}, número diferente de 0, string não vazia
// falsy: null, undefined, 0, "", NaN

console.log(!![], !!{}, !!1, !!'afasf', true)

if ([] && {} && 1 && 'afasf' && true) {
  console.log('tudo é truthy')
}

console.log(!!null, !!undefined, !!0, !!'', !!NaN)

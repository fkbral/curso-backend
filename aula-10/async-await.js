async function bootstrap () {
  try {
    let result = await new Promise((resolve, reject) => resolve(1))
    result += 1
    result += 1
    result = await new Promise((resolve, reject) => resolve(result + 1))
    result += 1
    result += 1
    try {
      console.log(`Resultado até o momento é ${result}`)
      throw new Error('deu erro')
    } catch (error) {}
    result += 1
    result += 1
    console.log(`Resultado é ${result}`)

    console.log('código síncrono')
  } catch (error) {} finally {
    console.log('Sempre executo')
  }
}

bootstrap()

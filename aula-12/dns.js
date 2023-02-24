const dns = require('node:dns')
const crypto = require('node:crypto')

// dns.resolve4(searchedUrl, (err, addresses) => {
//   if (err) {
//     console.log('url não encontrada')
//     return
//   }

//   console.log(addresses)
// })

async function bootstrap () {
  const searchedUrl = 'google.com'

  console.time('pesquisando url por DNS padrão')
  const addresses = await dns.promises.resolve4(searchedUrl)
  console.timeEnd('pesquisando url por DNS padrão')
  console.log(addresses)
  const nameServers = await dns.promises.resolveNs(searchedUrl)
  console.log(nameServers)

  const ipNs = await dns.promises.resolve4(nameServers[1])

  const resolver = new dns.Resolver()
  resolver.setServers(ipNs)

  console.time('pesquisando url por DNS específico')
  resolver.resolve4(searchedUrl, (error, addresses) => {
    if (error) {
      console.error('Não foi possível encontrar ipv4')
    }
    console.timeEnd('pesquisando url por DNS específico')
    console.log(addresses)
  })
}

bootstrap()

function formatarHora (hora, formatador = {}) {
  if (!formatador || !formatador.formato) {
    return `${hora}:00h`
  }

  if (formatador.formato === 12) {
    const horaFormatada = hora <= 12 ? hora : hora - 12
    return `${horaFormatada}:00${formatador.h ? 'h' : ''}`
  }
}

console.log(formatarHora(18, {}))
console.log(formatarHora(22))
console.log(formatarHora(23, { formato: 12, h: false }))
console.log(formatarHora(10))
console.log(formatarHora(13, { formato: 12, h: true }))

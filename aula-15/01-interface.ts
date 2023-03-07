import { Produto } from "../aula-14/01-oop"

interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface {
    compraRemedioPrescrito: (
        receita: ReceitaInterface, produtosAComprar: string[]
    ) => void
}

class Estabelecimento implements EstabelecimentoInterface {
    protected _filaDeEspera = 10

    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    public retornaNomeDosProdutos(): string[] { 
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if (fila <= 0) {
            return
        }

        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera() {
        if (this._filaDeEspera === 0) {
            return
        }

        this._filaDeEspera -= 1
    }
}

class Farmacia extends Estabelecimento implements FarmaciaInterface  {
    constructor(
        public endereco: string,
        public setor: string,
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome)
        )

        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os remédios em estoque')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto =>  
                !produto.receitaObrigatoria ?  true : 
                receita.remedios.includes(produto.nome)
        )

        console.log({remediosDisponiveis})
        console.log({remediosAutorizados})
    }
    
}

const supermercado = new Estabelecimento(
    'Rua Dos Abacates, 1320 - bloco A', 
    'alimentação', 
    [
        {nome: 'banana', valor: 8},
        {nome: 'beijinho', valor: 2.5},
        {nome: 'carne moída', valor: 20}
    ],
    25
)

const farmaciaDoZe = new Farmacia(
    'Rua X, 1299', 
    'farmaceutico', 
    [
        {nome: 'aspirina', valor: 8},
        {nome: 'creme hidratante', valor: 15},
        {nome: 'remédio controlado 1', valor: 80, receitaObrigatoria: true},
        {nome: 'remédio controlado 2', valor: 60, receitaObrigatoria: true},
        {nome: 'vitamina C', valor: 20},
    ],
)

// não temos acesso diretamente no objeto instanciado a produtos e _filaDeEspera
// supermercado.produtos
// supermercado._filaDeEspera
supermercado.retornaNomeDosProdutos()
farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456-111'
}, ['aspirina', 'remédio controlado 1', 'shampoo'])

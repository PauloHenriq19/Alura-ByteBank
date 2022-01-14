import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    
    // #saldo - proposta para atributos privados - https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    constructor(cliente,agencia){
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        
    }
}
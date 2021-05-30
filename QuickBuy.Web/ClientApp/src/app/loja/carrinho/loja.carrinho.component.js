"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LojaCarrinhoCompras = void 0;
var LojaCarrinhoCompras = /** @class */ (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adicionar = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (!produtoLocaStorage) {
            //se nada existir nada dentro do localStorage
            this.produtos.push(produto);
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
        else {
            //se já existe pelo menos um itenm amarzenado na sessao(localStorage)
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos.push(produto);
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            return JSON.parse(produtoLocaStorage);
            //return this.produtos;
        }
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage) {
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensCarrinhoCompras = function () {
        var itens = this.obterProdutos();
        return (itens.length > 0);
    };
    LojaCarrinhoCompras.prototype.limparCarrinhoCompras = function () {
        localStorage.setItem("produtoLocaStorage", "");
    };
    return LojaCarrinhoCompras;
}());
exports.LojaCarrinhoCompras = LojaCarrinhoCompras;
//# sourceMappingURL=loja.carrinho.component.js.map
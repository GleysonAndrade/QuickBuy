import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (!produtoLocaStorage) {
      //se nada existir nada dentro do localStorage
      this.produtos.push(produto);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    } else {
      //se já existe pelo menos um itenm amarzenado na sessao(localStorage)
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos.push(produto);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }
    localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      return JSON.parse(produtoLocaStorage);
      //return this.produtos;
    }
  }

  public removerProduto(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }
  }
  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocaStorage", JSON.stringify(produtos));
  }
  public temItensCarrinhoCompras(): boolean {
    var itens = this.obterProdutos();
    return (itens.length > 0);
  }

  public limparCarrinhoCompras() {
    localStorage.setItem("produtoLocaStorage", "");
  }

}

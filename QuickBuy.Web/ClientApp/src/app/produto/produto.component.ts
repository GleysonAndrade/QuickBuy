import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
}) 
export class ProdutoComponent implements OnInit {// Nome das classes começando com maíusculo por conta da convenção PascalCase
  /*camelCase para variáveis, atribuitos e nomes das funções*/
  public produto: Produto

  constructor(private produtoServico: ProdutoServico) {

  }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
  }

  public cadastrar() {
    //this.produto
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          
        },
        e => {
          console.log(e.error);
        }
      );
  }
}

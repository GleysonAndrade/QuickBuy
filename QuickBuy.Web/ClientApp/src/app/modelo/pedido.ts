import { ItemPedido } from "./itemPedido";

export class Pedido {

  public id: number;
  public dataPedido: Date;
  public usuarioId: number;
  public dataPrevistaEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public enderecoCompleto: string;
  public formaPagamentoId: number;

  public itensPedido: ItemPedido[];

  constructor() {
    this.dataPedido = new Date();
    this.itensPedido = [];
  }
}

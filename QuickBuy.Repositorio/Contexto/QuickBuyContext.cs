using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContext : DbContext
    {
       
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamentos { get; set; }

        public QuickBuyContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /// Classes de mapeamento aqui...
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData(
                new FormaPagamento() { 
                    Id = 1, Nome = "Boleto",
                    Descricao = "Forma de Pagamento via Boleto"
                },
                 new FormaPagamento()
                 {
                     Id = 2,
                     Nome = "Cartão de Crádito",
                     Descricao = "Forma de Pagamento via Cartão de Crédito"
                 },
                 new FormaPagamento()
                 {
                     Id = 3,
                     Nome = "Cartão de Débito",
                     Descricao = "Forma de Pagamento via Cartão de Débito"
                 },
                 new FormaPagamento()
                 {
                     Id = 4,
                     Nome = "Transferencacia",
                     Descricao = "Forma de Pagamento via Transferencia Bancaria, enviar um email com o comprovante"
                 },
                 new FormaPagamento()
                 {
                     Id = 5,
                     Nome = "PIX",
                     Descricao = "Forma de Pagamento via PIX, enviar um email com o comprovante"
                 });

            base.OnModelCreating(modelBuilder);
        }
    }
}

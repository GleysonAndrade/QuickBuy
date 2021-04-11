using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class CargaFormaPagamento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormaPagamentos",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[,]
                {
                    { 1, "Forma de Pagamento via Boleto", "Boleto" },
                    { 2, "Forma de Pagamento via Cartão de Crédito", "Cartão de Crádito" },
                    { 3, "Forma de Pagamento via Cartão de Débito", "Cartão de Débito" },
                    { 4, "Forma de Pagamento via Transferencia Bancaria, enviar um email com o comprovante", "Transferencacia" },
                    { 5, "Forma de Pagamento via PIX, enviar um email com o comprovante", "PIX" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormaPagamentos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FormaPagamentos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FormaPagamentos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FormaPagamentos",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FormaPagamentos",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}

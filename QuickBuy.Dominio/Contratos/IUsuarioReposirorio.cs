using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Contratos
{
    public interface IUsuarioReposirorio : IBaseRepositorio<Usuario>
    {
       Usuario Obter(string email, string senha);
    }
}

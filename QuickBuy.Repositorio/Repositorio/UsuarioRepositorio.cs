using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorio
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioReposirorio
    {
        public UsuarioRepositorio(QuickBuyContext quickBuyContext) : base(quickBuyContext)
        {

        }

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha) ;
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContext.Usuarios.FirstOrDefault(u => u.Email == email);
        }
    }
}

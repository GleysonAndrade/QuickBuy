using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;

namespace QuickBuy.Repositorio.Repositorio
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly QuickBuyContext QuickBuyContext

        public BaseRepositorio(QuickBuyContext quickBuyContext)
        {
            QuickBuyContext = quickBuyContext;
        }

        public void Adicionar(TEntity entity)
        {
            QuickBuyContext.Set<TEntity>().Add(entity);
            QuickBuyContext.SaveChances();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuyContext.Set<TEntity>().Update(entity)
            QuickBuyContext.SaveChances();
        }

        public IEnumerable<TEntity> OberTodos()
        {
            return QuickBuyContext.Set<TEntity>(),ToList();
        }

        public TEntity ObterPorId(int id)
        {
            return QuickBuyContext.Set<TEntity>().Find(id);
        }

        public void Remover(TEntity entity)
        {
            QuickBuyContext.Remover(entity);
            QuickBuyContext.SaveChances();
        }

        public void Dispose()
        {
            QuickBuyContext.Dispose();
        }
    }
}

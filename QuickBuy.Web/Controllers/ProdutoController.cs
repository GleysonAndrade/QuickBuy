using System;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.OberTodos());
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                var produto = new Produto();
                produto.Nome = "";
                _produtoRepositorio.Adicionar(produto);
                return Created("api/", produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
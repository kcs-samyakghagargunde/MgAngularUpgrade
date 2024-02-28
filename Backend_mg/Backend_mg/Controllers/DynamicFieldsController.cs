using Backend_mg.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend_mg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DynamicFieldsController : ControllerBase
    {
        private readonly DbCotext _context;

        public DynamicFieldsController(DbCotext context)
        {
            _context = context;
        }

        // GET: all Data
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dynamic_input_types>>> GetContactInformation()
        {
            return await _context.dynamic_input_types.ToListAsync();
        }

        
    }
}

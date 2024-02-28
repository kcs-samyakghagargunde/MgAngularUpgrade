using Backend_mg.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace Backend_mg.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly DbCotext _context;

        public ContactController(DbCotext context)
        {
            _context = context;
        }

        // GET: all Data
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactInformation>>> GetContactInformation()
        {
            return await _context.ContactInformation.Where(contact => contact.IsDeleted == false).ToListAsync();
        }

        // GET: api/ContactInformation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactInformation>> GetContactInformation(int id)
        {
            var contactInformation = await _context.ContactInformation.FindAsync(id);

            if (contactInformation == null)
            {
                return NotFound();
            }

            return contactInformation;
        }

        // POST: api/ContactInformation  -- create data 
        [HttpPost]
        public async Task<ActionResult<ContactInformation>> PostContactInformation(ContactInformation contactInformation)
        {
            try
            {
                int id = 0;
                contactInformation.IsDeleted = false;
                DateTime dateTime= DateTime.Now;
                contactInformation.CreatedOn=dateTime;
                _context.ContactInformation.Add(contactInformation);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetContactInformation), new { id = id }, contactInformation);
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.Error.WriteLine(ex);
                return StatusCode(500, "Internal Server Error");
            }
        }

        // PUT: api/ContactInformation/5 -- edit data
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactInformation(int id, ContactInformation contactInformation)
        {
            if (id != contactInformation.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactInformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/ContactInformation/5  //delete data
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactInformation(int id)
        {
            var contactInformation = await _context.ContactInformation.FindAsync(id);

            if (contactInformation == null)
            {
                return NotFound();
            }

            _context.ContactInformation.Remove(contactInformation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactInformationExists(int id)
        {
            return _context.ContactInformation.Any(e => e.Id == id);
        }
    }
}

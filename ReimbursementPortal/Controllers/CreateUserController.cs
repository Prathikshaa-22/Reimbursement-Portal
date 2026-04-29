using Microsoft.AspNetCore.Mvc;
using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.Models;
using BCrypt.Net;

namespace ReimbursementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CreateUserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CreateUserController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
        {
           
            if (string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password))
                return BadRequest("Email and Password are required");

            
            var exists = _context.Users.Any(x => x.Email == user.Email);
            if (exists)
                return BadRequest("User already exists");

       
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            
            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new
            {
                message = "User created successfully",
                userId = user.Id
            });
        }
    }
}

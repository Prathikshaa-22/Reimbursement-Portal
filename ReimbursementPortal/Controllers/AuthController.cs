using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.Models;
using BCrypt.Net;

namespace ReimbursementPortal.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpPost("login")]
        public IActionResult Login([FromBody] Login loginDto)  
        {
            if (string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Password))
                return BadRequest("Email and password required");

            var user = _context.Users.FirstOrDefault(u => u.Email == loginDto.Email);

            if (user == null)
                return BadRequest("User not found");

            bool isValid = BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password);

            if (!isValid)
                return BadRequest("Invalid password");

            return Ok(new
            {
                message = "Login successful",
                user = new
                {
                    id = user.Id,
                    name = user.Name,
                    email = user.Email,
                    role = user.Role,
                    managerName = "" // optional
                }
            });
        }

    }
}


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReimbursementPortal.Properties.Models;
using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.DTOs;

//using ReimbursementPortal.Domain.Entities;

using ReimbursementPortal.Properties.Services;
using System.Security.Claims;

namespace ReimbursementPortal.API.Controllers
{
   

    [ApiController]
    [Route("api/[controller]")]
    public class ClaimController : ControllerBase
    {
        private readonly ClaimService _service;

        public ClaimController(ClaimService service)
        {
            _service = service;
        }

        
        [HttpPost("create")]
        public IActionResult Create([FromForm] CreateClaimDto dto)
        {
            _service.CreateClaim(dto);
            return Ok(new { message = "Claim created" });
        }

   
        [HttpGet("getall")]
        public IActionResult GetAll(int userId)
        {
            var data = _service.GetClaims(userId);
            return Ok(data);
        }

        
        //[HttpPut("update")]
        //public IActionResult Update(UpdateClaimDto dto)
        //{
        //    var result = _service.UpdateClaim(dto);
        //    return Ok(result);
        //}
    }

}
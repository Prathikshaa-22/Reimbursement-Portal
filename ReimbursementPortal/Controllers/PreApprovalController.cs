using Microsoft.AspNetCore.Mvc;
using ReimbursementPortal.Properties.DTOs;
using ReimbursementPortal.Properties.Services;

namespace ReimbursementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PreApprovalController : ControllerBase
    {
        private readonly PreApprovalService _service;

        public PreApprovalController(PreApprovalService service)
        {
            _service = service;
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody] PreApprovalDto dto)
        {
            var result = _service.Create(dto);

            return Ok(new { message = result });
        }


        [HttpGet("getall")]
        public IActionResult GetAll(int userId)
        {
            var data = _service.GetAll(userId);
            return Ok(data);
        }

   
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _service.GetById(id);
            return Ok(data);
        }

  

    }
}

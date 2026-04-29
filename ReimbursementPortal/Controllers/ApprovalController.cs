using Microsoft.AspNetCore.Mvc;
using ReimbursementPortal.Properties.DTOs;
using ReimbursementPortal.Properties.Services;



namespace ReimbursementPortal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApprovalController : ControllerBase
    {
        private readonly ApprovalService _service;

   
        public ApprovalController(ApprovalService service)
        {
            _service = service;
        }

      
        [HttpGet("pending")]
        public IActionResult GetPending(int managerId)
        {
            var data = _service.GetPendingClaims(managerId);
            return Ok(data);
        }

        
        [HttpGet("claim-by-id")]
        public IActionResult GetClaimById(int claimId)
        {
            var data = _service.GetClaimById(claimId);

            if (data == null)
                return NotFound("Claim not found");

            return Ok(data);
        }

  
        [HttpPost("action")]
        public IActionResult TakeAction([FromBody] ApprovalDto dto)
        {
            if (dto == null)
                return BadRequest("Invalid request");

            var result = _service.TakeAction(dto);

            return Ok(new
            {
                message = result
            });
        }

      
        [HttpGet("history-by-manager")]
        public IActionResult GetHistoryByManager(int managerId)
        {
            var data = _service.GetHistoryByManager(managerId);
            return Ok(data);
        }

      
        [HttpGet("history")]
        public IActionResult GetHistory(int claimId)
        {
            var data = _service.GetHistory(claimId);
            return Ok(data);
        }

        
        [HttpGet("pre-pending")]
        public IActionResult GetPrePending(int managerId)
        {
            var data = _service.GetPrePending(managerId);
            return Ok(data);
        }

     
        [HttpGet("pre-by-id")]
        public IActionResult GetPreById(int id)
        {
            var data = _service.GetPreById(id);
            return Ok(data);
        }

        
        [HttpPost("pre-action")]
        public IActionResult TakePreAction([FromBody] ApprovalDto dto)
        {
            var result = _service.TakePreAction(dto);
            return Ok(new { message = result });
        }

    }
}

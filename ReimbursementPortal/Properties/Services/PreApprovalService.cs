using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.DTOs;
using ReimbursementPortal.Properties.Models;
 
namespace ReimbursementPortal.Properties.Services
{
    public class PreApprovalService
    {
        private readonly ApplicationDbContext _context;
 
        public PreApprovalService(ApplicationDbContext context)
        {
            _context = context;
        }
 
       
        public string Create(PreApprovalDto dto)
        {
            var pre = new PreApproval
            {
                UserId = dto.UserId,
                Title = dto.Title,
                Category = dto.Category,
                EstimatedAmount = dto.EstimatedAmount,
                Justification = dto.Justification,
                PlannedDate = dto.PlannedDate,
 
            
                Status = "Pending",
                createdDate = DateTime.Now
            };
 
            _context.PreApprovals.Add(pre);
            _context.SaveChanges();
 
            return "Pre-approval created successfully";
        }
 
     
        public List<PreApproval> GetAll(int userId)
        {
            return _context.PreApprovals
                .Where(p => p.UserId == userId) 
                .OrderByDescending(p => p.createdDate ?? DateTime.MinValue) 
                .ToList();
        }
 
     
        public PreApproval? GetById(int id)
        {
            return _context.PreApprovals
                .FirstOrDefault(p => p.PreApprovalId == id);
        }

    }
}
 
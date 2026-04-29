 
using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.DTOs;
using ReimbursementPortal.Properties.Models;

namespace ReimbursementPortal.Properties.Services
{
    public class ApprovalService
    {
        private readonly ApplicationDbContext _context;

        public ApprovalService(ApplicationDbContext context)
        {
            _context = context;
        }

      
        public List<object> GetPendingClaims(int managerId)
        {
            return (from c in _context.Claims
                    join u in _context.Users on c.UserId equals u.Id
                    where c.Status == "Submitted" && u.ManagerId == managerId
                    orderby c.CreatedDate descending
                    select new
                    {
                        c.ClaimId,
                        c.ClaimTitle,
                        c.Category,
                        c.ExpenseDate,
                        c.TotalAmount,
                        c.Description,
                        c.Status,
                        c.UserId,

                        EmployeeName = u.Name ?? ("User-" + c.UserId)
                    }).ToList<object>();
        }

      
        public object? GetClaimById(int claimId)
        {
            return (from c in _context.Claims
                    join u in _context.Users on c.UserId equals u.Id
                    where c.ClaimId == claimId
                    select new
                    {
                        c.ClaimId,
                        c.ClaimTitle,
                        c.Category,
                        c.ExpenseDate,
                        c.TotalAmount,
                        c.Description,
                        c.Status,
                        c.UserId,

           
                        EmployeeName = u.Name ?? ("User-" + c.UserId)
                    }).FirstOrDefault();
        }

        public string TakeAction(ApprovalDto dto)
        {
            var claim = _context.Claims.FirstOrDefault(c => c.ClaimId == dto.ClaimId);

            if (claim == null)
                return "Claim not found";

            if (dto.Action != "Approved" && dto.Action != "Rejected")
                return "Invalid action";

   
            claim.Status = dto.Action;

            var approval = new ClaimApproval
            {
                ClaimId = dto.ClaimId,
                ManagerId = dto.ManagerId,
                Action = dto.Action,
                Comment = dto.Comment,
                ActionDate = DateTime.Now
            };

            _context.ClaimApprovals.Add(approval);
            _context.SaveChanges();

            return $"Claim {dto.Action} successfully";
        }

  
        public List<ClaimApproval> GetHistory(int claimId)
        {
            return _context.ClaimApprovals
                .Where(a => a.ClaimId == claimId)
                .OrderByDescending(a => a.ActionDate)
                .ToList();
        }

        
        public List<object> GetHistoryByManager(int managerId)
        {
            return (from c in _context.Claims
                    join u in _context.Users on c.UserId equals u.Id
                    where u.ManagerId == managerId &&
                          (c.Status == "Approved" || c.Status == "Rejected")
                    orderby c.CreatedDate descending
                    select new
                    {
                        c.ClaimId,
                        c.ClaimTitle,
                        c.Status,
                        c.UserId,

                        EmployeeName = u.Name ?? ("User-" + c.UserId)
                    }).ToList<object>();
        }


        public List<object> GetPrePending(int managerId)
        {
            return (from p in _context.PreApprovals
                    join u in _context.Users on p.UserId equals u.Id
                    where u.ManagerId == managerId && p.Status == "Pending"
                    orderby p.PlannedDate descending
                    select new
                    {
                        p.PreApprovalId,
                        p.Title,
                        p.PlannedDate,
                        p.EstimatedAmount,
                        p.Status,
                        p.UserId,

                        EmployeeName = u.Name ?? ("User-" + p.UserId)
                    }).ToList<object>();
        }


        public object? GetPreById(int id)
        {
            return (from p in _context.PreApprovals
                    join u in _context.Users on p.UserId equals u.Id
                    where p.PreApprovalId == id
                    select new
                    {
                        p.PreApprovalId,
                        p.Title,
                        p.PlannedDate,
                        p.EstimatedAmount,
                        p.Status,
                        p.UserId,

                        EmployeeName = u.Name ?? ("User-" + p.UserId)
                    }).FirstOrDefault();
        }


        public string TakePreAction(ApprovalDto dto)
        {
            var pre = _context.PreApprovals
                .FirstOrDefault(p => p.PreApprovalId == dto.ClaimId);

            if (pre == null)
                return "Pre-Approval not found";

            if (dto.Action != "Approved" && dto.Action != "Rejected")
                return "Invalid action";

            pre.Status = dto.Action;

            _context.SaveChanges();

            return $"Pre-Approval {dto.Action} successfully";
        }
    }
}

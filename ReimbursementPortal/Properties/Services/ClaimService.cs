
using ReimbursementPortal.Data;
using ReimbursementPortal.Properties.DTOs;
using ReimbursementPortal.Properties.Models;

namespace ReimbursementPortal.Properties.Services
{
    public class ClaimService
    {
        private readonly ApplicationDbContext _context;

        public ClaimService(ApplicationDbContext context)
        {
            _context = context;
        }

      
        public string CreateClaim(CreateClaimDto dto)
        {
            var claim = new Claims
            {
                UserId = dto.UserId,
                ClaimTitle = dto.ClaimTitle,
                Category = dto.Category,

               
                ExpenseDate = dto.ExpenseDate,
                FromDate = dto.FromDate,
                ToDate = dto.ToDate,

                TotalAmount = dto.TotalAmount,

                Description = dto.Description,
                PaymentMethod = dto.PaymentMethod,

                Status = "Submitted",
                CreatedDate = DateTime.Now
            };

            _context.Claims.Add(claim);
            _context.SaveChanges();

           
            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");

            if (!Directory.Exists(uploadPath))
                Directory.CreateDirectory(uploadPath);

            foreach (var inv in dto.Invoices)
            {
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(inv.File.FileName);

                var invoice = new Invoice
                {
                    ClaimId = claim.ClaimId,
                    FilePath = fileName
                };

                _context.Invoices.Add(invoice);
            }

            _context.SaveChanges();

            return "Claim created successfully";
        }

      
        public List<Claims> GetClaims(int userId)
        {
            return _context.Claims
                .Where(c => c.UserId == userId)
                .OrderByDescending(c => c.CreatedDate)
                .ToList();
        }

     

        //public string UpdateClaim(UpdateClaimDto dto)
        //{
        //    var claim = _context.Claims.FirstOrDefault(c => c.ClaimId == dto.ClaimId);

        //    if (claim == null) return "Not Found";

        //    if (claim.Status != "Submitted")
        //        return "Cannot edit after approval";

        //    claim.ClaimTitle = dto.ClaimTitle;
        //    claim.Category = dto.Category;

   
        //    claim.ExpenseDate = dto.ExpenseDate;
        //    claim.FromDate = dto.FromDate;
        //    claim.ToDate = dto.ToDate;

        //    claim.TotalAmount = dto.TotalAmount;

  
        //    claim.Description = dto.Description;
        //    claim.PaymentMethod = dto.PaymentMethod;

        //    claim.UpdatedDate = DateTime.Now;

        //    _context.SaveChanges();

        //    return "Claim updated successfully";
        //}
    }
}

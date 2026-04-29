using Microsoft.EntityFrameworkCore;
using ReimbursementPortal.Properties.Models;
using System.Security.Claims;

namespace ReimbursementPortal.Data
{
    public class ApplicationDbContext : DbContext

    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
            public DbSet<User> Users { get; set; }
       
            public DbSet<Claims> Claims { get; set; }

       
        public DbSet<Invoice> Invoices { get; set; }

      
        public DbSet<PreApproval> PreApprovals { get; set; }

        public DbSet<ClaimApproval> ClaimApprovals { get; set; }

    }
}

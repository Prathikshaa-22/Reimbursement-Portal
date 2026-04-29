using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReimbursementPortal.Properties.Models
{
    [Table("claimsTb")]
    public class Claims
    {

    
        [Key]
        [Column("claimid")]
        public int ClaimId { get; set; }

        [Column("userId")]
        public int UserId { get; set; }

        [Column("claimTitle")]
        public string ClaimTitle { get; set; } = string.Empty;

        [Column("category")]
        public string Category { get; set; } = string.Empty;

        [Column("expenseDate")]
        public DateTime ExpenseDate { get; set; }

        [Column("totalAmount")]
        public decimal TotalAmount { get; set; }

        [Column("description")]
        public string Description { get; set; } = string.Empty;

        [Column("paymentMethod")]
        public string PaymentMethod { get; set; } = string.Empty;

        [Column("createdDate")]
        public DateTime CreatedDate { get; set; }

        [Column("updatedDate")]
        public DateTime? UpdatedDate { get; set; }

        [Column("status")]
        public string Status { get; set; } = string.Empty;

        [Column("preApprovalId")]
        public int? PreApprovalId { get; set; }

        [Column("fromDate")]
        public DateTime? FromDate { get; set; }
        [Column("toDate")]
        public DateTime? ToDate { get; set; }
    }

}


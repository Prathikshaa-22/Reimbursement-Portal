using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReimbursementPortal.Properties.Models
{
   

    [Table("preapprovalTb")]
    public class PreApproval
    {
        [Key]
        [Column("preapprovalId")]
        public int PreApprovalId { get; set; }

        [Column("userId")]
        public int UserId { get; set; }

        [Column("title")]
        public string Title { get; set; } = string.Empty;

        [Column("category")]
        public string Category { get; set; } = string.Empty;

        [Column("estAmt")]
        public decimal EstimatedAmount { get; set; }

        [Column("justification")]
        public string Justification { get; set; } = string.Empty;
        [Column("status")]
        public string Status {  get; set; } ="pending";

        [Column("plannedDate")]
        public DateTime? PlannedDate { get; set; }
        [Column("createdDate")]

        public DateTime? createdDate {  get; set; }
    }

}


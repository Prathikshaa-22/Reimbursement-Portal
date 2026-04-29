using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReimbursementPortal.Properties.Models;

[Table("approvalTb")]
public class ClaimApproval
{
    [Key]
    [Column("approvalId")]
    public int ApprovalId { get; set; }

    [Column("claimId")]
    public int ClaimId { get; set; }

    [Column("managerId")]
    public int ManagerId { get; set; }

    [Column("action")]
    public string Action { get; set; } = string.Empty;  

    [Column("comment")]
    public string Comment { get; set; } = string.Empty;

    [Column("actionDate")]
    public DateTime ActionDate { get; set; }
}

namespace ReimbursementPortal.Properties.DTOs
{
    public class ApprovalDto
    {
       
        public int ClaimId { get; set; }

        public int ManagerId { get; set; }

        public string Action { get; set; } = string.Empty; 

        public string Comment { get; set; } = string.Empty;
    }
}


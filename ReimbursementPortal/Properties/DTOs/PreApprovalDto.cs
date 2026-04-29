namespace ReimbursementPortal.Properties.DTOs
{
    public class PreApprovalDto
    {
   
        public int UserId { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public decimal EstimatedAmount { get; set; }

        public string Justification { get; set; } = string.Empty;

        public DateTime PlannedDate { get; set; }
    }
}


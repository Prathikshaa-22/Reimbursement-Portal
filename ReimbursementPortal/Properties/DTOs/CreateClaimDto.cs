namespace ReimbursementPortal.Properties.DTOs
{

    public class CreateClaimDto
    {
        public int UserId { get; set; }

        public string ClaimTitle { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public DateTime ExpenseDate { get; set; }
       
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }

        public decimal TotalAmount { get; set; }

        public string Description {  get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = string.Empty;


        public List<InvoiceDto> Invoices { get; set; } = new();
    }

    public class InvoiceDto
    {
        public IFormFile? File { get; set; }

        public string InvoiceNumber { get; set; } = string.Empty;

        public string VendorName { get; set; } = string.Empty;

        public DateTime InvoiceDate { get; set; }

        public decimal InvoiceAmount { get; set; }
    }

}

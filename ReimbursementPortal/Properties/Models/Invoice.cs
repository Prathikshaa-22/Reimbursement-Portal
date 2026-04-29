
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReimbursementPortal.Properties.Models
{
 

    [Table("invoiceTb")]
    public class Invoice
    {
        [Key]
        [Column("invoiceId")]
        public int InvoiceId { get; set; }

        [Column("claimId")]
        public int ClaimId { get; set; }

        [Column("filePath")]
        public string FilePath { get; set; } = string.Empty;

        [Column("invoiceNumber")]
        public string InvoiceNumber { get; set; } = string.Empty;

        [Column("vendorName")]
        public string VendorName { get; set; } = string.Empty;

      
        [Column("invoiceDate")]
        public DateTime InvoiceDate { get; set; }

        // decimal(18,0)
        [Column("invoiceAmount")]
        public decimal InvoiceAmount { get; set; }
    }

}

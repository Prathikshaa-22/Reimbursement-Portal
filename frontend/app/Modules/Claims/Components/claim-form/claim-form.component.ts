import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
import { ClaimService } from '../../Service/claim-form.service';
import { AuthService } from '../../../Auth/Service/login.service';
 
@Component({
  selector: 'app-claim-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './claim-form.html',
  styleUrls: ['./claim-form.css']
})
export class ClaimForm implements OnInit {
 
  claimObj: any = {};
  submitted = false;
 
  constructor(
    private claimService: ClaimService,
    private authService: AuthService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    const user = this.authService.getUser();
 
    this.claimObj = {
      userId: user?.id,
      claimTitle: '',
      category: '',
      fromDate: '',
      toDate: '',
      totalAmount: '',
      description: '',
      paymentMethod: '',
      invoices: [
        {
          invoiceNumber: '',
          vendorName: '',
          invoiceDate: '',
          invoiceAmount: '',
          file: null
        }
      ]
    };
  }
 
  addInvoice() {
    this.claimObj.invoices.push({
      invoiceNumber: '',
      vendorName: '',
      invoiceDate: '',
      invoiceAmount: '',
      file: null
    });
  }
 
  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    this.claimObj.invoices[index].file = file;
  }
 

  isInvalid(field: any): boolean {
    return this.submitted && (!field || field === '');
  }
 
  submitClaim() {
 
    this.submitted = true;
 

    if (
      !this.claimObj.claimTitle ||
      !this.claimObj.category ||
      !this.claimObj.fromDate ||
      !this.claimObj.toDate ||
      !this.claimObj.totalAmount ||
      !this.claimObj.description ||
      !this.claimObj.paymentMethod
    ) {
      return;
    }
 
    if (this.claimObj.fromDate > this.claimObj.toDate) {
      alert("From Date cannot be after To Date");
      return;
    }
 
    const formData = new FormData();
 
    formData.append('UserId', this.claimObj.userId);
    formData.append('ClaimTitle', this.claimObj.claimTitle);
    formData.append('Category', this.claimObj.category);
    formData.append('FromDate', this.claimObj.fromDate);
    formData.append('ToDate', this.claimObj.toDate);
    formData.append('TotalAmount', this.claimObj.totalAmount);
    formData.append('Description', this.claimObj.description);
    formData.append('PaymentMethod', this.claimObj.paymentMethod);
 
    this.claimObj.invoices.forEach((inv: any, i: number) => {
 
      if (!inv.invoiceNumber || !inv.vendorName || !inv.invoiceDate || !inv.invoiceAmount || !inv.file) {
        alert("Fill all invoice fields");
        return;
      }
 
      formData.append(`Invoices[${i}].InvoiceNumber`, inv.invoiceNumber);
      formData.append(`Invoices[${i}].VendorName`, inv.vendorName);
      formData.append(`Invoices[${i}].InvoiceDate`, inv.invoiceDate);
      formData.append(`Invoices[${i}].InvoiceAmount`, inv.invoiceAmount);
      formData.append(`Invoices[${i}].File`, inv.file);
    });
 
    this.claimService.createClaim(formData).subscribe({
      next: () => {
        alert("Claim created successfully");
        this.router.navigate(['/app/claims']); // ✅ redirect
      },
      error: () => {
        alert("Error submitting claim");
      }
    });
  }
}
 

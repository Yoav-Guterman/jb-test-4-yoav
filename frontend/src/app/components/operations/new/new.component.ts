// new.component.ts
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OperationsService } from '../../../services/operations.service';
import { OperationType } from '../../../models/operation/operationType.enum';
import { Draft } from '../../../models/operation/draft.model';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  operationTypes = Object.values(OperationType);
  isLoan = signal(false);

  newForm = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(14)
    ]),
    type: new FormControl(OperationType.DEPOSIT, [
      Validators.required
    ]),
    amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    interest: new FormControl<number | null>(null),
    payments: new FormControl<number | null>(null)
  });

  constructor(
    public operationsService: OperationsService,
    public router: Router
  ) { }

  onTypeChange() {
    const isLoanSelected = this.newForm.get('type')?.value === OperationType.LOAN;
    this.isLoan.set(isLoanSelected);

    // Get references to the form controls
    const interestControl = this.newForm.get('interest');
    const paymentsControl = this.newForm.get('payments');

    if (isLoanSelected) {
      // Add validators if Loan is selected
      interestControl?.setValidators([Validators.required, Validators.min(2), Validators.max(10)]);
      paymentsControl?.setValidators([Validators.required, Validators.min(1), Validators.max(36)]);
    } else {
      // Remove validators if Loan is not selected
      interestControl?.clearValidators();
      paymentsControl?.clearValidators();
    }

    // Update the validation status
    interestControl?.updateValueAndValidity();
    paymentsControl?.updateValueAndValidity();
  }

  async addOperation() {
    if (this.newForm.invalid) return;

    try {
      const formValue = this.newForm.value;

      const draft: Draft = {
        type: formValue.type as OperationType,
        metadata: {
          amount: formValue.amount as number
        },
        accountNumber: formValue.accountNumber as string
      };

      if (this.isLoan()) {
        draft.metadata.interest = formValue.interest as number;
        draft.metadata.payments = formValue.payments as number;
      }

      await this.operationsService.createOperation(draft);
      this.router.navigate(['/list']);
    } catch (e) {
      alert(e);
    }
  }
}
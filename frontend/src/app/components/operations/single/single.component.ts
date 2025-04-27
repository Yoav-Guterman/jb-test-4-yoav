// single.component.ts
import { Component, input } from '@angular/core';
import { Operation } from '../../../models/operation/operation.model';
import { OperationType } from '../../../models/operation/operationType.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single',
  imports: [DatePipe],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  operation = input<Operation>();

  isLoan() {
    return this.operation()?.type === OperationType.LOAN;
  }
}
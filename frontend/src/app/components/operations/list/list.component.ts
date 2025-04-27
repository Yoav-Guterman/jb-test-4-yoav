import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperationsService } from '../../../services/operations.service';
import { Operation } from '../../../models/operation/operation.model';
import { SingleComponent } from "../single/single.component";

@Component({
  selector: 'app-list',
  imports: [ReactiveFormsModule, SingleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  constructor(
    public operationsService: OperationsService,
  ) { }

  operations = signal<Operation[]>([])


  newForm = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(14)
    ])
  })

  async showOperations() {
    if (this.newForm.invalid) return

    try {
      console.log(this.newForm.value.accountNumber as string)
      const accountOperations = await this.operationsService.getOperationsPerAccount(this.newForm.value.accountNumber as string)
      this.operations.set(accountOperations)
      console.log(accountOperations)
    } catch (e) {
      alert(e)
    }
  }
}

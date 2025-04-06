import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from '../models/operation/operation.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/operation/draft.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getOperationsPerAccount(accountNumber: string): Promise<Operation[]> {
    const observable = this.httpClient.get<Operation[]>(`${environment.restServerUrl}/operations/${accountNumber}`)
    const list = firstValueFrom(observable)
    return list
  }

  async createOperation(draft: Draft, accountNumber: string): Promise<Operation> {
    const observable = this.httpClient.post<Operation>(`${environment.restServerUrl}/operations/${accountNumber}`, draft)
    const newWebsite = firstValueFrom(observable)
    return newWebsite
  }
}

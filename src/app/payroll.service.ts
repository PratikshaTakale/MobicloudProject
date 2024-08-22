import { Injectable } from '@angular/core';
import { Payroll } from './payroll';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  
  private payrollData: BehaviorSubject<Payroll[]> = new BehaviorSubject<Payroll[]>([]);

  constructor() {}

  getPayrollData(): Observable<Payroll[]> {
    return this.payrollData.asObservable();
  }

  addPayrollRecord(record: Payroll): void {
    const currentData = this.payrollData.value;
    this.payrollData.next([...currentData, record]);
  }

  deletePayrollRecord(id: number): void {
    const currentData = this.payrollData.value;
    const updatedData = currentData.filter(item => item.id !== id);
    this.payrollData.next(updatedData);
  }

}

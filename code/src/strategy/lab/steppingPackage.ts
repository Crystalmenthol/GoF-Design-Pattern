import { BillingType } from './billingType';

export class SteppingPackage implements BillingType {
  monthlyBill(totalHours: number): number {
    return totalHours;
  }
}

import { BillingType } from './billingType';

export class FixedPackage implements BillingType {
  monthlyBill(_totalHours: number): number {
    return 500;
  }
}

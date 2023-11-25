import { BillingType } from './billingType';

export class UnknownPackage implements BillingType {
  monthlyBill(_totalHours: number): number {
    return 0;
  }
}

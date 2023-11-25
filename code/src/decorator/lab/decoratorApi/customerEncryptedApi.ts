import { Api } from '../api';

export class CustomerEncryptedApi implements Api {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  get(): any {
    const customer = this.api.get();
    return {
      name: `encrypted ${customer.name}`,
      lastName: `encrypted ${customer.lastName}`,
      age: 0,
    };
  }
}

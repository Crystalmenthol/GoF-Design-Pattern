import { Api } from '../api';

export class CustomerWrappedApi implements Api {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  get(): any {
    return {
      status: 'ok',
      customer: this.api.get(),
    };
  }
}

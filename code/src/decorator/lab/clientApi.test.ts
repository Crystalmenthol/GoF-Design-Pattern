import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';
import { CustomerEncryptedApi } from './decoratorApi/customerEncryptedApi';
import { CustomerWrappedApi } from './decoratorApi/customerWrappedApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should build response with wrapped status and data', () => {
    const api = new CustomerApi();
    const wrappedApi = new CustomerWrappedApi(api);

    const res = wrappedApi.get();

    const expectedRes = {
      status: 'ok',
      customer: new Customer('John', 'Doe', 30),
    };
    expect(res).toEqual(expectedRes);
  });

  it('should return response with encrypted customer data', () => {
    const api = new CustomerApi();
    const encryptedApi = new CustomerEncryptedApi(api);

    const res = encryptedApi.get();

    const expectedRes = {
      name: 'encrypted John',
      lastName: 'encrypted Doe',
      age: 0,
    };
    expect(res).toEqual(expectedRes);
  });

  it('should return response with encrypted customer data wrapped with status and data', () => {
    const api = new CustomerApi();
    const encryptedApi = new CustomerEncryptedApi(api);
    const wrappedApi = new CustomerWrappedApi(encryptedApi);

    const res = wrappedApi.get();

    const expected = {
      status: 'ok',
      customer: {
        name: 'encrypted John',
        lastName: 'encrypted Doe',
        age: 0,
      },
    };
    expect(res).toEqual(expected);
  });
});

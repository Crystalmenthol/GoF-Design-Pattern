import { SQLQueryBuilder } from './sqlQueryBuilder';

describe('[Builder -lab] SQL builder', () => {
  it('should build simple SQL query', () => {
    const query = new SQLQueryBuilder();
    const expectedQuery = 'SELECT * FROM users';

    const sql = query.select('*').from('users').build();

    expect(sql).toEqual(expectedQuery);
  });
});

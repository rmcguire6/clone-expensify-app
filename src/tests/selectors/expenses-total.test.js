import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total'

test('should output 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
})
test('should output value of the expense if expenses array has length 1', () => {
  const total = selectExpensesTotal([expenses[2]]);
  expect(total).toEqual(expenses[2].amount);
})
test('should output total if expenses has multiple entries', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toEqual(114195);
})
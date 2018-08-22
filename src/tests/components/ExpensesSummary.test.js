import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('ExpensesSummary should render correctly ', () => {
  const wrapper = shallow(<ExpensesSummary />);
  expect(wrapper).toMatchSnapshot();
});
test('ExpensesSummary should render correctly with one expense  ', () => {
  const expense = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }]
  const wrapper = shallow(<ExpensesSummary expenses={expense} expensesTotal={1.95} />);
  expect(wrapper).toMatchSnapshot();
});
test('ExpensesSummary should render correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesTotal={94.34} />);
  expect(wrapper).toMatchSnapshot();
});

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
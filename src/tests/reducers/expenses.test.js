import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';
import moment from 'moment';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test('should add an expense', () => {
  const newExpense = { description: "new expense", amount: "1234", createdAt: moment().add(1, 'days').valueOf() };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses.concat(newExpense));
});

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { 'note': 'peppermint' }
  };
  const state = expensesReducer(expenses, action);
  const editedExpense = { ...expenses[0], ...action.updates };
  expect(state).toEqual([editedExpense, expenses[1], expenses[2]]);
});
test('should not edit expense if id not found', () => {

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const newExpenses = [{ description: "new expense", amount: "9876", createdAt: moment().add(9, 'days').valueOf() }, { description: "newer expense", amount: "5432", createdAt: moment().add(3, 'days').valueOf() }];
  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpenses);
});
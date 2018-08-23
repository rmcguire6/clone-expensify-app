import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    {props.expenses &&
      <p>Viewing {props.expenses.length}{props.expenses.length === 1 ? ` expense` : ` expenses`} totaling   {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>}
  </div>

)
const mapStoreToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
}
export default connect(mapStoreToProps)(ExpensesSummary);



import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      {props.expenses &&
        <h1 className="page-header__title"> Viewing <span>{props.expenses.length}</span>{props.expenses.length === 1 ? ` expense` : ` expenses`} totaling   <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>}
      <div className="page-header__actions">
        <Link className="button" to='/create'>Add Expense</Link>
      </div>
    </div>
  </div>

)
const mapStoreToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
}
export default connect(mapStoreToProps)(ExpensesSummary);



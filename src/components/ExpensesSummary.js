import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
export class ExpensesSummary extends React.Component {

  render() {
    return (
      <div>
        {this.props.expenses &&
          <p>Viewing {this.props.expenses.length}{this.props.expenses.length === 1 ? ` expense` : ` expenses`} totaling   {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</p>}
      </div>
    )
  };
};
const mapStoreToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
}
export default connect(mapStoreToProps)(ExpensesSummary);



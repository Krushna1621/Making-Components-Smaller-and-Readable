import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail'; // corrected import statement
import './ExpenseItem.css';

function ExpenseItem(props){
   
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetail amount={props.amount} title={props.title}></ExpenseDetail>
        </div>
    );
}

export default ExpenseItem;


function ExpenseDetail(props) {
    const title = props.title;
    const amount = props.amount;
    return (
      <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price '>{amount}</div>
            </div>
    );
  }
  
  export default ExpenseDetail;
  
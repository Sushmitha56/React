function Expenseitem(){
    const date=new Date(2021,4,12)
    return (
        <div>
            <div>{date.toISOString()}</div>
            <div>{date.toLocaleDateString()}</div>

        </div>
        
    )
}
export default Expenseitem;
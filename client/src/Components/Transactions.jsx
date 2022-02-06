const Transactions = ({sender, receiver, amount, message}) => {
    return(
        <div className="flex">
            <div className="flex-col">
                <div className="font-bold">{sender}</div>
                <div className="text-gray-600">{receiver}</div>
                <div className="text-gray-500">{amount}</div>
            </div>
        </div>
    );
}

export default Transactions;
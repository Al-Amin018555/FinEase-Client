const TransactionCard = ({transaction}) => {
    const {type,category,amount,date,} = transaction;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm border border-base-300">

                <div className="card-body">

                    {/* Title */}
                    <h2 className="card-title text-lg font-bold">
                        {type}
                    </h2>

                    {/* Transaction Info */}

                    <p>
                        <span className="font-semibold">Category:</span> {category}
                    </p>

                    <p>
                        <span className="font-semibold">Amount:</span> ${amount}
                    </p>

                    <p>
                        <span className="font-semibold">Date:</span> {date}
                    </p>

                    {/* Buttons */}

                    <div className="card-actions justify-end mt-4 gap-2">

                        <button className="btn btn-info text-primary-content btn-sm">
                            View Details
                        </button>

                        <button className="btn btn-warning text-warning-content btn-sm">
                            Update
                        </button>

                        <button className="btn btn-error text-error-content btn-sm">
                            Delete
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TransactionCard;
import { useEffect, useState } from "react";
import TransactionCard from "../TransactionCard/TransactionCard";
import Loader from "../Loader/Loader";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyTransaction = () => {
    const { user } = useAuth();

    const [transactions, setTransactions] = useState([])
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {

        fetch(`https://fin-ease-server-seven.vercel.app/my-transactions/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTransactions(data)
                setDataLoading(false)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            })
    }, [])
    if (dataLoading) {
        return <Loader></Loader>;
    }
    return (
        <div className="max-w-7xl mx-auto my-6 md:my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    transactions.map(transaction => <TransactionCard key={transaction._id} transaction={transaction} setTransactions={setTransactions} transactions={transactions} ></TransactionCard>)
                }
            </div>

        </div>
    );
};

export default MyTransaction;
import {
  FaUtensils,
  FaShoppingCart,
  FaBus,
  FaFilm,
  FaMoneyBillWave,
  FaChartLine,
  FaTag,
  FaCalendarAlt
} from "react-icons/fa";

import { MdAttachMoney } from "react-icons/md";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";

const TransactionCard = ({ transaction, transactions, setTransactions }) => {

  const { _id, type, category, amount, date } = transaction;

  // Format currency
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  const getCategoryIcon = () => {
    switch (category) {
      case "Food":
        return <FaUtensils />;
      case "Shopping":
        return <FaShoppingCart />;
      case "Transport":
        return <FaBus />;
      case "Entertainment":
        return <FaFilm />;
      case "Salary":
        return <FaMoneyBillWave />;
      case "Investment":
        return <FaChartLine />;
      default:
        return <FaTag />;
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete transaction?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fin-ease-server-seven.vercel.app/transaction/delete/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remaining = transactions.filter(t => t._id !== id);
              setTransactions(remaining);

              Swal.fire("Deleted!", "Transaction removed.", "success");
            }
          });
      }
    });
  };

  return (
    <div
      className={`group relative rounded-2xl p-px 
      bg-linear-to-br 
      ${type === "Income"
          ? "from-green-400 via-emerald-500 to-green-600"
          : "from-red-400 via-rose-500 to-red-600"
        }
      hover:scale-[1.04] transition duration-300`}
    >

      {/* Inner Card */}
      <div className="bg-base-100 rounded-2xl p-5 h-full backdrop-blur-xl shadow-lg">

        {/* Top Row */}
        <div className="flex justify-between items-center mb-4">

          {/* Type Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide
              ${type === "Income"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
              }`}
          >
            {type}
          </span>

          {/* Date */}
          <span className="text-xs text-base-content/60 flex items-center gap-1">
            <FaCalendarAlt /> {date}
          </span>
        </div>

        {/* Category */}
        <div className="flex items-center gap-4 mb-5">

          {/* Icon Box */}
          <div
            className={`p-3 rounded-xl text-xl shadow-sm
              ${type === "Income"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
              }`}
          >
            {getCategoryIcon()}
          </div>

          <div>
            <p className="text-xs text-base-content/60 uppercase tracking-wide">
              Category
            </p>
            <h3 className="text-lg font-semibold">{category}</h3>
          </div>

        </div>

        {/* Amount Section */}
        <div className="mb-5">

          <p className="text-xs text-base-content/60 uppercase tracking-wide mb-1">
            Amount
          </p>

          <h2
            className={`text-3xl font-extrabold flex items-center gap-1
              ${type === "Income" ? "text-green-600" : "text-red-500"}`}
          >
            <MdAttachMoney className="text-2xl" />
            {formattedAmount}
          </h2>

        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition">

          <Link to={`/transaction/${_id}`}>
            <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition">
              <FiEye size={18} />
            </button>
          </Link>

          <Link to={`/transaction/update/${_id}`}>
            <button className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-600 transition">
              <FiEdit size={18} />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="p-2 rounded-lg hover:bg-red-100 text-red-500 transition"
          >
            <FiTrash2 size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default TransactionCard;
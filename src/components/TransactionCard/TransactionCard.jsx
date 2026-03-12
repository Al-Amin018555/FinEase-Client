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

const TransactionCard = ({ transaction }) => {
  // console.log(transaction)
  const { _id, type, category, amount, date } = transaction;

  const getCategoryIcon = () => {

    switch (category) {

      case "Food":
        return <FaUtensils className="text-orange-500 text-xl" />

      case "Shopping":
        return <FaShoppingCart className="text-purple-500 text-xl" />

      case "Transport":
        return <FaBus className="text-blue-500 text-xl" />

      case "Entertainment":
        return <FaFilm className="text-pink-500 text-xl" />

      case "Salary":
        return <FaMoneyBillWave className="text-green-500 text-xl" />

      case "Investment":
        return <FaChartLine className="text-emerald-500 text-xl" />

      default:
        return <FaTag className="text-gray-500 text-xl" />
    }

  };

  return (

    <div
      className={`card bg-base-100 shadow-md border-l-4 
      transition transform hover:scale-105 duration-300
      ${type === "Income" ? "border-green-500" : "border-red-500"}`}
    >

      <div className="card-body">

        {/* Title */}

        <h2
          className={`card-title text-xl font-bold
          ${type === "Income" ? "text-green-600" : "text-red-500"}`}
        >
          {type}
        </h2>

        {/* Category */}

        <p className="flex items-center gap-2">

          {getCategoryIcon()}

          <span className="font-semibold">Category:</span>

          {category}

        </p>

        {/* Amount */}

        <p className="flex items-center gap-2">

          <MdAttachMoney className="text-yellow-500 text-xl" />

          <span className="font-semibold">Amount:</span>

          ${amount}

        </p>

        {/* Date */}

        <p className="flex items-center gap-2">

          <FaCalendarAlt className="text-blue-500 text-xl" />

          <span className="font-semibold">Date:</span>

          {date}

        </p>

        {/* Buttons */}

        <div className="card-actions justify-end mt-4 gap-2">

          <button className="btn btn-info text-primary-content btn-sm flex items-center gap-2">

            <FiEye className="text-lg" />

            View

          </button>
          <Link to={`/transaction/update/${_id}`}>
            <button className="btn btn-warning text-warning-content btn-sm flex items-center gap-2">
              <FiEdit className="text-lg" />
              Update
            </button>
          </Link>

          <button className="btn btn-error btn-sm flex items-center gap-2">

            <FiTrash2 className="text-lg" />

            Delete

          </button>

        </div>

      </div>

    </div>

  );

};

export default TransactionCard;
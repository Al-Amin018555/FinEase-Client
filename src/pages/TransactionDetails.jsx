import { useLoaderData } from "react-router";
import { FaTag, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import useTitle from "../hooks/useTitle";

const TransactionDetails = () => {

  const transaction = useLoaderData();
  useTitle("Transaction Details | FinEase")
  const { type, category, amount, date, description } = transaction;

  return (

    <div className="max-w-4xl mx-auto py-12 px-4">

      {/* Header */}

      <div className="text-center mb-8 space-y-2">

        <h4 className="text-accent font-semibold tracking-wide">
          FINANCIAL RECORD
        </h4>

        <h1 className="text-4xl font-bold">
          Transaction Details
        </h1>

        <p className="text-base-content/70">
          Review the complete information of this transaction.
        </p>

      </div>

      {/* Card */}

      <div className="card bg-base-100 shadow-xl  hover:shadow-2xl transition">

        <div className="card-body space-y-6">

          {/* Type Badge */}

          <div className="flex justify-between items-center">

            <h2 className="card-title text-2xl font-bold">
              Transaction Overview
            </h2>

            <span
              className={`badge badge-lg ${
                type === "Income"
                  ? "badge-success text-success-content"
                  : "badge-error text-error-content"
              }`}
            >
              {type}
            </span>

          </div>

          <div className="divider"></div>

          {/* Grid Info */}

          <div className="grid md:grid-cols-2 gap-6">

            {/* Category */}

            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">

              <MdCategory className="text-2xl text-primary" />

              <div>

                <p className="text-sm text-base-content/60">
                  Category
                </p>

                <p className="font-semibold text-lg">
                  {category}
                </p>

              </div>

            </div>

            {/* Date */}

            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">

              <FaCalendarAlt className="text-xl text-info" />

              <div>

                <p className="text-sm text-base-content/60">
                  Date
                </p>

                <p className="font-semibold text-lg">
                  {date}
                </p>

              </div>

            </div>

            {/* Amount */}

            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">

              <FaMoneyBillWave className="text-2xl text-warning" />

              <div>

                <p className="text-sm text-base-content/60">
                  Amount
                </p>

                <p
                  className={`text-2xl font-bold ${
                    type === "Income"
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  ${amount}
                </p>

              </div>

            </div>

            {/* Type */}

            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">

              <FaTag className="text-xl text-secondary" />

              <div>

                <p className="text-sm text-base-content/60">
                  Type
                </p>

                <p className="font-semibold text-lg">
                  {type}
                </p>

              </div>

            </div>

          </div>

          <div className="divider"></div>

          {/* Description */}

          <div className="bg-base-200 p-4 rounded-lg">

            <p className="text-sm text-base-content/60 mb-1">
              Description
            </p>

            <p className="text-base">
              {description || "No description provided."}
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default TransactionDetails;
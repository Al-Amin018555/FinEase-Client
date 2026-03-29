import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const UpdateTransaction = () => {
  const { user } = useAuth();
  const transaction = useLoaderData();
  console.log(transaction);
  const navigate = useNavigate();

  const { register, handleSubmit, reset, watch } = useForm();

  const type = watch("type");

  // set default values when data loads
  useEffect(() => {
    if (transaction) {
      reset(transaction);
    }
  }, [transaction, reset]);

  const onSubmit = (data) => {

    const updatedTransaction = {
      ...data,
      email: user?.email,
      name: user?.displayName,
      uid: user?.uid,
      updatedAt: new Date()
    };

    fetch(`http://localhost:3000/transaction/update/${transaction._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedTransaction)
    })
      .then(res => res.json())
      .then(data => {

        console.log("updated result", data);

        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your transaction updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(`/transaction/${transaction._id}`);
        }

      });

  };

  return (

    <div className="max-w-7xl mx-auto py-12 px-4">

      {/* Heading */}

      <div className="text-center mb-10 space-y-2">

        <h4 className="text-accent font-bold tracking-wide">
          MANAGE FINANCES
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold">
          Update Transaction
        </h2>

        <p className="text-base-content/70">
          Modify your transaction details easily.
        </p>

      </div>

      {/* Form Card */}

      <div className="flex justify-center">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset bg-base-200 border-base-300 rounded-xl w-full max-w-lg border p-8 shadow-md space-y-4"
        >

          {/* Type */}

          <label className="label font-semibold">Type</label>

          <select
            {...register("type", { required: true })}
            className={`select select-bordered w-full outline-0 ${type === "Income"
              ? "border-success"
              : type === "Expense"
                ? "border-error"
                : ""
              }`}
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          {/* Category */}

          <label className="label font-semibold">Category</label>

          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full outline-0"
          >
            <option value="">Select Category</option>
            <option>Salary</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Investment</option>
            <option>Others</option>
          </select>

          {/* Amount */}

          <label className="label font-semibold">Amount</label>

          <input
            type="number"
            {...register("amount", { required: true })}
            className="input input-bordered w-full outline-0"
            placeholder="Enter amount"
          />

          {/* Description */}

          <label className="label font-semibold">Description</label>

          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full outline-0"
            placeholder="Transaction details"
          />

          {/* Date */}

          <label className="label font-semibold">Date</label>

          <input
            type="date"
            {...register("date", { required: true })}
            className="input input-bordered w-full outline-0"
          />

          {/* User Email */}

          <label className="label font-semibold">User Email</label>

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered bg-base-100 w-full outline-0"
          />

          {/* User Name */}

          <label className="label font-semibold">User Name</label>

          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered bg-base-100 w-full outline-0"
          />

          {/* Button */}

          <button className="btn btn-primary w-full mt-4 text-lg">
            Update Transaction
          </button>

        </form>

      </div>

    </div>

  );
};

export default UpdateTransaction;
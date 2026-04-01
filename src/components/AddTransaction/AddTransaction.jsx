import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router";

const AddTransaction = () => {

  const { user } = useAuth();
  const navigate = useNavigate();
  useTitle("Add Transaction | FinEase");

  const { register, handleSubmit, reset, watch } = useForm();
  const type = watch("type");

  const onSubmit = (formData) => {

    const transactionData = {
      ...formData,
      email: user?.email,
      name: user?.displayName,
      uid: user?.uid,
      createdAt: new Date()
    };

    fetch("https://fin-ease-server-seven.vercel.app/add-transaction", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(transactionData)
    })
      .then(res => res.json())
      .then(data => {

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Transaction added successfully",
            showConfirmButton: false,
            timer: 1500
          });

          navigate("/my-transactions");
          reset();
        }
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error.message,
        });
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
          Add Transaction
        </h2>

        <p className="text-base-content/70">
          Track your income and expenses to maintain healthy financial habits.
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
            className={`select select-bordered w-full ${
              type === "Income"
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
            className="select select-bordered w-full"
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
            className="input input-bordered w-full"
            placeholder="Enter amount"
          />

          {/* Description */}
          <label className="label font-semibold">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            placeholder="Transaction details"
          />

          {/* Date */}
          <label className="label font-semibold">Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="input input-bordered w-full"
          />

          {/* Email */}
          <label className="label font-semibold">User Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered bg-base-100 w-full"
          />

          {/* Name */}
          <label className="label font-semibold">User Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered bg-base-100 w-full"
          />

          {/* Button */}
          <button className="btn btn-primary w-full mt-4 text-lg">
            Add Transaction
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddTransaction;
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FaUserEdit, FaEnvelope } from "react-icons/fa";
import { auth } from "../../firebase.init";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {

  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      });
      setUser({
        ...auth.currentUser
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully"
      });

      document.getElementById("update_modal").close();

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message
      });

    }
  };

  return (
    <div className="min-h-[80vh] bg-base-200 flex items-center justify-center p-6">

      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">

        {/* Gradient Header */}

        <div className="bg-linear-to-r from-primary to-secondary h-28 rounded-t-2xl"></div>

        <div className="card-body items-center text-center relative">

          {/* Avatar */}

          <div className="-mt-20 mb-4">

            <div className="avatar">

              <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                <img src={user?.photoURL} alt="profile" />

              </div>

            </div>

          </div>

          {/* Name */}

          <h2 className="text-2xl font-bold text-base-content">
            {user?.displayName}
          </h2>

          {/* Email */}

          <div className="flex items-center gap-2 text-base-content/70">

            <FaEnvelope className="text-primary" />

            <span>{user?.email}</span>

          </div>

          <div className="divider"></div>

          {/* Profile Info */}

          <div className="w-full space-y-3 text-left">

            <div className="flex justify-between bg-base-200 p-3 rounded-lg">

              <span className="font-semibold">Name</span>

              <span>{user?.displayName}</span>

            </div>

            <div className="flex justify-between bg-base-200 p-3 rounded-lg">

              <span className="font-semibold">Email</span>

              <span>{user?.email}</span>

            </div>

          </div>

          {/* Update Button */}

          <button
            className="btn btn-primary w-full mt-6 gap-2"
            onClick={() =>
              document.getElementById("update_modal").showModal()
            }
          >

            <FaUserEdit />

            Update Profile

          </button>

        </div>

      </div>

      {/* Update Modal */}

      <dialog id="update_modal" className="modal">

        <div className="modal-box">

          <h3 className="font-bold text-lg mb-4">
            Update Profile
          </h3>

          <form onSubmit={handleUpdate} className="space-y-4">

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <div className="modal-action">

              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("update_modal").close()
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Update
              </button>

            </div>

          </form>

        </div>

      </dialog>

    </div>
  );
};

export default MyProfile;
"use client";
const Signup = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;
    const type = e.target.type.value;
    const newUser = {
      name,
      email,
      password,
      image,
      type,
    };
    console.log(newUser);
    const result = await fetch(
      "http://localhost:3000/api/auth/signup/new-user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }
    );
    const data = await result.json();
    console.log(data);
  };
  return (
    <div className="text-center h-full bg-slate-400 p-6">
      <h6 className="text-2xl font-semibold my-6">
        Sig Up with Email and Password
      </h6>
      <div className="mx-auto">
        <form action="" onSubmit={handleRegister} className="w-1/4 mx-auto">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image</span>
            </div>
            <input
              type="text"  //file type
              name="image"
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text-alt">Type</span>
            </div>
            <select name="type" className="select select-bordered">
              <option disabled selected>
                User type | selected
              </option>
              <option value={"admin"}>Admin</option>
              <option value={"moderator"}>Moderator</option>
              <option value={"member"}>Member</option>
            </select>
          </label>
          <button className="btn btn-md bg-green-500 text-white my-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

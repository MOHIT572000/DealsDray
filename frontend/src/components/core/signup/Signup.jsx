function Signup() {
  return (
    <div className="min-h-[calc(100vh-78.4px)] pt-16">
      <div className="mx-auto w-[95%] max-w-md space-y-8 rounded-md border border-slate-600 p-4 text-center">
        <h1 className="text-4xl">Sign Up</h1>
        <form className="">
          <div className="space-y-4">
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-lg">User Name</span>
                </div>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-lg">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <button className="btn btn-wide btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

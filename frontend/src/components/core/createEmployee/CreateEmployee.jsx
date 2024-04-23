function CreateEmployee() {
  return (
    <div className="min-h-[calc(100vh-78.4px)] py-10">
      <div className="mx-auto w-[95%] max-w-md space-y-8 rounded-md border border-slate-600 p-4 text-center">
        <h1 className="text-4xl">Create Employee</h1>
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
                  <span className="label-text text-lg">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Johnsmith@gmail.com"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-lg">Mobile Number</span>
                </div>
                <input
                  type="number"
                  placeholder="9876543210"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-lg">Designation</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    select designation
                  </option>
                  <option>Hr</option>
                  <option>Sales</option>
                  <option>Manager</option>
                </select>
              </label>
            </div>
            <div>
              <div className="label">
                <span className="label-text text-lg">Select gender</span>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Female </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Male</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    checked
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="form-control">
                <div className="label">
                  <span className="label-text text-lg">Course</span>
                </div>
                <div className="flex gap-4">
                  <label className="label cursor-pointer gap-1">
                    <span className="label-text">MCA</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer gap-1">
                    <span className="label-text">BCA</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                  <label className="label cursor-pointer gap-1">
                    <span className="label-text">BSC</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full "
              />
            </div>
            <div className="flex justify-center gap-4">
              <button className="btn  btn-success">Submit</button>
              <button className="btn  btn-outline">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-11/12 py-5">
      <div className="flex justify-between">
        <h1 className="text-4xl">Employee List</h1>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl">Total Employees : 4</h2>
          <button
            onClick={() => navigate("/create-employee")}
            className="btn btn-sm btn-primary"
          >
            Create Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

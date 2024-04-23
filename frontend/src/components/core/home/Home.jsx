import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 text-center">
      <h1 className="text-4xl">Welcome Admin Panel</h1>
      <div className="space-x-6 pt-10">
        <button onClick={() => navigate("/login")} className="btn btn-success">
          Login
        </button>
        <button onClick={() => navigate("/signup")} className="btn btn-primary">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Home;

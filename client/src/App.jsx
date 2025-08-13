import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      <Dashboard />
    </div>
  );
};

export default App;

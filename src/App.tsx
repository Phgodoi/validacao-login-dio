import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from "./pages/Login";
import { NewUser } from "./pages/NewUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    </Router>
  );
}

export default App;

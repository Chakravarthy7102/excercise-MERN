import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExcersiseList from "./components/ExcersiseList";
import Navbar from "./components/Navbar";
import EditExcersise from "./components/EditExcersise";
import CreateUser from "./components/CreateUser";
import CreateExcersise from "./components/CreateExcersise";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ExcersiseList />} />
          <Route exact path="/edit/:id" element={<EditExcersise />} />
          <Route exact path="/create" element={<CreateExcersise />} />
          <Route exact path="/user" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

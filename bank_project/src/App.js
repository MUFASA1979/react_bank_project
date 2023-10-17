import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [user, setuser] = useState(false);

  return (
    <UserContext.Provider value={[user, setuser]}>
      <div className="App font-mono ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/notes" Component={Notes} /> */}
          {/* <Route path="/notes/:noteId" Component={Note} /> */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;

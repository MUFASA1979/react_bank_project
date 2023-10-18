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
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";

function App() {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={Profile} />
          <Route path="/transactions" Component={Transactions} />
          {/* <Route path="/notes" Component={Notes} /> */}
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

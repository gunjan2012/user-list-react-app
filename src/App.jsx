import React from "react";
import "./style/App.css";
import UserTable from "./components/UserTable";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="main-container container">
      <UserTable />
      <UserCard />
    </div>
  );
};

export default App;

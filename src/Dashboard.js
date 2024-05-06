import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState();
  const [isDelete, setIsDelete] = useState();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [isLogout, isDelete]);
  
  const handleDelete = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("login");
    setIsDelete(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLogout(true);
  };
  
  return (
    <div>
      <h2>Welcome To Our Website</h2>
      <h4 onClick={handleDelete} style={{textDecorationLine: 'underline', color: 'blueviolet'}}>Delete My Account</h4>
      <h4 onClick={handleLogout} style={{textDecorationLine: 'underline', color: 'blueviolet'}}>Logout</h4>
    </div>
  );
}

export default Dashboard
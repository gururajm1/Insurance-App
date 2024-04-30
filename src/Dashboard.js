import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [isLogout, setIsLogout] = useState();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [isLogout]);
  
  const handleLogoutChange = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("login");
    setIsLogout(true);
  };
  
  return (
    <div>
      <h2>Welcome Gururaj</h2>
      <h4 onClick={handleLogoutChange} style={{textDecorationLine: 'underline', color: 'blueviolet'}}>Logout</h4>
    </div>
  );
}

export default Dashboard
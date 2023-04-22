import React from "react";
import Button from '@mui/material/Button';

function Footer({setLoginUser}) {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer id="footer">
      <Button sx={{ color: '#fff', border: '1px solid #d8d3c5', margin: '-0.5rem'}} className="logButton" onClick={() => setLoginUser({})}>Logout</Button>
      <p>Copyright ⓒ {year} | Created by Rohit</p>
      </footer>
    </div>
  );
}

export default Footer;

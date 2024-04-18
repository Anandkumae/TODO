import React from "react";
import "./footer.css";
export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    border: "2 px solid red",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; My TodosList.com footer works
      </p>
    </footer>
  );
};

export default Footer;

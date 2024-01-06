import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center py-4 font-josefin text-white text-lg max-w-3xl mx-auto border-t">
      &copy; {new Date().getFullYear()} Pasindu Weeraathne
    </div>
  );
};

export default Footer;

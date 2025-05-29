import React from "react";

const Layout = ({ children }) => {
  return (
    <html style={{ width: "100%", height: "100%" }}>
      <body style={{ width: "100%", height: "100%", margin: 0 }}>
        {children}
      </body>
    </html>
  );
};

export default Layout;

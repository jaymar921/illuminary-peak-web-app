import React from "react";

function PageFooter() {
  return (
    <footer className="relative text-center p-2 bg-blue-950">
      <p>All rights reserved © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default PageFooter;

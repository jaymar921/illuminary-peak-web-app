import React from "react";

function PageFooter() {
  return (
    <footer className="absolute bottom-0 text-center w-screen pb-2">
      <p>All rights reserved © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default PageFooter;

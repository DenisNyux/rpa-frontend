import React from "react";

function TestPage({ children }: { children: React.ReactNode }) {
  return (
    <>
    <nav>
      navbartest
    </nav>
  <main>
    <div>
      {children}
    </div>
  </main>
  </>
  );
}

export default TestPage;

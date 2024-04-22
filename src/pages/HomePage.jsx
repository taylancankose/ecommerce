import React from "react";
import Header from "../layout/Header";
import EditorPick from "../layout/EditorPick";

function HomePage() {
  return (
    <div>
      <Header />
      <EditorPick />
      <div className="bg-red-100">
        <h1>Selam</h1>
      </div>
    </div>
  );
}

export default HomePage;

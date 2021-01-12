import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import ParentComponent from "./components/ParentComponent";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="container">
      <Header />
      <Content />
      <ParentComponent />
      <Footer />
    </div>
  );
}

export default App;
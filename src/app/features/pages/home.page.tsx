import React from "react";
import { observer } from "mobx-react";

import Header from "../components/header.component";
import Footer from "../components/footer.component";

const Home = () => {
  return (
    <div className="Page Home">
      <Header />
      <Footer />
    </div>
  );
};

export default observer(Home);

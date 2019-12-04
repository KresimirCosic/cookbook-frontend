import React from "react";
import { observer } from "mobx-react";

const NotFound = () => {
  return (
    <div className="Page NotFound">
      <h1>404 - Not found</h1>
    </div>
  );
};

export default observer(NotFound);

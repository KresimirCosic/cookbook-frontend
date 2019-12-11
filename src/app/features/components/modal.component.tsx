import React, { FC } from "react";

const Modal: FC = props => {
  return (
    <div className="Modal absolute">
      <div className="relative">
        <div className="container">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;

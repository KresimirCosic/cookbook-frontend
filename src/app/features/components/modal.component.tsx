import React, { FC } from "react";

export const MODAL_ENTRY_DURATION = 350;
export const MODAL_EXIT_DURATION = 350;

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

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
  //As they are backdrop and modal function are closely related to each other we didn't create new component
  return <div className={classes.backdrop}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

//Since we need to say the portal where to point our overlay we use this
const portalElement = document.getElementById("overlays");

function Modal(props) {
  // We also need to add a div called overlays on index.html
  return (
    <Fragment>
      {/* This is how we create without using portals */}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
